const { bot } = require("../index");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "bot",
    description: "A Discord bot huh?",
    execute(message) {
        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle(bot.client.user.username + " Bot")
            .setDescription("UNDER CONSTRUCTION\n\nI can't remember what the old bot had here...");
        message.channel.send({ embeds: [embed] });
    }
}