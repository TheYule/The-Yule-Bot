const { MessageEmbed } = require("discord.js");

module.exports = {
    id: "thang.ppnga",
    execute(interaction) {
        const embed = new MessageEmbed()
            .setColor("RED")
            .setTitle("Smile!")
            .setImage("https://th.bing.com/th/id/OIP.cH7axSCRrwAk3wqaqNR_SwHaEK?w=281&h=180&c=7&r=0&o=5&pid=1.7");
        interaction.member.user.send({ embeds: [embed] });
        interaction.reply({ content: "I sent you a little something *special*..." });
    }
}