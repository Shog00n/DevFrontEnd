const Body = document.body;
const sectionContent = document.querySelector('.contentSection')
const sectionTitle = document.querySelector('.titleSection')
const content = document.querySelector('.content')

const btnAdd = document.querySelector('.btnAdd')
const btnList = document.querySelector('.btnList')
const btnSearch = document.querySelector('.btnSearch')
const btnModify = document.querySelector('.btnModify')
const btnImport = document.querySelector('.btnImport')

const checkbox = document.getElementById('darkM');

function cleanThat() {
    sectionContent.classList.remove('sectionAdd')
    sectionContent.classList.remove('sectionList')
    sectionContent.classList.remove('sectionSearch')
    sectionContent.classList.remove('sectionModify')
    sectionContent.classList.remove('sectionImport')

    sectionTitle.classList.remove('sectionTitleAdd')
    sectionTitle.classList.remove('sectionTitleList')
    sectionTitle.classList.remove('sectionTitleSearch')
    sectionTitle.classList.remove('sectionTitleModify')
    sectionTitle.classList.remove('sectionTitleImport')

    content.classList.remove('contentAdd')
    content.classList.remove('contentList')
    content.classList.remove('contentSearch')
    content.classList.remove('contentModify')
    content.classList.remove('contentImport')

    sectionTitle.innerHTML = ""
    content.innerHTML = ""

}

function myNewElement(styleOfElement, classNameOfElement = "", textContent = "", parentOfElement) {
    const myElement = document.createElement(styleOfElement)
    if (classNameOfElement != "") {
        myElement.classList.add(classNameOfElement)
    }
    myElement.innerHTML = textContent
    parentOfElement.appendChild(myElement)

    return myElement
}

function runDark() {

    if (document.getElementById('darkM').checked) {
        Body.classList.toggle('default')
        Body.classList.toggle('darkMode')
    } else {
        Body.classList.toggle('default')
        Body.classList.toggle('darkMode')
    }
}

function deleteStudent(studentName, className, data) {
    if (data[className] && data[className][studentName]) {
        delete data[className][studentName];
        // Supprime la classe si elle est vide
        if (Object.keys(data[className]).length === 0) {
            delete data[className];
        }
        // Mettez à jour le stockage local
        localStorage.setItem('Eleves23', JSON.stringify(data));
        alert("Élève et classe supprimés si nécessaire.");
    } else {
        alert("Élève non trouvé. C'est étrange.");
    }
}

