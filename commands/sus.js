const { bot } = require("../index");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "sus",
    description: "Sussssy",
    execute(message) {
        const user = bot.getUserFromMessage(message.content);
        var sus = Math.floor(Math.random() * 9999);
        var msg = "";
        var owner = false;

        bot.data.owners.forEach(o => { if (o == message.author.id) owner = true; });

        if (owner) sus = Math.floor(Math.random() * 10);
        else {
            if (user === bot.client.user) msg = "*You're* the sus one."
        }

        if (msg === "") {
            if (Math.random() < .8) {
                if (!user) msg = "You're " + sus + "% sus.";
                else msg = user.username + " is " + sus + "% sus.";
            } else {
                if (!user) msg = "You aren't sus.";
                else msg = user.username + " isn't sus.";
            }
        }

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setDescription(msg);
        message.channel.send({ embeds: [embed] });
    }
}