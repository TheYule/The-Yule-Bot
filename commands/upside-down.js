const { MessageEmbed } = require("discord.js");

function replace(string) {
    var code = {
        "a": "ɐ",
        "b": "q",
        "c": "ɔ",
        "d": "p",
        "e": "ǝ",
        "f": "ɟ",
        "g": "ƃ",
        "h": "ɥ",
        "i": "ı",
        "j": "ɾ",
        "k": "ʞ",
        "l": "l",
        "m": "ɯ",
        "n": "u",
        "p": "b",
        "q": "d",
        "r": "ɹ",
        "t": "ʇ",
        "u": "n",
        "v": "ʌ",
        "w": "ʍ",
        "y": "ʎ",
        
        "A": "∀",
        "B": "𐐒",
        "C": "Ↄ",
        "D": "ᗡ",
        "E": "Ǝ",
        "F": "Ⅎ",
        "G": "⅁",
        "J": "ſ",
        "K": "ʞ",
        "L": "⅂",
        "M": "W",
        "N": "ᴎ",
        "P": "Ԁ",
        "Q": "Ό",
        "R": "ᴚ",
        "T": "⊥",
        "U": "∩",
        "V": "Λ",
        "W": "M",
        "Y": "⅄",
        
        "3": "Ɛ",
        "4": "ᔭ",
        "6": "9",
        "7": "Ɫ",
        "9": "6",
        
        "!": "¡",
        "?": "¿",
        "&": "⅋",
        "<": ">",
        ">": "<",
        "'": ",",
        "\"": "„",
        ".": "˙",
        ";": "؛",
        "_": "‾",
        "‿": "⁀",
        "⁅": "⁆",
        "∴": "∵",
        "(": ")",
        "[": "]",
        "{": "}",
        ")": "(",
        "]": "[",
        "}": "{",
        
        // Reverse
        
        "ɐ": "a",
        "q": "b",
        "ɔ": "c",
        "p": "d",
        "ǝ": "e",
        "ɟ": "f",
        "ƃ": "g",
        "ɥ": "h",
        "ı": "i",
        "ɾ": "j",
        "ʞ": "k",
        "ʃ": "l",
        "ɯ": "m",
        "u": "n",
        "b": "p",
        "d": "q",
        "ɹ": "r",
        "ʇ": "t",
        "n": "u",
        "ʌ": "v",
        "ʍ": "w",
        "ʎ": "y",
        
        "∀": "A",
        "𐐒": "B",
        "Ↄ": "C",
        "ᗡ": "D",
        "Ǝ": "E",
        "Ⅎ": "F",
        "⅁": "G",
        "ſ": "J",
        "⋊": "K",
        "⅂": "L",
        "W": "M",
        "ᴎ": "N",
        "Ԁ": "P",
        "Ό": "Q",
        "ᴚ": "R",
        "⊥": "T",
        "∩": "U",
        "ᴧ": "V",
        "M": "W",
        "⅄": "Y",
        
        "Ɛ": "3",
        "ᔭ": "4",
        "9": "6",
        "Ɫ": "7",
        "6": "9",
        
        "¡": "!",
        "¿": "?",
        "⅋": "&",
        ">": "<",
        "<": ">",
        ",": "'",
        "„": "\"",
        "˙": ".",
        "؛": ";",
        "‾": "_",
        "⁀": "‿",
        "⁆": "⁅",
        "∵": "∴"
    };
    
    return Array.from(string, c => code[c] || c).join("");
}

module.exports = {
    name: "upside-down",
    description: "⊥ɥıs ʇǝxʇ ıs ndsıqǝ qoʍu˙˙˙",
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