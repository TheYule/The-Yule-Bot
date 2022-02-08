const { bot } = require("../index");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "balance",
    aliases: ["bal"],
    description: "How much money?",
    execute(message) {
        const user = bot.getUserFromMessage(message.content);
        var balance = 0;

        if (!user) balance = bot.client.currency.getBalance(message.author.id);
        else balance = bot.client.currency.getBalance(user.id);

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle((!user ? "Your" : user.username + "'s") + " Balance")
            .setDescription("$" + balance);
        message.channel.send({ embeds: [embed] });
    }
}