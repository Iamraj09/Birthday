// Countdown Timer
function updateCountdown() {
    const countdownDate = new Date("September 11, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        document.getElementById("countdown-timer").innerHTML = "It's your birthday!";
    }
}

setInterval(updateCountdown, 1000);

// Populate language wishes
const languages = [
    "English: Happy Advance Birthday PookiE!",
    "Spanish: ¡Feliz Cumpleaños Anticipado PookiE!",
    "French: Joyeux Anniversaire en Avance PookiE!",
    "English: Advance Happy Birthday, PookiE",
    "Spanish: Feliz Cumpleaños Adelantado, PookiE",
    "French: Joyeux Anniversaire en Avance, PookiE",
    "German: Alles Gute zum Geburtstag im Voraus, PookiE",
    "Italian: Buon Compleanno in Anticipo, PookiE",
    "Portuguese: Feliz Aniversário Antecipado, PookiE",
    "Dutch: Van tevoren Gefeliciteerd, PookiE",
    "Russian: С днём рождения заранее, PookiE (S dnyom rozhdeniya zaranee)",
    "Chinese (Simplified): 提前生日快乐, PookiE (Tíqián shēngrì kuàilè)",
    "Japanese: 前もってお誕生日おめでとうございます, PookiE (Maemotte otanjōbi omedetō gozaimasu)",
    "Korean: 미리 생일 축하해, PookiE (Miri saengil chukhahae)",
    "Hindi: अग्रिम जन्मदिन की शुभकामनाएँ, PookiE (Agarim janmadin ki shubhkamnaayein)",
    "Arabic: عيد ميلاد سعيد مقدماً, PookiE (Eid milad sa'id muqaddaman)",
    "Turkish: Şimdiden Doğum Günün Kutlu Olsun, PookiE",
    "Greek: Πρόωρα Χρόνια Πολλά, PookiE (Próra Chrónia Pollá)",
    "Hebrew: יומולדת שמח מראש, PookiE (Yom huledet same'ach me-rosh)",
    "Swedish: Förskott Grattis på födelsedagen, PookiE",
    "Danish: Forsinket Tillykke med Fødselsdagen, PookiE",
    "Norwegian: Forsinket Gratulerer med Dagen, PookiE",
    "Finnish: Ennakkoon Hyvää Syntymäpäivää, PookiE",
    "Polish: Wczesne Życzenia Urodzinowe, PookiE",
    "Czech: Předem Šťastné a Veselé Narozeniny, PookiE",
    "Hungarian: Előre Boldog Születésnapot, PookiE",
    "Romanian: La Mulți Ani din Timp, PookiE",
    "Bulgarian: Честит Рожден Ден предварително, PookiE (Chestit Rozhden Den predvaritelno)",
    "Ukrainian: З Днем Народження заздалегідь, PookiE (Z Dnem Narodzhennya zazdalehidʹ)",
    "Serbian: Срећан Рођендан унапред, PookiE (Srećan Rođendan unapred)",
    "Croatian: Sretan Rođendan unaprijed, PookiE",
    "Slovak: Šťastné a Veselé Narodeniny vopred, PookiE",
    "Lithuanian: Išankstinė Gimtadienio Sveikinimai, PookiE",
    "Latvian: Priecīgas Dzimšanas dienas priekšlaicīgi, PookiE",
    "Estonian: Aeg-ajaline Sünnipäeva Tervitused, PookiE",
    "Swahili: Heri ya Siku ya Kuzaliwa Mapema, PookiE",
    "Malay: Selamat Hari Lahir Awal, PookiE",
    "Indonesian: Selamat Ulang Tahun Lebih Awal, PookiE",
    "Thai: สุขสันต์วันเกิดล่วงหน้า, PookiE (S̄uk̄s̄ạnt̒ wạn keid̒ lū̂āng n̂ā)",
    "Vietnamese: Sinh Nhật Sớm, PookiE",
    "Bengali: আগাম জন্মদিনের শুভেচ্ছা, PookiE (Āgām janmadinēra śubhēcchā)",
    "Punjabi: ਪੂਰਵ-ਜਨਮ ਦਿਨ ਦੀਆਂ ਵਧਾਈਆਂ, PookiE (Pūrav-janam din dī'āṁ vadhā'ī'āṁ)",
    "Tamil: முன் பிறந்த நாள் வாழ்த்துகள், PookiE (Muṉ piṟanta nāḷ vāḻttugaḷ)",
    "Telugu: ముందస్తు పుట్టినరోజు శుభాకాంక్షలు, PookiE (Mundastu puṭṭinarōju śubhākāṅkṣalu)",
    "Korean: 미리 생일 축하해, PookiE (Miri saengil chukhahae)",
    "Kannada: ಮುಂಚಿನ ಹುಟ್ಟಿದ ದಿನದ ಶುಭಾಷಯಗಳು, PookiE (Munciṇa huṭṭida dinada śubhāṣayagaḷu)",
    "Marathi: आगाऊ वाढदिवसाच्या शुभेच्छा, PookiE (Āgā'ū vāḍhadvasācyā śubhēcchā)",
    "Gujarati: પૂર્વજન્મદિવસની શુભેચ્છાઓ, PookiE (Pūrva janmadivasanī śubhēcchā'ō)",
    "Nepali: अघिल्लो जन्मदिनको शुभकामना, PookiE (Aghillō janmadinkō śubhakāmanā)",
    "Sinhala: පූර්ව උපන් දිනය සුබ පතමි, PookiE (Pūrva upan dinaya suba patami)",
    "Urdu: پیشگی سالگرہ کی مبارکباد, PookiE (Peshgi salgirah ki mubarakbad)",
    "Persian: تولدت پیشاپیش مبارک، PookiE (Tavallodat pishapish mobarak)",
    "Hebrew: יומולדת שמח מראש, PookiE (Yom huledet same'ach me-rosh)",
    "Armenian: Նախընթաց Ծննդյան Տոնի Շնորհավոր, PookiE (Nakhənt’ats’ tsnndyan t’oni shnorhavor)",
    "Georgian: ადრე დაბადების დღე, PookiE (Adre dabeibis dge)",
    "Mongolian: Урьдчилан төрсөн өдрийн мэндчилгээ, PookiE (Uriadchilan törsön üdrin mendchilge)",
    "Kazakh: Ерте туған күнмен құттықтаймын, PookiE (Erte tugan künmen quttıqtaımy)",
    "Uzbek: Oldindan Tug'ilgan Kun bilan Tabriklayman, PookiE",
    "Kyrgyz: Алдын ала туулган күн менен куттуктайм, PookiE (Aldyn ala turalgan kün menen kuttuktaıım)",
    "Tajik: Ба рӯзи таваллуди пешакӣ, PookiE (Ba ruzi tavalludi peshakī)",
    "Pashto: مخکې له مخکې د زېږېدنې ورځ خوشحالي, PookiE (Mukhke lə mukhe da zaygednay wray khušhālī)",
    "Burmese: အစောပိုင်းမွေးနေ့ဆုမွေ့၊ PookiE (Ahsawpaing mhway nay hsu myay)",
    "Khmer: សួស្តីថ្ងៃកំណើតមុនពេល, PookiE (Soursdey thngai kamneat mun pel)",
    "Lao: ສຸກສົດວັນເກີດລ່ວງໜ້າ, PookiE (Suksot wan keut luang na)",
    "Tagalog: Maagang Maligayang Kaarawan, PookiE",
    "Hmong: Txaus siab hnub yug ntxov, PookiE",
    "Fijian: Marau na Siga Ni Sucu, PookiE",
    "Samoan: Fa'amanuiaga i le aso fanau i le taimi muamua, PookiE",
    "Tongan: Fakamanatu atu he 'aho fakamatala, PookiE",
    "Haitian Creole: Bon Fèt an Avans, PookiE",
    "Javanese: Sugeng Ambal Warsa Wis Luwih, PookiE",
    "Malayalam: മുൻകൂർ ജന്മദിനാശംസകൾ, PookiE (Muṉkūr janmadināśaṁsakaḷ)",
    "Telugu: ముందస్తు పుట్టినరోజు శుభాకాంక్షలు, PookiE (Mundastu puṭṭinarōju śubhākāṅkṣalu)",
    "Oriya: ପୂର୍ବାଗମୀ ଜନ୍ମଦିନ ଶୁଭେଚ୍ଛା, PookiE (Pūrbāgamī janmadina śubhecchā)",
    "Assamese: আগৰ জন্মদিনৰ শুভেচ্ছা, PookiE (Āgar janmadinor śubhēcchā)",
    "Santali: ᱢᱮᱢᱮᱡᱚᱲᱤ ᱯᱟᱢᱟᱸ ᱨᱷᱟᱭᱩᱴᱟᱜᱚᱸ, PookiE",
    "Yoruba: Ayẹyẹ Ọjọ-ibi Lati ṣaaju, PookiE",
    "Ibo: Ezi ụbọchị ọmụmụ mbụ, PookiE",
    "Zulu: Usuku lokuzalwa kusenesikhathi, PookiE",
    "Xhosa: Usuku lokuzalwa ngaphambi kokuba, PookiE",
];

