const _btnAppel = document.querySelector('.btnCheck');
const _btnAjout = document.querySelector('.btnAdd');

let _espaceSection = document.querySelector('.sectionSpace');
let _titreSection = document.querySelector('.titleSection');
let _contenuSection = document.querySelector('.containSection');

function clearContent() {
    _titreSection.innerHTML = "";
    _contenuSection.innerHTML = "";
}

function addElement(parent, elementType, options = {}) {
    let element = document.createElement(elementType);

    for (let key in options) {
        if (key === 'text') {
            element.textContent = options[key];
        } else {
            element[key] = options[key];
        }
    }

    parent.appendChild(element);
    return element;
}

function addStudent() {
    addElement(_titreSection, 'h1', { text: 'Ajouter un élève :' });

    let myForm = addElement(_contenuSection, 'FORM');

    let semaineChoose = addElement(myForm, 'div', { className: 'chooseSemaine' });

    addElement(semaineChoose, 'input', { type: 'RADIO', name: 'Semaine', value: 'Semaine A', id: 'SemaineA' });
    addElement(semaineChoose, 'LABEL', { htmlFor: 'SemaineA', text: 'Semaine A' });
    



    addElement(semaineChoose, 'input', { type: 'RADIO', name: 'Semaine', value: 'Semaine B', id: 'SemaineB' });
    addElement(semaineChoose, 'LABEL', { htmlFor: 'SemaineB', text: 'Semaine B' });
    

    let joursOptions = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
    let mySelectMenu2 = addElement(myForm, 'SELECT', { name: "jours", id: "Jours" });
    joursOptions.forEach(option => addElement(mySelectMenu2, 'option', { value: option, text: option }));

    let horairesOptions = ["8h", "9h", "10h", "11h", "14h", "15h", "16h"];
    let mySelectMenu1 = addElement(myForm, 'SELECT', { name: "horaires", id: "Horaires" });
    horairesOptions.forEach(option => addElement(mySelectMenu1, 'option', { value: option, text: option }));

    let addName = addElement(myForm, 'div', { className: "addName" });
    addElement(addName, 'LABEL', { htmlFor: "studentName", text: "Nom de l'élève : " });
    addElement(addName, 'INPUT', { name: "studentName", id: "studentName", type: 'TEXT' });

    let addClasses = addElement(myForm, 'div', { className: "addClasses" });
    addElement(addClasses, 'LABEL', { htmlFor: "studentClasses", text: "Classe de l'élève : " });
    addElement(addClasses, 'INPUT', { name: "studentClasses", id: "studentClasses", type: 'TEXT' });

    let Submit = addElement(myForm, 'INPUT', { type: 'SUBMIT', value: "Ajouter", className: "btn" });

    myForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let form_data = new FormData(myForm);
        let saved_data = localStorage.getItem('formData');
        let data = saved_data ? JSON.parse(saved_data) : {};
        let semaine = form_data.get("Semaine");
        let jour = form_data.get("jours");
        let horaire = form_data.get("horaires");
        let nomEleve = form_data.get("studentName");
        let classeEleve = form_data.get("studentClasses");

        if (nomEleve === '' || classeEleve === '') {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        if (!data[semaine]) {
            data[semaine] = {};
        }
        if (!data[semaine][jour]) {
            data[semaine][jour] = {};
        }
        if (!data[semaine][jour][horaire]) {
            data[semaine][jour][horaire] = [];
        }


        data[semaine][jour][horaire].push({
            "Nom de l'élève": nomEleve,
            "Classe de l'élève": classeEleve
        });

        let data_json = JSON.stringify(data);
        localStorage.setItem('formData', data_json);

        alert('L\'élève a été ajouté avec succès.');
    });
}

function createCSVFile(data) {
    const currentDate = new Date();
    const dateTime = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}_${currentDate.getHours()}`;
    const csvHeader = ['Nom de l\'élève', 'Classe de l\'élève', 'Présence', 'CDI'];
    const csvRows = [];

    data.forEach(item => {
        let presenceStatus = item['Présence'] || item['CDI'] ? 'Présent' : 'Absent';  // change here
        csvRows.push(`${item['Nom de l\'élève']},${item['Classe de l\'élève']},${presenceStatus},${item['CDI'] ? 'Oui' : 'Non'}`);
    });

    const csvString = csvHeader.join(',') + '\n' + csvRows.join('\n');
    const csvBlob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });

    const url = URL.createObjectURL(csvBlob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `appel_perm_du_${dateTime}H.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


