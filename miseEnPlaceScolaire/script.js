const _btnAdd = document.querySelector('.btnAdd');
const _btnSearch = document.querySelector('.btnSearch');
const _btnList = document.querySelector('.btnList');

let sectionContainer = document.querySelector('.sectionContainer');
let titleSection = document.querySelector('.titleSection');
let content = document.querySelector('.content');
let footSection = document.querySelector('.footSection');

function cleanThat() {
    titleSection.innerHTML = "";
    content.innerHTML = "";
    footSection.innerHTML = "";
    sectionContainer.classList.remove('add');
    sectionContainer.classList.remove('search');
    sectionContainer.classList.remove('list');
}

function downloadCSV(studentClasses) {
    
    let saved_data = localStorage.getItem('formData');
    let data = saved_data ? JSON.parse(saved_data) : {};

    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += ["Classe", "Nom", "Régime", "Droit Image", "Assurance"].join(",") + "\n";

    

    for (let classe in data) {
        for (let student in data[classe]) {
            for (let info of data[classe][student]) {
                let row = [
                    classe,
                    student,
                    info["Régime de sortie"],
                    info["Droit à l'image"],
                    info["Assurance"],
                ];
                csvContent += row.join(",") + "\n";
            }
        }
        
    }


    let encodedUri = encodeURI(csvContent);


    let link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `recap_${studentClasses.innerHTML}.csv`);


    document.body.appendChild(link);

    link.click();


    document.body.removeChild(link);
    
}

