,// Yeni Oyun Oluşturma Butonuna İşlev Ekleme
document.getElementById('create-game').addEventListener('click', function() {
    fetch('/create-game', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            if (data.game_code) {
                alert(`Yeni oyun oluşturuldu! Oyun Kodu: ${data.game_code}`);
                window.location.href = `/game/${data.game_code}`;
            } else {
                alert('Oyun oluşturulurken bir hata oluştu.');
            }
        })
        .catch(error => console.error('Error:', error));
});

// Oyuna Katılma Butonuna İşlev Ekleme
document.getElementById('join-game').addEventListener('click', function() {
    const gameCode = document.getElementById('game-code').value;
    if (gameCode) {
        fetch(`/join-game/${gameCode}`, { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert(`Oyun kodu ${gameCode} ile oyuna katıldınız!`);
                    window.location.href = `/game/${gameCode}`;
                } else {
                    alert('Geçersiz oyun kodu.');
                }
            })
            .catch(error => console.error('Error:', error));
    } else {
        alert('Lütfen bir oyun kodu girin!');
    }
});

const mongoose = require('mongoose');

// MongoDB bağlantısı
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB bağlantısı başarılı!'))
    .catch(err => console.error('MongoDB bağlantı hatası:', err));
const translations = {
   const translations = {
    tr: {
        title: "BBS Kahoot",
        subtitle: "Hadi başlayalım!",
        description: "Kendi oyununuzu oluşturun veya bir oyuna katılın.",
        createGame: "Yeni Oyun Oluştur",
        joinGame: "Katıl",
        placeholder: "Oyun Kodu Girin",
        footer: "&copy; 2025 BBS Kahoot.BY KESRA."
    },
    de: {
        title: "BBS Kahoot",
        subtitle: "Lass uns anfangen!",
        description: "Erstellen Sie Ihr eigenes Spiel oder treten Sie einem Spiel bei.",
        createGame: "Neues Spiel erstellen",
        joinGame: "Beitreten",
        placeholder: "Geben Sie den Spielcode ein",
        footer: "&copy; 2025 BBS Kahoot.BY KESRA."
    },
    fa: {
        title: "BBS Kahoot",
        subtitle: "بیایید شروع کنیم!",
        description: "بازی خود را بسازید یا به یک بازی بپیوندید.",
        createGame: "ایجاد بازی جدید",
        joinGame: "پیوستن",
        placeholder: "کد بازی را وارد کنید",
        footer: "&copy; 2025 BBS Kahoot.BY KESRA."
    },
    en: {
        title: "BBS Kahoot",
        subtitle: "Let's get started!",
        description: "Create your own game or join a game.",
        createGame: "Create New Game",
        joinGame: "Join",
        placeholder: "Enter Game Code",
        footer: "&copy; 2025 BBS Kahoot.BY KESRA."
    }
};

};
const translations = {
  const translations = {
    tr: {
        title: "BBS Kahoot",
        subtitle: "Hadi başlayalım!",
        description: "Kendi oyununuzu oluşturun veya bir oyuna katılın.",
        createGame: "Yeni Oyun Oluştur",
        joinGame: "Katıl",
        placeholder: "Oyun Kodu Girin",
        footer: "&copy; 2025 BBS Kahoot.BY KESRA."
    },
    de: {
        title: "BBS Kahoot",
        subtitle: "Lass uns anfangen!",
        description: "Erstellen Sie Ihr eigenes Spiel oder treten Sie einem Spiel bei.",
        createGame: "Neues Spiel erstellen",
        joinGame: "Beitreten",
        placeholder: "Geben Sie den Spielcode ein",
        footer: "&copy; 2025 BBS Kahoot.BY KESRA."
    },
    fa: {
        title: "BBS Kahoot",
        subtitle: "بیایید شروع کنیم!",
        description: "بازی خود را بسازید یا به یک بازی بپیوندید.",
        createGame: "ایجاد بازی جدید",
        joinGame: "پیوستن",
        placeholder: "کد بازی را وارد کنید",
        footer: "&copy; 2025 BBS Kahoot.BY KESRA."
    },
    en: {
        title: "BBS Kahoot",
        subtitle: "Let's get started!",
        description: "Create your own game or join a game.",
        createGame: "Create New Game",
        joinGame: "Join",
        placeholder: "Enter Game Code",
        footer: "&copy; 2025 BBS Kahoot.BY KESRA."

};

function changeLanguage() {
    const language = document.getElementById("language").value;

    // Başlıkları ve içerikleri güncelleme
    document.querySelector("h1").textContent = translations[language].title;
    document.querySelector(".hero h2").textContent = translations[language].subtitle;
    document.querySelector(".hero p").textContent = translations[language].description;
    document.getElementById("create-game").textContent = translations[language].createGame;
    document.getElementById("join-game").textContent = translations[language].joinGame;
    document.getElementById("game-code").setAttribute("placeholder", translations[language].placeholder);
    document.querySelector("footer p").innerHTML = translations[language].footer;
}

// Sayfa yüklendiğinde başlangıç dilini ayarla
document.addEventListener('DOMContentLoaded', function () {
    changeLanguage(); // İlk dil ayarını yap
});

