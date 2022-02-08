const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "active",
    description: "Is it my active period?",
    execute(message) {
        const today = new Date().getTime();
        const from = new Date("12/22/" + new Date().getFullYear()).getTime();
        const to = new Date("01/02/" + (new Date().getFullYear() + 1)).getTime();
        const active = today >= from && today <= to;

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle("Active Period")
            .setDescription(active ? "It *is* my active period. I'd watch the fucking shit out if I were you. Because I'm coming. And this year, there are no parameters. I will kidnap all children." : "It isn't my active period.");
        message.channel.send({ embeds: [embed] });
    }
}