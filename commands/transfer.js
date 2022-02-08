const { bot } = require("../index");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "transfer",
    description: "Give someone money, because they can't get it themselves...",
    args: 2,
    usage: "<amount> <user>",
    execute(message, args) {
        if (isNaN(parseFloat(args[0]))) {
            return bot.responses.command_error(message, {
                error: "Please spacify an actual amount to transfer.",
                command_name: "transfer"
            });
        }

        const user = bot.getUserFromMessage(message.content);

        if (!user) {
            return bot.responses.command_error(message, {
                error: "Please spacify an actual user to transfer money to.",
                command_name: "transfer"
            });
        }

        var amount = Math.abs(args[0]);
        const balance = bot.client.currency.getBalance(message.author.id);

        if (amount > balance) amount = balance;

        bot.client.currency.add(message.author.id, -amount);
        bot.client.currency.add(user.id, amount);

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setTitle("Transfer")
            .setDescription("Transfered $" + amount + " to " + user.username + ".\nYou have now have $" + bot.client.currency.getBalance(message.author.id) + ".");
        message.channel.send({ embeds: [embed] });
    }
}