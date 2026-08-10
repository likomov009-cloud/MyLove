// ---------- СПИСОК ФРАЗ ----------
const phrasesList = [
    "Я рядом, рыжик. Всегда.",
    "Ты справишься, малыш. Верю в тебя безгранично.",
    "Принцесса, позволь себе сегодня отдохнуть. Ты заслужила.",
    "Каждый новый день - шаг к свету, малышка.",
    "Твоя сила - в твоей нежности, маленькая.",
    "Я люблю тебя, моя маленькая девочка. Это самое главное.",
    "Помни: ты не одна, радость моя. Я с тобой мысленно.",
    "Твоя улыбка - лучшее, что я видел, родная. Пусть она возвращается.",
    "Можно плакать, рыжик. Это не слабость.",
    "Ты - моя радость, малыш. Спасибо, что ты есть.",
    "Дыши глубже, принцесса. Всё будет хорошо.",
    "Я горжусь тобой, малышка. Каждый день.",
    "Твоё сердце такое большое, маленькая. Береги его.",
    "Родная, представь, что я обнимаю тебя сейчас.",
    "Ничего не бойся, рыжик. У тебя есть я.",
    "Ты справишься с дипломом, малыш. Я знаю.",
    "Даже когда я в море, мои мысли только о тебе, принцесса.",
    "Ты - моя опора, и я - твоя, малышка. Навсегда.",
    "С каждым днём становится легче, маленькая. Обещаю.",
    "Твой брат навсегда в наших сердцах, моя маленькая девочка. Живи и помни.",
    "Маленькими шагами к большой радости, радость моя.",
    "Ты самая нежная, родная. И это твоя суперсила.",
    "Я вернусь и обниму так крепко, что все печали уйдут, рыжик.",
    "Ты важна для меня больше всего на свете, малыш.",
    "Пусть эта фраза напомнит тебе, что ты - моё счастье, принцесса.",
    "У тебя есть право на слабость, малышка. Я приму любую.",
    "Ты - моя маленькая девочка, которую я буду беречь всегда, маленькая.",
    "Каждый раз, когда смотришь на небо, знай: я думаю о тебе, моя маленькая девочка.",
    "Твоя душа так красива, радость моя. Никогда не забывай.",
    "Даже в самую тёмную ночь я рядом с тобой, родная.",
    "Я ценю каждую минуту, проведённую с тобой, рыжик.",
    "Ты - моя принцесса, малыш. И твоё королевство - моё сердце.",
    "Моя рыжик, ты - моё солнце даже за тысячу километров.",
    "Маленькая, помни: всё пройдёт, и боль тоже.",
    "Принцесса, ты достойна только счастья. Я сделаю всё для этого.",
    "Родная, позволь мне быть твоей опорой сейчас.",
    "Малышка, я так люблю твой смех. Он обязательно вернётся.",
    "Радость моя, каждый день без тебя - вечность. Скоро я вернусь.",
    "Моя маленькая девочка, ты сильнее, чем думаешь.",
    "Зайка, не бойся просить помощи. Я всегда рядом.",
    "Сладкая, я сохраню все твои слёзы в своём сердце и превращу в радость.",
    "Рыжик, сегодня просто дыши. Я рядом.",
    "Малыш, ты справишься. Ты уже прошла через многое.",
    "Принцесса, позволь себе быть слабой сегодня. Я буду сильным за нас обоих.",
    "Малышка, каждый твой вздох - ценность. Не забывай об этом.",
    "Маленькая, ты - моя вселенная. И я всегда буду вращаться вокруг тебя.",
    "Моя маленькая девочка, даже на расстоянии я чувствую твоё тепло.",
    "Радость моя, представь, что я держу тебя за руку.",
    "Родная, ты - лучшее, что случилось в моей жизни.",
    "Рыжик, если станет тяжело - закрой глаза и почувствуй мои объятия.",
    "Малыш, твоя боль - моя боль. Мы вместе.",
    "Принцесса, не торопи себя. Всему своё время.",
    "Малышка, твоя душа такая светлая. Пусть этот свет согревает тебя.",
    "Маленькая, я всегда буду твоим берегом.",
    "Моя маленькая девочка, ты - моя гордость.",
    "Радость моя, даже океан не помешает мне быть рядом.",
    "Родная, ты сильнее, чем кажется. Я видел, как ты справлялась с трудностями.",
    "Рыжик, давай сегодня просто побудем вместе в мыслях.",
    "Малыш, ты - моё вдохновение.",
    "Принцесса, когда ты улыбаешься, весь мир становится светлее.",
    "Малышка, не забывай: ты заслуживаешь счастья.",
    "Маленькая, каждый день - это победа. Я радуюсь каждой твоей победе.",
    "Моя маленькая девочка, я так скучаю по твоему голосу.",
    "Радость моя, скоро я вернусь и всё наверстаем.",
    "Родная, ты - моя путеводная звезда.",
    "Рыжик, если захочешь плакать - плачь. Я приму все твои слёзы.",
    "Малыш, твоя чувствительность - это дар. Он делает тебя особенной.",
    "Принцесса, я восхищаюсь твоей силой духа.",
    "Малышка, ты не обязана быть сильной всегда. Со мной можно быть любой.",
    "Маленькая, я люблю тебя такой, какая ты есть.",
    "Моя маленькая девочка, ты - чудо.",
    "Радость моя, давай вместе смотреть в будущее с надеждой.",
    "Родная, помни: после дождя всегда выходит солнце.",
    "Рыжик, ты - моя самая любимая мелодия.",
    "Малыш, я верю, что всё наладится. И ты верь.",
    "Принцесса, дай себе время. Время лечит.",
    "Малышка, ты - моё сокровище.",
    "Маленькая, я так благодарен судьбе за тебя.",
    "Моя маленькая девочка, даже на расстоянии я забочусь о тебе.",
    "Радость моя, пусть этот день принесёт тебе хоть немного покоя.",
    "Родная, я всегда на связи. Даже если нет сигнала, я думаю о тебе.",
    "Рыжик, ты - моя надежда и опора.",
    "Малыш, вместе мы всё преодолеем.",
    "Принцесса, ты заслуживаешь только самого лучшего.",
    "Малышка, твоя доброта исцеляет.",
    "Маленькая, я рядом. Всегда.",
    "Моя маленькая девочка, ты - моя жизнь.",
    "Радость моя, давай сегодня сделаем что-то приятное для себя.",
    "Родная, не забывай: ты очень важна для меня.",
    "Рыжик, я скучаю по твоим объятиям.",
    "Малыш, когда тебе грустно - вспомни что-нибудь смешное из нашей жизни.",
    "Принцесса, ты - моя радость в любую погоду.",
    "Малышка, я горжусь тем, как ты справляешься.",
    "Маленькая, ты - моя вера в лучшее.",
    "Моя маленькая девочка, я люблю тебя больше жизни.",
    "Радость моя, пусть эти слова согреют тебя.",
    "Родная, ты - моя самая светлая мысль.",
    "Рыжик, давай сегодня просто дышать и быть.",
    "Малыш, я всегда буду твоим защитником.",
    "Принцесса, ты - моя королева.",
    "Малышка, не бойся просить о помощи. Я рядом.",
    "Маленькая, твои чувства важны. Я слышу тебя.",
    "Моя маленькая девочка, ты - моя бесконечность.",
    "Радость моя, я так люблю тебя, что это не передать словами.",
    "Родная, ты - моя семья.",
    "Рыжик, если будет трудно - закрой глаза и представь, что я обнимаю тебя.",
    "Малыш, ты - моё сердце.",
    "Принцесса, ты достойна мира и покоя.",
    "Малышка, я благодарен за каждую минуту с тобой.",
    "Маленькая, ты - моя нежность.",
    "Моя маленькая девочка, ты - моя муза.",
    "Радость моя, пусть этот день принесёт тебе улыбку.",
    "Родная, я всегда рядом, даже когда далеко.",
    "Рыжик, ты - моя любовь навсегда.",
    "Малыш, мы обязательно будем счастливы.",
    "Принцесса, твоя красота - внутри и снаружи.",
    "Малышка, я ценю каждое твоё слово.",
    "Маленькая, ты - моя сила.",
    "Моя маленькая девочка, ты - моя мечта, которая сбылась.",
    "Радость моя, даже в океане я чувствую твоё присутствие.",
    "Родная, ты - моя вселенная.",
    "Рыжик, я верю в тебя. Всегда.",
    "Малыш, ты - моя гордость.",
    "Принцесса, позволь мне быть твоим рыцарем.",
    "Малышка, я сделаю всё, чтобы ты была счастлива.",
    "Маленькая, ты - моя отрада.",
    "Моя маленькая девочка, ты - моя вечность.",
    "Радость моя, пусть эти слова напоминают: я люблю тебя.",
    "Родная, ты - моя драгоценность.",
    "Рыжик, я всегда на твоей стороне.",
    "Малыш, вместе мы справимся со всем.",
    "Принцесса, ты - моя сказка.",
    "Малышка, я скучаю по твоему смеху.",
    "Маленькая, ты - моя тихая гавань.",
    "Моя маленькая девочка, ты - моя жизнь, моя любовь.",
    "Радость моя, я так хочу обнять тебя прямо сейчас.",
    "Родная, не теряй надежды. Всё будет хорошо.",
    "Рыжик, ты - моё счастье.",
    "Малыш, я всегда буду рядом, даже когда ты этого не видишь.",
    "Принцесса, ты - моя самая красивая мысль.",
    "Малышка, я люблю тебя больше, чем вчера, но меньше, чем завтра.",
    "Маленькая, ты - моя невесомость.",
    "Моя маленькая девочка, ты - моя радость и боль.",
    "Радость моя, давай сегодня просто побудем в тишине вместе.",
    "Родная, ты - моя опора в жизни.",
    "Рыжик, я так люблю, когда ты называешь меня по имени.",
    "Малыш, ты - моя самая большая удача.",
    "Принцесса, твоя улыбка - моя награда.",
    "Малышка, я буду любить тебя всегда.",
    "Маленькая, ты - моя причина улыбаться.",
    "Моя маленькая девочка, ты - моя вселенная, моя галактика.",
    "Радость моя, я всегда буду помнить каждую минуту с тобой.",
    "Родная, ты - моя самая светлая звезда.",
    "Рыжик, если станет совсем тяжело - открой это приложение. Я здесь.",
    "Малыш, ты - моя вера в добро.",
    "Принцесса, я так скучаю по нашим разговорам.",
    "Малышка, ты - моя нежность, моя ласка.",
    "Маленькая, ты - моя защита и моя слабость.",
    "Моя маленькая девочка, ты - моя судьба.",
    "Радость моя, я хочу, чтобы ты знала: ты не одна.",
    "Родная, ты - моя вторая половина.",
    "Рыжик, я так ценю твою чуткость.",
    "Малыш, вместе мы сможем всё.",
    "Принцесса, ты - моя гордость и моя нежность.",
    "Малышка, я люблю тебя за твою душу.",
    "Маленькая, ты - моя самая тёплая мысль.",
    "Моя маленькая девочка, ты - моя сказка наяву.",
    "Радость моя, я всегда буду защищать тебя.",
    "Родная, ты - моя самая любимая ошибка? Нет, ты - моя самая правильная случайность.",
    "Рыжик, я хочу, чтобы ты была счастлива. Это моё главное желание.",
    "Малыш, ты - моя сила и моя слабость одновременно.",
    "Принцесса, твои глаза - моя бездна, в которую хочется падать вечно.",
    "Малышка, я помню каждую деталь твоего лица.",
    "Маленькая, ты - моя муза и мой покой.",
    "Моя маленькая девочка, я так скучаю по твоему запаху.",
    "Радость моя, даже через тысячи километров я чувствую твоё сердце.",
    "Родная, ты - моя самая большая радость.",
    "Рыжик, не забывай: ты важна для меня больше всего на свете.",
    "Малыш, я буду ждать тебя вечно.",
    "Принцесса, ты - моя корона.",
    "Малышка, я люблю твой голос.",
    "Маленькая, ты - моя тишина и мой шум.",
    "Моя маленькая девочка, ты - моя вечная весна.",
    "Радость моя, я хочу состариться с тобой.",
    "Родная, ты - моя мечта, которая стала реальностью.",
    "Рыжик, я всегда буду твоим тылом.",
    "Малыш, ты - моя самая светлая сторона.",
    "Принцесса, твоя доброта меняет мир.",
    "Малышка, я благодарен за каждый день с тобой.",
    "Маленькая, ты - моя надежда на лучшее.",
    "Моя маленькая девочка, я люблю тебя сильнее, чем можно выразить.",
    "Радость моя, ты - моё всё.",
    "Родная, помни: ты - моя жизнь.",
    "Солнышко, ты - мой свет в любую погоду.",
    "Любимая, я так скучаю по тебе.",
    "Зайка, твоя улыбка исцеляет всё вокруг.",
    "Сладкая, пусть этот день будет тёплым, как ты.",
    "Рыжик, ты - моя самая большая ценность.",
    "Малыш, я буду оберегать тебя всегда.",
    "Принцесса, ты достойна только радости.",
    "Малышка, я так хочу сделать тебя счастливой.",
    "Маленькая, ты - моя вселенная.",
    "Моя маленькая девочка, береги себя для меня.",
    "Радость моя, я всегда думаю о тебе.",
    "Родная, ты - моё вдохновение."
];

