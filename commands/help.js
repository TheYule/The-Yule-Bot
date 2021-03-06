const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "help",
    aliases: ["?"],
    description: "All my wonderful commands.",
    execute(message) {
        const client = message.client;
        const { commands } = client;
        const body = [];

        commands.map(command => {
            if (!command.ownersOnly) body.push("```" + command.name + " — " + (command.description || "no description") + "```");
        });

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle("Help")
            .setAuthor(client.user.username, client.user.avatarURL(), "https://www.theyule.xyz/bot")
            .setDescription(body.join(""));
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Invite")
                    .setStyle("LINK")
                    .setURL("https://discord.com/api/oauth2/authorize?client_id=828971174293536798&permissions=2080894038&scope=bot%20applications.commands"),
                new MessageButton()
                    .setLabel("Website")
                    .setStyle("LINK")
                    .setURL("https://www.theyule.xyz/bot")
            );
        message.channel.send({ embeds: [embed], components: [row] });
    }
}