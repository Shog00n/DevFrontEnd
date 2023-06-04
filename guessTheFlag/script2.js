let data;
let score = 0;
let bestScore = 0;
let currentQuestion;
let questionCount = 0;
let timerInterval = null;
let timeLeft = 60;

// Charger les données de drapeau à partir du fichier JSON
fetch('pays.json')
    .then(response => response.json())
    .then(json => data = json)
    .catch(error => console.error('Erreur:', error));

function generateQuestion() {
    let correctAnswer = data.pays[Math.floor(Math.random() * data.nbDeDrapeaux)];

    let wrongAnswers = [];
    while (wrongAnswers.length < 3) {
        let wrongAnswer = data.pays[Math.floor(Math.random() * data.nbDeDrapeaux)];
        if (wrongAnswer.id !== correctAnswer.id && !wrongAnswers.includes(wrongAnswer)) {
            wrongAnswers.push(wrongAnswer);
        }
    }

    let answers = [correctAnswer, ...wrongAnswers];
    answers.sort(() => Math.random() - 0.5);

    currentQuestion = {
        flag: correctAnswer.drapeau,
        answers: answers.map(answer => answer.pays),
        correctAnswer: correctAnswer.pays
    };
}

function displayQuestion() {
    document.querySelector("#flagImage").src = currentQuestion.flag;
    document.querySelector(".numQuestion").innerHTML = `<p>Question ${questionCount}</p>`;
    
    const reponseEls = document.querySelectorAll(".reponse");
    reponseEls.forEach((el, index) => {
        el.textContent = currentQuestion.answers[index];
    });
}

function checkAnswer(userAnswer) {
    if (userAnswer === currentQuestion.correctAnswer) {
        score++;
        if (score > bestScore) {
            bestScore = score;
        }
    } else {
        score = 0;
    }

    document.querySelector(".score").textContent = "Score: " + score;
    document.querySelector(".bestScore").textContent = "Meilleur score: " + bestScore;

    generateQuestion();
    displayQuestion();
}

function startGame() {
    // Réinitialisez les compteurs à leurs valeurs de départ
    questionCount = 0;
    timeLeft = 60;
    score = 0;

    document.querySelector(".score").textContent = "Score: " + score;

    // Commencez le timer
    timerInterval = setInterval(function() {
        timeLeft--;
        document.querySelector(".timerQuestion").textContent = `Temps restant : ${timeLeft} s`;

        // Si le timer atteint 0, fin de la partie
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000); // Mise à jour chaque seconde

    // Charger la première question
    generateQuestion();
    displayQuestion();
}

function endGame() {
    clearInterval(timerInterval); // Arrête le timer
    // Ici, vous pouvez ajouter le code pour afficher le score final ou toute autre chose que vous souhaitez faire à la fin du jeu.
}

document.querySelector(".btnStart").addEventListener("click", startGame);

const reponseEls = document.querySelectorAll(".reponse");
reponseEls.forEach(el => {
    el.addEventListener("click", (event) => {
        checkAnswer(event.target.textContent);
    });
});
