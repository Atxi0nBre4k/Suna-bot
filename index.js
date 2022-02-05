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
    if (message.content.startsWith( "copa")){
        message.channel.send("El Caga fuego por excelencia, dueño de este condominio")
    }
})
client.on("messageCreate", (message) => {
    if (message.content.startsWith( "eve")){
        message.channel.send("La bichota del lugar sin excepciones, se merece unos besotes")
    }
})
client.on("messageCreate", (message) => {
    if (message.content.startsWith( "navarrete")){
        message.channel.send("No, no es el de Navarrete Show, ya no la chinguen")
    }
})
client.on("messageCreate", (message) => {
    if (message.content.startsWith( "gus")){
        message.channel.send("Veterano de la vida, troll para VALORANT, individuo de gustos 'cultos'")
    }
})
client.on("messageCreate", (message) => {
    if (message.content.startsWith( "bere")){
        message.channel.send("Kpop lover, adicta a los fujoshis y la cultura asiatica, que no te engañe su pelo ")
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