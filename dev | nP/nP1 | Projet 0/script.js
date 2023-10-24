const heroSection = document.querySelector('.heroSection')
const contentSection = document.querySelector('.contentSection')
const titleSection = document.querySelector('.titleSection')
const content = document.querySelector('.content')
const footSection = document.querySelector('.footSection')

const btnAbout = document.querySelector('.btnAbout')
const btnNews = document.querySelector('.btnNews')
const btnArticles = document.querySelector('.btnArticles')
const btnContact = document.querySelector('.btnContact')

function cleanThat() {
    heroSection.classList.remove('active')
    heroSection.innerHTML = ""

    contentSection.classList.remove('active')

    titleSection.classList.remove('active')
    titleSection.innerHTML = ""

    content.classList.remove('active')
    content.innerHTML = ""

    footSection.classList.remove('active')
    footSection.innerHTML = ""
}

function myNewElement(type, elementClass = "", contentText = "", parent) {
    let myElement = document.createElement(type)
    if(elementClass !== "") {
        myElement.classList.add(elementClass)
    }
    if(contentText !== "") {
        myElement.textContent = contentText
    }
    parent.appendChild(myElement)
    return myElement
}