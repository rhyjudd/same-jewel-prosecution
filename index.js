//REQUIRE THE NECESSARY DISCORD.JS CLASSESS

const { Client, Intents } = require('discord.js');
const { token } = process.env.DISCORD_TOKEN;

//CREATE A NEW CLIENT INSTANCE
const client = new Client ({ intents: [Intents.FLAGS.GUILDS]});

//WHEN THE CLIENT IS READY, RUN THIS CODE(ONLY ONCE)
client.once('ready', ()=>{
  console.log('Ready!');
});

//LOGIN TO DISCORD WITH YOUR CLIENT'S TOKEN
client.login(token);