// ---------- FIREBASE СИНХРОНИЗАЦИЯ СЕРДЕЧЕК И РЕКОРДА ----------
const firebaseConfig = {
  apiKey: "AIzaSyB_5VrJcwIJRMhWvpeBLGMSE_fPmrvAC0",
  authDomain: "hearts-sync-525b1.firebaseapp.com",
  projectId: "hearts-sync-525b1",
  storageBucket: "hearts-sync-525b1.firebasestorage.app",
  messagingSenderId: "326591877551",
  appId: "1:326591877551:web:5e7ab8654fd83cd42bdf5a",
  measurementId: "G-FNJDQFW15"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Синхронизация сердечек
function syncTotalHearts() {
  const userId = "devushka";
  db.ref('hearts/' + userId).set({
    total: totalHearts,
    timestamp: Date.now()
  });
}

// Синхронизация рекорда платформера
function syncPlatformerBest(score) {
  db.ref('progress/platformerBest').set(score);
}

// ---------- ФРАЗЫ ДЛЯ ФОТО С БРАТОМ (f73 - f79) ----------
const brotherPhrases = [
    "Твой брат - герой. Он всегда с тобой, в каждом твоём шаге.",
    "Он смотрит на тебя с небес и гордится. Ты - его свет.",
    "Память о нём - в твоей улыбке. Живи так, чтобы он видел твоё счастье.",
    "Он не ушёл, он стал твоим ангелом-хранителем.",
    "Каждый раз, когда ты вспоминаешь его, он становится ближе.",
    "Его любовь к тебе была бесконечной. Она живёт в твоём сердце.",
    "Ты - его маленькая сестра, его гордость. Он всегда будет рядом.",
    "Он отдал жизнь за других. Твоя задача - жить достойно и помнить.",
    "Никто не заменит его, но его дух с тобой каждый день.",
    "Светлая память герою. Ты - его продолжение, его надежда.",
    "Когда тебе тяжело, вспомни его улыбку. Она придаст сил.",
    "Он верил в тебя. Не подведи его - будь счастлива.",
    "Твой брат - часть каждого твоего успеха. Он радуется за тебя.",
    "Помни: он не хотел бы, чтобы ты страдала. Живи ярко.",
    "Его жертва - не напрасна. Ты - доказательство его любви к жизни."
];

// ---------- ГАЛЕРЕЯ ----------
function loadGallery() {
    const galleryContainer = document.getElementById('galleryContainer');
    if (!galleryContainer) return;
    for (let i = 1; i <= 79; i++) {
        const img = document.createElement('img');
        img.src = `image/f${i}.jpg`;
        img.alt = `Фото ${i}`;
        img.loading = 'lazy';
        img.onerror = () => img.style.display = 'none';
        galleryContainer.appendChild(img);
    }
}

// ---------- СЛУЧАЙНОЕ ФОТО И ФРАЗА ----------
function getRandomImage() {
    const randomNum = Math.floor(Math.random() * 79) + 1;
    return `image/f${randomNum}.jpg`;
}

function getRandomPhrase() {
    return phrasesList[Math.floor(Math.random() * phrasesList.length)];
}

function updateRandomPhrase() {
    const phraseText = document.getElementById('randomPhraseText');
    const phraseImage = document.getElementById('randomPhraseImage');
    if (!phraseText || !phraseImage) return;

    const randomNum = Math.floor(Math.random() * 79) + 1; // ← исправлено с 75 на 79
    const imagePath = `image/f${randomNum}.jpg`;
    phraseImage.src = imagePath;
    phraseImage.onerror = () => {
        phraseImage.src = 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22300%22%20height%3D%22200%22%20viewBox%3D%220%200%20300%20200%22%3E%3Crect%20width%3D%22300%22%20height%3D%22200%22%20fill%3D%22%23fce4da%22%2F%3E%3Ctext%20x%3D%22150%22%20y%3D%22110%22%20font-family%3D%22system-ui%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20fill%3D%22%23c45b3c%22%3E%D0%A4%D0%BE%D1%82%D0%BE%3C%2Ftext%3E%3C%2Fsvg%3E';
    };

    let phrase;
    if (randomNum >= 73 && randomNum <= 79) {
        const randomIndex = Math.floor(Math.random() * brotherPhrases.length);
        phrase = brotherPhrases[randomIndex];
    } else {
        phrase = getRandomPhrase();
    }
    phraseText.textContent = phrase;
}


// ---------- УВЕДОМЛЕНИЯ ----------
let notificationTimers = [];
function scheduleDailyNotifications() {
    notificationTimers.forEach(timer => clearTimeout(timer));
    notificationTimers = [];
    if (Notification.permission !== 'granted') return;
    const count = Math.random() < 0.5 ? 2 : 3;
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);
    const times = [];
    for (let i = 0; i < count; i++) {
        let timeMs = now.getTime() + Math.random() * (endOfDay.getTime() - now.getTime());
        times.push(timeMs);
    }
    times.sort((a, b) => a - b);
    times.forEach(timeMs => {
        const delay = timeMs - now.getTime();
        if (delay > 0) {
            const timer = setTimeout(() => {
                const phrase = getRandomPhrase();
                new Notification('Твоя поддержка', { body: phrase, icon: '/img/icon-192.png' });
            }, delay);
            notificationTimers.push(timer);
        }
    });
    localStorage.setItem('notificationsScheduled', now.toDateString());
}
function requestNotificationPermission() {
    if (Notification.permission === 'granted') scheduleDailyNotifications();
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(perm => { if (perm === 'granted') scheduleDailyNotifications(); });
    }
}
function checkAndScheduleNotifications() {
    const todayStr = new Date().toDateString();
    const lastScheduled = localStorage.getItem('notificationsScheduled');
    if (lastScheduled !== todayStr && Notification.permission === 'granted') scheduleDailyNotifications();
}
function addNotificationButton() {
    const container = document.querySelector('#phrases .phrase-card-random');
    if (!container) return;
    const btn = document.createElement('button');
    btn.textContent = '🔔 Включить уведомления (2-3 раза в день)';
    btn.className = 'next-phrase-btn';
    btn.style.marginTop = '10px';
    btn.onclick = () => {
        requestNotificationPermission();
        btn.textContent = '✅ Уведомления включены';
        btn.disabled = true;
    };
    container.appendChild(btn);
}