function modify(nameStudent) {

    cleanThat()

    let studentNameToEdit = nameStudent;

    // Récupérer les données enregistrées
    let saved_data = localStorage.getItem('Eleves23');
    let data = saved_data ? JSON.parse(saved_data) : {};

    let studentData;
    let className;

    // Trouver l'élève
    Object.keys(data).forEach(classKey => {
        if (data[classKey][studentNameToEdit]) {
            studentData = data[classKey][studentNameToEdit];
            className = classKey;
        }
    });

    if (studentData && className) {

        let modifyForm = myNewElement('form', "modifyStudentForm", "", content);


        let myLabelNameModify = myNewElement('label', "labelModifyName", "Nom de l'élève : ", modifyForm)
        myLabelNameModify.setAttribute('for', "modifyName")
        let studentNameField = myNewElement('input', "modifyStudentName", "", modifyForm);
        studentNameField.setAttribute('id', "modifyName")
        studentNameField.setAttribute('type', "text");
        studentNameField.setAttribute('name', "modifyStudentName")
        studentNameField.setAttribute('value', studentNameToEdit);

        let myLabelClasseModify = myNewElement('label', 'labelClasseModify', "Classe : ", modifyForm)
        myLabelClasseModify.setAttribute('for', "modifyClasse")
        let studentClasse = myNewElement('input', "modifyStudentClasse", "", modifyForm)
        studentClasse.setAttribute('id', "modifyClasse")
        studentClasse.setAttribute('type', "text")
        studentClasse.setAttribute('name', "modifyStudentClass")
        studentClasse.setAttribute('value', className)

        let myLabelAssurance = myNewElement('label', "labelModifyAssurance", "Assurance : ", modifyForm)
        myLabelAssurance.setAttribute('for', "modifyAssurance")
        let studentAssurance = myNewElement('input', "modifyStudentAssurance", "", modifyForm)
        studentAssurance.setAttribute('id', "modifyAssurance")
        studentAssurance.setAttribute('type', "text")
        studentAssurance.setAttribute('name', "modifyStudentInsurance")
        studentAssurance.setAttribute('value', studentData[0]["Assurance"])

        let myLabelExit = myNewElement('label', "labelExitModify", "Régime sortie : ", modifyForm)
        myLabelExit.setAttribute('for', "modifyExit")
        let studentExit = myNewElement('input', "modifyStudentExit", "", modifyForm)
        studentExit.setAttribute('id', "modifyExit")
        studentExit.setAttribute('type', "text")
        studentExit.setAttribute('name', "modifyStudentExitRegime")
        studentExit.setAttribute('value', studentData[0]["Régime de sortie"])

        let myLabelRepas = myNewElement('label', "labelRepasModify", "Repas : ", modifyForm)
        myLabelRepas.setAttribute('for', "modifyRepas")
        let studentRepas = myNewElement('input', "modifyStudentRepas", "", modifyForm)
        studentRepas.setAttribute('id', "modifyRepas")
        studentRepas.setAttribute('type', "text")
        studentRepas.setAttribute('name', "modifyStudentMealRegime")
        studentRepas.setAttribute('value', studentData[0]["Repas"])

        let myLabelRepasMer = myNewElement('label', "labelMercrediModify", "Mercredi : ", modifyForm)
        myLabelRepasMer.setAttribute('for', 'modifyMer')
        let studentMercredi = myNewElement('input', "modifyStudentMer", "", modifyForm)
        studentMercredi.setAttribute('id', "modifymer")
        studentMercredi.setAttribute('type', "text")
        studentMercredi.setAttribute('name', "modifyStudentMealMer")
        studentMercredi.setAttribute('value', studentData[0]["Mercredi"])


        let myLabelPhoto = myNewElement('label', "labelPhotoModify", "Photo : ", modifyForm)
        myLabelPhoto.setAttribute('for', "modifyPhoto")
        let studentPhoto = myNewElement('input', "modifyStudentPhoto", "", modifyForm)
        studentPhoto.setAttribute('id', "modifyPhoto")
        studentPhoto.setAttribute('type', "text")
        studentPhoto.setAttribute('name', "modifyStudentImageRights")
        studentPhoto.setAttribute('value', studentData[0]["Droit à l'image"])


        let saveButton = myNewElement('input', "btnSaveModifications", "", modifyForm);
        saveButton.setAttribute('type', "submit");
        saveButton.setAttribute('value', "Enregistrer les modifications");

        // Écouteur d'événement pour le formulaire de modification
        modifyForm.addEventListener('submit', function (e) {
            e.preventDefault();
            let formData = new FormData(modifyForm);

            // Récupérer toutes les données modifiées
            let modifiedStudentData = {
                "Assurance": formData.get('modifyStudentInsurance'),
                "Droit à l'image": formData.get('modifyStudentImageRights'),
                "Repas": formData.get('modifyStudentMealRegime'),
                "Régime de sortie": formData.get('modifyStudentExitRegime'),
                "Mercredi": formData.get('modifyStudentMealMer')
            };

            // Suppression de l'ancien enregistrement
            delete data[className][studentNameToEdit];

            let newClassName = formData.get('modifyStudentClass');
            let newStudentName = formData.get('modifyStudentName');

            // Ajout du nouvel enregistrement
            if (!data[newClassName]) {
                data[newClassName] = {};
            }

            data[newClassName][newStudentName] = [modifiedStudentData];

            // Sauvegarde des nouvelles données
            localStorage.setItem('Eleves23', JSON.stringify(data));

            alert("Les modifications ont été enregistrées");
        });
    } else {
        alert("Aucun élève à ce nom dans la base de données");
    }

}

checkbox.addEventListener('change', runDark);

