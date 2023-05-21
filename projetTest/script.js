
// Create variables for buttons
const _homeBtn = document.querySelector('.btnHome');
const _addBtn = document.querySelector('.btnAdd');
const _findBtn = document.querySelector('.btnFind');
const _menuToggle = document.querySelector('.checkToggle');


// Create variables for sections
let _headerSection = document.querySelector('.topPage');
let _homePageSection = document.querySelector('.homePage');
let _addMovieSection = document.querySelector('.addMoviePage');
let _findMovieSection = document.querySelector('.findMoviePage');
let _btnNavBarSection = document.querySelector('.btnNavBar');



// Create function for raz all of section active name
function cleanActiveClassName() {
    _addMovieSection.classList.remove('active');
    _findMovieSection.classList.remove('active');
    _homePageSection.classList.toggle('active');
    _headerSection.classList.remove('active');
    _btnNavBarSection.classList.remove('active');

    if (_menuToggle.checked) {
        _menuToggle.checked = false;
    }
};

// Add click event for change class section's names
_addBtn.addEventListener('click', function() {
    cleanActiveClassName();
    _addMovieSection.classList.toggle('active');
    _headerSection.classList.toggle('active');
    _homePageSection.classList.add('active');
});

_findBtn.addEventListener('click', function() {
    cleanActiveClassName();
    _findMovieSection.classList.toggle('active');
    _headerSection.classList.toggle('active');
    _homePageSection.classList.add('active');
});

_homeBtn.addEventListener('click', function() {
    cleanActiveClassName();
    _homePageSection.classList.remove('active');

})


_menuToggle.addEventListener('change', function() {
    if (this.checked && _homePageSection.classList.contains('active') && _addMovieSection.classList.contains('active')) {
        _btnNavBarSection.classList.add('active');
        
    } else if (this.checked && _homePageSection.classList.contains('active')) {
        _btnNavBarSection.classList.add('active');
        _homePageSection.classList.remove('active');
    }
    else if (this.checked) {
        _btnNavBarSection.classList.add('active');
    }
    else {
        _btnNavBarSection.classList.remove('active');
    }

  });

