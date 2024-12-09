const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// MongoDB Bağlantısı
mongoose.connect('mongodb://localhost:27017/bbs-kahoot
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Game Schema (MongoDB)
const Game = mongoose.model('Game', new mongoose.Schema({
    game_code: { type: String, required: true, unique: true },
    game_name: { type: String, required: true },
    active: { type: Boolean, default: true }
}));

// Create a Game Endpoint
app.post('/create-game', (req, res) => {
    const gameCode = Math.random().toString(36).substring(2, 8).toUpperCase();  // Random game code
    const newGame = new Game({
        game_code: gameCode,
        game_name: 'Yeni Oyun',
        active: true
    });
    newGame.save()
        .then(game => res.json({ game_code: game.game_code }))
        .catch(err => res.status(500).json({ error: 'Oyun oluşturulamadı' }));
});

// Join Game Endpoint
app.post('/join-game/:gameCode', (req, res) => {
    const { gameCode } = req.params;
    Game.findOne({ game_code: gameCode })
        .then(game => {
            if (game) {
                res.json({ success: true });
            } else {
                res.json({ success: false });
            }
        })
        .catch(err => res.status(500).json({ error: 'Bir hata oluştu.' }));
});

// Oyun Başlatma veya Diğer İşlemler

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
document.getElementById('create-game').addEventListener('click', function() {
    window.location.href = 'game-creator.html'; // Yeni oyun oluşturma sayfasına yönlendir
});

alert(`Oyun kodu ${gameCode} ile oyuna katılıyorsunuz!`);
