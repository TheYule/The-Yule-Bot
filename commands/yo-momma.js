const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "yo-momma",
    description: "Yo-momma. I remember when that was a *big* thing. Oh wait. I haven't nearly existed for that long...",
    async execute(message) {
        const response = await fetch("https://api.yomomma.info/");
        const data = await response.json();
        const joke = data.joke;

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setDescription(joke);
        message.channel.send({ embeds: [embed] });
    }
}