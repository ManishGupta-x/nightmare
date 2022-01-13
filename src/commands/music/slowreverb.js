const disTube = require('distube');

const Discord = require("discord.js")

module.exports.run = async (client, message, args,Discord) => {
      
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
    let queue = await client.distube.getQueue(message);
    if(queue) { let filter = client.distube.setFilter(message,'slowreverb');
    const embed = new Discord.MessageEmbed()
    .setColor('#1BE124')
    .setThumbnail('https://cdn.discordapp.com/attachments/730714810614022228/888052510416330762/wp7806858.png')
    .setAuthor('Friday', 'https://cdn.discordapp.com/attachments/850831278386184192/928222412133249054/1641374970107.png')
    .setDescription("Filter : " +  (filter.join("+ ")  || "Off"))
     .setImage('https://cdn.discordapp.com/attachments/730714810614022228/905029582095257640/DJ-4K-5-scaled.png')
    
    .setFooter(client.user.username, client.user.displayAvatarURL())
    .setTimestamp();
    message.channel.send({embeds: [embed]});

}else {
    message.reply('No Song playing')
}


}

module.exports.config = {
    name: "slowreverb",
    aliases: ['sr'],
    Description: 'Command',
}