const { bot } = require("../index");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "iq",
    description: "Big brain or smol",
    execute(message) {
        const user = bot.getUserFromMessage(message.content);
        var iq = Math.floor(Math.random() * 256);
        var msg = "";
        var owner = false;
        var userOwner = false;

        bot.data.owners.forEach(o => {
            if (o == message.author.id) owner = true;
            if (!!user && o == user.id) userOwner = true;
        });

        if (!user) msg = owner ? "You have ∞ iq :brain:" : "You're iq is " + iq + " :brain:";
        else msg = user === bot.client.user || userOwner ? user.username + " has ∞ iq :brain:" : user.username + " has an iq of " + iq + " :brain:";

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setDescription(msg);
        message.channel.send({ embeds: [embed] });
    }
}