const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "reverse-color",
    description: "Reverse a color. Please use a hex code. (ex: #343434)",
    args: 1,
    usage: "<color (ex: #343434)>",
    async execute(message, args) {
        const color = "#" + args[0].replace("#", "").split("").reverse().join("");

        const embed = new MessageEmbed()
            .setColor(color)
            .setTitle("Reversed Color")
            .setDescription(args[0] + " => " + color);
        message.channel.send({ embeds: [embed] });
    }
}