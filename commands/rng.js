module.exports = {
	name: 'rng',
    description: 'Generate a random number between 1 and 28!',
	execute(message, args) {
        function getRandomInt() {
            return Math.floor(Math.random() * Math.floor(28));
          }

        message.channel.send(getRandomInt());
	},
};