// ---------- ИГРА ----------
let currentScore = 0;
let totalHearts = 0;
let goal = 100;
let lastGoalReached = 0;
let heartsElements = [];
let gameActive = true;
const heartColors = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎'];
let specialHeart = null;
const specialEmoji = '👑❤️';

function createHeartElement() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = heartColors[Math.floor(Math.random() * heartColors.length)];
    heart.addEventListener('click', () => onHeartClick(heart));
    return heart;
}

function setSpecialHeart(heartElement) {
    if (specialHeart) {
        specialHeart.classList.remove('special');
        specialHeart.textContent = heartColors[Math.floor(Math.random() * heartColors.length)];
    }
    specialHeart = heartElement;
    specialHeart.classList.add('special');
    specialHeart.textContent = specialEmoji;
}

// Звуки (инициализация будет при первом клике)
let audioContext = null;
function initAudio() {
    if (audioContext) return;
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
}
function playBeep(frequency, duration, type = 'sine') {
    if (!audioContext) return;
    const now = audioContext.currentTime;
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.connect(gain);
    gain.connect(audioContext.destination);
    osc.frequency.value = frequency;
    osc.type = type;
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.start();
    osc.stop(now + duration);
}
function playCorrectSound() { playBeep(880, 0.15, 'sine'); }
function playWrongSound() { playBeep(440, 0.2, 'triangle'); }

