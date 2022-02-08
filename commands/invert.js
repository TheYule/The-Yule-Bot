const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "invert",
    description: "Invert a color. Please use a hex code. (ex: #343434)",
    args: 1,
    usage: "<color (ex: #343434)>",
    async execute(message, args) {
        const color = "#" + args[0].match(/[a-f0-9]{2}/ig).map(e => (255 - parseInt(e, 16) | 0).toString(16).replace(/^([a-f0-9])$/, "0$1")).join("");

        const embed = new MessageEmbed()
            .setColor(color)
            .setTitle("Inverted Color")
            .setDescription(args[0] + " => " + color);
        message.channel.send({ embeds: [embed] });
    }
}