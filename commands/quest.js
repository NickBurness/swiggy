const Discord = require("discord.js");

module.exports = {
    name: "quest",
    description: "tell swiggy to generate an embedded link to the Old School Runescape Wiki quest guide passed in as the argument",
    execute(message, args) {
        let questURL = args.toString().replace(/,/g, "_");
        let quest = args.toString().replace(/,/g, " ").toUpperCase();

        const questEmbed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle(`OSWiki - ${quest}`)
            .setURL(`https://oldschool.runescape.wiki/${questURL}`)
            .setAuthor(`${quest}`, "https://i.imgur.com/wSTFkRM.png", "https://discord.js.org")
            .setDescription(`URL to OSWiki's quest guide - ${quest}`)
            .setThumbnail("https://oldschool.runescape.wiki/images/4/41/Old_School_RuneScape_logo.png?1d864");

        message.channel.send(questEmbed);
    },
};