function burstEffect(x, y) {
    const burst = document.createElement('div');
    burst.className = 'burst';
    burst.style.left = x + 'px';
    burst.style.top = y + 'px';
    document.body.appendChild(burst);
    for (let i = 0; i < 8; i++) {
        const spark = document.createElement('div');
        spark.className = 'spark';
        spark.textContent = '✨';
        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 40;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        spark.style.setProperty('--tx', tx + 'px');
        spark.style.setProperty('--ty', ty + 'px');
        burst.appendChild(spark);
    }
    setTimeout(() => burst.remove(), 500);
}

function showWrongClickEffect(heartElement) {
    heartElement.style.animation = 'shake 0.3s ease-in-out';
    setTimeout(() => { if (heartElement) heartElement.style.animation = ''; }, 300);
    const wrongText = document.createElement('div');
    wrongText.textContent = '❌ Не то!';
    wrongText.className = 'wrong-feedback';
    const rect = heartElement.getBoundingClientRect();
    wrongText.style.left = rect.left + rect.width/2 + 'px';
    wrongText.style.top = rect.top - 20 + 'px';
    document.body.appendChild(wrongText);
    setTimeout(() => wrongText.remove(), 800);
    const field = document.getElementById('gameField');
    if (field) {
        field.style.transition = 'background 0.2s';
        field.style.backgroundColor = '#ffe0e0';
        setTimeout(() => { field.style.backgroundColor = ''; }, 200);
    }
    playWrongSound();
}

function onHeartClick(heartElement) {
    if (!gameActive) return;
    if (heartElement !== specialHeart) {
        showWrongClickEffect(heartElement);
        return;
    }
    // первый клик — инициализируем звук
    if (!audioContext) initAudio();
    playCorrectSound();
    const rect = heartElement.getBoundingClientRect();
    burstEffect(rect.left + rect.width/2, rect.top + rect.height/2);
    heartElement.style.transform = 'scale(0)';
    heartElement.style.opacity = '0';
    currentScore++;
    totalHearts++;
    syncTotalHearts();
    localStorage.setItem('totalHearts', totalHearts);
    updateScoreUI();
    checkGoal();
    heartElement.remove();
    const index = heartsElements.indexOf(heartElement);
    if (index !== -1) heartsElements.splice(index, 1);
    setTimeout(() => {
        if (gameActive) {
            addOneHeart();
            const currentHearts = document.querySelectorAll('#gameField .heart');
            if (currentHearts.length > 0) {
                const randomIndex = Math.floor(Math.random() * currentHearts.length);
                setSpecialHeart(currentHearts[randomIndex]);
            }
        }
    }, 200);
}

function addOneHeart() {
    const field = document.getElementById('gameField');
    if (!field) return;
    const newHeart = createHeartElement();
    field.appendChild(newHeart);
    heartsElements.push(newHeart);
    newHeart.style.animation = 'none';
    newHeart.offsetHeight;
    newHeart.style.animation = 'float 0.3s ease-out';
}

function initGameField() {
    const field = document.getElementById('gameField');
    if (!field) return;
    field.innerHTML = '';
    heartsElements = [];
    for (let i = 0; i < 12; i++) {
        const heart = createHeartElement();
        field.appendChild(heart);
        heartsElements.push(heart);
    }
    if (heartsElements.length > 0) {
        setSpecialHeart(heartsElements[Math.floor(Math.random() * heartsElements.length)]);
    }
}

function updateScoreUI() {
    const currentSpan = document.getElementById('currentScoreValue');
    if (currentSpan) currentSpan.textContent = currentScore;
    const totalSpan = document.getElementById('totalHeartsValue');
    if (totalSpan) totalSpan.textContent = totalHearts;
    const progressPercent = (totalHearts % goal) / goal * 100;
    const progressFill = document.getElementById('progressFill');
    if (progressFill) progressFill.style.width = progressPercent + '%';
    const remainingSpan = document.getElementById('remainingToGoal');
    if (remainingSpan) remainingSpan.textContent = (Math.ceil(totalHearts / goal) * goal) - totalHearts;
    const goalSpan = document.getElementById('goalValue');
    if (goalSpan) goalSpan.textContent = goal;
}

function checkGoal() {
    const currentMilestone = Math.floor(totalHearts / goal);
    if (currentMilestone > lastGoalReached && totalHearts > 0) {
        lastGoalReached = currentMilestone;
        const giftText = (currentMilestone % 2 === 0) ? 'чипсы 🍟' : 'шоколадку 🍫';
        alert(`🎉 Поздравляю! Ты собрала ${totalHearts} сердечек! 🎉\nЯ дарю тебе ${giftText}! ❤️\nОбниму при встрече!`);
    }
    checkAchievements(totalHearts);
}

function resetGameSession() {
    currentScore = 0;
    updateScoreUI();
    initGameField();
}

function initGame() {
    const gameContainer = document.querySelector('#game .game-container');
    if (!gameContainer) return;
    if (!document.getElementById('gameStats')) {
        const statsDiv = document.createElement('div');
        statsDiv.id = 'gameStats';
        statsDiv.className = 'game-stats';
        statsDiv.innerHTML = `
            <div class="score-row">
                <div>❤️ За этот раз: <span id="currentScoreValue">0</span></div>
                <div>🌟 Всего собрано: <span id="totalHeartsValue">0</span></div>
            </div>
            <div class="progress-container">
                <div class="progress-label">До следующего подарка (каждые <span id="goalValue">100</span> ❤️):</div>
                <div class="progress-bar"><div class="progress-fill" id="progressFill"></div></div>
                <div class="progress-remaining">Осталось <span id="remainingToGoal">100</span> сердечек</div>
            </div>
        `;
        gameContainer.insertBefore(statsDiv, document.getElementById('gameField'));
    }
    const savedTotal = localStorage.getItem('totalHearts');
    totalHearts = savedTotal ? parseInt(savedTotal, 10) : 0;
    syncTotalHearts();
    currentScore = 0;
    lastGoalReached = Math.floor(totalHearts / goal);
    initGameField();
    updateScoreUI();
    const resetBtn = document.getElementById('resetGameBtn');
    if (resetBtn) resetBtn.onclick = () => resetGameSession();
}

// ---------- МУЗЫКА (MP3 из папки audio) с переключением треков ----------
const trackList = [
    'audio/background1.mp3',
    'audio/background2.mp3',
    'audio/background3.mp3',
    'audio/background4.mp3',
];
let currentTrackIndex = 0;      // 0,1,2,3
let bgMusic = null;
let isMusicPlaying = false;

function initMusic() {
    if (bgMusic) {
        // Если уже создан, просто меняем src
        bgMusic.src = trackList[currentTrackIndex];
        return;
    }
    bgMusic = new Audio(trackList[currentTrackIndex]);
    bgMusic.loop = true;
    bgMusic.volume = 0.5;
    bgMusic.addEventListener('error', (e) => {
        console.error('Ошибка загрузки музыки:', bgMusic.error);
        alert(`Не удалось загрузить ${trackList[currentTrackIndex]}. Проверь путь и файлы.`);
        const trackBtns = document.querySelectorAll('.track-btn');
        trackBtns.forEach(btn => btn.disabled = true);
    });
}

