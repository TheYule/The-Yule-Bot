const Discord = require("discord.js");
const { REST } = require("@discordjs/rest");
const DiscordBot = require("../DBF/dbf");
const responces = require("./responces.json");
const { statuses, statusInterval, prefixes, owners, token, dev, devGuildId } = require("./config.json");

const bot = new DiscordBot({
    discordApi: Discord,
    token: token,
    prefixes: prefixes,
    owners: owners,
    statuses: statuses,
    statusInterval: statusInterval,
    path: __dirname,
    responces: responces,
    slash: true,
    restApi: REST,
    dev: dev,
    logging: dev,
    devId: devGuildId,
    clientOptions: { intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES, Discord.Intents.FLAGS.DIRECT_MESSAGES] }
});

bot.login();

module.exports = { bot: bot };