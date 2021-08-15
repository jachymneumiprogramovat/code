//zkratka na prefix
let prefix = process.env.PREFIX;
//require funkce na další složky s komandama
const tvojeMáma = require("./tvojeMáma.js")
const among = require("./tvoje")

//objekt s komanda
const prikazy = {tvojeMáma,among}

module.exports = function gotMessage(msg){
    let token = msg.content.split(" ")
    let prikaz = token[0]
    if (prikaz.charAt(0)=== prefix){
       prikaz = prikaz.substring(1);
        prikazy[prikaz](token, msg)
    }
}

