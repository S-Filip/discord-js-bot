const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder().setName("ping").setDescription("This is a test command!"),
  async execute(interaction) {
    await interaction.reply({ content: "pong" });
  },
};
