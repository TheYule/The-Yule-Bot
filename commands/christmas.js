const { bot } = require("../index");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "christmas",
    description: "Merry Christmas!",
    execute(message) {
        const christmas = new Date().getMonth() === 11 && new Date().getDate() === 25;

        if (christmas) {
            const embed = new MessageEmbed()
                .setColor("YELLOW")
                .setTitle("Merry Christmas")
                .setDescription("Merry Christmas everyone! " + bot.client.user.username + " wishes everyone a good new year. :gift: :christmas_tree:");
            message.channel.send({ embeds: [embed] });
        } else {
            const embed = new MessageEmbed()
                .setColor("RED")
                .setTitle("It's not Christmas")
                .setDescription("One day it will be Christmas. Don't worry.");
            message.channel.send({ embeds: [embed] });
        }
    }
}