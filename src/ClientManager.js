/*╠════════════════════════════════════════ 𝓒𝓵𝓲𝓮𝓷𝓽 𝓶𝓪𝓷𝓪𝓰𝓮𝓻 ═════════════════════════════════════════════════╣*/
const errChannel = "918106499203616788";
const { Client, Collection } = require("discord.js");
const client = require('../index');
const EventHandler = require("./utils/loadEvents");
const Discord = require("discord.js");
const cookie = require(`../settings.json`);
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
module.exports = class ClientManager extends Client {
	constructor(options) {
		super(options);
		this.commands = new Collection();
		this.snipes = new Collection();
		this.aliases = new Collection();
	}

	setup() {
		const { DisTube } = require("distube");
		const { SpotifyPlugin } = require("@distube/spotify");
		this.distube = new DisTube(this, {
			emitNewSongOnly: true,
			plugins: [
				new SpotifyPlugin({
					parallel: true,
					emitEventsAfterFetching: false,
				}),
			],
			customFilters: {
				"8d": "apulsator=hz=0.08",
				lightbass: "bass=g=8,dynaudnorm=f=200",
				heavybass: "bass=g=20,dynaudnorm=f=200",
			    slowreverb: "atempo=0.85,aecho=1.0:0.5:10:0.5"
			},
			leaveOnFinish: false,
			emptyCooldown: 15,
			leaveOnEmpty: true,
			leaveOnStop: false,
			youtubeCookie: `${cookie}`,
		});
		this.events = new EventHandler(this);
		this.events.init();
		
		this.distube
			.on("playSong", async (queue, song) => {
				var wallpapers = [
					"https://cdn.discordapp.com/attachments/850831278386184192/928253004673597490/1641383155721.jpg",
					"https://cdn.discordapp.com/attachments/850831278386184192/928260981421928458/IMG_20220105_174634.jpg",
					"https://cdn.discordapp.com/attachments/850831278386184192/928222412133249054/1641374970107.png",
					"https://cdn.discordapp.com/attachments/850831278386184192/856282567421198356/IMG-20210621-WA0002.jpg",
					"https://cdn.discordapp.com/attachments/850831278386184192/855794951555776532/SAVE_20210619_183255.jpg",
					"https://cdn.discordapp.com/attachments/850831278386184192/850838271680184360/IMG-20210606-WA0009.jpg",
					"https://cdn.discordapp.com/attachments/850831278386184192/928255273460719656/1641383691760.jpg",
					"https://cdn.discordapp.com/attachments/850831278386184192/928255273221636176/1641383691748.jpg",
					"https://cdn.discordapp.com/attachments/850831278386184192/928255272831578172/1641383691732.jpg",
                    "https://cdn.discordapp.com/attachments/850831278386184192/928254102150975578/1641383416617.jpg"

				];
				const likes = numberWithCommas(song.likes);
				const views = numberWithCommas(song.views);
				var mu = Math.floor(Math.random() * wallpapers.length);

				const playsong = new Discord.MessageEmbed()
					.setColor("#0080be")
					.setThumbnail(`${wallpapers[mu]}`)
					.setAuthor({ name :"Friday",
						iconURL:"https://cdn.discordapp.com/attachments/850831278386184192/928222412133249054/1641374970107.png"
			})
					.setTitle(`Now Playing`)
					.setDescription(
						`${song.name} | Requested by: ${song.user} || \`${song.formattedDuration}\` `
					)

					.setFooter({ text : `Likes • 💖 ${likes} 〣 Views • 👁️ ${views}`})
					.setTimestamp();

				queue.textChannel.send({ embeds: [playsong] });
			})
			.on("addSong", (queue, song) => {
				const addsong = new Discord.MessageEmbed()
					.setColor("#0080be")
					.setThumbnail(`${song.thumbnail}`)
					.setTitle(`Added to Queue`)
					.setAuthor({ name :"Friday",
						iconURL:"https://cdn.discordapp.com/attachments/850831278386184192/928222412133249054/1641374970107.png"
			})
					.setDescription(
						`${song.name} | Requested by: ${song.user} || \`${song.formattedDuration}\``
					)

					.setFooter({text :`Thanks For Being with me ❤️🥰`})
					.setTimestamp();

				queue.textChannel.send({ embeds: [addsong] });
			})
			.on("searchResult", (message, results) => {
				message.channel.send(
					`**Choose an option from below**\n${results
						.map((song, i) => `**${i + 1}**. ${song.name} - \`${song.formattedDuration}\``)
						.join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`
				);
			})
			.on("searchDone", (message) => message.channel.send(`Search Done!`))
			.on("searchCancel", (message) => message.channel.send(`Searching canceled`))
			.on("searchInvalidAnswer", (message) => message.channel.send(`You answered an invalid `))
			// .on("error" , (channel,error) => {
			
			
			// const embed = new Discord.MessageEmbed()
			// .setColor("RANDOM")
			// .setTitle("Error Boss")

			// .setAuthor({ name :"Friday",
			// 			iconURL:"https://cdn.discordapp.com/attachments/850831278386184192/928222412133249054/1641374970107.png"
			// })
			// .setDescription("\n\n**ERROR**\n\n ```" + error  + "```")

			// .setFooter({text : `Anti Crash System`, iconURL :"https://cdn.discordapp.com/attachments/850831278386184192/928222412133249054/1641374970107.png" })
			// .setTimestamp();
		    //  client.channels.cache.get(errChannel).send({ embeds: [embed] });}
			// )
			
			// // channel.send(
			// // 	"An error encountered: " + error
			// // ))
			.on("searchNoResult", (message, query) =>
				message.channel.send(`No result found for ${query}!`)
			)
			.on("noRelated", (queue) => queue.textChannel.send("Can't find related video to play."));
		require("./utils/loadCommands")(this);
           
		this.login('OTI4MTcyMDIwNjMyNTUxNDQ0.YdU5jg.PTnRZmc7SH50q4fUF4ar3-4yxJU');
	}
};
