"use strict";
console.clear()
require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [  ],
});
module.exports = client;

client.ArrayOfApplicationCommands = new Discord.Collection();

require("./handler")(client);

client.login(process.env.TOKEN);
