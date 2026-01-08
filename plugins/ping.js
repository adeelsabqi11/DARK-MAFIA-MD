const { cmd } = require('../command');

// DARK-MAFIA-MD name styles (rotate)
const nameStyles = [
    "ᗪᗩᖇK-ᗰᗩᖴIᗩ-ᗰᗪ",
    "ᴅᴀʀᴋ-ᴍᴀғɪᴀ-ᴍᴅ",
    "𝐃𝐀𝐑𝐊-𝐌𝐀𝐅𝐈𝐀-𝐌𝐃",
    "𝐃ᴀʀᴋ-𝐌ᴀғɪᴀ-𝐌𝙳",
    "𝙳𝙰𝚁𝙺-𝙼𝙰𝙵𝙸𝙰-𝙼𝙳",
    "ᗪᗩᖇK-ᗰᗩᖴIᗩ-ᗰᗪ",
    "ᗪᗩᖇK-ᗰᗩᖴIᗩ-ᗰᗪ"
];

let nameIndex = 0;

cmd({
    pattern: "ping",
    alias: ["speed"],
    desc: "Stylish ping with rotating DARK-MAFIA-MD name",
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
