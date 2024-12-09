document.getElementById('game-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const question = document.getElementById('question').value;
    const options = [
        document.getElementById('option1').value,
        document.getElementById('option2').value,
        document.getElementById('option3').value,
        document.getElementById('option4').value,
    ];

    const questionItem = document.createElement('div');
    questionItem.innerHTML = `<h3>${question}</h3><ul>${options.map(option => `<li>${option}</li>`).join('')}</ul>`;
    document.getElementById('questions-list').appendChild(questionItem);

    // Formu temizle
    document.getElementById('game-form').reset();
});
