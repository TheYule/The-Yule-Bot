const { bot } = require("../index");
const locations = require("../data/locations.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "search",
    description: "Where can you find the dough?",
    cooldown: 2,
    execute(message) {
        var amount = 0;
        const location = locations[Math.floor(Math.random() * locations.length)];

        if (Math.random() < .05) amount = Math.floor(Math.random() * 99 + 1);
        else amount = Math.floor(Math.random() * 14 + 1);

        bot.client.currency.add(message.author.id, amount);

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle("Search")
            .setDescription("You searched in " + location + ".\n+ $" + amount + "\n\nYou now have $" + bot.client.currency.getBalance(message.author.id) + ".");
        message.channel.send({ embeds: [embed] });
    }
}