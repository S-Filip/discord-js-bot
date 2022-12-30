const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription(`Replies with "pong".`),
  async execute(interaction) {
    await interaction.reply({ content: `pong. 🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms); ` });
  },
};
