const disTube = require("distube");

const Discord = require("discord.js");

module.exports.run = async (client, message, args, Discord) => {
	if (!message.member.voice.channel)
		return message.channel.send("You must be in a voice channel to use this command.");
	let queue = await client.distube.getQueue(message);
	if (queue) {
		let filter = client.distube.setFilter(message, "bassboost");
		const embed = new Discord.MessageEmbed()
		.setColor("#db2b6e")
		.setThumbnail(
			"https://cdn.discordapp.com/attachments/730714810614022228/888052883549995048/maxresdefault.png"
		)
		.setAuthor(
			"Friday",
			"https://cdn.discordapp.com/attachments/850831278386184192/928222412133249054/1641374970107.png"
		)
			.setDescription("Filter : " + (filter.join("+ ") || "Off"))
			.setImage(
				"https://cdn.discordapp.com/attachments/730714810614022228/928262304263442534/wp7806842.png"
			)

			.setFooter(client.user.username, client.user.displayAvatarURL())
			.setTimestamp();
		message.channel.send({ embeds: [embed] });
	} else {
		message.reply("No Song playing");
	}
};

module.exports.config = {
	name: "bassboost",
	aliases: ["bb"],
	Description: "Command",
};
