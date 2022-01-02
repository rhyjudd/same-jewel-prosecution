//REQUIRE THE NECESSARY DISCORD.JS CLASSESS

const { Client, Intents } = require('discord.js');
const { token } = process.env.DISCORD_TOKEN;

//CREATE A NEW CLIENT INSTANCE
const client = new Client ({ intents: [Intents.FLAGS.GUILDS]});

//WHEN THE CLIENT IS READY, RUN THIS CODE(ONLY ONCE)
client.once('ready', ()=>{
  console.log('Ready!');
});

client.on('interactionCreate', async interaction =>{
  if (!interaction.isCommand()) return;
  
  const { commandName } = interaction;
  
  if (commandName === 'ping'){
    await interaction.reply('Pong!');
  } else if (commandName === 'server'){
    await interaction.reply(`Server Name: ${interaction.guild.name}\nTotal Members: ${interaction.guild.memberCount}`);
  } else if (commandName === 'user'){
    await interaction.reply(`Your tag: ${interaction.user.tag}\nYour ID: ${interaction.user.id}`);
  }
});

//LOGIN TO DISCORD WITH YOUR CLIENT'S TOKEN
client.login(token);


