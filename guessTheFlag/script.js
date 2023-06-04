let data;
let score = 0;
let currentQuestion;
let timerInterval = null;
let timeLeft = 30;

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
    
    const reponseEls = document.querySelectorAll(".reponse");
    reponseEls.forEach((el, index) => {
        el.textContent = currentQuestion.answers[index];
    });
}

function checkAnswer(userAnswer) {
    if (userAnswer === currentQuestion.correctAnswer) {
        score++;
    } else {
        score = score;
    }

    document.querySelector(".score").textContent = "Score : " + score;

    generateQuestion();
    displayQuestion();
}

function startGame() {
    // Réinitialisez les compteurs à leurs valeurs de départ
    questionCount = 0;
    timeLeft = 30;
    score = 0;

    document.querySelector(".score").textContent = "Score: " + score;
    document.querySelector('.startSection').classList.remove('active');
    document.querySelector('.questionSection').classList.add('active');
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

    document.querySelector('.questionSection').classList.remove('active');
    document.querySelector('.resultatFinSection').classList.add('active');
    document.querySelector('.score2').textContent = "Score: " + score;
    // Ici, vous pouvez ajouter le code pour afficher le score final ou toute autre chose que vous souhaitez faire à la fin du jeu.

}
function addActiveClassToStartSection() {
    document.querySelector('.startSection').classList.add('active');
    document.querySelector('.resultatFinSection').classList.remove('active');
}

document.querySelector(".btnStart").addEventListener("click", startGame);
document.querySelector(".btnNG").addEventListener("click", addActiveClassToStartSection);
document.querySelector(".btnNG2").addEventListener("click", addActiveClassToStartSection)
const reponseEls = document.querySelectorAll(".reponse");
reponseEls.forEach(el => {
    el.addEventListener("click", (event) => {
        checkAnswer(event.target.textContent);
    });
});
