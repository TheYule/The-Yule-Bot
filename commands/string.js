const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "string",
    description: "A bunch of characters.",
    execute(message, args) {
        const string = Math.random().toString(16).substr(2, args[0] || 15);

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle("String")
            .setDescription(string);
        message.channel.send({ embeds: [embed] });
    }
}