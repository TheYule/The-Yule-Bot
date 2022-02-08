const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "word",
    description: "Words. They're literally everywhere...",
    async execute(message) {
        const response = await fetch("https://www.api.theyule.xyz/text/word");
        const data = await response.text();

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle("Word")
            .setDescription(data);
        message.channel.send({ embeds: [embed] });
    }
}