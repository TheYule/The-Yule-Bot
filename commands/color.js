const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "color",
    description: "Most people can see it.",
    execute(message) {
        const color = "#" + (Math.random().toString(16) + "00000").slice(2, 8);

        const embed = new MessageEmbed()
            .setColor(color)
            .setTitle("Color")
            .setDescription(color);
        message.channel.send({ embeds: [embed] });
    }
}