const reakce = require("./emoty/reactions")
const prikazovnik = require("./comandy/prikazi")


//tomuhle nerozumím
const Discord = require('discord.js');
const client = new Discord.Client();
require("dotenv").config();

client.login(process.env.BOTTOKEN);



client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", prikazovnik);

client.on('messageReactionAdd', reakce );
