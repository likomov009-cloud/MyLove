// ---------- СПИСОК ВСЕХ ФРАЗ (200+ уникальных) ----------
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

// ---------- ГАЛЕРЕЯ ФОТО ----------
function loadGallery() {
    const galleryContainer = document.getElementById('galleryContainer');
    if (!galleryContainer) return;

    for (let i = 1; i <= 58; i++) {
        const img = document.createElement('img');
        img.src = `image/f${i}.jpg`;
        img.alt = `Фото ${i}`;
        img.loading = 'lazy';
        img.onerror = () => {
            img.style.display = 'none';
        };
        galleryContainer.appendChild(img);
    }
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
    if (phraseText) {
        phraseText.textContent = getRandomPhrase();
    }
    if (phraseImage) {
        phraseImage.src = getRandomImage();
        phraseImage.onerror = () => {
            phraseImage.src = 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22300%22%20height%3D%22200%22%20viewBox%3D%220%200%20300%20200%22%3E%3Crect%20width%3D%22300%22%20height%3D%22200%22%20fill%3D%22%23fce4da%22%2F%3E%3Ctext%20x%3D%22150%22%20y%3D%22110%22%20font-family%3D%22system-ui%22%20font-size%3D%2216%22%20text-anchor%3D%22middle%22%20fill%3D%22%23c45b3c%22%3E%D0%A4%D0%BE%D1%82%D0%BE%3C%2Ftext%3E%3C%2Fsvg%3E';
        };
    }
}

// ---------- УВЕДОМЛЕНИЯ ----------
let notificationTimers = [];

function scheduleDailyNotifications() {
    notificationTimers.forEach(timer => clearTimeout(timer));
    notificationTimers = [];

    if (Notification.permission !== 'granted') {
        return;
    }

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
                new Notification('Твоя поддержка', {
                    body: phrase,
                    icon: '/img/icon-192.png'
                });
            }, delay);
            notificationTimers.push(timer);
        }
    });

    const todayStr = now.toDateString();
    localStorage.setItem('notificationsScheduled', todayStr);
}

function requestNotificationPermission() {
    if (Notification.permission === 'granted') {
        scheduleDailyNotifications();
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(perm => {
            if (perm === 'granted') {
                scheduleDailyNotifications();
            }
        });
    }
}

function checkAndScheduleNotifications() {
    const todayStr = new Date().toDateString();
    const lastScheduled = localStorage.getItem('notificationsScheduled');
    if (lastScheduled !== todayStr) {
        if (Notification.permission === 'granted') {
            scheduleDailyNotifications();
        }
    }
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

// ---------- НОВАЯ ИГРА "СОБЕРИ СЕРДЕЧКИ" (с прогрессом и целями) ----------
let currentScore = 0;          // счёт за текущую сессию (для красоты)
let totalHearts = 0;           // общее количество собранных сердечек (всегда растёт)
let goal = 100;                // цель: каждые 100 сердечек - подарок
let lastGoalReached = 0;       // чтобы не спамить поздравлениями
let heartsElements = [];       // массив DOM-элементов сердечек
let gameActive = true;

// Цвета сердечек (эмодзи)
const heartColors = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎'];
let specialHeart = null;            // текущее целевое сердечко (DOM-элемент)
const specialEmoji = '👑❤️';        // как выглядит целевое сердечко

// Функция для создания нового сердечка (только DOM)
function createHeartElement() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    // случайный цвет
    const randomColor = heartColors[Math.floor(Math.random() * heartColors.length)];
    heart.textContent = randomColor;
    heart.addEventListener('click', () => onHeartClick(heart));
    return heart;
}
function setSpecialHeart(heartElement) {
    // Убираем special с предыдущего
    if (specialHeart) {
        specialHeart.classList.remove('special');
        // Возвращаем обычный эмодзи (случайный цвет)
        const oldColor = heartColors[Math.floor(Math.random() * heartColors.length)];
        specialHeart.textContent = oldColor;
    }
    // Назначаем новое
    specialHeart = heartElement;
    specialHeart.classList.add('special');
    specialHeart.textContent = specialEmoji;
}

