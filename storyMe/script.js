// Sélectionner les éléments HTML correspondant aux boutons et aux sections
const btnRandom = document.querySelector('.btnRandom');
const btnList = document.querySelector('.btnList');
const btnHome = document.querySelector('.btnHome');
const section = document.querySelector('.section-center');
const sectionList = document.querySelector('.section-listStory');
const imgBg = document.querySelector('.bgIllustration')


// Sélectionner les éléments HTML correspondant aux titres, au contenu et à l'image des histoires
var storyTitle = document.querySelector('.StoryTitle');
var story = document.querySelector('.Story');
var storyImage = document.querySelector('.StoryImage');

// Sélectionner l'élément HTML correspondant à la liste des histoires
var storyList = document.querySelector('.listeOfStories');

// URL de la requête pour charger les données JSON des histoires
var requestURL = 'stories.json';
var request = new XMLHttpRequest();

// Fonction pour générer un ID aléatoire d'histoire
function getRandomIdStory(max) {
  return Math.floor(Math.random() * max);
}

// Fonction pour remttre à zéro les données 
function clearContent() {
  storyTitle.innerHTML = "";
  story.innerHTML = "";
  storyImage.innerHTML = "";
  storyList.innerHTML = "";
}

// Fonction pour afficher une histoire aléatoire
function showStory(jsonObj) {
  
  // Générer un ID aléatoire pour sélectionner une histoire dans le tableau des histoires
  var randomIdStory = getRandomIdStory(jsonObj['numberOfStories']);

  // Créer les éléments HTML correspondant au titre, au contenu et à l'image de l'histoire
  var myH1 = document.createElement('h1');
  myH1.textContent = jsonObj['stories'][randomIdStory]['storyName'];
  storyTitle.appendChild(myH1);

  var myStory = document.createElement('p');
  myStory.textContent = jsonObj['stories'][randomIdStory]['story'];
  story.appendChild(myStory);

  var myImg = document.createElement('img');
  myImg.src = jsonObj['stories'][randomIdStory]['storyImage'];
  storyImage.appendChild(myImg);
}

// Ajouter un écouteur d'événement au bouton "Random"
btnRandom.addEventListener('click', function () {
  // Basculer la classe "active" de la section "Random" et supprimer la classe "active" de la section "List"
  section.classList.remove('active');
  sectionList.classList.remove('active');
  imgBg.classList.add('active');

  // Réinitialiser les éléments HTML du titre, du contenu et de l'image de l'histoire
  clearContent();

  // Ouvrir la requête GET pour charger les données JSON des histoires
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function () {
    // Récupérer les données JSON des histoires
    var stories = request.response;

    // Afficher une histoire aléatoire
    showStory(stories);
    section.classList.add('active');
  };
});

// Ajouter un écouteur d'événement au bouton "List"
btnList.addEventListener('click', function () {
  // Basculer la classe "active" de la section "List" et supprimer la classe "active" de la section "Random"
  sectionList.classList.add('active');
  section.classList.remove('active');
  imgBg.classList.add('active');

  // Réinitialiser les éléments HTML du titre, du contenu et de l'image de l'histoire
  clearContent();

  // Ouvrir la requête GET pour charger les données JSON des histoires
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function () {
    // Récupérer les données JSON des histoires
    var listStories = request.response;

    // Afficher la liste des histoires
    showListStory(listStories);
  };
});

btnHome.addEventListener('click', function() {
  section.classList.remove('active');
  sectionList.classList.remove('active');
  imgBg.classList.remove('active');
})

// Fonction pour afficher la liste des histoires
function showListStory(jsonObj) {
  // Récupérer les informations sur les histoires, les versions et les créateurs depuis les données JSON
  var listofStories = jsonObj['stories'];
  var versions = jsonObj['versionPackStory'];
  var creator = jsonObj['creator'];

  // Créer le titre de la liste des histoires
  var myH1 = document.createElement('h1');
  myH1.textContent = 'Pack Story Version ' + versions + ' par ' + creator;
  storyList.appendChild(myH1);

  // Créer la liste des histoires
  var AllStories = document.createElement('ul');
  storyList.appendChild(AllStories);

  // Parcourir toutes les histoires
  for (var i = 0; i < listofStories.length; i++) {
    // IIFE (Immediately Invoked Function Expression) pour capturer la valeur actuelle de la variable "i"
    (function (index) {
      // Créer un élément de liste pour chaque histoire
      var storyItem = document.createElement('li');
      AllStories.appendChild(storyItem);

      // Créer un bouton pour chaque histoire
      var storyLink = document.createElement('button');
      storyLink.setAttribute('class', 'buttonStory');
      storyLink.setAttribute('id', 'btn' + index);
      storyLink.addEventListener('click', function () {
        // Basculer la classe "active" de la section "Random" et supprimer la classe "active" de la section "List"
        section.classList.add('active');
        sectionList.classList.remove('active');

        // Réinitialiser les éléments HTML du titre, du contenu et de l'image de l'histoire
        clearContent();

        // Ouvrir la requête GET pour charger les données JSON des histoires
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();

        request.onload = function () {
          // Récupérer les données JSON des histoires
          var stories = request.response;

          // Afficher l'histoire sélectionnée
          showThisStory(stories, listofStories, index);
        };
      });

      // Définir le texte du bouton avec le nom de l'histoire
      storyLink.textContent = listofStories[index]['storyName'];
      storyItem.appendChild(storyLink);
    })(i);
  }
}

// Fonction pour afficher une histoire sélectionnée
function showThisStory(jsonObj, listofStories, index) {

  // Réinitialiser les éléments HTML du titre, du contenu et de l'image de l'histoire
  clearContent();


  // Créer les éléments HTML correspondant au titre, au contenu et à l'image de l'histoire sélectionnée
  var myH1 = document.createElement('h1');
  myH1.textContent = listofStories[index]['storyName'];
  storyTitle.appendChild(myH1);

  var myStory = document.createElement('p');
  myStory.textContent = listofStories[index]['story'];
  story.appendChild(myStory);

  var myImg = document.createElement('img');
  myImg.src = listofStories[index]['storyImage'];
  storyImage.appendChild(myImg);
}
