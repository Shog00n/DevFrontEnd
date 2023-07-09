const _btnAppel = document.querySelector('.btnCheck');
const _btnAjout = document.querySelector('.btnAdd');

let _espaceSection = document.querySelector('.sectionSpace');
let _titreSection = document.querySelector('.titleSection');
let _contenuSection = document.querySelector('.containSection');

function clearContent() {
    _titreSection.innerHTML = "";
    _contenuSection.innerHTML = "";
};

function addStudent() {

    let myH1 = document.createElement('h1');
    myH1.textContent = 'Ajouter un élève :';
    _titreSection.appendChild(myH1);

    let myForm = document.createElement('FORM');
    _contenuSection.appendChild(myForm);

    let semaineChoose = document.createElement('div');
    semaineChoose.classList.add('chooseSemaine');
    myForm.appendChild(semaineChoose);

    let myInputSemaineA = document.createElement('input');
    myInputSemaineA.type = 'RADIO';
    myInputSemaineA.name = 'Semaine';
    myInputSemaineA.value = 'Semaine A';
    myInputSemaineA.id= 'SemaineA'
    let myLabelSA = document.createElement('LABEL');
    myLabelSA.setAttribute('for', 'SemaineA');
    myLabelSA.textContent= 'Semaine A';

    semaineChoose.appendChild(myInputSemaineA);
    semaineChoose.appendChild(myLabelSA);

    let myInputSemaineB = document.createElement('input');
    myInputSemaineB.type = 'RADIO';
    myInputSemaineB.name = 'Semaine';
    myInputSemaineB.value = 'Semaine B';
    myInputSemaineB.id= 'SemaineB'
    let myLabelSB = document.createElement('LABEL');
    myLabelSB.setAttribute('for', 'SemaineB');
    myLabelSB.textContent= 'Semaine B';


    semaineChoose.appendChild(myInputSemaineB);
    semaineChoose.appendChild(myLabelSB);

    let mySelectMenu2 = document.createElement('SELECT');
    mySelectMenu2.name = "jours";
    mySelectMenu2.id = "Jours";
    myForm.appendChild(mySelectMenu2);

    let myda1 = document.createElement('option');
    myda1.value = "Lundi";
    myda1.textContent = "Lundi";
    mySelectMenu2.appendChild(myda1);
    
    let myda2 = document.createElement('option');
    myda2.value = "Mardi";
    myda2.textContent = "Mardi";
    mySelectMenu2.appendChild(myda2);
    
    let myda3 = document.createElement('option');
    myda3.value = "Mercredi";
    myda3.textContent = "Mercredi";
    mySelectMenu2.appendChild(myda3);
    
    let myda4 = document.createElement('option');
    myda4.value = "Jeudi";
    myda4.textContent = "Jeudi";
    mySelectMenu2.appendChild(myda4);

    let myda5 = document.createElement('option');
    myda5.value = "Vendredi";
    myda5.textContent = "Vendredi";
    mySelectMenu2.appendChild(myda5);
    

    let mySelectMenu1 = document.createElement('SELECT');
    mySelectMenu1.name = "horaires";
    mySelectMenu1.id = "Horaires";
    myForm.appendChild(mySelectMenu1);

    let myho1 = document.createElement('option');
    myho1.value = "8h";
    myho1.textContent = "8h";
    mySelectMenu1.appendChild(myho1);

    let myho2 = document.createElement('option');
    myho2.value = "9h";
    myho2.textContent = "9h";
    mySelectMenu1.appendChild(myho2);

    let myho3 = document.createElement('option');
    myho3.value = "10h";
    myho3.textContent = "10h";
    mySelectMenu1.appendChild(myho3);

    let myho4 = document.createElement('option');
    myho4.value = "11h";
    myho4.textContent = "11h";
    mySelectMenu1.appendChild(myho4);

    let myho5 = document.createElement('option');
    myho5.value = "14h";
    myho5.textContent = "14h";
    mySelectMenu1.appendChild(myho5);

    let myho6 = document.createElement('option');
    myho6.value = "15h";
    myho6.textContent = "15h";
    mySelectMenu1.appendChild(myho6);

    let myho7 = document.createElement('option');
    myho7.value = "16h";
    myho7.textContent = "16h";
    mySelectMenu1.appendChild(myho7);

    let addName = document.createElement('div');
    addName.classList.add("addName");
    myForm.appendChild(addName);

    let nameStudent = document.createElement('LABEL');
    nameStudent.setAttribute('for', "studentName");
    nameStudent.textContent = "Nom de l'élève : ";
    addName.appendChild(nameStudent);

    let inputName = document.createElement('INPUT');
    inputName.name = "studentName";
    inputName.id = "studentName";
    inputName.type = 'TEXT';
    addName.appendChild(inputName);

    let addClasses = document.createElement('div');
    addClasses.classList.add("addClasses");
    myForm.appendChild(addClasses);

    let classesStudent = document.createElement('LABEL');
    classesStudent.setAttribute('for', "studentClasses");
    classesStudent.textContent = "Classe de l'élève : ";
    addClasses.appendChild(classesStudent);

    let inputClasses = document.createElement('INPUT');
    inputClasses.name = "studentClasses";
    inputClasses.id = "studentClasses";
    inputClasses.type = 'TEXT';
    addClasses.appendChild(inputClasses);

    let Submit = document.createElement('INPUT');
    Submit.type = 'SUBMIT';
    Submit.value = "Ajouter";
    Submit.classList.add("btn")
    myForm.appendChild(Submit);

    myForm.Submit()

}

_btnAppel.addEventListener('click', function () {
    clearContent();
    _espaceSection.classList.remove('check');

    _espaceSection.classList.add('appel');
});

_btnAjout.addEventListener('click', function () {
    clearContent();
    _espaceSection.classList.remove('appel');
    addStudent();
    _espaceSection.classList.add('check');
});