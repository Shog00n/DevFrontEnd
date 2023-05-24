
const _btnStart = document.querySelector('.startBtn');
// const _btnRetry = document.querySelector('.retryBtn');
//const _btnNext = document.querySelector('.nextBtn');

let _retry = document.querySelector('.retry');
let _home = document.querySelector('.homeSection');
let _start = document.querySelector('.start');
let _question = document.querySelector('.questionSection');
let _timer = document.querySelector('.timerQuestion');
let _matiere = document.querySelector('.matiereQuestion');
let _repQCM = document.querySelector('.reponseQCM');
let _reponseSection = document.querySelector('reponseSection');
let _detailRep = document.querySelector('.detailReponse');
let _next = document.querySelector('.nextQuestion');


function cleanSectionClass() {
    _home.classList.remove('active');
    _question.classList.remove('active');
    _reponseSection.classList.remove('active');
}

function createBtn(namebtn, btnsection) {
    var btn = document.createElement('button');
    btn.classList.add(namebtn);
    btn.role = "button";
    btnsection.appendChild(btn);
}

_btnStart.addEventListener('click', function() {
    cleanSectionClass();
    createBtn("retryBtn", _retry);


})