const TelegramBot = require('node-telegram-bot-api');

// Ganti dengan token bot Telegram asli Anda
const token = '6914170607:AAGyoGYhCF6kf8X1BBahTu9aeNprGmTg0-g';

// Ganti dengan nama dan alamat website Anda
const sitename = 'Univermine';
const websiteUrl = 'https://t.me/univermine_bot/home';
const community = 'https://t.me/univermine';

const bot = new TelegramBot(token);

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const username = msg.from.first_name;
    const mainImage = 'msg6583452530-904.jpg';

    const inlineKeyboard = [
        [{ text: '🕹️❤️‍🔥 Lets Go', url: websiteUrl }],
        [{ text: '🤙 Join Community', url: community }], // Change here
        [{ text: '🎓 How To Play', callback_data: `help_${chatId}` }] // Change here
      ];

    bot.sendPhoto(chatId, mainImage, {
        caption: `Hi, ${username}! This is ${sitename} 👋 

Tap on the coin and watch your balance grow.
      
How much is ${sitename} worth? No one knows, probably nothing.
      
Got any friends? Get them in the game. That way you'll get even more coins together.
      
${sitename} is what you want it to be. That's all you need to know.`,
        reply_markup: {
            inline_keyboard: inlineKeyboard
        }
    });
});

// Penanganan untuk callback inline (opsional - jika Anda ingin bereaksi sesuai pilihan tombol)
bot.on('callback_query', (query) => {
    const [action, chatId] = query.data.split('_'); // Assuming the '_' as separator
    const mainImage = 'photo1709661386.jpeg';

    if (action === 'join_community') {
      // Handle the "Join Community" action using chatId here
      bot.sendMessage(chatId, 'Here is the community link: ...'); 
  } else if (action === 'help') {

    const inlineKeyboard = [
        [{ text: '❤️‍🔥 Play', url: websiteUrl }]
      ];

      // Handle the "Help" action using chatId here
      bot.sendPhoto(chatId, mainImage, {
        caption: `How to play Notcoin ⚡ 

Open the full guide
        
Tap to earn
Notcoin is a viral clicker game where you earn coins by tapping the screen.
        
Leagues
The more Notcoin you earn, the higher you will be ranked in the leagues. 
        
Boosts
Get boosts and complete tasks to get more Notcoin.
        
Frens
Invite someone and both of you will receive bonuses. Help Fren to move to a higher league, and you will receive bigger Notcoin bonuses.
        
 Squads
Telegram channels and groups are squads, join a squad to play with together. New users invited to squad are counted as your referrals
        
Wen
No one knows if or when Notcoin will be minted. No one knows if it will be worth anything or not. 
        
And that's the beauty. 
        
Let's find out together.
        
/help to get this guide`,
        reply_markup: {
            inline_keyboard: inlineKeyboard
        }
    });
  }
});

// Jalankan bot
bot.startPolling();
