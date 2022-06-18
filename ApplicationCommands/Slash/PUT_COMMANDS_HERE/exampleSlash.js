require("dotenv").config();
const { Client, CommandInteraction } = require("discord.js");
const Discord = require("discord.js");
const fetch = require('node-fetch');
const emojis = require("../../../utils/emojis");
const con = require("../../../database/connection");
const wait = require('util').promisify(setTimeout);
const moment = require('moment');

module.exports = {
    name: "modal-test",
    description: "This is an example of a Modal",
    type: 1,

    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    
    execute: async (client, interaction, args) => {
        
        const modal = new Discord.ModalBuilder()
            .setCustomId("testmodal")
            .setTitle("Test Modal")

		const favoriteColorInput = new Discord.TextInputBuilder()
            .setCustomId('favoriteColorInput')
            .setLabel("What's your favorite color?")
            .setStyle(Discord.TextInputStyle.Short);

        const hobbiesInput = new Discord.TextInputBuilder()
            .setCustomId('hobbiesInput')
            .setLabel("What's some of your favorite hobbies?")
            .setStyle(Discord.TextInputStyle.Paragraph);
        
        const firstActionRow = new Discord.ActionRowBuilder().addComponents([favoriteColorInput]);
        const secondActionRow = new Discord.ActionRowBuilder().addComponents([hobbiesInput]);

        modal.addComponents([firstActionRow, secondActionRow]);

        await interaction.showModal(modal);

    },
};
