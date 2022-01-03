//REQUIRE THE NECESSARY DISCORD.JS CLASSESS
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = process.env.DISCORD_TOKEN;

//CREATE A NEW CLIENT INSTANCE
const client = new Client ({ intents: [Intents.FLAGS.GUILDS]});

//NEW COMMAND COLLECTION
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file =>file.endsWith('.js'));

for (const file of commandFiles){
  const command = require(`./commands/${file}`);
  //SET A NEW ITEM IN THE COLLECTION
  //WITH THE KEY AS THE COMMAND NAME AND THE VALUE AS THE EXPORTED MODULE
  client.commands.set(command.data.name, command);
}

//WHEN THE CLIENT IS READY, RUN THIS CODE(ONLY ONCE)
client.once('ready', ()=>{
  console.log('Ready!');
});

client.on('interactionCreate', async interaction =>{
  if (!interaction.isCommand()) return;
  
  const command = client.commands.get(interaction.commandName);
  
  if(!command) return;
  
  try{
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({content: 'there was an error while executing this command!', ephemeral: true});
  }
  
  
});

//LOGIN TO DISCORD WITH YOUR CLIENT'S TOKEN
client.login(token);


