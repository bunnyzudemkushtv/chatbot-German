/*
PLUGIN BY: Bunnyzudemkushtv
Trovo Link: https://trovo.live/Bunnyzudemkushtv
Discord: bunnyzudemkushtv#2919

Description: Shoutout command


Updated by: Bunnyzudemkushtv
Changes: Added funcitonality for @ and non-@ shout outs.
*/
console.log('loaded discord')
module.exports = {
	name: 'discord',
	description: 'Replies with Pong',
	permissions: [],
	execute(message, args, user, bot, event, plugins) {
		bot.sendMessage(`Hier mein Discord ! @${user}  https://discord.gg/9vdNKFc schaut gerne vorbei! So seid ihr auf den neusten Stand ❤️ `);
	},
};
