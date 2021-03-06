module.exports = {
    name: "rps",
    description: "Play rock, paper, scissors with swiggy!",
    
    execute(message, args) {
        const acceptedReplies = ["rock", "paper", "scissors"];
        const random = Math.floor((Math.random() * acceptedReplies.length));
        const result = acceptedReplies[random];

        const choice = args[0];
        if (!choice) return message.channel.send(`How to play: \`${prefix}rps <rock|paper|scissors>\``);
        if (!acceptedReplies.includes(choice)) return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);

        message.channel.send(`Bot\'s choice: ${result}`, result);
        if (result === choice) return message.reply("It's a tie! We had the same choice.");

        switch (choice) {
            case "rock": {
                if (result === "paper") {
                    return message.reply("I Won!");
                }
                else {
                    return message.reply("You Won!");
                }
            }
            case "paper": {
                if (result === "scissors") {
                    return message.reply("I Won!");
                }
                else {
                    return message.reply("You Won!");
                }
            }
            case "scissors": {
                if (result === "rock") {
                    return message.reply("I Won!");
                }
                else {
                    return message.reply("You Won!");
                }
            }
            default:
                return message.channel.send(`Only these responses are accepted: \`${acceptedReplies.join(', ')}\``);
        }
    },
};