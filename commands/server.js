module.exports = {
	name: 'server',
	description: 'Get details about the server swiggy is currently active in!',
	execute(message) {
		message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};