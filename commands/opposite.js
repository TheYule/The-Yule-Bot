const { MessageEmbed } = require("discord.js");

function replace(string) {
    var code = { "a": "z", "A": "Z", "b": "y", "B": "y", "c": "x", "C": "X", "d": "w", "D": "W", "e": "v", "E": "V", "f": "u", "F": "U", "g": "t", "G": "T", "h": "s", "H": "S", "i": "r", "I": "R", "j": "q", "J": "Q", "k": "p", "K": "P", "l": "o", "L": "O", "m": "n", "M": "N", "n": "m", "N": "M", "o": "l", "O": "L", "p": "k", "P": "K", "q": "j", "Q": "J", "r": "i", "R": "I", "s": "h", "S": "H", "t": "g", "T": "G", "u": "f", "U": "F", "v": "e", "V": "E", "w": "d", "W": "D", "x": "c", "X": "C", "y": "b", "Y": "B", "z": "a", "Z": "A", "0": "9", "1": "8", "2": "7", "3": "6", "4": "5", "5": "4", "6": "3", "7": "2", "8": "1", "9": "0", "!": "?", "?": "!", ",": ".", ".": ",", "/": "\\", "\\": "/", "|": "_", "_": "|", ":": ";", ";": ":", "'": "\"", "\"": "'", "-": "+", "+": "-", "<": ">", ">": "<", "(": ")", ")": "(", "[": "]", "]": "[", "{": "}", "}": "{", "ä": "ß", "Ä": "ẞ", "ö": "ü", "Ö": "Ü", "ü": "ö", "Ü": "Ö", "ß": "ä", "ẞ": "Ä" };
    return Array.from(string, c => code[c] || c).join("");
}

module.exports = {
    name: "opposite",
    description: "Basically invert all the letters, and some symbols.",
    args: 1,
    usage: "<...text>",
    async execute(message, args) {
        const text = replace(args.join(" "))

        const embed = new MessageEmbed()
            .setColor("YELLOW")
            .setDescription(text);
        message.channel.send({ embeds: [embed] });
    }
}