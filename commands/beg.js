const { bot } = require("../index");
const people = require("../data/people.json");
const messages = require("../data/messages.json");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "beg",
    description: "Poor. Just plain poor.",
    execute(message) {
        var amount = 0;
        const person = people[Math.floor(Math.random() * people.length)];
        var responce = "";

        if (Math.random() < .7) {
            if (Math.random() < .05) amount = Math.floor(Math.random() * 100);
            else amount = Math.floor(Math.random() * 32);

            responce = messages.nice[Math.floor(Math.random() * messages.nice.length)];
            bot.client.currency.add(message.author.id, amount);
        } else responce = messages.naughty[Math.floor(Math.random() * messages.naughty.length)];

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle(person)
            .setDescription(responce + "\n+ $" + amount + "\n\nYou now have $" + bot.client.currency.getBalance(message.author.id) + ".");
        message.channel.send({ embeds: [embed] });
    }
}