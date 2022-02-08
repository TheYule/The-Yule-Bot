const { bot } = require("../index");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "leaderboard",
    description: "The richest in the server.",
    execute(message) {
        var positions = 0;
        var positions_ = 0;
        const msg = bot.client.currency.sort((a, b) => b.balance - a.balance)
            .filter(user => {
                positions++;
                return message.guild.members.cache.has(user.user_id) && !message.guild.members.cache.get(user.user_id).user.bot && positions < 10;
            })
            .map((user) => {
                positions_++;
                return `[${positions_}] ${(message.guild.members.cache.get(user.user_id).user.username)} — $${user.balance}`;
            })
            .join("\n");

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle(message.guild.name + " Leaderboard")
            .setDescription("```" + msg + "```");
        message.channel.send({ embeds: [embed] });
    }
}