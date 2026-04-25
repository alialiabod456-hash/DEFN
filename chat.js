import { AiChat } from "../../system/utils.js";

const handler = async (m, { conn, text }) => {
  if (!text) {
    return m.reply("𓂀 ERROR :: INPUT_REQUIRED\n➤ اكتب الأمر بشكل صحيح");
  }

  const res = await AiChat({ text });

  m.reply(
`𓂀 DEFN SYSTEM ACTIVE 𓂀
━━━━━━━━━━━━━━
🧠 COMMAND RECEIVED
➤ ${text}

━━━━━━━━━━━━━━
💾 RESPONSE OUTPUT:
${res}

━━━━━━━━━━━━━━
𓂀 SYSTEM SIGN: 𝑫𝑬𝑭𝑵
`
  );
};

handler.usage = ["ai", "بوت", "روت", "كالي"];
handler.category = "ai";
handler.command = ["ai", "بوت", "روت", "كالي"];

export default handler;