export default async function before(m, { conn, bot }) {
  const text = (m.text || "").toLowerCase();

  const triggers = {
    "السلام عليكم": [
      "وعليكم السلام ورحمة الله 🤎",
      "وعليكم السلام منور 🔥",
      "وعليكم السلام ورحمة الله وبركاته ❤️"
    ],

    "هلا": [
      "هلا وغلا بيك 🤎",
      "هلا نورت 🔥",
      "يا هلا والله"
    ],

    "شلونك": [
      "تمام الحمدلله وأنت؟ 🤎",
      "بخير دامك بخير 🔥",
      "كلشي تمام"
    ],

    "اخبارك": [
      "بخير الحمدلله 🤎",
      "كل الأمور تمام 🔥",
      "ماشي الحال وانت؟"
    ],

    "صباح الخير": [
      "صباح النور 🤎",
      "صباح الورد 🔥",
      "صباح الفل والياسمين"
    ],

    "مساء النور": [
      "مساء الورد 🤎",
      "مساء الفل 🔥",
      "مساء الجوري"
    ]
  };

  // نبحث داخل النص بدل المطابقة الكاملة
  for (const key in triggers) {
    if (text.includes(key)) {
      const replies = triggers[key];
      const ran = replies[Math.floor(Math.random() * replies.length)];
      return m.reply(ran);
    }
  }

  return false;
}