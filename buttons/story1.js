const { MessageEmbed } = require("discord.js");

module.exports = {
    id: "story1",
    execute(interaction) {
        const embed = new MessageEmbed()
            .setColor("RED")
            .setDescription("I don't have that story yet!");
        interaction.reply({ embeds: [embed] });
    }
}