const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "sentence",
    description: "A group of words. Nothing more.",
    async execute(message) {
        const response = await fetch("https://www.api.theyule.xyz/text/sentence");
        const data = await response.text();
        const sentence = data.replace(/\s/g, " ").trim();

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle("Sentence")
            .setDescription(sentence);
        message.channel.send({ embeds: [embed] });
    }
}