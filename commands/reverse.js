const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "reverse",
    description: "Reverse some of that wonderful text",
    args: 1,
    usage: "<...text>",
    async execute(message, args) {
        const text = args.join(" ").split("").reverse().join("");

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setDescription(text);
        message.channel.send({ embeds: [embed] });
    }
}