btnAdd.addEventListener('click', function (e) {
    e.preventDefault()

    cleanThat()

    sectionContent.classList.toggle('sectionAdd')
    sectionTitle.classList.toggle('sectionTitleAdd')
    content.classList.toggle('contentAdd')

    let addTitle = myNewElement('h1', "addTitle", '<span class= "fLetter">A</span>jouter un élèv<span class= "lLetter">e</span>', sectionTitle)

    let myAddForm = myNewElement('form', "", "", content)
    let myAddFieldset = myNewElement('fieldset', "", "", myAddForm)
    let myAddLegend = myNewElement('legend', "", "Informations : ", myAddFieldset)

    let myDivClasses = myNewElement('div', "chooseClasses", "", myAddFieldset)

    let myLabelClasses = myNewElement('label', "", '<span class = "fLetter">C</span>hoisir la class<span class = "lLetter">e</span> : ', myDivClasses)
    myLabelClasses.setAttribute('for', "classes-select")

    let mySelectMenu = myNewElement('select', "", "", myDivClasses)
    mySelectMenu.setAttribute('name', "studentClasses")
    mySelectMenu.setAttribute('id', "classes-select")

    let options = ["Classes", "6A", "6B", "6C", "6D", "5A", "5B", "5C", "5D", "4A", "4B", "4C", "4D", "3A", "3B", "3C", "3D"]
    for (let i = 0; i < options.length; i++) {


        let option = myNewElement('option', "", "", mySelectMenu)
        option.value = options[i];
        option.text = options[i];
    }

    let myDIvfName = myNewElement('div', "addfName", "", myAddFieldset)

    let myLabelfName = myNewElement('label', "", '<span class = "fLetter">P</span>rénom de l\'élèv<span class = "lLetter">e</span> : ', myDIvfName)
    myLabelfName.setAttribute('for', "fname-input")

    let myInputfName = myNewElement('input', "input", "", myDIvfName)
    myInputfName.setAttribute('required', "")
    myInputfName.setAttribute('type', "text")
    myInputfName.setAttribute('id', "fname-input")
    myInputfName.setAttribute('name', "studentfName")

    let myDIvlName = myNewElement('div', "addlName", "", myAddFieldset)

    let myLabellName = myNewElement('label', "", '<span class = "fLetter">N</span>om de l\'élèv<span class = "lLetter">e</span> : ', myDIvlName)
    myLabellName.setAttribute('for', "lname-input")

    let myInputlName = myNewElement('input', "input", "", myDIvlName)
    myInputlName.setAttribute('required', "")
    myInputlName.setAttribute('type', "text")
    myInputlName.setAttribute('id', "lname-input")
    myInputlName.setAttribute('name', "studentlName")

    let myFieldRegime = myNewElement('fieldset', "regimeSortie", "", myAddFieldset)

    let regimeName = myNewElement('legend', "", '<span class="fLetter">R</span>égime de sorti<span class="lLetter">e</span>', myFieldRegime)

    let divGeneralRegime = myNewElement('div', "generalDivRegime", "", myFieldRegime)

    let myDivSE = myNewElement('div', "SERegime", "", divGeneralRegime)

    let myLabelSe = myNewElement('label', "", 'SE', myDivSE)
    myLabelSe.setAttribute('for', "regimeSE")

    let myInputSe = myNewElement('input', "", "", myDivSE)
    myInputSe.setAttribute('type', "radio")
    myInputSe.setAttribute('name', "regimeG")
    myInputSe.setAttribute('value', "SE")
    myInputSe.setAttribute('id', "regimeSE")

    let myDivSN = myNewElement('div', "SNRegime", "", divGeneralRegime)

    let myLabelSn = myNewElement('label', "", 'SN', myDivSN)
    myLabelSn.setAttribute('for', "regimeSN")

    let myInputSn = myNewElement('input', "", "", myDivSN)
    myInputSn.setAttribute('type', "radio")
    myInputSn.setAttribute('name', "regimeG")
    myInputSn.setAttribute('value', "SN")
    myInputSn.setAttribute('id', "regimeSN")

    let myFieldPension = myNewElement('fieldset', "demi_pension", "", myAddFieldset)

    let pensionName = myNewElement('legend', "", '<span class="fLetter">R</span>epa<span class="lLetter">s</span>', myFieldPension)

    let divGeneralPension = myNewElement('div', "generalDivPension", "", myFieldPension)

    let divOkMange = myNewElement('div', "okMange", "", divGeneralPension)

    let myDivPensionDp = myNewElement('div', "demiPensionaire", "", divGeneralPension)

    let myLabelDp = myNewElement('label', "demiP", "Dp", myDivPensionDp)
    myLabelDp.setAttribute('for', 'demiPension')

    let myInputDp = myNewElement('input', "", "", myDivPensionDp)
    myInputDp.setAttribute('type', "checkbox")
    myInputDp.setAttribute('name', "demiPension")
    myInputDp.setAttribute('id', "demiPension")

    let myDivPensionDpMer = myNewElement('div', "demiPensionaireMer", "", divGeneralPension)

    let myLabelDpM = myNewElement('label', "demiPMer", "Mer", myDivPensionDpMer)
    myLabelDpM.setAttribute('for', 'demiPensionMer')

    let myInputDpM = myNewElement('input', "", "", myDivPensionDpMer)
    myInputDpM.setAttribute('type', "checkbox")
    myInputDpM.setAttribute('name', "demiPensionMer")
    myInputDpM.setAttribute('id', "demiPensionMer")

    let myDivPensionExt = myNewElement('div', "externe", "", divGeneralPension)

    let myLabelExt = myNewElement('label', "pensionExt", "Ext", myDivPensionExt)
    myLabelExt.setAttribute('for', "pensionExt")

    let myInputExt = myNewElement('input', "", "", myDivPensionExt)
    myInputExt.setAttribute('type', "checkbox")
    myInputExt.setAttribute('name', "pensionExt")
    myInputExt.setAttribute('id', "pensionExt")

    myInputDp.addEventListener('change', function () {
        if (myInputDp.checked) {
            myInputExt.checked = false;

        }

        if (myInputDp.checked == false && myInputDpM.checked == true) {
            myInputDpM.checked = false
        }
    });

    myInputDpM.addEventListener('change', function () {
        if (myInputDpM.checked) {
            myInputDp.checked = true;
            myInputExt.checked = false;
        }
    });

    myInputExt.addEventListener('change', function () {
        if (myInputExt.checked) {
            myInputDp.checked = false;
            myInputDpM.checked = false;
        }
    });

    let myFieldPhoto = myNewElement('fieldset', "autorisationP", "", myAddFieldset)

    let photoName = myNewElement('legend', "", '<span class="fLetter">A</span>utorisations phot<span class="lLetter">o</span>', myFieldPhoto)

    let divGeneralPhoto = myNewElement('div', "generalDivPhoto", "", myFieldPhoto)

    let myDivG = myNewElement('div', "grpP", "", divGeneralPhoto)

    let myLabelG = myNewElement('label', "photoContainer", '<span class= "fLetter">G</span>roup<span class= "lLetter">e</span>', myDivG)
    myLabelG.setAttribute('for', "grpP")

    let myInputG = myNewElement('input', "", "", myLabelG)
    myInputG.setAttribute('type', "checkbox")
    myInputG.setAttribute('checked', "checked")
    myInputG.setAttribute('name', "groupe")
    myInputG.setAttribute('id', "grpP")

    let myDivI = myNewElement('div', "indP", "", divGeneralPhoto)

    let myLabelI = myNewElement('label', "photoContainer", '<span class= "fLetter">I</span>ndividue<span class= "lLetter">l</span>', myDivI)
    myLabelI.setAttribute('for', "indP")

    let myInputI = myNewElement('input', "", "", myLabelI)
    myInputI.setAttribute('type', "checkbox")
    myInputI.setAttribute('checked', "checked")
    myInputI.setAttribute('name', "individuel")
    myInputI.setAttribute('id', "indP")

    let myAssurance = myNewElement('div', "assurances", "", myAddFieldset)

    let myLabelAssu = myNewElement('label', "", '<span class= "fLetter">A</span>ssuranc<span class= "lLetter">e</span>', myAssurance)
    myLabelAssu.setAttribute('for', "checkAssu")

    let myInputAssu = myNewElement('input', "", "", myAssurance)
    myInputAssu.setAttribute('type', "checkbox")
    myInputAssu.setAttribute('value', "Oui")
    myInputAssu.setAttribute('name', "assurance")
    myInputAssu.setAttribute('id', "checkAssu")

    let myInputSubmit = myNewElement('input', "btn", "", myAddFieldset)
    myInputSubmit.setAttribute('type', "submit")
    myInputSubmit.setAttribute('value', "📥")

    myAddForm.addEventListener('submit', function (e) {
        e.preventDefault();

        let form_data = new FormData(myAddForm)
        let saved_data = localStorage.getItem('Eleves23')
        let data = saved_data ? JSON.parse(saved_data) : {}
        let classesEleve = form_data.get("studentClasses")
        let prenomEleve = form_data.get("studentfName")
        let _nomEleve = form_data.get("studentlName")
        let nomEleve = prenomEleve + " " + _nomEleve
        let _regimeSortie = form_data.get("regimeG")
        let _autorisationPI = form_data.get("individuel")
        let _autorisationPG = form_data.get("groupe")
        let _assurance = form_data.get("assurance")
        let _demiPension = form_data.get("demiPension")
        let _demiPensionMer = form_data.get("demiPensionMer")
        let _pensionExt = form_data.get("pensionExt")

        if (nomEleve == '') {
            alert("Rentrez le nom de l'élève")
            return
        }
        if (prenomEleve == '') {
            alert("Rentrez le prénom de l'élève")
            return
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
        let mercrediPension = "";

        if (_demiPension == "on") {
            repasPension = "Dp"
        }
        if (_pensionExt == "on") {
            repasPension = "Ext"
        }
        if (_demiPensionMer == "on") {
            mercrediPension = "Oui"
        }
        if (_demiPensionMer == null) {
            mercrediPension = "Non"
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
            "Mercredi": mercrediPension
        })

        let data_json = JSON.stringify(data)
        localStorage.setItem('Eleves23', data_json);
    })






})

