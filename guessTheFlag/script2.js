let data;
let score = 0;
let currentQuestion;
let timerInterval = null;
let timeLeft = 30;
const TOTAL_ANSWERS = 3;

// Charger les données de drapeau à partir du fichier JSON
fetch('pays.json')
    .then(response => response.json())
    .then(json => data = json)
    .catch(error => console.error('Erreur:', error));

function generateRandomIndex() {
    return Math.floor(Math.random() * data.nbDeDrapeaux);
}

function generateQuestion() {
    let correctAnswer = data.pays[generateRandomIndex()];

    let wrongAnswers = [];
    while (wrongAnswers.length < TOTAL_ANSWERS) {
        let wrongAnswer = data.pays[generateRandomIndex()];
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

function updateScore() {
    document.querySelector(".score").textContent = `Score: ${score}`;
}

function checkAnswer(userAnswer) {
    if (userAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    updateScore();
    generateQuestion();
    displayQuestion();
}

function resetGame() {
    timeLeft = 30;
    score = 0;
    updateScore();
}

function toggleVisibility(sectionSelector, shouldBeActive) {
    const sectionElement = document.querySelector(sectionSelector);
    if (shouldBeActive) {
        sectionElement.classList.add('active');
    } else {
        sectionElement.classList.remove('active');
    }
}

function startGame() {
    resetGame();
    toggleVisibility('.startSection', false);
    toggleVisibility('.questionSection', true);

    timerInterval = setInterval(() => {
        timeLeft--;
        document.querySelector(".timerQuestion").textContent = `Temps restant : ${timeLeft} s`;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);

    generateQuestion();
    displayQuestion();
}

function endGame() {
    clearInterval(timerInterval); 
    toggleVisibility('.questionSection', false);
    toggleVisibility('.resultatFinSection', true);
    document.querySelector('.score2').textContent = `Score: ${score}`;
}

function addActiveClassToStartSection() {
    toggleVisibility('.startSection', true);
    toggleVisibility('.resultatFinSection', false);
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
