const disTube = require('distube');
const { MessageEmbed, Util } = require("discord.js")
const { MessageActionRow, MessageSelectMenu } = require('discord.js')
const Discord = require("discord.js")



module.exports.run = async (client, message, args, Discord) => {


     if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

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

     var mu = wallpapers[Math.floor(Math.random() * wallpapers.length)];

     let queue = await client.distube.getQueue(message);

     /*-----------------------------------------------------------------------------------------------------------------*/


     /*-----------------------------------------------------------------------------------------------------------------*/
     //row1
     const row1 = new Discord.MessageActionRow()
          .addComponents(

               new MessageSelectMenu()
                    .setCustomId('queue1')
                    .setPlaceholder('Skip to Next or Previous songs')
                    .addOptions([
                         {
                              label: `Previous Song`,
                              value: 'first1',
                              emoji: '🎶',
                              description: `Play the previous song`
                         }
                    ],
                    )
          )





     /*-----------------------------------------------------------------------------------------------------------------*/
     if (!queue) {
          message.reply('No queue Available');
     } else if (queue) {

          const status = (queue) => `Volume: \`${queue.volume}%\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "Repeat queue" : "Repeat song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;


          let y = Util.splitMessage(`__**Current Queue**__\n\n${queue.songs.map((song, id) => `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}`, { maxLength: 3500 })

          if (!y[1]) {
               const embed9 = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setThumbnail(`${mu}`)
                    .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                    .setDescription(`${y[0]}\n\n${status(queue)}`)
                    .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                    .setTimestamp();
               if (queue.previousSongs.length < 1) {
                    message.channel.send({ embeds: [embed9] })
               } else if (queue.songs.length == 1 && queue.previousSongs.length >= 1) {
                    message.channel.send({ embeds: [embed9], components: [row1] })


               } else if (queue.songs.length == 2 && queue.previousSongs.length >= 1) {

                    /*------------------------------------------------------------------------------------*/
                    //row2

                    const row2 = new Discord.MessageActionRow()
                         .addComponents(

                              new MessageSelectMenu()
                                   .setCustomId('queue2')
                                   .setPlaceholder('Skip to Next or Previous songs')
                                   .addOptions([
                                        {

                                             label: `Previous Song`,
                                             value: 'first2',
                                             emoji: '🎶',
                                             description: `Play the previous song`
                                        },
                                        {
                                             label: `Play 2nd Song`,
                                             value: 'second2',
                                             emoji: '🎶',


                                        }


                                   ],
                                   )
                         )
                    message.channel.send({ embeds: [embed9], components: [row2] })
               }
               else if (queue.songs.length == 3 && queue.previousSongs.length >= 1) {

                    /*-------------------------------------------------------------------------------------*/
                    //row3
                    const row3 = new Discord.MessageActionRow()
                         .addComponents(

                              new MessageSelectMenu()
                                   .setCustomId('queue3')
                                   .setPlaceholder('Skip to Next or Previous songs')
                                   .addOptions([
                                        {

                                             label: `Previous Song`,
                                             value: 'first3',
                                             emoji: '🎶',
                                             description: `Play the previous song`
                                        },
                                        {
                                             label: `Play 2nd Song`,
                                             value: 'second3',
                                             emoji: '🎶',


                                        }, {

                                             label: `Play 3rd Song`,
                                             value: 'third3',
                                             emoji: '🎶',


                                        }


                                   ],
                                   )
                         )
                    message.channel.send({ embeds: [embed9], components: [row3] })
               }
               else if (queue.songs.length == 4 && queue.previousSongs.length >= 1) {
                    /*-----------------------------------------------------------------------------------*/
                    //row4
                    const row4 = new Discord.MessageActionRow()
                         .addComponents(

                              new MessageSelectMenu()
                                   .setCustomId('queue4')
                                   .setPlaceholder('Skip to Next or Previous songs')
                                   .addOptions([
                                        {

                                             label: `Previous Song`,
                                             value: 'first4',
                                             emoji: '🎶',
                                             description: `Play the previous song`
                                        },
                                        {
                                             label: `Play 2nd Song`,
                                             value: 'second4',
                                             emoji: '🎶',

                                        },
                                        {

                                             label: `Play 3rd song`,
                                             value: 'third4',
                                             emoji: '🎶',


                                        },
                                        {

                                             label: `Play 4th song`,
                                             value: 'fourth4',
                                             emoji: '🎶',


                                        }


                                   ],
                                   )
                         )
                    message.channel.send({ embeds: [embed9], components: [row4] })
               } else if (queue.songs.length == 5 && queue.previousSongs.length >= 1) {
                    /*-----------------------------------------------------------------------------------------------------------------*/
                    //row5
                    const row5 = new Discord.MessageActionRow()
                         .addComponents(

                              new MessageSelectMenu()
                                   .setCustomId('queue5')
                                   .setPlaceholder('Skip to Next 5 songs ')
                                   .addOptions([
                                        {

                                             label: `Previous Song`,
                                             value: 'first5',
                                             emoji: '🎶',
                                             description: `Play the previous song`
                                        },
                                        {

                                             label: `Play 2nd song`,
                                             value: 'second5',
                                             emoji: '🎶',


                                        },
                                        {
                                             label: `Play 3rd song `,
                                             value: 'third5',
                                             emoji: '🎶',


                                        },
                                        {

                                             label: `Play 4th song`,
                                             value: 'fourth5',
                                             emoji: '🎶',


                                        },
                                        {

                                             label: `Play 5th song`,
                                             value: 'fifth5',
                                             emoji: '🎶',


                                        }


                                   ],
                                   )
                         )
                    message.channel.send({ embeds: [embed9], components: [row5] })
               } else {

                    message.channel.send({ embeds: [embed9] })
               }
          }
          const filter = (interaction) => interaction.isSelectMenu() && interaction.user.id == message.author.id;
          const collector = message.channel.createMessageComponentCollector({ filter, time: 30000, max: 2 });
          collector.on('collect', async collected => {

               const value = collected.values[0];
               switch (value) {

                    case 'first1': await client.distube.previous(message);
                         break;
                    case 'first2': await client.distube.previous(message);
                         break;
                    case 'first3': await client.distube.previous(message);
                         break;
                    case 'first4': await client.distube.previous(message);
                         break;
                    case 'first5': await client.distube.previous(message);
                         break;
                    case 'second2': await client.distube.jump(message, 1);
                         break;
                    case 'second3': await client.distube.jump(message, 1);
                         break;
                    case 'second4': await client.distube.jump(message, 1);
                         break;
                    case 'second5': await client.distube.jump(message, 1);
                         break;
                    case 'third3': await client.distube.jump(message, 2);
                         break;
                    case 'third4': await client.distube.jump(message, 2);
                         break;
                    case 'third5': await client.distube.jump(message, 2);
                         break;
                    case 'fourth4': await client.distube.jump(message, 3);
                         break;
                    case 'fourth5': await client.distube.jump(message, 3);
                         break;
                    case 'fifth5': await client.distube.jump(message, 4);
                         break;
               }

               collected.deferUpdate();
          })

          if (y[1] && !y[2]) {

               const embed9 = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setThumbnail(`${mu}`)
                    .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                    .setDescription(`${y[0]}`)
                    .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                    .setTimestamp();

               const embed10 = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setThumbnail(`${mu}`)
                    .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                    .setDescription(`${y[1]}\n\n${status(queue)}`)
                    .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                    .setTimestamp();
               message.channel.send({ embeds: [embed9] })
               await message.channel.send({ embeds: [embed10] })
               if (y[2] && !y[3]) {

                    const embed9 = new Discord.MessageEmbed()
                         .setColor('RANDOM')
                         .setThumbnail(`${mu}`)
                         .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                         .setDescription(`${y[0]}`)
                         .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                         .setTimestamp();

                    const embed10 = new Discord.MessageEmbed()
                         .setColor('RANDOM')
                         .setThumbnail(`${mu}`)
                         .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                         .setDescription(`${y[1]}`)
                         .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                         .setTimestamp();


                    const embed12 = new Discord.MessageEmbed()
                         .setColor('RANDOM')
                         .setThumbnail(`${mu}`)
                         .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                         .setDescription(`${y[2]}\n\n${status(queue)}`)
                         .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                         .setTimestamp();
                    message.channel.send({ embeds: [embed9] });
                    await message.channel.send({ embeds: [embed10] })
                    await message.channel.send({ embeds: [embed12] })
               }
               if (y[3]) {

                    const embed9 = new Discord.MessageEmbed()
                         .setColor('RANDOM')
                         .setThumbnail(`${mu}`)
                         .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                         .setDescription(`${y[0]}`)
                         .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                         .setTimestamp();

                    const embed10 = new Discord.MessageEmbed()
                         .setColor('RANDOM')
                         .setThumbnail(`${mu}`)
                         .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                         .setDescription(`${y[1]}`)
                         .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                         .setTimestamp();


                    const embed12 = new Discord.MessageEmbed()
                         .setColor('RANDOM')
                         .setThumbnail(`${mu}`)
                         .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                         .setDescription(`${y[2]}`)
                         .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                         .setTimestamp();


                    const embed14 = new Discord.MessageEmbed()
                         .setColor('RANDOM')
                         .setThumbnail(`${mu}`)
                         .setAuthor('Jarvis', 'https://cdn.discordapp.com/avatars/778267007439077396/66fa9525d6e9af153dac819fc04d3ee1.webp')
                         .setDescription(`${y[3]}\n\n${status(queue)}`)
                         .setFooter(`Total Queue Time : ${queue.formattedDuration}`)
                         .setTimestamp();

                    message.channel.send({ embeds: [embed9] });
                    await message.channel.send({ embeds: [embed10] })
                    await message.channel.send({ embeds: [embed12] })
                    await message.channel.send({ embeds: [embed14] })

               }


          }




     }
}

module.exports.config = {
     name: "queue",
     aliases: ['q'],
     Description: 'Command',
}