btnList.addEventListener('click', function (e) {
    e.preventDefault()

    cleanThat()

    sectionContent.classList.toggle('sectionList')
    sectionTitle.classList.toggle('sectionTitleList')
    content.classList.toggle('contentList')

    let listTitle = myNewElement('h1', "listTitle", '<span class= "fLetter">L</span>iste des élève<span class= "lLetter">s</span>', sectionTitle)

    let myListForm = myNewElement('form', "formList", "", content)

    let classesOptions = ["Classes", "6A", "6B", "6C", "6D", "5A", "5B", "5C", "5D", "4A", "4B", "4C", "4D", "3A", "3B", "3C", "3D"];
    let selectMenuClasses = myNewElement('select', "", "", myListForm)
    selectMenuClasses.setAttribute('name', "classes")
    selectMenuClasses.setAttribute('id', "Classes")

    for (let i = 0; i < classesOptions.length; i++) {

        let option = myNewElement('option', "", "", selectMenuClasses)
        option.value = classesOptions[i]
        option.text = classesOptions[i]

    }

    let Submit = myNewElement('input', "btnSubmitSearch", "", myListForm)
    Submit.setAttribute('type', 'submit')
    Submit.setAttribute('value', 'Afficher')

    myListForm.addEventListener('submit', function (e) {
        e.preventDefault()

        let form_data = new FormData(myListForm)
        let saved_data = localStorage.getItem('Eleves23')
        let data = saved_data ? JSON.parse(saved_data) : {}

        let classeStudent = form_data.get("classes")

        let students = data[classeStudent] || {}

        let sortedStudentNames = Object.keys(students).sort((a, b) => a.localeCompare(b));

        content.innerHTML = ""

        let tableTitle = myNewElement('h1', "tableTitle", classeStudent, content)

        let table = myNewElement('table', "students-table", "", content)

        let thead = myNewElement('thead', "", "", table)

        let headerRow = myNewElement('tr', "", "", thead)

        let allOption = ["Nom", "Régime", "Repas", "Mercredi", "Droit Image", "Assurance"]
        allOption.forEach(text => {
            let th = myNewElement('th', "", text, headerRow)

        })

        let tbody = myNewElement('tbody', "", "", table)

        sortedStudentNames.forEach(studentName => {
            let row = myNewElement('tr', "", "", tbody)

            let nameCell = myNewElement('td', "", studentName, row)

            let studentData = students[studentName][0]

            let allData = ["Régime de sortie", "Repas", "Mercredi", "Droit à l'image", "Assurance"]

            allData.forEach(key => {
                let cell = myNewElement('td', "", studentData[key], row)

            })

            let btnModify = myNewElement('button', "btnModify", "Modifier", row)

            btnModify.addEventListener('click', () => modify(studentName))

            let btnDelete = myNewElement('button', "btnDelete", "Supprimer", row);

            btnDelete.addEventListener('click', () => deleteStudent(studentName, classeStudent, data));
        })

        let btnDownloadCSV = myNewElement('button', "btnDownloadCSV", "Télécharger en CSV", content);

        btnDownloadCSV.addEventListener('click', function () {
            let csvContent = "Nom, Régime, Repas, Mercredi, Droit Image, Assurance\n";  // En-têtes du CSV

            Object.keys(students).forEach(studentName => {
                let studentData = students[studentName][0];
                let rowArray = [studentName];

                let allData = ["Régime de sortie", "Repas", "Mercredi", "Droit à l'image", "Assurance"];
                allData.forEach(key => {
                    rowArray.push(studentData[key]);
                });

                let rowString = rowArray.join(", ");
                csvContent += rowString + "\n";
            });

            let blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            let link = document.createElement("a");

            let url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", `liste_eleves_${classeStudent}.csv`);
            document.body.appendChild(link);

            link.click();
            document.body.removeChild(link);
        });

    })

})

