const { cmd } = require('../command');

// FAIZAN-MD name styles (rotate)
const nameStyles = [
    "𝒇𝒂𝒊𝒛𝒂𝒏-𝒎𝒅",
    "𝐅𝐀𝐈𝐙𝐀𝐍-𝐌𝐃",
    "ғᴀɪᴢᴀɴ-ᴍᴅ",
    "𝙵𝙰𝙸𝚉𝙰𝙽-𝙼𝙳",
    "𝓕𝓪𝓲𝔃𝓪𝓷-𝓜𝓓",
    "𝔉𝔞𝔦𝔷𝔞𝔫-𝔐𝔡",
    "𝕱𝖆𝖎𝖟𝖆𝖓-𝕸𝕯"
];

let nameIndex = 0;

cmd({
    pattern: "ping",
    alias: ["speed"],
    desc: "Stylish ping with rotating FAIZAN-MD name",
    category: "main",
    react: "⚡",
    filename: __filename
},
async (conn, mek, m, { from }) => {
    try {
        const start = Date.now();

        // First message
        const sentMsg = await conn.sendMessage(from, {
            text: "⏳ Pinging..."
        }, { quoted: mek });

        // 1 second delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const speed = Date.now() - start;

        // Get current name style & rotate
        const botName = nameStyles[nameIndex];
        nameIndex = (nameIndex + 1) % nameStyles.length;

        // Edit same message
        await conn.sendMessage(from, {
            text: `⚡ ${botName} • 『${speed}ᴍs』`,
            edit: sentMsg.key
        });

    } catch (e) {
        console.error("PING ERROR:", e);
    }
});
