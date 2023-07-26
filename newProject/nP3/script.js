const NavBar = document.querySelector('.navBarContent');
const ContentSection = document.querySelector('.contentSection');

let user = ""

function cleanAll() {
    ContentSection.classList.remove("logIn");
    ContentSection.classList.remove("profil")
    ContentSection.classList.remove("playGame")
    ContentSection.classList.remove('home')

    NavBar.innerHTML = "";
    ContentSection.innerHTML = "";
};

function createMyElement(typeOfElement, classOfElement, parentOfElement) {
    myElement = document.createElement(typeOfElement);
    myElement.classList.add(classOfElement);
    parentOfElement.appendChild(myElement);

    return myElement;
};

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function clearTarget(clearThis){
    clearThis.innerHTML = ""
}

function profilConnect() {
    cleanAll();
    ContentSection.classList.add("logIn")

    myForm = createMyElement("form", "myForm", ContentSection);
    myLabelComponent = createMyElement("label", "labelForUsername", myForm);
    myLabelComponent.setAttribute('for', "Username");
    myLabelComponent.textContent = "Enter Your Username : ";
    myInputComponent = createMyElement("input", "usernameInput", myForm);
    myInputComponent.setAttribute('type', "text");
    myInputComponent.setAttribute('id', "Username");
    myInputComponent.setAttribute('name', "username")
    mySubmitBtn = createMyElement("button", "btn", myForm);
    mySubmitBtn.setAttribute('type', "submit");
    mySubmitBtn.textContent = "Log In";

    mySubmitFunction = myForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let form_data = new FormData(myForm);
        let saved_data = localStorage.getItem('userProfil')
        let data = saved_data ? JSON.parse(saved_data) : {};
        let _username = form_data.get("username");

        if (!data["profils"]) {
            data["profils"] = {}
        }
        if (!data["profils"][_username]){
            data["profils"][_username] = {
                "BestScore" : 0,
                "LastScore" : 0,
                "NbOfGame" : 0
            }
        }

        

        let data_json = JSON.stringify(data);
        localStorage.setItem('userProfil', data_json);

        localStorage.setItem('currentUsername', _username);
        user = _username

        createNavBar();
        

    })


}


function createNavBar() {
    cleanAll();
    ContentSection.classList.toggle('home')

    let myNavBar = createMyElement("nav", "navBar", NavBar);

    let myDivLogo = createMyElement("div", "divLogo", myNavBar);
    let myTitle = createMyElement("h1", "titleLogo", myDivLogo);
    myTitle.textContent = "nP3";
    let myStrongLogo = createMyElement("strong", "strongLogo", myDivLogo);
    myStrongLogo.textContent = "Pablo.Dev";

    let myListNavBar = createMyElement("ul", "listNavBar", myNavBar);
    let myListElement3 = createMyElement("li", "element3", myListNavBar);
    let myBtnProfil = createMyElement("button", "btn", myListElement3);
    myBtnProfil.classList.add('btnProfil');
    myBtnProfil.textContent = "Profil";
    let myListElement1 = createMyElement("li", "element1", myListNavBar);
    let myBtnChange = createMyElement("button", "btn", myListElement1);
    myBtnChange.classList.add('btnChange');
    myBtnChange.textContent = "Change";


    let textUser = createMyElement("p", "textHome", ContentSection);
    textUser.innerHTML = `Hi 👋 ${user}, let's Play !`
    let myBtnPlay = createMyElement("button", "btn", ContentSection);
    myBtnPlay.classList.add('btnPlay');
    myBtnPlay.textContent = "Play";
    
    myBtnProfil.addEventListener('click', function(e){
        e.preventDefault()

        cleanAll();

        showProfil();

    })

    myBtnChange.addEventListener('click', function(e){
        e.preventDefault();

        cleanAll()

        profilConnect()
    })

    myBtnPlay.addEventListener('click', function(e){
        e.preventDefault();

        cleanAll();

        playAGame()

    })

}

function showProfil(){
    ContentSection.classList.add('profil')

    let saved_data_json = localStorage.getItem('userProfil');
    let saved_data = JSON.parse(saved_data_json); 
    let _username = user
    let _bestScore = saved_data["profils"][_username]["BestScore"];
    let _lastScore = saved_data["profils"][_username]["LastScore"];
    let _nbOfGame = saved_data["profils"][_username]["NbOfGame"];

    let myDivProfil = createMyElement("div", "divProfil", ContentSection);
    let myTitle = createMyElement("h1", "nameUser", myDivProfil);
    myTitle.innerHTML = `Profil de ${_username}`
    let myPB = createMyElement("p", "bestScoreProfil", myDivProfil);
    myPB.innerHTML = `Best score : ${_bestScore}`;
    let myLastScore = createMyElement("p", "lastScoreProfil", myDivProfil);
    myLastScore.innerHTML = `Last score : ${_lastScore}`;
    let myNbOfGame = createMyElement("p", "nbGameProfil", myDivProfil);
    myNbOfGame.innerHTML = `Number of game : ${_nbOfGame}`;
    let myReturnBtn = createMyElement('button', "btn", myDivProfil);
    myReturnBtn.classList.add("btnReturn")
    myReturnBtn.innerHTML = "🔙"
    myReturnBtn.addEventListener('click', function(e){
        e.preventDefault();

        createNavBar()
    })


}

