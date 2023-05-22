const _addBtn = document.querySelector('.btnAdd');
const _findBtn = document.querySelector('.btnFind');
const _logoHome = document.querySelector('.logo')

let _sectionAdd = document.querySelector('.addMovieSection');
let _sectionFind= document.querySelector('.findMovieSection');

let _movieTitle = document.querySelector('.movieTitle');
let _movieReal = document.querySelector('.movieReal');
let _movieGenre = document.querySelector('.movieGenre');
let _rateImdb= document.querySelector('.rateImdb');
let _synopsis = document.querySelector('.synopsis');
let _afficheMovie = document.querySelector('.afficheMovie');

var requestURL = 'movies.json';
var request = new XMLHttpRequest();

function cleanClass() {
    _sectionAdd.classList.remove('active');
    _sectionFind.classList.remove('active');

}

function clearContent() {
    _movieTitle.innerHTML = "";
    _movieReal.innerHTML = "";
    _movieGenre.innerHTML = "";
    _rateImdb.innerHTML = "";
    _synopsis.innerHTML = "";
    _afficheMovie.innerHTML = "";

}

function getRandomIdMovie(max) {
    return Math.floor(Math.random() * max);
  }

function findMovie(jsonObj) {

    var randomIdMovie = getRandomIdMovie(jsonObj['numberOfMovie']);

    var myTitle = document.createElement('h1');
    myTitle.textContent = jsonObj['movies'][randomIdMovie]['movieName'];
    _movieTitle.appendChild(myTitle);

    var movieReal = document.createElement('strong');
    movieReal.textContent = jsonObj['movies'][randomIdMovie]['movieRealisator'];
    _movieReal.appendChild(movieReal);

    var movieGenre = document.createElement('p');
    movieGenre.textContent = jsonObj['movies'][randomIdMovie]['movieGenre'];
    _movieGenre.appendChild(movieGenre);

    var movieRate = document.createElement('p');
    movieRate.textContent = jsonObj['movies'][randomIdMovie]['movieRateImdb'];
    _rateImdb.appendChild(movieRate);

    var movieSynopsis = document.createElement('p');
    movieSynopsis.textContent = jsonObj['movies'][randomIdMovie]['movieSynopsis'];
    _synopsis.appendChild(movieSynopsis);

    var afficheMovie = document.createElement('img');
    afficheMovie.src = jsonObj['movies'][randomIdMovie]['movieAffiche']
    afficheMovie.alt = 'Affiche de ' + myTitle;
    _afficheMovie.appendChild(afficheMovie);
}

_addBtn.addEventListener('click', function() {
    clearContent();
    cleanClass();
    
    _sectionAdd.classList.toggle('active');

})

_findBtn.addEventListener('click', function() {
    clearContent();
    cleanClass();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send()

    request.onload = function() {
        var movies = request.response;
        findMovie(movies);
        _sectionFind.classList.toggle('active');
    }
    

})

_logoHome.addEventListener('click', function() {
    clearContent();
    cleanClass();
})