const fetch = require("node-fetch");
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "img",
    description: "Get an image of anything you want",
    args: 1,
    usage: "<query>",
    async execute(message, args) {
        const response = await fetch("https://www.api.theyule.xyz/misc/images?q=" + args.join(" "));
        const data = await response.text();
        const images = data.split(",");
        const img1 = images[Math.floor(Math.random() * images.length - 1)];
        const img2 = images[Math.floor(Math.random() * images.length - 1)];
        const img3 = images[Math.floor(Math.random() * images.length - 1)];

        try {
            const embed = new MessageEmbed()
                .setColor("YELLOW")
                .setTitle("Images")
                .setDescription("Here are the results for your search `" + args.join(" ") + "`.");
            const image1 = new MessageEmbed()
                .setColor("YELLOW")
                .setImage(img1);
            const image2 = new MessageEmbed()
                .setColor("YELLOW")
                .setImage(img2);
            const image3 = new MessageEmbed()
                .setColor("YELLOW")
                .setImage(img3);
            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setLabel("Image 1")
                        .setStyle("LINK")
                        .setURL(img1),
                        new MessageButton()
                        .setLabel("Image 2")
                        .setStyle("LINK")
                        .setURL(img2),
                    new MessageButton()
                        .setLabel("Image 3")
                        .setStyle("LINK")
                        .setURL(img3)
                );
            message.channel.send({ embeds: [embed, image1, image2, image3], components: [row] });
        } catch {
            bot.responses.command_error(message, {
                error: "Failed to fetch images",
                command_name: "img"
            });
        }
    }
}