const Discord = require("discord.js");
const { REST } = require("@discordjs/rest");
const DiscordBot = require("@yoo-babobo/dbf.js");
const responses = require("./responses.json");
const { statuses, statusInterval, prefixes, owners, token, dev, devGuildId } = require("./config.json");
const { Op } = require("sequelize");
const { Users, CurrencyShop } = require("./dbObjects");

const currency = new Discord.Collection();

Reflect.defineProperty(currency, "add", {
	value: async function add(id, amount) {
		const user = currency.get(id);

		if (user) {
			user.balance += Number(amount);
			return user.save();
		}

		const newUser = await Users.create({ user_id: id, balance: amount });
		currency.set(id, newUser);

		return newUser;
	},
});

Reflect.defineProperty(currency, "getBalance", {
	value: function getBalance(id) {
		const user = currency.get(id);
		return user ? user.balance : 0;
	},
});

const bot = new DiscordBot({
    discordApi: Discord,
    token: token,
    prefixes: prefixes,
    owners: owners,
    statuses: statuses,
    statusInterval: statusInterval,
    path: __dirname,
    responses: responses,
    slash: true,
    restApi: REST,
    dev: dev,
    logging: dev,
    devId: devGuildId,
    clientOptions: { intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES] }
});

bot.client.currency = currency;

bot.onready = async () => {
    const storedBalances = await Users.findAll();
    storedBalances.forEach(b => currency.set(b.user_id, b));
};

bot.onmessage = message => {
    if (message.author.bot || message.webhookId) return;
    currency.add(message.author.id, 1);
};

bot.login();

module.exports = { bot: bot };