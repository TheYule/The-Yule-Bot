const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "double",
    description: "A random double-precision float.",
    execute(message) {
        const double = (Math.floor(Math.random() * 199998 - 99999) + Math.random() * 9999).toString();

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle("Double")
            .setDescription(double);
        message.channel.send({ embeds: [embed] });
    }
}