function getInput(thisContainer) {
    return new Promise((resolve) => {
        let myForm = createMyElement("form", "formRep", thisContainer);
        let textReponse = createMyElement("input", "repInput", myForm);
        textReponse.setAttribute('name', "reponse");
        textReponse.setAttribute('type', "text");
        textReponse.focus()
        let reponseBtn = createMyElement("input", "btn", myForm);
        reponseBtn.classList.add("repBtn");
        reponseBtn.setAttribute('type', "submit");

        myForm.addEventListener('submit', function(e){
            e.preventDefault();
            let form_data = new FormData(myForm);
            let _reponse = form_data.get("reponse");
            resolve(_reponse);
        });
    });
}

async function playAGame() {
    cleanAll()
    ContentSection.classList.add('playGame')

    let saved_data_json = localStorage.getItem('userProfil');
    let saved_data = JSON.parse(saved_data_json);
    let _nameuser = user;
    let _scoreUser = 0;
    let _userLifes = 3;
    let _goodAnswer = 0;
    let _userPB = saved_data["profils"][_nameuser]["BestScore"];
    let _userLastScore = saved_data["profils"][_nameuser]["LastScore"];
    let _nbOfGame = saved_data["profils"][_nameuser]["NbOfGame"];
    let scoreBoard = createMyElement("div", "scoreBoard", ContentSection);
    let scoreDisplay = createMyElement("p", "scoreDisplay", scoreBoard);
    let pbDisplay = createMyElement("p", "pbDisplay", scoreBoard);
    let lastScoreDisplay = createMyElement("p", "lastScoreDisplay", scoreBoard);
    let restLife = createMyElement("p", "restLife", scoreBoard);
    let divG = createMyElement("div", "divG", ContentSection);

    while(_userLifes > 0){
        scoreDisplay.textContent = `Score: ${_scoreUser}`;
        pbDisplay.textContent = `Personal Best: ${_userPB}`;
        lastScoreDisplay.textContent = `Last Score: ${_userLastScore}`;
        restLife.textContent = `${_userLifes} ❤️`
        
        let targetNum = 0;
        if (_goodAnswer < 3){
            targetNum = getRandomArbitrary(1, 10);
        } else if (_goodAnswer < 6) {
            targetNum = getRandomArbitrary(10, 100);
        } else if (_goodAnswer < 9) {
            targetNum = getRandomArbitrary(100, 1000);
        } else if (_goodAnswer < 14) {
            targetNum = getRandomArbitrary(1000, 10000);
        } else if (_goodAnswer < 20){
            targetNum = getRandomArbitrary(10000, 100000);
        } else {
            targetNum = getRandomArbitrary(100000, 1000000);
        }
        let divAnswer = createMyElement("div", "answerDiv", divG)
        let divTarget = createMyElement("div", "divTarget", divAnswer)
        let textTarget = createMyElement("p", "textTarget", divTarget)
        textTarget.innerHTML = "Remember This : "
        let showTarget = createMyElement("p", "targetNb", divTarget);
        showTarget.innerHTML = `${targetNum}`;
        let divBtnQuit = createMyElement("div", "divBtnQuit", divG)
        let quitBtn = createMyElement("button", "btn", divBtnQuit)
        quitBtn.classList.add("btnQuit")
        quitBtn.textContent = "Quit"
        quitBtn.addEventListener('click', function(e){
            e.preventDefault()

            createNavBar();
        })

        setTimeout(() => {
            clearTarget(showTarget);
        }, 1000);

        let _reponse = await getInput(divAnswer);
        if (_reponse == targetNum) {
            _scoreUser = _scoreUser+5;
            _goodAnswer++;
            if (_scoreUser > _userPB) {
                _userPB = _scoreUser;
                pbDisplay.textContent = `Personal Best: ${_userPB}`;
            }
        } else {
            _userLifes--;
        }
        
        divG.innerHTML = ""
        
        
    }

    ContentSection.innerHTML = ""

    // Update user data after the game
    _userLastScore = _scoreUser;
    _nbOfGame++;
    saved_data["profils"][_nameuser]["BestScore"] = _userPB;
    saved_data["profils"][_nameuser]["LastScore"] = _userLastScore;
    saved_data["profils"][_nameuser]["NbOfGame"] = _nbOfGame;
    localStorage.setItem('userProfil', JSON.stringify(saved_data));

    // Show end game scoreboard
    let endGameBoard = createMyElement("div", "endGameBoard", ContentSection);
    createMyElement("p", "finalScoreDisplay", endGameBoard).textContent = `Final Score: ${_scoreUser}`;
    createMyElement("p", "finalGoodAnswerDisplay", endGameBoard).textContent = `Good Answers: ${_goodAnswer}`;
    createMyElement("p", "finalPbDisplay", endGameBoard).textContent = `Personal Best: ${_userPB}`;
    createMyElement("p", "finalGameNbDisplay", endGameBoard).textContent = `Game Number: ${_nbOfGame}`;

    // Add buttons to replay or go back to homepage
    let divBtnEndGame = createMyElement("div", "divBtnEndGame", endGameBoard);
    let replayButton = createMyElement("button", "btn", divBtnEndGame);
    replayButton.textContent = "Play Again";
    replayButton.addEventListener('click', playAGame);

    let homeButton = createMyElement("button", "btn", divBtnEndGame);
    homeButton.textContent = "Back Home";
    homeButton.addEventListener('click', createNavBar);

}



profilConnect()



