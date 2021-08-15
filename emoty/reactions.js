let valid = ['✅','❤️']
//checknout jestli to je jedna z validních a pokud jo tak rozjet složku s funkcí co to má dělat


const heart = require("./heart")

const reakce={heart}

module.exports = function (reaction){
if(valid.indexOf(reaction.emoji.name!==-1)){
reaction.message.reply('uhoh')
}

}