btnSearch.addEventListener('click', function (e) {
    e.preventDefault()

    cleanThat()

    sectionContent.classList.toggle('sectionSearch')
    sectionTitle.classList.toggle('sectionTitleSearch')
    content.classList.toggle('contentSearch')

    let searchTitle = myNewElement('h1', "searchTitle", '<span class= "fLetter">R</span>echercher un élèv<span class= "lLetter">e</span>', sectionTitle)


    let mySearchForm = myNewElement('form', "searchForm", "", content)

    let criteriaOptions = {
        "Assurance": ["Non", "Oui"],
        "Repas": ["Dp", "Ext"],
        "Mercredi": ["Oui", "Non"],
        "Droit à l'image": ["Groupe", "Individuel", "G/I", "Aucun"]
    }

    for (let criterion in criteriaOptions) {
        let selectMenu = myNewElement('select', "", "", mySearchForm)
        selectMenu.setAttribute('name', criterion)

        let option = myNewElement('option', "", "", selectMenu)
        option.value = ""
        option.text = `Choisir ${criterion}`

        for (let i = 0; i < criteriaOptions[criterion].length; i++) {
            let option = myNewElement('option', "", "", selectMenu)
            option.value = criteriaOptions[criterion][i]
            option.text = criteriaOptions[criterion][i]


        }
    }

    let submitButton = myNewElement('input', "btnSearch", "", mySearchForm)
    submitButton.setAttribute('type', "submit")
    submitButton.setAttribute('value', '🕵️‍♂️🔍')

    mySearchForm.addEventListener('submit', function (e) {
        e.preventDefault()

        let form_data = new FormData(mySearchForm)
        let filterType, filterValue
        for (let entry of form_data.entries()) {
            if (entry[1]) {
                filterType = entry[0]
                filterValue = entry[1]
                break;
            }
        }

        let saved_data = localStorage.getItem('Eleves23')
        let data = saved_data ? JSON.parse(saved_data) : {}

        let filteredStudents = []

        Object.keys(data).forEach(classe => {
            let students = data[classe]
            Object.keys(students).forEach(studentName => {
                let studentData = students[studentName][0]
                if (studentData && studentData[filterType] === filterValue) {
                    filteredStudents.push({ name: studentName, class: classe })
                }
            })
        })

        content.innerHTML = ""

        let tableTitle = myNewElement('h1', "tableTitle", `Résultats : ${filterType} - ${filterValue}`, content)

        let table = myNewElement('table', "student-table", "", content)

        let thead = myNewElement('thead', "", "", table)

        let headerRow = myNewElement('tr', "", "", thead)

        let headerTitle = ["Nom", "Classe"]

        headerTitle.forEach(text => {
            let th = myNewElement('th', "", text, headerRow)
        })

        let tbody = myNewElement('tbody', "", "", table)

        filteredStudents.forEach(student => {
            let row = myNewElement('tr', "", "", tbody)

            let nameCell = myNewElement('td', "", student.name, row)

            let classCell = myNewElement('td', "", student.class, row)

        })



        let btnDownloadCSV = myNewElement('button', "btnDownloadCSV", "Télécharger en CSV", content);
    
        btnDownloadCSV.addEventListener('click', function () {
            let csvContent = "Nom, Classe\n";  // En-têtes du CSV
        
            filteredStudents.forEach(student => {
                let rowArray = [student.name, student.class];
                let rowString = rowArray.join(", ");
                csvContent += rowString + "\n";
            });
        
            let blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
            let link = document.createElement("a");
        
            let url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", `eleves_filtres_${filterType}_${filterValue}.csv`);
            document.body.appendChild(link);
        
            link.click();
            document.body.removeChild(link);
        });
    })
    
})

