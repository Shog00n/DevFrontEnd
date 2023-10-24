const navBar = document.querySelector('.navBar')

const contentSection = document.querySelector('.contentSectiont')
const titleSection = document.querySelector('.titleSection')
const content = document.querySelector('.content')

const btnHomePlay = document.querySelector('.btnHomePlay')

function cleanThat() {
    navBar.classList.remove('active')
    contentSection.classList.remove('active')
    titleSection.classList.remove('active')
    content.classList.remove('active')

    navBar.innerHTML = ""
    titleSection.innerHTML = ""
    content.innerHTML = ""

}

function myNewElement(type, parents){
    let myElement = document.createElement(type)
    parents.appendChild(myElement)
    return myElement
}

function createSoloParty() {
    cleanThat()
}
function createMultiParty() {
    cleanThat()
}

function createParty() {
    cleanThat()

    contentSection.classList.toggle('active')
    titleSection.classList.toggle('active')
    content.classList.toggle('active')

    let myTitle = myNewElement('h1', titleSection)
    myTitle.textContent = "Choix de la partie"

    let soloMod = myNewElement('button', content)
    soloMod.textContent = "Solo"
    let multiMod = myNewElement('button', content)
    multiMod.textContent = "Multi"

    soloMod.addEventListener('click', () => createSoloParty())
    multiMod.addEventListener('click', () => createMultiParty())

}
btnHomePlay.addEventListener('click', function(e){
    e.preventDefault()
    cleanThat()

    createParty()
})