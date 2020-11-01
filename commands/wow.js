module.exports = {
    name: "wow",
    description: "play wow sound in voice channel",
    execute(message, args) {
        if (message.member.voice.channel) {
            message.member.voice.channel.join().then(connection => {
                const dispatcher = connection.play('audio/anime-wow-sound-effect.mp3');
                dispatcher.on("end", () => {
                    this.message.channel.send('Finished Playing.')
                    dispatcher.end();
                    this.message.member.voice.channel.leave();
                })
            })
        } else {
            message.reply('You need to join a voice channel first!');
        }
        
    }
};