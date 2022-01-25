const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Copa"){
        message.reply("Ese we es el Caga fuego")
    }
})

const welcomeChannelID = "835322632181514301"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelID).send({
        content:`<@${member.id}> Bienvenidx al Servidor de Copadiux! `,
        files: [img]
    })            
})

client.login(process.env.TOKEN);