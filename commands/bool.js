const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "bool",
    description: "True or false",
    execute(message) {
        const bool = Math.random() < .5;

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setDescription(bool ? "True" : "False");
        message.channel.send({ embeds: [embed] });
    }
}