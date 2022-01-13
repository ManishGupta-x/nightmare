

module.exports = (client) => {
    console.log('Gift is online!');




    let statusarray = [

        `K3U Master 💘 `,
        `Sexiest Hooman on Planet 😘`,
        `Gifting u a Tiny Part of my knowledge 😇`,
        `Only and Only for u ❤️🥰`

    ]
    setInterval(() => {

        client.user.setActivity(`${statusarray[Math.floor(Math.random() * statusarray.length)]}`, {type:'PLAYING'})

    }, 10000)

};