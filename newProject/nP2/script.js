const containerSection = document.querySelector('.Container')
const formSection = document.querySelector('.cityChoice')

function cleanAll() {
    containerSection.classList.remove('active')
    containerSection.innerHTML = ""
}

function createElements(typeElement, className, parentDiv) {
    let myElement = document.createElement(typeElement)
    myElement.classList.add(className)
    parentDiv.appendChild(myElement)
    return myElement
}


formSection.addEventListener('submit', function(e) {
    e.preventDefault();
    cleanAll()
    let form_data = new FormData(formSection)
    let _city = form_data.get("chooseCity")
    let date = new Date();
    
    let showDate = date.getUTCHours();

    myDiv = createElements("div", "hourDiv", containerSection)
    myText = createElements("p", "textCity", myDiv)
    myText.textContent = _city + " : " + showDate
})

