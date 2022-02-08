const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("invite")
		.setDescription("Invite me to your servers."),
	async execute(interaction) {
        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle("Invite")
            .setDescription("Invite me to your servers. I *may* be of some use...");
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Click Here")
                    .setStyle("LINK")
                    .setURL("https://discord.com/api/oauth2/authorize?client_id=828971174293536798&permissions=2080894038&scope=bot%20applications.commands"),
            );
		await interaction.reply({ embeds: [embed], components: [row] });
	}
};