// Эффект "лопания" и искорки
function burstEffect(x, y) {
    // Создаём контейнер для искорок
    const burst = document.createElement('div');
    burst.className = 'burst';
    burst.style.left = x + 'px';
    burst.style.top = y + 'px';
    document.body.appendChild(burst);
    
    // Генерируем несколько маленьких сердечек ✨
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
    
    // Удаляем эффект через 0.5 сек
    setTimeout(() => {
        burst.remove();
    }, 500);
}

// Эффект при клике на неправильное сердечко
function showWrongClickEffect(heartElement) {
    // 1. Тряска сердечка
    heartElement.style.animation = 'shake 0.3s ease-in-out';
    setTimeout(() => {
        if (heartElement) heartElement.style.animation = '';
    }, 300);
    
    // 2. Плавающая надпись "Не то!"
    const wrongText = document.createElement('div');
    wrongText.textContent = '❌ Не то!';
    wrongText.className = 'wrong-feedback';
    const rect = heartElement.getBoundingClientRect();
    wrongText.style.left = rect.left + rect.width/2 + 'px';
    wrongText.style.top = rect.top - 20 + 'px';
    document.body.appendChild(wrongText);
    setTimeout(() => {
        wrongText.remove();
    }, 800);
    
    // 3. Лёгкое покраснение фона игрового поля
    const field = document.getElementById('gameField');
    if (field) {
        field.style.transition = 'background 0.2s';
        field.style.backgroundColor = '#ffe0e0';
        setTimeout(() => {
            field.style.backgroundColor = '';
        }, 200);
    }
}

// Обработчик клика по сердечку
function onHeartClick(heartElement) {
    if (!gameActive) return;
    
    // Если кликнули НЕ на special – показываем эффект ошибки
    if (heartElement !== specialHeart) {
        showWrongClickEffect(heartElement);
        return;
    }
    
    // === Клик по special ===
    const rect = heartElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Анимация исчезновения
    heartElement.style.transform = 'scale(0)';
    heartElement.style.opacity = '0';
    burstEffect(centerX, centerY);
    
    // Увеличиваем счётчики
    currentScore++;
    totalHearts++;
    localStorage.setItem('totalHearts', totalHearts);
    updateScoreUI();
    checkGoal();
    
    // Удаляем это сердечко из DOM и массива
    heartElement.remove();
    const index = heartsElements.indexOf(heartElement);
    if (index !== -1) heartsElements.splice(index, 1);
    
    // Через небольшую задержку создаём новое сердечко и назначаем новое special
    setTimeout(() => {
        if (gameActive) {
            addOneHeart();
            const currentHearts = document.querySelectorAll('#gameField .heart');
            if (currentHearts.length > 0) {
                const randomIndex = Math.floor(Math.random() * currentHearts.length);
                const newSpecial = currentHearts[randomIndex];
                setSpecialHeart(newSpecial);
            }
        }
    }, 200);
}
// Добавить одно сердечко в поле
function addOneHeart() {
    const field = document.getElementById('gameField');
    if (!field) return;
    const newHeart = createHeartElement();
    field.appendChild(newHeart);
    heartsElements.push(newHeart);
    newHeart.style.animation = 'none';
    newHeart.offsetHeight;
    newHeart.style.animation = 'float 0.3s ease-out';
    // Не делаем special здесь, special будет назначен позже отдельно
}
// Инициализация поля: создаём 12 сердечек
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
    // Назначаем первое special случайным образом
    if (heartsElements.length > 0) {
        const randomIndex = Math.floor(Math.random() * heartsElements.length);
        setSpecialHeart(heartsElements[randomIndex]);
    }
}
// Обновить UI: текущий счёт, общий счёт, прогресс-бар
function updateScoreUI() {
    const currentSpan = document.getElementById('currentScoreValue');
    if (currentSpan) currentSpan.textContent = currentScore;
    
    const totalSpan = document.getElementById('totalHeartsValue');
    if (totalSpan) totalSpan.textContent = totalHearts;
    
    // Прогресс до следующей цели
    const nextGoal = Math.ceil(totalHearts / goal) * goal;
    const remaining = nextGoal - totalHearts;
    const progressPercent = (totalHearts % goal) / goal * 100;
    
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        progressFill.style.width = progressPercent + '%';
    }
    
    const remainingSpan = document.getElementById('remainingToGoal');
    if (remainingSpan) {
        remainingSpan.textContent = remaining;
    }
    
    const goalSpan = document.getElementById('goalValue');
    if (goalSpan) {
        goalSpan.textContent = goal;
    }
}

