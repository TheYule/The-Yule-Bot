const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Pings the bot."),
	async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setDescription("Pong! :ping_pong:");
        
		await interaction.reply({ embeds: [embed] });
	}
};