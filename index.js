// FuelEx Aoi.JS Starter Template
// index.js

const { AoiClient } = require('aoi.js');

const client = newAoiClient({
  token: "DISCORD BOT TOKEN",
  prefix: "DISCORD BOT PREFIX",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require('@akarui/aoi.db'),
    dbType: "KeyValue",
    tables: ["main", "guilds", "users"],
    securityKey: "12345678901234567890123456789012"
  }
});

client.status({
  name: "Made by FuelEx",
  type: "CUSTOM",
  time: 3,
});

client.status({
  name: "Made by DaBoltGod",
  type: "CUSTOM",
  time: 3,
});
  

client.LoadCommands("./commands", true);
