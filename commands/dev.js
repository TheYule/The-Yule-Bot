const { bot } = require("../index");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "dev",
    description: "Bot development",
    execute(message) {
        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle("Bot Development")
            .setDescription(bot.client.user.username + "'s development has been going smoothly, and I have many more features I plan to add in the future.");
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setLabel("Suggest a feature")
                    .setStyle("LINK")
                    .setURL("https://www.yoo-babobo.com/shapes/b8c20e73-s#comments")
            );
        message.channel.send({ embeds: [embed], components: [row] });
    }
}