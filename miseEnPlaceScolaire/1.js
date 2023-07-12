let myFieldPension = document.createElement('fieldset');
myFieldPension.classList.add("demi_pension");
myForm.appendChild(myFieldPension);

let pensionName = document.createElement('legend');
pensionName.innerHTML = '<span class="firstLetter">R</span>epa<span class="lastLetter">s</span>';
myFieldPension.appendChild(pensionName);

let divGeneralPension = document.createElement('div');
divGeneralPension.classList.add('generalDivPension');
myFieldPension.appendChild(divGeneralPension);

let myDivPensionDp = document.createElement('div');
myDivPensionDp.classList.add('demiPensionaire');
divGeneralPension.appendChild(myDivPensionDp);

let myLabelDp = document.createElement('label');
myLabelDp.setAttribute('for', 'demiPension');
myLabelDp.classList.add('demiP');
myLabelDp.innerHTML = "Dp";
myDivPensionDp.appendChild(myLabelDp);

let myInputDp = document.createElement('input');
myInputDp.setAttribute('type', "checkbox");
myInputDp.setAttribute('id', "demiPension");
myDivPensionDp.appendChild(myInputDp)

let myDivPensionDpMer = document.createElement('div');
myDivPensionDpMer.classList.add('demiPensionaireMer');
divGeneralPension.appendChild(myDivPensionDpMer);

let myLabelDpM = document.createElement('label');
myLabelDpM.setAttribute('for', 'demiPensionMer');
myLabelDpM.classList.add('demiPMer');
myLabelDpM.innerHTML = "Dp Mer";
myDivPensionDpMer.appendChild(myLabelDpM);

let myInputDpM = document.createElement('input');
myInputDpM.setAttribute('type', "checkbox");
myInputDpM.setAttribute('id', "demiPensionMer");
myDivPensionDpMer.appendChild(myInputDpM)

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
myInputExt.setAttribute('id', "pensionExt");
myDivPensionExt.appendChild(myInputExt)