btnModify.addEventListener('click', function (e) {
    e.preventDefault();

    cleanThat(); // Je suppose que c'est une fonction de nettoyage que tu as déjà écrite

    // UI toggles
    sectionContent.classList.toggle('sectionModify');
    sectionTitle.classList.toggle('sectionTitleModify');
    content.classList.toggle('contentModify');

    // Titre et formulaire de recherche
    let modifyTitle = myNewElement('h1', "modifyTitle", '<span class= "fLetter">M</span>odifier des information<span class= "lLetter">s</span>', sectionTitle);
    let myModifyForm = myNewElement('form', "editForm", "", content);
    let nameInput = myNewElement('input', "nameInput", "", myModifyForm);
    nameInput.setAttribute('type', "text");
    nameInput.setAttribute('name', "nameInput");
    nameInput.setAttribute('placeholder', "Nom de l'élève");
    let searchButton = myNewElement('input', "btnSearchForEdit", "", myModifyForm);
    searchButton.setAttribute('type', "submit");
    searchButton.setAttribute('value', "Rechercher");

    // Écouteur d'événement pour le formulaire de recherche
    myModifyForm.addEventListener('submit', () => modify(nameInput.value))
})

btnImport.addEventListener('click', function (e) {
    e.preventDefault()

    cleanThat()

    sectionContent.classList.toggle('sectionImport')
    sectionTitle.classList.toggle('sectionTitleImport')
    content.classList.toggle('contentImport')

    let importTitle = myNewElement('h1', "importTitle", '<span class= "fLetter">I</span>mporter une base de donné<span class= "lLetter">e</span>', sectionTitle)

    let btnExportAllCSV = myNewElement('button', "btnExport", "Export", content)
    btnExportAllCSV.addEventListener("click", function () {
        let csvContent = "Classe, Nom, Régime de sortie, Repas, Mercredi, Droit à l'image, Assurance\n";  // En-têtes du CSV
        let data = JSON.parse(localStorage.getItem('Eleves23')) || {};

        Object.keys(data).forEach(classe => {
            let students = data[classe];
            Object.keys(students).forEach(studentName => {
                let studentData = students[studentName][0];
                let rowArray = [classe, studentName];

                ["Régime de sortie", "Repas", "Mercredi", "Droit à l'image", "Assurance"].forEach(key => {
                    rowArray.push(studentData[key]);
                });

                let rowString = rowArray.join(", ");
                csvContent += rowString + "\n";
            });
        });

        let blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        let link = document.createElement("a");
        let url = URL.createObjectURL(blob);

        link.setAttribute("href", url);
        link.setAttribute("download", "Eleves23_complet.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    })

    let btnImportCSV = myNewElement('button', "btnImport", "Import", content)
    btnImportCSV.addEventListener("click", function () {
        let input = document.createElement("input");
        input.type = "file";
        input.accept = ".csv";
        input.click();
        input.addEventListener("change", function () {
            let file = input.files[0];
            let reader = new FileReader();
            reader.onload = function (e) {
                let text = e.target.result;
                let lines = text.split("\n");
                let headers = lines[0].split(", ").map(header => header.trim());

                let newDatabase = {};

                for (let i = 1; i < lines.length; i++) {
                    let currentLine = lines[i].split(", ").map(cell => cell.trim());
                    let classe = currentLine[0];
                    let studentName = currentLine[1];
                    if (!classe || !studentName) continue;

                    let studentData = {};
                    for (let j = 2; j < headers.length; j++) {
                        studentData[headers[j]] = currentLine[j];
                    }

                    if (!newDatabase[classe]) {
                        newDatabase[classe] = {};
                    }

                    newDatabase[classe][studentName] = [studentData];
                }
                localStorage.setItem('Eleves23', JSON.stringify(newDatabase));
            };
            reader.readAsText(file);
        });
    });
})