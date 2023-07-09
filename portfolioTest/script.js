const btnAbt = document.querySelector('.btnAbout');
const btnSkl = document.querySelector('.btnSkills');
const btnWrk = document.querySelector('.btnWorks');
const btnCtc = document.querySelector('.btnContact');

let section = document.querySelector('.container');
let titleSection = document.querySelector('.titleSection');
let contentSection = document.querySelector('.contentSection');
let footSection = document.querySelector('.footSection');

function cleanAll() {
    section.classList.remove('abt')
    section.classList.remove('skl')
    section.classList.remove('wrk')
    section.classList.remove('ctc')
    titleSection.innerHTML = "";
    contentSection.innerHTML= "";
    footSection.innerHTML= "";
}

btnAbt.addEventListener('click', function() {
    cleanAll()
    section.classList.toggle('abt');
    var myTitle = document.createElement('h1');
    myTitle.innerHTML = "<span>A</span>b<span>ou</span>t M<span>e</span>";
    titleSection.appendChild(myTitle);
    var mySvg = document.createElement('img');
    mySvg.setAttribute("src", "assets/images/mysvg.svg");
    contentSection.appendChild(mySvg);
    var myText = document.createElement('p');
    myText.innerHTML= "H<span>i</span> 👋 ! M<span>y</span> n<span>a</span>m<span>e</span> <span>i</span>s P<span>a</span>bl<span>o</span> <span>I</span>'m F<span>u</span>n D<span>e</span>v !";
    contentSection.appendChild(myText);
})
btnSkl.addEventListener('click', function() {
    cleanAll()
    section.classList.toggle('skl');
    var myTitle = document.createElement('h1');
    myTitle.innerHTML = "Sk<span>i</span>lls";
    titleSection.appendChild(myTitle);
    var divImg1 = document.createElement('div');
    divImg1.classList.add('card');
    contentSection.appendChild(divImg1);
    var img1 = document.createElement('img');
    img1.setAttribute('src', 'assets/logo/logoHTML.png');
    var txt1 = document.createElement('p');
    txt1.textContent = "HTML";
    divImg1.appendChild(img1);
    divImg1.appendChild(txt1);

    var divImg2 = document.createElement('div');
    divImg2.classList.add('card');
    contentSection.appendChild(divImg2);
    var img2 = document.createElement('img');
    img2.setAttribute('src', 'assets/logo/logoCSS.png');
    var txt2 = document.createElement('p');
    txt2.textContent = "CSS";
    divImg2.appendChild(img2);
    divImg2.appendChild(txt2);

    var divImg3 = document.createElement('div');
    divImg3.classList.add('card');
    contentSection.appendChild(divImg3);
    var img3 = document.createElement('img');
    img3.setAttribute('src', 'assets/logo/logoJS.png');
    var txt3 = document.createElement('p');
    txt3.innerHTML = "J<span>a</span>v<span>a</span>scr<span>i</span>pt";
    divImg3.appendChild(img3);
    divImg3.appendChild(txt3);

    var divImg4 = document.createElement('div');
    divImg4.classList.add('card');
    contentSection.appendChild(divImg4);
    var img4 = document.createElement('img');
    img4.setAttribute('src', 'assets/logo/logoReact.png');
    var txt4 = document.createElement('p');
    txt4.innerHTML = "R<span>ea</span>ct";
    divImg4.appendChild(img4);
    divImg4.appendChild(txt4);

    var divImg5 = document.createElement('div');
    divImg5.classList.add('card');
    contentSection.appendChild(divImg1);
    var img5 = document.createElement('img');
    img5.setAttribute('src', 'assets/logo/logoPython.png');
    var txt5 = document.createElement('p');
    txt5.innerHTML = "P<span>y</span>th<span>o</span>n";
    divImg5.appendChild(img5);
    divImg5.appendChild(txt5);
})
btnWrk.addEventListener('click', function() {
    cleanAll()
    section.classList.toggle('wrk');
    var myTitle = document.createElement('h1');
    myTitle.innerHTML = "M<span>y</span> W<span>o</span>rks";
    titleSection.appendChild(myTitle);
})
btnCtc.addEventListener('click', function() {
    cleanAll()
    section.classList.toggle('ctc');
    var myTitle = document.createElement('h1');
    myTitle.innerHTML = "C<span>o</span>nt<span>a</span>ct M<span>e</span>";
    titleSection.appendChild(myTitle);
})