function generateCSV(data, filterType, filterValue) {
    let csvContent = "Nom,Classe\n";
    data.forEach(item => {
        csvContent += `${item.name},${item.class}\n`; 
    });

    let blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    let link = document.createElement("a");
    let url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    // Replace spaces and colons in filter type and value to avoid issues with file names
    let safeFilterType = filterType.replace(/[\s:]/g, '_');
    let safeFilterValue = filterValue.replace(/[\s:]/g, '_');
    link.setAttribute("download", `recap_${safeFilterType}_${safeFilterValue}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}




_btnAdd.addEventListener('click', function() {
    cleanThat();
    sectionContainer.classList.add('add');

    let myTitle = document.createElement('h1');
    myTitle.innerHTML = '<span class="firstLetter">A</span>jouter un élèv<span class="lastLetter">e</span>';
    titleSection.appendChild(myTitle);

    let myDivForm = document.createElement('div');
    myDivForm.classList.add('formAdd');
    content.appendChild(myDivForm);

    let myForm = document.createElement('FORM');
    myDivForm.appendChild(myForm);

    let myDivClasses = document.createElement('div');
    myDivClasses.classList.add("chooseClasses");
    myForm.appendChild(myDivClasses);

    let myLabelClasses = document.createElement('label');
    myLabelClasses.setAttribute('for', "classes-select");
    myLabelClasses.innerHTML = '<span class="firstLetter">C</span>hoisir la class<span class="lastLetter">e</span> : ';
    myDivClasses.appendChild(myLabelClasses);

    let mySelectMenu = document.createElement('select');
    mySelectMenu.setAttribute('name', "studentClasses");
    mySelectMenu.setAttribute('id', "classes-select");
    myDivClasses.appendChild(mySelectMenu);

    let options = ["Classes", "6A", "6B", "6C", "6D", "5A", "5B", "5C", "5D", "4A", "4B", "4C", "4D", "3A", "3B", "3C", "3D"]
    for(let i = 0; i < options.length; i++) {

        let option = document.createElement('option');
        option.value = options[i];
        option.text = options[i];

        mySelectMenu.appendChild(option);
    }

    let myDivName = document.createElement('div');
    myDivName.classList.add("addName");
    myForm.appendChild(myDivName);

    let myInputName = document.createElement('input');
    myInputName.setAttribute('required', "");
    myInputName.setAttribute('type', "text");
    myInputName.setAttribute('id', "name-input");
    myInputName.setAttribute('name', "studentName")
    myInputName.classList.add("input");
    myDivName.appendChild(myInputName);

    let spanHigh = document.createElement('span');
    spanHigh.classList.add('highlight');
    myDivName.appendChild(spanHigh);

    let spanBar = document.createElement('span');
    spanBar.classList.add('bar');
    myDivName.appendChild(spanBar);

    let myLabelName = document.createElement('label');
    myLabelName.setAttribute('for', "name-input");
    myLabelName.innerHTML = '<span class="firstLetter">N</span>om de l\'élèv<span class="lastLetter">e</span> : ';
    myDivName.appendChild(myLabelName);

    

    let myFieldRegime= document.createElement('fieldset');
    myFieldRegime.classList.add("regimeSortie");
    myForm.appendChild(myFieldRegime);

    let regimeName = document.createElement('legend');
    regimeName.innerHTML = '<span class="firstLetter">R</span>égime de sorti<span class="lastLetter">e</span>';
    myFieldRegime.appendChild(regimeName);

    let divGeneralRegime = document.createElement('div');
    divGeneralRegime.classList.add('generalDivRegime');
    myFieldRegime.appendChild(divGeneralRegime);

    let myDivSE = document.createElement('div');
    myDivSE.classList.add('SERegime');
    divGeneralRegime.appendChild(myDivSE);

    let myLabelSE = document.createElement('label');
    myLabelSE.setAttribute('for', "regimeSE");
    myLabelSE.textContent = "SE"
    myDivSE.appendChild(myLabelSE);

    let myInputSE = document.createElement('input');
    myInputSE.setAttribute('type', "radio");
    myInputSE.setAttribute('name', "regimeG");
    myInputSE.setAttribute('value', "SE");
    myInputSE.setAttribute('id', "regimeSE");
    myDivSE.appendChild(myInputSE);

    let myDivSN = document.createElement('div');
    myDivSN.classList.add('SNRegime');
    divGeneralRegime.appendChild(myDivSN);

    let myLabelSN = document.createElement('label');
    myLabelSN.setAttribute('for', "regimeSN");
    myLabelSN.textContent = "SN"
    myDivSN.appendChild(myLabelSN);

    let myInputSN = document.createElement('input');
    myInputSN.setAttribute('type', "radio");
    myInputSN.setAttribute('name', "regimeG");
    myInputSN.setAttribute('value', "SN");
    myInputSN.setAttribute('id', "regimeSN");
    myDivSN.appendChild(myInputSN);

    let myFieldPension = document.createElement('fieldset');
    myFieldPension.classList.add("demi_pension");
    myForm.appendChild(myFieldPension);

    let pensionName = document.createElement('legend');
    pensionName.innerHTML = '<span class="firstLetter">R</span>epa<span class="lastLetter">s</span>';
    myFieldPension.appendChild(pensionName);

    let divGeneralPension = document.createElement('div');
    divGeneralPension.classList.add('generalDivPension');
    myFieldPension.appendChild(divGeneralPension);

    let divOkMange = document.createElement('div');
    divOkMange.classList.add("okMange");
    divGeneralPension.appendChild(divOkMange);

    let myDivPensionDp = document.createElement('div');
    myDivPensionDp.classList.add('demiPensionaire');
    divOkMange.appendChild(myDivPensionDp);

    let myLabelDp = document.createElement('label');
    myLabelDp.setAttribute('for', 'demiPension');
    myLabelDp.classList.add('demiP');
    myLabelDp.innerHTML = "Dp";
    myDivPensionDp.appendChild(myLabelDp);

    let myInputDp = document.createElement('input');
    myInputDp.setAttribute('type', "checkbox");
    myInputDp.setAttribute('name', "demiPension")
    myInputDp.setAttribute('id', "demiPension");
    myDivPensionDp.appendChild(myInputDp);

    let myDivPensionDpMer = document.createElement('div');
    myDivPensionDpMer.classList.add('demiPensionaireMer');
    divOkMange.appendChild(myDivPensionDpMer);

    let myLabelDpM = document.createElement('label');
    myLabelDpM.setAttribute('for', 'demiPensionMer');
    myLabelDpM.setAttribute('name', "demiPMer");
    myLabelDpM.classList.add('demiPMer');
    myLabelDpM.innerHTML = "Mer";
    myDivPensionDpMer.appendChild(myLabelDpM);

    let myInputDpM = document.createElement('input');
    myInputDpM.setAttribute('type', "checkbox");
    myInputDpM.setAttribute('id', "demiPensionMer");
    myDivPensionDpMer.appendChild(myInputDpM);

    let myDivPensionExt = document.createElement('div');
    myDivPensionExt.classList.add('externe');
    divGeneralPension.appendChild(myDivPensionExt);

    let myLabelExt = document.createElement('label');
    myLabelExt.setAttribute('for', 'pensionExt');
    myLabelExt.classList.add('pensionExt');
    myLabelExt.innerHTML = "Ext";
    myDivPensionExt.appendChild(myLabelExt);

    let myInputExt = document.createElement('input');
    myInputExt.setAttribute('type', "checkbox");
    myInputExt.setAttribute('name', "pensionExt")
    myInputExt.setAttribute('id', "pensionExt");
    myDivPensionExt.appendChild(myInputExt);

    myInputDp.addEventListener('change', function() {
        if (myInputDp.checked) {
          myInputExt.checked = false;
        }
      });
      
      myInputDpM.addEventListener('change', function() {
        if (myInputDpM.checked) {
          myInputDp.checked = true;
          myInputExt.checked = false;
        }
      });
      
      myInputExt.addEventListener('change', function() {
        if (myInputExt.checked) {
          myInputDp.checked = false;
          myInputDpM.checked = false;
        }
      });
      

    let myFieldPhoto= document.createElement('fieldset');
    myFieldPhoto.classList.add("autorisationP");
    myForm.appendChild(myFieldPhoto);

    let photoName = document.createElement('legend');
    photoName.innerHTML = '<span class="firstLetter">A</span>utorisations phot<span class="lastLetter">o</span>';
    myFieldPhoto.appendChild(photoName);

    let divGeneralPhoto = document.createElement('div');
    divGeneralPhoto.classList.add('generalDivPhoto');
    myFieldPhoto.appendChild(divGeneralPhoto);

    let myDivG = document.createElement('div');
    myDivG.classList.add('grpP');
    divGeneralPhoto.appendChild(myDivG);

    let myLabelG = document.createElement('label');
    myLabelG.setAttribute('for', "grpP");
    myLabelG.classList.add('photoContainer')
    myLabelG.innerHTML = '<span class= "firstLetter">G</span>roup<span class= "lastLetter">e</span>'
    myDivG.appendChild(myLabelG);

    let myInputG = document.createElement('input');
    myInputG.setAttribute('type', "checkbox");
    myInputG.setAttribute('checked', "checked");
    myInputG.setAttribute('name', "groupe");
    myInputG.setAttribute('id', "grpP");
    myLabelG.appendChild(myInputG);

    let myDivI = document.createElement('div');
    myDivI.classList.add('indP');
    divGeneralPhoto.appendChild(myDivI);

    let myLabelI = document.createElement('label');
    myLabelI.setAttribute('for', "indP");
    myLabelI.classList.add('photoContainer')
    myLabelI.innerHTML = '<span class= "firstLetter">I</span>ndividue<span class= "lastLetter">l</span>'
    myDivI.appendChild(myLabelI);

    let myInputI = document.createElement('input');
    myInputI.setAttribute('type', "checkbox");
    myInputI.setAttribute('checked', "checked");
    myInputI.setAttribute('name', "individuel")
    myInputI.setAttribute('id', "indI");
    myLabelI.appendChild(myInputI);

    let myAssurance = document.createElement('div');
    myAssurance.classList.add('assurances');
    myForm.appendChild(myAssurance);

    let myLabelAssu = document.createElement('label');
    myLabelAssu.setAttribute('for', 'checkAssu');
    myLabelAssu.innerHTML = '<span class= "firstLetter">A</span>ssuranc<span class= "lastLetter">e</span>'
    myAssurance.appendChild(myLabelAssu);

    let myInputAssu = document.createElement('input');
    myInputAssu.setAttribute('type', "checkbox");
    myInputAssu.setAttribute('value', "Oui");
    myInputAssu.setAttribute('name', "assurance")
    myInputAssu.setAttribute('id', "checkAssu");
    myAssurance.appendChild(myInputAssu);

    let myInputSubmit = document.createElement('input');
    myInputSubmit.setAttribute('type', "submit");
    myInputSubmit.setAttribute('value', "📥");
    myInputSubmit.classList.add("btn");
    myInputSubmit.classList.add("saveBtn");
    myForm.appendChild(myInputSubmit);

    myForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let form_data = new FormData(myForm);
        let saved_data = localStorage.getItem('formData');
        let data = saved_data ? JSON.parse(saved_data) : {};
        let classesEleve = form_data.get("studentClasses");
        let nomEleve = form_data.get("studentName");
        let _regimeSortie = form_data.get("regimeG");
        let _autorisationPI = form_data.get("individuel");
        let _autorisationPG = form_data.get("groupe");
        let _assurance = form_data.get("assurance");
        let _demiPension = form_data.get("demiPension");
        let _demiPensionMer = form_data.get("demiPMer");
        let _pensionExt = form_data.get("pensionExt");

        if (nomEleve == '') {
            alert("Rentrez le nom de l'élève");
            return;
        }

        if (_regimeSortie == null) {
            alert("Veuillez renseignez un régime de sortie");
            return;
        }

        if (!data[classesEleve]) {
            data[classesEleve] = {};
        }
        if (!data[classesEleve][nomEleve]) {
            data[classesEleve][nomEleve] = [];
        } else {
            // Si l'élève existe déjà, supprimez ses anciennes informations du tableau
            data[classesEleve][nomEleve] = [];
        }

        let autorisationImage = "";

        if (_autorisationPI == "on") {
            autorisationImage = "Individuel";
        }
        if (_autorisationPG == "on") {
            autorisationImage = "Groupe";
        }
        if (_autorisationPI == "on" && _autorisationPG == "on") {
            autorisationImage = "G/I"
        }
        if (_autorisationPI == null && _autorisationPG == null) {
            autorisationImage = "Aucun"
        }

        if (_assurance == null) {
            _assurance = "Non"
        }

        let repasPension = "";

        if (_demiPension == "on") {
            repasPension = "Dp"
        }
        if (_pensionExt == "on") {
            repasPension = "Ext"
        }
        if (_demiPension == "on" && _demiPensionMer == "on") {
            repasPension = "Dp, Mer"
        }
        if (_demiPension == "on" && _pensionExt == "on") {
            alert("Veuillez remplir la pension !")
            return
        }

        data[classesEleve][nomEleve].push({
            "Régime de sortie": _regimeSortie,
            "Assurance": _assurance,
            "Droit à l'image": autorisationImage,
            "Repas": repasPension,
        });

        let data_json = JSON.stringify(data);
        localStorage.setItem('formData', data_json);
    });

})

_btnSearch.addEventListener('click', function() {
    cleanThat();
    sectionContainer.classList.add('search');

    let myTitle = document.createElement('h1');
    myTitle.innerHTML = '<span class="firstLetter">R</span>echercher un élèv<span class="lastLetter">e</span>';
    titleSection.appendChild(myTitle);

    
    let searchForm = document.createElement('form');
    searchForm.classList.add('searchForm')
    content.appendChild(searchForm);

    // Créer des options de sélection pour chaque critère de recherche
    let criteriaOptions = {
        "Assurance": ["Non", "Oui"],
        "Régime": ["Demi-pensionnaire", "Externe"],
        "Droit à l'image": ["G", "I", "G/I", "Aucun"]
    };

    for (let criterion in criteriaOptions) {
        let selectMenu = document.createElement('select');
        selectMenu.setAttribute('name', criterion);
        searchForm.appendChild(selectMenu);

        let option = document.createElement('option');
        option.value = "";
        option.text = `Choisir ${criterion}`;
        selectMenu.appendChild(option);

        for (let i = 0; i < criteriaOptions[criterion].length; i++) {
            let option = document.createElement('option');
            option.value = criteriaOptions[criterion][i];
            option.text = criteriaOptions[criterion][i];
            selectMenu.appendChild(option);
        }
    }

    let submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.classList.add('btnCsv')
    submitButton.classList.add('btn')
    submitButton.setAttribute('value', '🕵️‍♂️🔍');
    searchForm.appendChild(submitButton);

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();

        let form_data = new FormData(searchForm);
        let filterType, filterValue;
        for (let entry of form_data.entries()) {
            if (entry[1]) {  // if the select option has a value
                filterType = entry[0];
                filterValue = entry[1];
                break;  // stop the loop after the first selected filter is found
            }
        }

        // Get saved data from localStorage
        let saved_data = localStorage.getItem('formData');
        let data = saved_data ? JSON.parse(saved_data) : {};

        // Create an array to store the filtered students
        let filteredStudents = [];

        Object.keys(data).forEach(classe => {
            let students = data[classe];
            Object.keys(students).forEach(studentName => {
                let studentData = students[studentName][0]; // assuming there's at least one item
                if (studentData[filterType] === filterValue) {
                    filteredStudents.push({ name: studentName, class: classe });
                }
            });
        });


        // Clear the content before adding a new table
        content.innerHTML = "";

        let tableTitle = document.createElement('h1');
        tableTitle.classList.add('tableTitle')
        tableTitle.textContent = `Résultats : ${filterType} - ${filterValue}`;
        content.appendChild(tableTitle);

        let table = document.createElement('table');
        table.classList.add("students-table");
        content.appendChild(table);

        let thead = document.createElement('thead');
        table.appendChild(thead);

        let headerRow = document.createElement('tr');
        thead.appendChild(headerRow);

        ["Nom", "Classe"].forEach(text => {
            let th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });

        let tbody = document.createElement('tbody');
        table.appendChild(tbody);

        // Ajout de lignes pour chaque étudiant
        filteredStudents.forEach(student => {
            let row = document.createElement('tr');
            tbody.appendChild(row);

            // Création d'une cellule pour le nom de l'étudiant
            let nameCell = document.createElement('td');
            nameCell.textContent = student.name;
            row.appendChild(nameCell);

            // Création d'une cellule pour la classe de l'étudiant
            let classCell = document.createElement('td');
            classCell.textContent = student.class;
            row.appendChild(classCell);
        });
        let downloadButton = document.createElement('button');
        downloadButton.textContent = "📥";
        downloadButton.classList.add('btnCsv')
        downloadButton.addEventListener('click', function() {
            generateCSV(filteredStudents, filterType, filterValue);
        });
        downloadButton.classList.add('btn');
        content.appendChild(downloadButton);
    });

    

});


_btnList.addEventListener('click', function() {
    cleanThat();
    sectionContainer.classList.add('list');

    let myTitle = document.createElement('h1');
    myTitle.innerHTML = '<span class="firstLetter">A</span>fficher les listes de classe<span class="lastLetter">s</span>';
    myTitle.classList.add('listTitle')
    titleSection.appendChild(myTitle);

    let myForm = document.createElement('form');
    myForm.classList.add('formList');
    content.appendChild(myForm);


    let classesOptions = ["Classes", "6A", "6B", "6C", "6D", "5A", "5B", "5C", "5D", "4A", "4B", "4C", "4D", "3A", "3B", "3C", "3D"];
    let selectMenuClasses = document.createElement('select');
    selectMenuClasses.setAttribute('name', "classes");
    selectMenuClasses.setAttribute('id', "Classes");
    myForm.appendChild(selectMenuClasses);
    for(let i = 0; i < classesOptions.length; i++) {

        let option = document.createElement('option');
        option.value = classesOptions[i];
        option.text = classesOptions[i];

        selectMenuClasses.appendChild(option);
    }

    let Submit = document.createElement('input');
    Submit.setAttribute('type', 'submit');
    Submit.setAttribute('value', 'Afficher');
    Submit.setAttribute('class', "btn");
    Submit.classList.add('btnSubmit');
    myForm.appendChild(Submit)

    myForm.addEventListener('submit', function(e) {
        e.preventDefault();
    
        let form_data = new FormData(myForm);
        let saved_data = localStorage.getItem('formData');
        let data = saved_data ? JSON.parse(saved_data) : {};
    
        let classeStudent = form_data.get("classes"); // please note here that I have changed studentClasses to classes because that's what you set as name for your select menu
    
        let students = data[classeStudent] || {};
    
        // clear the content before adding a new table
        content.innerHTML = "";

        let tableTitle = document.createElement('h1');
        tableTitle.classList.add('tableTitle')
        tableTitle.textContent = classeStudent;
        content.appendChild(tableTitle);

        let table = document.createElement('table');
        table.classList.add("students-table");
        content.appendChild(table);
    
        let thead = document.createElement('thead');
        table.appendChild(thead);
    
        let headerRow = document.createElement('tr');
        thead.appendChild(headerRow);
    
        ["Nom", "Régime", "Repas", "Droit Image", "Assurance"].forEach(text => {
            let th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });
    
        let tbody = document.createElement('tbody');
        table.appendChild(tbody);
    
        // Here is where you need to add rows for each student
        Object.keys(students).forEach(studentName => {
            let row = document.createElement('tr');
            tbody.appendChild(row);
    
            // Create a cell for the student name
            let nameCell = document.createElement('td');
            nameCell.textContent = studentName;
            row.appendChild(nameCell);
    
            // Get the data for this student
            let studentData = students[studentName][0]; // assuming there's at least one item
    
            // Create a cell for each data point
            ["Régime de sortie", "Repas", "Droit à l'image", "Assurance"].forEach(key => {
                let cell = document.createElement('td');
                cell.textContent = studentData[key];
                row.appendChild(cell);
            });
        });

        let csvButton = document.createElement('button');
        csvButton.classList.add('btnCsv')
        csvButton.textContent = "📥";
        csvButton.addEventListener('click', function() {
            downloadCSV(tableTitle);
        });
        csvButton.classList.add('btn');
        content.appendChild(csvButton);
    });
    
})


