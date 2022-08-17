const config = {
	"app": {
		"name": "CrucibleBot",
		"support": {
			"message": "For help, go to our bot's support discord, or our website.",
			"discord_link": "https://top.gg/servers/1004817181504180395/join",
			"invite_link": "https://discord.com/oauth2/authorize?client_id=999402528632483871&permissions=534723946560&scope=bot%20applications.commands",
			"website_link": "https://crucible.chat",
			"command_link": "https://crucible.chat/commands"
		}
	},
	clientId:  process.env.CBOT_CLIENT_ID || "",
	clientSecret:  process.env.CBOT_CLIENT_SECRET || "",
	port: process.env.PORT || 53134
};

module.exports.default = config;