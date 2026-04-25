const handler = async (m, { conn, text, bot }) => {
  if (!text) return m.reply("𓂀 ~ حط نص جنب الأمر ~ 𓂀");

  try {
    const { api } = bot.config.info.urls;

    const url =
      api +
      `/home/sections/Ai/api/Ai/CustomPrompt?q=${encodeURIComponent(text)}`;

    const response = await fetch(url);
    const json = await response.json();

    const data = json?.data;

    if (!data) return m.reply("𓂀 ماكو رد من السيرفر");

    m.reply(data);

  } catch (e) {
    m.reply("𓂀 خطأ بالاتصال حاول مرة ثانية");
  }
};

handler.usage = ["اوبن"];
handler.category = "ai";
handler.command = ["اوبن"];

export default handler;