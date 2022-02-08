const { bot } = require("../index");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "gay",
    description: "Is someone gay...?",
    execute(message) {
        const user = bot.getUserFromMessage(message.content);
        var gay = Math.floor(Math.random() * 9999);
        var msg = "";
        var owner = false;

        bot.data.owners.forEach(o => { if (o == message.author.id) owner = true; });

        if (owner) gay = Math.floor(Math.random() * 10);
        else {
            if (user === bot.client.user) msg = "*You're* the gay one."
        }

        if (msg === "") {
            if (Math.random() < .8) {
                if (!user) msg = "You're " + gay + "% gay :rainbow_flag:";
                else msg = user.username + " is " + gay + "% gay :rainbow_flag:";
            } else {
                if (!user) msg = "You aren't gay.";
                else msg = user.username + " isn't gay.";
            }
        }

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setDescription(msg);
        message.channel.send({ embeds: [embed] });
    }
}