// Проверить, достигнута ли новая цель (каждые goal штук)
function checkGoal() {
    const currentMilestone = Math.floor(totalHearts / goal);
    if (currentMilestone > lastGoalReached && totalHearts > 0) {
        lastGoalReached = currentMilestone;
        // Показываем поздравление
        const giftNumber = currentMilestone;
        let giftText = '';
        if (giftNumber % 2 === 0) {
            giftText = 'чипсы 🍟';
        } else {
            giftText = 'шоколадку 🍫';
        }
        // Можно чередовать: за 100 - шоколадка, за 200 - чипсы, за 300 - шоколадка и т.д.
        const message = `🎉 Поздравляю! Ты собрала ${totalHearts} сердечек! 🎉\nЯ дарю тебе ${giftText}! ❤️\nОбниму при встрече!`;
        alert(message);
        // Дополнительно можно вывести красивое модальное окно, но для простоты alert
    }
}

// Сброс текущей сессии (не обнуляет totalHearts)
function resetGameSession() {
    currentScore = 0;
    updateScoreUI();
    initGameField();  // эта функция сама назначит new special
}

// Полная инициализация игры (вызывается один раз)
function initGame() {
    const gameContainer = document.querySelector('#game .game-container');
    if (!gameContainer) return;
    
    // Проверяем, добавлены ли уже дополнительные элементы (чтобы не дублировать)
    if (!document.getElementById('gameStats')) {
        // Создаём блок статистики и прогресса
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
                <div class="progress-bar">
                    <div class="progress-fill" id="progressFill"></div>
                </div>
                <div class="progress-remaining">Осталось <span id="remainingToGoal">100</span> сердечек</div>
            </div>
        `;
        // Вставляем перед игровым полем
        const field = document.getElementById('gameField');
        gameContainer.insertBefore(statsDiv, field);
    }
    
    // Загружаем общий счёт из localStorage
    const savedTotal = localStorage.getItem('totalHearts');
    if (savedTotal !== null) {
        totalHearts = parseInt(savedTotal, 10);
    } else {
        totalHearts = 0;
    }
    currentScore = 0;
    lastGoalReached = Math.floor(totalHearts / goal);
    
    // Инициализируем поле
    initGameField();
    updateScoreUI();
    
    // Привязываем кнопку сброса
    const resetBtn = document.getElementById('resetGameBtn');
    if (resetBtn) {
        resetBtn.onclick = () => resetGameSession();
    }
}

// ---------- УПРАВЛЕНИЕ ВКЛАДКАМИ И ЗАПУСК ----------
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM загружен');

    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            tabs.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            contents.forEach(content => content.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            
            if (tabId === 'phrases') {
                updateRandomPhrase();
            }
            if (tabId === 'game') {
                // Если игра ещё не инициализирована, инициализируем
                if (!window.gameInitialized) {
                    initGame();
                    window.gameInitialized = true;
                } else {
                    // просто обновляем UI на случай, если счёт поменялся где-то ещё
                    updateScoreUI();
                }
            }
        });
    });
    
    loadGallery();
    updateRandomPhrase();
    
    const nextBtn = document.getElementById('nextPhraseBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            updateRandomPhrase();
        });
    }
    
    addNotificationButton();
    checkAndScheduleNotifications();
    
    if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('SW зарегистрирован', reg))
            .catch(err => console.error('Ошибка SW', err));
    }
    
    // Если вкладка игры активна при загрузке, инициализируем
    if (document.getElementById('game') && document.getElementById('game').classList.contains('active')) {
        if (!window.gameInitialized) {
            initGame();
            window.gameInitialized = true;
        }
    }
});