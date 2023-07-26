const myForm = document.querySelector('.formAdd');
const myContainer = document.querySelector(".containerList");

myForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let form_data = new FormData(myForm);
    let saved_data = localStorage.getItem("toDo");
    let data = saved_data ? JSON.parse(saved_data) : {};
    let _thingToDo = form_data.get("thingToDo")

    if (!data["thingsToDo"]) {
        data["thingsToDo"] = [];
    }

    data["thingsToDo"].push({
        "À faire": _thingToDo,
        "État": false
    })

    let data_json = JSON.stringify(data);
    localStorage.setItem("toDo", data_json)

    listToDo()

})

function listToDo() {

    myContainer.innerHTML = ""
    let saved_data = localStorage.getItem("toDo")
    let data = saved_data ? JSON.parse(saved_data) : {};

    let divGeneral = document.createElement('div')
    divGeneral.classList.add('divGen')
    myContainer.appendChild(divGeneral)

    for(let i = 0; i < data["thingsToDo"].length; i++) {
        let divToDo = document.createElement('div')
        divToDo.classList.add('divToDo')
        divGeneral.appendChild(divToDo)

        let myThingToDo = document.createElement('p')
        myThingToDo.textContent = data["thingsToDo"][i]["À faire"]
        divToDo.appendChild(myThingToDo)

        let myCheckbox = document.createElement('input');
        myCheckbox.type = 'checkbox';
        myCheckbox.checked = data["thingsToDo"][i]["État"];
        divToDo.appendChild(myCheckbox)

        // Mise à jour initiale du style
        if (data["thingsToDo"][i]["État"]) {
            myThingToDo.classList.add('thingDo');
        }

        myCheckbox.addEventListener('change', function(){
            data["thingsToDo"][i]["État"] = myCheckbox.checked;
            localStorage.setItem("toDo", JSON.stringify(data));
            // Mise à jour du style lors du changement d'état
            if (myCheckbox.checked) {
                myThingToDo.classList.add('thingDo');
            } else {
                myThingToDo.classList.remove('thingDo');
            }
        })
    }
}

listToDo()
