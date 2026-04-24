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

// ---------- FIREBASE СИНХРОНИЗАЦИЯ СЕРДЕЧЕК ----------
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

function syncTotalHearts() {
  const userId = "devushka";
  db.ref('hearts/' + userId).set({
    total: totalHearts,
    timestamp: Date.now()
  });
}

// ---------- СЛУЧАЙНОЕ ФОТО И ФРАЗА ----------
function getRandomImage() {
    const randomNum = Math.floor(Math.random() * 58) + 1;
    return `image/f${randomNum}.jpg`;
}

function getRandomPhrase() {
    return phrasesList[Math.floor(Math.random() * phrasesList.length)];
}

function updateRandomPhrase() {
    const phraseText = document.getElementById('randomPhraseText');
    const phraseImage = document.getElementById('randomPhraseImage');
    if (phraseText) phraseText.textContent = getRandomPhrase();
    if (phraseImage) {
        phraseImage.src = getRandomImage();
        phraseImage.onerror = () => {
            phraseImage.src = 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22300%22%20height%3D%22200%22%20viewBox%3D%220%200%20300%20200%22%3E%3Crect%20width%3D%22300%22%20height%3D%22200%22%20fill%3D%22%23fce4da%22%2F%3E%3Ctext%20x%3D%22150%22%20y%3D%22110%22%20font-family%3D%22system-ui%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20fill%3D%22%23c45b3c%22%3E%D0%A4%D0%BE%D1%82%D0%BE%3C%2Ftext%3E%3C%2Fsvg%3E';
        };
    }
}

// ---------- ГАЛЕРЕЯ ----------
function loadGallery() {
    const galleryContainer = document.getElementById('galleryContainer');
    if (!galleryContainer) {
        console.error('galleryContainer not found');
        return;
    }
    // Очищаем контейнер на всякий случай
    galleryContainer.innerHTML = '';
    
    // Загружаем не все 58 сразу, а по 5 штук с задержкой
    let index = 1;
    const total = 58;
    
    function loadNextBatch() {
        for (let i = 0; i < 5 && index <= total; i++, index++) {
            try {
                const img = document.createElement('img');
                img.src = `image/f${index}.jpg`;
                img.alt = `Фото ${index}`;
                img.loading = 'lazy';
                img.onerror = () => {
                    console.warn(`Не загрузилось фото f${index}.jpg`);
                    img.style.display = 'none';
                };
                galleryContainer.appendChild(img);
            } catch(e) {
                console.error('Ошибка при создании img:', e);
            }
        }
        if (index <= total) {
            setTimeout(loadNextBatch, 200);
        }
    }
    
    loadNextBatch();
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
    'audio/background3.mp3'
];
let currentTrackIndex = 0;      // 0,1,2
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
    { id: 6, name: 'Легенда', desc: 'Собрать 2500 сердечек', target: 2500, icon: '🏆', unlocked: false }
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
document.addEventListener('DOMContentLoaded', () => {
    // Splash
    setTimeout(() => {
        const splash = document.getElementById('splash');
        if (splash) {
            splash.style.opacity = '0';
            setTimeout(() => splash.remove(), 500);
        }
    }, 1500);

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
            if (tabId === 'phrases') updateRandomPhrase();
            if (tabId === 'game') {
                if (!window.gameInitialized) { initGame(); window.gameInitialized = true; }
                else updateScoreUI();
            }
            if (tabId === 'achievements') renderAchievements();
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

    // Кнопка музыки
        createMusicPlayer();

    // Загружаем достижения
    loadAchievements();
    renderAchievements();
});