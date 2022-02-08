const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Pings the bot.",
    execute(message) {
        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setDescription("Pong! :ping_pong:");
		message.channel.send({ embeds: [embed] });
    }
}