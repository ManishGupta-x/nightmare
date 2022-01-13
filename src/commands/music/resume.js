
const disTube = require('distube');

const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
       
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

    let queue = await client.distube.getQueue(message);

    if(queue) {
         client.distube.resume(message)
         client.distube.pause(message)
         client.distube.resume(message)
        const embed = new Discord.MessageEmbed()
        .setColor('#F0074F')
        .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/882270899556991036/bhoZOt.png')
        .setAuthor('Friday', 'https://cdn.discordapp.com/attachments/850831278386184192/928222412133249054/1641374970107.png')
        .setDescription(`Resumed the player! `)
      
        
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setTimestamp();
        message.channel.send({embeds: [embed]});
        
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "resume",
    aliases: [],
    Description: 'Command',
}
