const { bot } = require("../index");
const fetch = require("node-fetch");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "meme",
    description: "We all like a good meme don't we?",
    async execute(message) {
        const sources = ["memes", "dankmemes", "okbuddyretard"];
        const response = await fetch("https://www.reddit.com/r/" + sources[Math.floor(Math.random() * sources.length)] + "/random/.json");
        const data = await response.json();

        try {
            const title = data[0].data.children[0].data.title;
            const url = "https://www.reddit.com" + data[0].data.children[0].data.permalink;
            const image = data[0].data.children[0].data.url;
            const ups = data[0].data.children[0].data.ups;
            const awards = data[0].data.children[0].data.total_awards_received;
            const comments = data[0].data.children[0].data.num_comments;

            const embed = new MessageEmbed()
                .setColor("YELLOW")
                .setTitle(title)
                .setURL(url)
                .setImage(image)
                .setFooter("👍 " + ups + " | 🏆 " +  awards + " | 💬 " + comments);
            message.channel.send({ embeds: [embed] });
        } catch {
            bot.responses.command_error(message, {
                error: "Failed to fetch meme",
                command_name: "meme"
            });
        }
    }
}