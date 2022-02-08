const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "about",
    description: "About The Yule Bot.",
    execute(message) {
        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle("About")
            .setDescription("__Where did I come from?__\nWell, that's easy. `The Yule Man#3276` developed me. My latest version was created on December 20th, 2021.\n\n__Origin?__\nAgain, not too hard of a question. I was created after SCP-4666, \"The Yule Man\". My developer, The Yule, always loved SCP-4666. Especially the part about him and children...");
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Read More")
                    .setStyle("LINK")
                    .setURL("https://www.theyule.xyz/bot"),
            );
        message.channel.send({ embeds: [embed], components: [row] });
    }
}