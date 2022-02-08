const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "story",
    description: "Story time. Viewer discretion is advised",
    execute(message) {
        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle("Stories")
            .setDescription("Pick a story below. I am *totally* not responsible for what you may or may not find in there...");
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId("story1")
                    .setLabel("Origin")
                    // .setEmoji("923087146598924288")
                    .setStyle("PRIMARY"),
                new MessageButton()
                    .setCustomId("story2")
                    .setLabel("A Lost Child")
                    .setStyle("SECONDARY"),
                new MessageButton()
                    .setCustomId("story3")
                    .setLabel("The Yule Man")
                    .setStyle("DANGER"),
                new MessageButton()
                    .setCustomId("story4")
                    .setLabel("December 22nd")
                    .setStyle("SUCCESS"),
                new MessageButton()
                    .setCustomId("story5")
                    .setLabel("A Sweatshop for Children")
                    .setStyle("SECONDARY")
            );
        message.channel.send({ embeds: [embed], components: [row] });
    }
}