function displayStudent() {
    addElement(_titreSection, 'h1', { text: 'Afficher les élèves :' });

    let myForm = addElement(_contenuSection, 'FORM');

    let semaineChoose = addElement(myForm, 'div', { className: 'chooseSemaine' });

    addElement(semaineChoose, 'input', { type: 'RADIO', name: 'Semaine', value: 'Semaine A', id: 'SemaineA' });
    addElement(semaineChoose, 'LABEL', { htmlFor: 'SemaineA', text: 'Semaine A' });

    addElement(semaineChoose, 'input', { type: 'RADIO', name: 'Semaine', value: 'Semaine B', id: 'SemaineB' });
    addElement(semaineChoose, 'LABEL', { htmlFor: 'SemaineB', text: 'Semaine B' });

    let joursOptions = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
    let mySelectMenu2 = addElement(myForm, 'SELECT', { name: "jours", id: "Jours" });
    joursOptions.forEach(option => addElement(mySelectMenu2, 'option', { value: option, text: option }));

    let horairesOptions = ["8h", "9h", "10h", "11h", "14h", "15h", "16h"];
    let mySelectMenu1 = addElement(myForm, 'SELECT', { name: "horaires", id: "Horaires" });
    horairesOptions.forEach(option => addElement(mySelectMenu1, 'option', { value: option, text: option }));

    let Submit = addElement(myForm, 'INPUT', { type: 'SUBMIT', value: "Afficher", className: "btn" });

    myForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let form_data = new FormData(myForm);
        let saved_data = localStorage.getItem('formData');
        let data = saved_data ? JSON.parse(saved_data) : {};

        let semaine = form_data.get("Semaine");
        let jour = form_data.get("jours");
        let horaire = form_data.get("horaires");

        let students = data[semaine][jour][horaire] || [];

        clearContent();
        addElement(_titreSection, 'h1', { text: `${semaine}, ${jour}, ${horaire}, Élèves :` });

        let table = addElement(_contenuSection, 'table', { className: 'students-table' });
        let thead = addElement(table, 'thead');
        let headerRow = addElement(thead, 'tr');

        addElement(headerRow, 'th', { text: 'Présence' });
        addElement(headerRow, 'th', { text: 'Nom' });
        addElement(headerRow, 'th', { text: 'Classe' });
        addElement(headerRow, 'th', { text: 'CDI'});

        let tbody = addElement(table, 'tbody');
        
        students.forEach(student => {
            let row = addElement(tbody, 'tr');

            let checkboxCell = addElement(row, 'td', {className: 'checkboxSpace'});
            let labelAll = addElement(checkboxCell, 'label');
            labelAll.className = "checkbox-btn";
            let labelForCheck = addElement(labelAll, 'label', {htmlFor: 'checkbox'})
            let checkbox = addElement(labelAll, 'input', { type: 'checkbox', id : "checkbox"});
            let checkmarkChek = addElement(labelAll, 'span', {className: 'checkmark'} )
    
            checkbox.addEventListener('change', function() {
                student['Présence'] = checkbox.checked;
                localStorage.setItem('formData', JSON.stringify(data));
            });
    
    
            addElement(row, 'td', { text: student['Nom de l\'élève'] });
            addElement(row, 'td', { text: student['Classe de l\'élève'] });
            
            let cdiCell = addElement(row, 'td', {className: 'checkbox2'});
            let labelAll2 = addElement(cdiCell, 'label');
            labelAll2.className = "checkbox-btn";
            let labelForCheck2 = addElement(labelAll2, 'label', {htmlFor: 'checkbox'})
            let cdiCheckbox = addElement(labelAll2, 'input', { type: 'checkbox'});
            let checkmarkChek2 = addElement(labelAll2, 'span', {className: 'checkmark'} )
    
            cdiCheckbox.addEventListener('change', function() {
                student['CDI'] = cdiCheckbox.checked;
                localStorage.setItem('formData', JSON.stringify(data));
            });
        });
        
        let csvButton = addElement(_contenuSection, 'button', { text: 'CSV 💾' });
        csvButton.className = "btn";
        csvButton.addEventListener('click', function() {
            createCSVFile(students);
        });

    });
}

function clearTimeoutIfExists(timeoutID) {
    if (timeoutID !== null) {
        clearTimeout(timeoutID);
    }
}

let _btnAjoutTimeout = null;
let _btnAppelTimeout = null;

_btnAjout.addEventListener('click', function() {
    clearContent();
    clearTimeoutIfExists(_btnAppelTimeout);
    _btnAjoutTimeout = setTimeout(addStudent);
});

_btnAppel.addEventListener('click', function() {
    clearContent();
    clearTimeoutIfExists(_btnAjoutTimeout);
    _btnAppelTimeout = setTimeout(displayStudent);
});
