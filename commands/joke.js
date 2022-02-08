const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "joke",
    description: "How do you like dad jokes?",
    async execute(message) {
        const response = await fetch("https://icanhazdadjoke.com/slack");
        const data = await response.json();
        const joke = data.attachments[0].fallback;

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setDescription(joke);
        message.channel.send({ embeds: [embed] });
    }
}