function loadTrack(index) {
    if (!bgMusic) {
        initMusic();
    } else {
        const wasPlaying = isMusicPlaying;
        if (wasPlaying) {
            bgMusic.pause();
        }
        bgMusic.src = trackList[index];
        bgMusic.load();
        if (wasPlaying) {
            bgMusic.play().catch(err => console.warn('Автовоспроизведение заблокировано:', err));
        }
    }
    updateTrackIndicator();
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + trackList.length) % trackList.length;
    loadTrack(currentTrackIndex);
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % trackList.length;
    loadTrack(currentTrackIndex);
}

function startMusic() {
    if (!bgMusic) initMusic();
    if (!bgMusic || isMusicPlaying) return;
    bgMusic.play().then(() => {
        isMusicPlaying = true;
        updateMusicButtonUI();
    }).catch(err => {
        console.warn('Автовоспроизведение заблокировано:', err);
        alert('Нажми на кнопку музыки ещё раз – браузер требует явного клика.');
        isMusicPlaying = false;
        updateMusicButtonUI();
    });
}

function stopMusic() {
    if (!bgMusic) return;
    bgMusic.pause();
    isMusicPlaying = false;
    updateMusicButtonUI();
}

function toggleMusic() {
    if (!bgMusic) initMusic();
    if (isMusicPlaying) {
        stopMusic();
    } else {
        startMusic();
    }
}

function updateMusicButtonUI() {
    const btn = document.getElementById('musicToggleBtn');
    if (btn) btn.textContent = isMusicPlaying ? '🔊' : '🔇';
}

function updateTrackIndicator() {
    const indicator = document.getElementById('trackIndicator');
    if (indicator) {
        indicator.textContent = `${currentTrackIndex+1}/${trackList.length}`;
    }
}

// Создаём панель управления музыкой (кнопка вкл/выкл + переключение треков)
function createMusicPlayer() {
    // Удаляем старую кнопку, если есть
    const oldBtn = document.getElementById('musicToggleBtn');
    if (oldBtn) oldBtn.remove();
    
    const container = document.createElement('div');
    container.className = 'music-player';
    
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '◀';
    prevBtn.className = 'track-btn';
    prevBtn.title = 'Предыдущая песня';
    prevBtn.onclick = (e) => { e.stopPropagation(); prevTrack(); };
    
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'musicToggleBtn';
    toggleBtn.textContent = '🔇';
    toggleBtn.className = 'music-toggle';
    toggleBtn.onclick = (e) => { e.stopPropagation(); toggleMusic(); };
    
    const nextBtn = document.createElement('button');
    nextBtn.textContent = '▶';
    nextBtn.className = 'track-btn';
    nextBtn.title = 'Следующая песня';
    nextBtn.onclick = (e) => { e.stopPropagation(); nextTrack(); };
    
    const indicator = document.createElement('span');
    indicator.id = 'trackIndicator';
    indicator.className = 'track-indicator';
    indicator.textContent = `1/${trackList.length}`;
    
    container.appendChild(prevBtn);
    container.appendChild(toggleBtn);
    container.appendChild(nextBtn);
    container.appendChild(indicator);
    
    document.body.appendChild(container);
}

// ---------- ДОСТИЖЕНИЯ ----------
const achievements = [
    { id: 1, name: 'Первые шаги', desc: 'Собрать 50 сердечек', target: 50, icon: '👣', unlocked: false },
    { id: 2, name: 'Сердечный друг', desc: 'Собрать 100 сердечек', target: 100, icon: '❤️', unlocked: false },
    { id: 3, name: 'Тепло души', desc: 'Собрать 250 сердечек', target: 250, icon: '🔥', unlocked: false },
    { id: 4, name: 'Мастер любви', desc: 'Собрать 500 сердечек', target: 500, icon: '💖', unlocked: false },
    { id: 5, name: 'Ангел-хранитель', desc: 'Собрать 1000 сердечек', target: 1000, icon: '👼', unlocked: false },
    { id: 6, name: 'Легенда', desc: 'Собрать 2500 сердечек', target: 2500, icon: '🏆', unlocked: false },
    { id: 7, name: 'Королева', desc: 'Собрать 5000 сердечек', target: 5000, icon: '👸', unlocked: false },
    { id: 8, name: 'Императрица', desc: 'Собрать 10000 сердечек', target: 10000, icon: '👑', unlocked: false },
    { id: 9, name: 'Маленькая, любимая жена', desc: 'Собрать 50000 сердечек', target: 50000, icon: '👰‍♀️', unlocked: false }
];
function loadAchievements() {
    const saved = localStorage.getItem('achievements');
    if (saved) {
        const unlockedIds = JSON.parse(saved);
        achievements.forEach(ach => { ach.unlocked = unlockedIds.includes(ach.id); });
    }
}
function saveAchievements() {
    const unlockedIds = achievements.filter(ach => ach.unlocked).map(ach => ach.id);
    localStorage.setItem('achievements', JSON.stringify(unlockedIds));
}
function checkAchievements(currentTotal) {
    let newUnlock = false;
    achievements.forEach(ach => {
        if (!ach.unlocked && currentTotal >= ach.target) {
            ach.unlocked = true;
            newUnlock = true;
            setTimeout(() => alert(`🏆 Новое достижение: ${ach.name}!\n${ach.desc}`), 100);
        }
    });
    if (newUnlock) {
        saveAchievements();
        renderAchievements();
    }
}
function renderAchievements() {
    const container = document.getElementById('achievementsList');
    if (!container) return;
    container.innerHTML = '';
    achievements.forEach(ach => {
        const card = document.createElement('div');
        card.className = `achievement-card ${ach.unlocked ? '' : 'locked'}`;
        card.innerHTML = `
            <div class="achievement-icon">${ach.icon}</div>
            <div class="achievement-info">
                <div class="achievement-title">${ach.name}</div>
                <div class="achievement-desc">${ach.desc}</div>
            </div>
            <div class="achievement-progress">${ach.unlocked ? '✅' : `🔒 ${ach.target}`}</div>
        `;
        container.appendChild(card);
    });
}

// ---------- ЗАПУСК ----------

// ---------- ПЛАТФОРМЕР (УЛУЧШЕННЫЙ) ----------
// ---------- ПЛАТФОРМЕР (УЛУЧШЕННЫЙ v2) ----------
class PlatformFallGame {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.scoreDisplay = document.getElementById('platformerScore');
        this.highscoreDisplay = document.getElementById('platformerHighscore');
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        this.player = {
            x: 0, y: 0,
            vx: 0, vy: 0,
            radius: 14,
            onGround: false,
            prevOnGround: false
        };
        this.platforms = [];
        this.particles = [];
        this.trailParticles = [];   // шлейф за сердечком
        this.score = 0;
        this.gameOver = false;
        this.speed = 0.1;          // начальная скорость (маленькая)
        this.maxSpeed = 1;
        this.acceleration = 0.0001;
        this.started = false;      // задержка перед стартом движения
        this.startDelay = 2500;    // 1.5 секунды без движения
        this.startTimestamp = 0;
        
