const container = document.querySelector('#InternContainer')



const btn = document.querySelector('#Btn')

btn.addEventListener('click', function () {
    caca = 0
    if (caca == 0) {
        container.innerHTML = ""
    } else {
        let myDiv = document.createElement('div')
        myDiv.setAttribute('id', "divForJs")
        container.appendChild(myDiv)

        let myTitle = document.createElement('h1')
        myTitle.classList.add('text-lime-600')
        myTitle.innerHTML = "Wello Horld!"
        myDiv.appendChild(myTitle)

        caca++

    }


})