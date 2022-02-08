const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "int",
    description: "A random integer.",
    execute(message) {
        const int = Math.floor(Math.random() * 199998 - 99999).toString();

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle("Int")
            .setDescription(int);
        message.channel.send({ embeds: [embed] });
    }
}