        this.keys = { left: false, right: false, jump: false };
        this.active = false;
        this.frameId = null;
        
        // Звёзды и облака
        this.stars = [];
        this.clouds = [];
        this.generateBackground();
        
        this.bestScore = parseInt(localStorage.getItem('platformerBest')) || 0;
        this.highscoreDisplay.textContent = this.bestScore;
        
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
        this.addMobileListeners();
        
        this.canvas.addEventListener('click', (e) => {
            if (this.gameOver) {
                this.reset();
                this.start();
            }
        });
    }
    
    resize() {
        const maxWidth = Math.min(400, window.innerWidth - 32);
        this.canvas.width = Math.floor(maxWidth);
        this.canvas.height = Math.floor(maxWidth * 1.5);
        if (this.active && !this.gameOver) {
            this.player.x = Math.min(this.player.x, this.canvas.width - this.player.radius);
            this.player.y = Math.min(this.player.y, this.canvas.height - this.player.radius);
        }
    }
    
    generateBackground() {
        this.stars = [];
        for (let i = 0; i < 50; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height * 0.6,
                radius: Math.random() * 2 + 0.5,
                brightness: Math.random() * 0.5 + 0.5,
                twinkleSpeed: Math.random() * 0.02 + 0.01
            });
        }
        this.clouds = [];
        for (let i = 0; i < 5; i++) {
            this.clouds.push({
                x: Math.random() * this.canvas.width,
                y: 30 + Math.random() * (this.canvas.height * 0.35),
                width: 60 + Math.random() * 100,
                height: 25 + Math.random() * 20,
                speed: 0.15 + Math.random() * 0.5,
                opacity: 0.2 + Math.random() * 0.3
            });
        }
    }
    
    handleKeyDown(e) {
        if (!this.active || this.gameOver) return;
        if (e.code === 'ArrowLeft' || e.code === 'KeyA') { e.preventDefault(); this.keys.left = true; }
        if (e.code === 'ArrowRight' || e.code === 'KeyD') { e.preventDefault(); this.keys.right = true; }
        if (e.code === 'ArrowUp' || e.code === 'Space' || e.code === 'KeyW') {
            e.preventDefault();
            this.keys.jump = true;
            if (!this.started) {
                this.started = true;   // после первого нажатия начинается движение
                this.startTimestamp = performance.now();
            }
        }
    }
    
    handleKeyUp(e) {
        if (!this.active) return;
        if (e.code === 'ArrowLeft' || e.code === 'KeyA') this.keys.left = false;
        if (e.code === 'ArrowRight' || e.code === 'KeyD') this.keys.right = false;
        if (e.code === 'ArrowUp' || e.code === 'Space' || e.code === 'KeyW') this.keys.jump = false;
    }
    
    addMobileListeners() {
        const btnLeft = document.getElementById('btnLeft');
        const btnRight = document.getElementById('btnRight');
        const btnJump = document.getElementById('btnJump');
        
        const leftDown = (e) => { e.preventDefault(); if (this.active && !this.gameOver) this.keys.left = true; };
        const leftUp = () => { this.keys.left = false; };
        const rightDown = (e) => { e.preventDefault(); if (this.active && !this.gameOver) this.keys.right = true; };
        const rightUp = () => { this.keys.right = false; };
        const jumpDown = (e) => {
            e.preventDefault();
            if (this.active && !this.gameOver) {
                this.keys.jump = true;
                if (!this.started) {
                    this.started = true;
                    this.startTimestamp = performance.now();
                }
            }
        };
        const jumpUp = () => { this.keys.jump = false; };
        
        if (btnLeft) {
            btnLeft.addEventListener('pointerdown', leftDown);
            btnLeft.addEventListener('pointerup', leftUp);
            btnLeft.addEventListener('pointerleave', leftUp);
        }
        if (btnRight) {
            btnRight.addEventListener('pointerdown', rightDown);
            btnRight.addEventListener('pointerup', rightUp);
            btnRight.addEventListener('pointerleave', rightUp);
        }
        if (btnJump) {
            btnJump.addEventListener('pointerdown', jumpDown);
            btnJump.addEventListener('pointerup', jumpUp);
            btnJump.addEventListener('pointerleave', jumpUp);
        }
        this.canvas.addEventListener('touchstart', e => e.preventDefault());
    }
    
    start() {
        if (this.active) return;
        this.active = true;
        if (this.gameOver) {
            this.reset();
        } else if (!this.frameId) {
            if (this.platforms.length === 0) this.generateStartPlatforms();
            this.lastTime = performance.now();
            this.loop(this.lastTime);
        }
    }
    
    stop() {
        this.active = false;
        if (this.frameId) {
            cancelAnimationFrame(this.frameId);
            this.frameId = null;
        }
        this.keys.left = false;
        this.keys.right = false;
        this.keys.jump = false;
    }
    
    reset() {
        this.gameOver = false;
        this.score = 0;
        this.speed = 0.5;
        this.platforms = [];
        this.particles = [];
        this.trailParticles = [];
        this.started = false;
        this.player.x = this.canvas.width / 2;
        this.player.y = this.canvas.height / 2;   // стартуем в центре экрана
        this.player.vx = 0;
        this.player.vy = 0;
        this.player.prevOnGround = false;
        this.generateStartPlatforms();
        this.lastTime = performance.now();
        this.loop(this.lastTime);
    }
    
    generateStartPlatforms() {
        // Платформа прямо под игроком
        this.platforms.push({
            x: this.player.x - 45,   // платформа шириной 90
            y: this.player.y + this.player.radius + 4,
            w: 90,
            h: 14
        });
        // Генерируем ещё 14 платформ вверх и вниз для запаса
        let lastY = this.player.y + this.player.radius + 4;
        for (let i = 0; i < 7; i++) {
            const y = lastY - 55 - Math.random() * 25;  // дистанция 55-80 (стало меньше)
            const x = Math.random() * (this.canvas.width - 90);
            this.platforms.push({ x, y, w: 90, h: 14 });
            lastY = y;
        }
        // Несколько платформ ниже игрока (чтобы при падении вниз тоже были)
        lastY = this.player.y + this.player.radius + 4;
        for (let i = 0; i < 4; i++) {
            const y = lastY + 60 + Math.random() * 30;
            const x = Math.random() * (this.canvas.width - 90);
            this.platforms.push({ x, y, w: 90, h: 14 });
            lastY = y;
        }
    }
    
    spawnLandingParticles(x, y) {
        for (let i = 0; i < 8; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = 1.5 + Math.random() * 4;
            this.particles.push({
                x, y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed - 2,
                life: 0.5 + Math.random() * 0.5,
                maxLife: 0.7,
                size: 4 + Math.random() * 5,
                color: `hsl(${30 + Math.random() * 30}, 80%, 70%)` // тёплые искры
            });
        }
        // Звук приземления
        if (typeof playBeep === 'function') playBeep(260, 0.06, 'sine');
    }
    
    spawnTrail() {
        if (Math.abs(this.player.vx) > 0.5 || Math.abs(this.player.vy) > 0.5) {
            this.trailParticles.push({
                x: this.player.x,
                y: this.player.y,
                life: 0.3,
                maxLife: 0.3,
                size: 4 + Math.random() * 4,
                color: `rgba(255, 120, 160, 0.7)`
            });
        }
        if (this.trailParticles.length > 20) this.trailParticles.shift();
    }
    
    loop(timestamp) {
        if (!this.active || this.gameOver) {
            if (this.gameOver) this.drawGameOver();
            return;
        }
        const delta = Math.min(timestamp - this.lastTime, 50);
        this.lastTime = timestamp;
        
        this.update(delta);
        this.draw();
        
        this.frameId = requestAnimationFrame((t) => this.loop(t));
    }
    
    update(delta) {
        // Задержка старта: платформы не двигаются, пока не нажата клавиша или не прошло startDelay
        if (!this.started) {
            if (performance.now() - this.startTimestamp > this.startDelay) {
                this.started = true;
            }
        }
        
        // Увеличиваем скорость со временем только после старта
        if (this.started && this.speed < this.maxSpeed) {
            this.speed += this.acceleration * delta;
        }
        
        // Инерция горизонтального движения
        const targetDir = (this.keys.left ? -1 : 0) + (this.keys.right ? 1 : 0);
        const accel = 0.015;
        const friction = 0.008;
        const maxVx = 6;
        
        if (targetDir !== 0) {
            this.player.vx += targetDir * accel * delta;
            if (Math.abs(this.player.vx) > maxVx) {
                this.player.vx = Math.sign(this.player.vx) * maxVx;
            }
        } else {
            this.player.vx *= Math.exp(-friction * delta);
        }
        
        // Прыжок (чуть выше)
        if (this.keys.jump && this.player.onGround) {
            this.player.vy = -8.0;
            this.player.onGround = false;
            this.keys.jump = false;
        }
        
        // Гравитация (чуть слабее)
        this.player.vy += 0.35;
        
        // Движение
        this.player.x += this.player.vx;
        this.player.y += this.player.vy;
        
        // Зацикливание по горизонтали
        if (this.player.x - this.player.radius > this.canvas.width) this.player.x = -this.player.radius;
        if (this.player.x + this.player.radius < 0) this.player.x = this.canvas.width + this.player.radius;
        
        // Обновление платформ
        const currentSpeed = this.started ? this.speed : 0;
        for (let p of this.platforms) {
            p.y += currentSpeed;
        }
        this.platforms = this.platforms.filter(p => p.y < this.canvas.height + 40);
        // Генерируем новые сверху
        while (this.platforms.length < 15) {
            const lastPlatform = this.platforms.length > 0 ? this.platforms[this.platforms.length-1] : null;
            let newY;
            if (lastPlatform && lastPlatform.y < 0) {
                newY = lastPlatform.y - 50 - Math.random() * 20;  // 50-70 промежуток
            } else {
                newY = -30 - Math.random() * 50;
            }
            this.platforms.push({
                x: Math.random() * (this.canvas.width - 90),
                y: newY,
                w: 90,
                h: 14
            });
        }
        
        // Проверка столкновений
        this.player.prevOnGround = this.player.onGround;
        this.player.onGround = false;
        for (let p of this.platforms) {
            if (this.player.vy >= 0 &&
                this.player.y + this.player.radius > p.y &&
                this.player.y - this.player.radius < p.y + p.h &&
                this.player.x + this.player.radius > p.x &&
                this.player.x - this.player.radius < p.x + p.w) {
                this.player.y = p.y - this.player.radius;
                this.player.vy = 0;
                this.player.onGround = true;
            }
        }
        
        // Приземление – частицы
        if (this.player.onGround && !this.player.prevOnGround) {
            this.spawnLandingParticles(this.player.x, this.player.y + this.player.radius);
        }
        
        // Шлейф за сердечком
        this.spawnTrail();
        
        // Game Over
        if (this.player.y - this.player.radius > this.canvas.height) {
            this.gameOver = true;
            this.saveBestScore();
        }
        
        // Очки
        if (this.started) {
            this.score += this.speed * delta * 0.015;
            this.scoreDisplay.textContent = Math.floor(this.score);
        }
        
        // Обновление частиц
        for (let p of this.particles) {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.05;
            p.life -= delta * 0.001;
        }
        this.particles = this.particles.filter(p => p.life > 0);
        
        for (let t of this.trailParticles) {
            t.life -= delta * 0.001;
        }
        this.trailParticles = this.trailParticles.filter(t => t.life > 0);
        
        // Движение облаков
        for (let c of this.clouds) {
            c.x -= c.speed;
            if (c.x + c.width < 0) c.x = this.canvas.width + 20;
        }
        
        // Мерцание звёзд
        for (let s of this.stars) {
            s.brightness += s.twinkleSpeed;
            if (s.brightness > 1 || s.brightness < 0.2) s.twinkleSpeed *= -1;
        }
    }
    
    draw() {
        const ctx = this.ctx;
        const W = this.canvas.width;
        const H = this.canvas.height;
        
        // Закатное небо
        const gradient = ctx.createLinearGradient(0, 0, 0, H);
        gradient.addColorStop(0, '#0d0d2b');
        gradient.addColorStop(0.4, '#4a235a');
        gradient.addColorStop(0.7, '#c94b6c');
        gradient.addColorStop(1, '#f7a8a0');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, W, H);
        
        // Звёзды
        for (let s of this.stars) {
            ctx.globalAlpha = s.brightness;
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, Math.PI*2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
        
        // Облака
        for (let c of this.clouds) {
            ctx.fillStyle = `rgba(255, 255, 255, ${c.opacity})`;
            ctx.beginPath();
            const cy = c.y;
            const cx = c.x;
            ctx.ellipse(cx, cy, c.width*0.5, c.height*0.5, 0, 0, Math.PI*2);
            ctx.ellipse(cx + c.width*0.3, cy - c.height*0.4, c.width*0.4, c.height*0.4, 0, 0, Math.PI*2);
            ctx.ellipse(cx - c.width*0.25, cy - c.height*0.3, c.width*0.35, c.height*0.35, 0, 0, Math.PI*2);
            ctx.fill();
        }
        
        // Шлейф
        for (let t of this.trailParticles) {
            const alpha = t.life / t.maxLife;
            ctx.fillStyle = `rgba(255, 130, 150, ${alpha * 0.6})`;
            ctx.beginPath();
            ctx.arc(t.x, t.y, t.size * alpha, 0, Math.PI*2);
            ctx.fill();
        }
        
        // Платформы
        for (let p of this.platforms) {
            this.drawPlatform(p);
        }
        
        // Частицы приземления
        for (let p of this.particles) {
            const alpha = p.life / p.maxLife;
            ctx.fillStyle = p.color;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI*2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
        
        // Игрок
        this.drawPlayer();
        
        // Счёт
        ctx.font = 'bold 20px system-ui';
        ctx.fillStyle = '#fff';
        ctx.shadowColor = 'rgba(0,0,0,0.6)';
        ctx.shadowBlur = 6;
        ctx.textAlign = 'right';
        ctx.fillText('❤️ ' + Math.floor(this.score), W - 15, 40);
        ctx.shadowBlur = 0;
        ctx.shadowColor = 'transparent';
        
        // Если игра ещё не стартовала, подсказка
        if (!this.started && !this.gameOver) {
            ctx.fillStyle = 'rgba(255,255,255,0.9)';
            ctx.font = '16px system-ui';
            ctx.textAlign = 'center';
            ctx.fillText('Нажми стрелку или прыжок ✨', W/2, H/2 - 30);
        }
    }
    
    drawPlatform(p) {
        const ctx = this.ctx;
        const x = p.x, y = p.y, w = p.w, h = p.h;
        const radius = 7;
        // Тень
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.beginPath();
        ctx.moveTo(x + radius + 3, y + h + 3);
        ctx.lineTo(x + w - radius + 3, y + h + 3);
        ctx.quadraticCurveTo(x + w + 3, y + h + 3, x + w + 3, y + h - radius + 3);
        ctx.lineTo(x + w + 3, y + radius + 3);
        ctx.quadraticCurveTo(x + w + 3, y + 3, x + w - radius + 3, y + 3);
        ctx.lineTo(x + radius + 3, y + 3);
        ctx.quadraticCurveTo(x + 3, y + 3, x + 3, y + radius + 3);
        ctx.lineTo(x + 3, y + h - radius + 3);
        ctx.quadraticCurveTo(x + 3, y + h + 3, x + radius + 3, y + h + 3);
        ctx.fill();
        
        // Доска
        const grad = ctx.createLinearGradient(x, y, x, y + h);
        grad.addColorStop(0, '#d9b382');
        grad.addColorStop(0.3, '#b8855a');
        grad.addColorStop(1, '#8b5a3c');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + w - radius, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
        ctx.lineTo(x + w, y + h - radius);
        ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
        ctx.lineTo(x + radius, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.fill();
        
        // Прожилки дерева
        ctx.strokeStyle = 'rgba(0,0,0,0.25)';
        ctx.lineWidth = 1.2;
        for (let i = 1; i <= 5; i++) {
            const ly = y + i * (h / 6);
            ctx.beginPath();
            ctx.moveTo(x + 6, ly);
            ctx.lineTo(x + w - 6, ly);
            ctx.stroke();
        }
        // Гвоздики по углам
        ctx.fillStyle = '#555';
        const nailR = 2.5;
        [
            [x + 10, y + h/2],
            [x + w - 10, y + h/2]
        ].forEach(([nx, ny]) => {
            ctx.beginPath();
            ctx.arc(nx, ny, nailR, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#ddd';
            ctx.beginPath();
            ctx.arc(nx-0.5, ny-0.5, nailR*0.6, 0, Math.PI*2);
            ctx.fill();
            ctx.fillStyle = '#555';
        });
        
        // Блик сверху
        ctx.fillStyle = 'rgba(255,255,255,0.25)';
        ctx.fillRect(x + 4, y + 1, w - 8, 2);
    }
    
    drawPlayer() {
        const ctx = this.ctx;
        const { x, y, radius: r } = this.player;
        
        // Свечение
        ctx.shadowColor = '#ff7b9c';
        ctx.shadowBlur = 15;
        
        // Тень
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.beginPath();
        ctx.ellipse(x, y + r + 2, r * 0.9, r * 0.4, 0, 0, Math.PI*2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.shadowColor = 'transparent';
        
        // Сердечко с градиентом и пульсацией
        const pulse = 1 + Math.sin(performance.now() * 0.01) * 0.05;  // лёгкая пульсация
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(r/16 * pulse, r/16 * pulse);
        
        const grad = ctx.createRadialGradient(-4, -4, 2, 0, 0, 18);
        grad.addColorStop(0, '#ffb3c6');
        grad.addColorStop(0.5, '#ff4d6d');
        grad.addColorStop(1, '#c9184a');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(0, 4);
        ctx.bezierCurveTo(-8, -8, -16, 4, 0, 16);
        ctx.bezierCurveTo(16, 4, 8, -8, 0, 4);
        ctx.fill();
        
        // Блик
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.beginPath();
        ctx.ellipse(-4, -4, 3.5, 2, -0.5, 0, Math.PI*2);
        ctx.fill();
        
        ctx.restore();
    }
    
    drawGameOver() {
        const ctx = this.ctx;
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = '#1c0d14';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 26px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('💔 Попробуй ещё раз', this.canvas.width/2, this.canvas.height/2 - 10);
        ctx.font = '16px system-ui';
        ctx.fillText('(кликни по экрану)', this.canvas.width/2, this.canvas.height/2 + 35);
    }
    
    saveBestScore() {
        const finalScore = Math.floor(this.score);
        if (finalScore > this.bestScore) {
            this.bestScore = finalScore;
            localStorage.setItem('platformerBest', finalScore);
            this.highscoreDisplay.textContent = finalScore;
            syncPlatformerBest(finalScore);
        }
    }
}

let platformerGame = null;

function initPlatformer() {
    if (!platformerGame) {
        platformerGame = new PlatformFallGame('platformerCanvas');
    }
    platformerGame.start();
}

function stopPlatformer() {
    if (platformerGame) {
        platformerGame.stop();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Splash
    setTimeout(() => {
        const splash = document.getElementById('splash');
        if (splash) {
            splash.style.opacity = '0';
            setTimeout(() => splash.remove(), 500);
        }
    }, 1500);
    
    // Если страница загрузилась не на платформере, убедимся, что игра не крутится
    if (!document.getElementById('platformer')?.classList.contains('active')) {
        stopPlatformer();
    }
    
    // Вкладки
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');
    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            tabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            contents.forEach(content => content.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');

            if (tabId !== 'platformer') stopPlatformer();

            if (tabId === 'phrases') updateRandomPhrase();
            if (tabId === 'game') {
                if (!window.gameInitialized) { initGame(); window.gameInitialized = true; }
                else updateScoreUI();
            }
            if (tabId === 'achievements') renderAchievements();
            if (tabId === 'platformer') initPlatformer();
        });
    });

    loadGallery();
    updateRandomPhrase();
    document.getElementById('nextPhraseBtn')?.addEventListener('click', updateRandomPhrase);
    addNotificationButton();
    checkAndScheduleNotifications();

    if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
        navigator.serviceWorker.register('/sw.js').catch(err => console.error(err));
    }

    if (document.getElementById('game')?.classList.contains('active')) {
        if (!window.gameInitialized) { initGame(); window.gameInitialized = true; }
    }

    createMusicPlayer();
    loadAchievements();
    renderAchievements();
});