document.getElementById("language-wishes").innerHTML = languages
    .map(language => `<p class="blinking-text">${language}</p>`)
    .join("");

// Array of daily messages leading up to her birthday on September 11
const dailyMessages = [
    "Just 30 days to go! Your birthday countdown starts now! 🎉",
    "Only 29 days left until your special day! Can't wait! 🥳",
    "28 days and counting! I'm getting more excited by the day! 🎂",
    "27 days to go! Every day brings us closer to the big celebration! 🎁",
    "26 days left! Your birthday is going to be amazing! ✨",
    "25 days remaining! I can’t wait to celebrate you! 💖",
    "24 days to go! Thinking about all the joy you bring into my life! 😊",
    "23 days left! Your special day is approaching quickly! 🌟",
    "22 days to go! I’m counting down the days with excitement! 🎈",
    "21 days remaining! Each day brings us closer to the celebration! 🎉",
    "20 days left! I’m so lucky to have you in my life! 💝",
    "19 days to go! Your birthday is going to be unforgettable! 🎂",
    "18 days left! Can’t wait to make your day special! 🎁",
    "17 days remaining! Your smile lights up my world! 🌟",
    "16 days to go! I’m so excited for your big day! 🎉",
    "15 days left! Every moment with you is a gift! 💖",
    "14 days remaining! Two weeks to go until your special day! 🥳",
    "13 days left! Your birthday is going to be filled with joy! 😊",
    "12 days to go! Counting down with love and excitement! 🎂",
    "11 days left! Your special day is almost here! 🎁",
    "10 days remaining! Can’t wait to celebrate you! ✨",
    "9 days to go! You mean the world to me! 💖",
    "8 days left! The anticipation is building! 🎉",
    "7 days remaining! Just one week until your big day! 🌟",
    "6 days to go! Your birthday is going to be magical! 🎁",
    "5 days left! So excited to celebrate your special day! 🎂",
    "4 days remaining! The countdown is almost over! 🥳",
    "3 days to go! Your birthday is right around the corner! 🎉",
    "2 days left! Can’t wait to shower you with love and joy! 💝",
    "1 day remaining! Tomorrow is your big day! I’m so excited! 🎂",
    "Happy Birthday, my love! Today we celebrate YOU! 🥳🎉"
];

// Function to calculate the index of the daily message based on the date
function getDailyMessageIndex() {
    const today = new Date();
    const startDate = new Date(today.getFullYear(), 7, 12); // August 12
    const diff = today - startDate;
    const index = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (index >= 0 && index < dailyMessages.length) {
        return dailyMessages[index];
    } else {
        return "I can't wait to celebrate your special day! 🎉";
    }
}

// Set the daily message
document.getElementById('daily-message').textContent = getDailyMessageIndex();

