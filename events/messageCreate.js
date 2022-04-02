const Discord = require("discord.js")

module.exports = {
    name: "messageCreate",
    run: async function runAll(bot,message){
        const {client,prefix,owners} =bot
        
        if(!message.guild) return

        if(message.author.bot) return

        if(!message.content.startswith(prefix))
        return

        const args = message.content.slice(prefix.length).trim().split(/ + /g)
        const cmdstr = args.shift().toLowerCase()

        let command = client.commands.get(cmdstr)
        if (!command) return

        let member = message.member

        if(command.dev0nly && owners.includes(member.id)){
            return message.reply("Este comando está disponible solo para Owners")
        }

        if(command.permissions && member.permissions.missing(command.permissions).length !== 0){
            return message.reply("No tienes permiso para usar este comando")
        }

        try{
            await command.run({...bot,message, args})
        }
        catch(err){
            let errMsg = err.toString()

            if(errMsg.startswith("?")){
                errMsg = errMsg.slice(1)
                await message.reply(errMsg)
            }

            else
            console.error(err)
        }
    }
}