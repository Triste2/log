const Discord = require('discord.js');
const client = new Discord.Client();



console.log(`

- [ log BOT IS ONLINE ] - 

`);
client.on('Join', () => {
  console.log(`Sign in`);
});



const adminprefix = "log-";
const devs = ['413685264565927967'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'sgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلايينق البوت الى **`)
} else 
  if (message.content.startsWith(adminprefix + 'sname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير اسم البوت الى`)
return message.reply("**يجب عليك الإنتظار ساعتين لتغير الاسم مرة اخرى**");
} else
  if (message.content.startsWith(adminprefix + 'savatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغيير أفتآر البوت الي`);
      } else     
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغير تويتش البوت الى  ${argresult}**`)
}

});










  client.on("guildMemberAdd", function(member) {
    const wc = member.guild.channels.find("name", "log")
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .addField(" ** Welcome To Nice Life Server ** ")
        .setTimestamp()
        return wc.sendEmbed(embed);
});

client.on("guildMemberRemove", function(member) {
    const wc = member.guild.channels.find("name", "log")
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(member.user.tag, member.user.avatarURL)
        .addField(" ** We hope you enjoyed .. Bye ** ")
        .setTimestamp()
        return wc.sendEmbed(embed);
});



  client.on("roleUpdate", (re,updated) => {
    client.setTimeout(() => {
      re.guild.fetchAuditLogs({
          limit: 1,
          type: 30
        })
        .then(audit => {
          let exec = audit.entries.map(a => a.executor.username)
          try {
  
            let log = re.guild.channels.find('name', 'log');
            if (!log) return;
            let embed = new Discord.RichEmbed()
              .setColor('BLACK')
              .setTitle("✏  Role Name Updated")
              .addField("Old",`${re.name}`,true)
              .addField("New",`${updated.name}`,true )
              .addField("Role id",`${re.id}`,true )
              .addField('By', exec, true)
              .setTimestamp()
            log.send(embed).catch(e => {
              console.log(e);
            });
          } catch (e) {
            console.log(e);
          }
        })
    }, 1000)
  })


client.login(process.env.BOT_TOKEN);
