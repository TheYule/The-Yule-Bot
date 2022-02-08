const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "website",
    aliases: ["web"],
    description: "A great place to go.",
    execute(message) {
        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle("Website")
            .setDescription("https://theyule.xyz is my developer's blog/kinda website thing. Yes he used WordPress. But only for that.");
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Click Here")
                    .setStyle("LINK")
                    .setURL("https://theyule.xyz"),
            );
        message.channel.send({ embeds: [embed], components: [row] });
    }
}