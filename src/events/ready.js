const { ActivityType } = require('discord.js')

module.exports = {
  name: 'Ready',
  eventName: 'ready',
  execute(client) {
    const activityText = 'by @YazılımcıMekanı'
    client.user.setPresence({
      activities: [{ name: activityText, type: ActivityType.Playing }],
      status: 'online'
    })
  }
}
