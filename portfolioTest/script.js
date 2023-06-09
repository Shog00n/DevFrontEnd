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
    divImg1.classList.add('card2');
    contentSection.appendChild(divImg1);
    var img1 = document.createElement('img');
    img1.setAttribute('src', 'assets/logo/logoHTML.png');
    var txt1 = document.createElement('p');
    txt1.textContent = "HTML";
    divImg1.appendChild(img1);
    divImg1.appendChild(txt1);

    var divImg2 = document.createElement('div');
    divImg2.classList.add('card2');
    contentSection.appendChild(divImg2);
    var img2 = document.createElement('img');
    img2.setAttribute('src', 'assets/logo/logoCSS.png');
    var txt2 = document.createElement('p');
    txt2.textContent = "CSS";
    divImg2.appendChild(img2);
    divImg2.appendChild(txt2);

    var divImg3 = document.createElement('div');
    divImg3.classList.add('card2');
    contentSection.appendChild(divImg3);
    var img3 = document.createElement('img');
    img3.setAttribute('src', 'assets/logo/logoJS.png');
    var txt3 = document.createElement('p');
    txt3.innerHTML = "J<span>a</span>v<span>a</span>scr<span>i</span>pt";
    divImg3.appendChild(img3);
    divImg3.appendChild(txt3);

    var divImg4 = document.createElement('div');
    divImg4.classList.add('card2');
    contentSection.appendChild(divImg4);
    var img4 = document.createElement('img');
    img4.setAttribute('src', 'assets/logo/logoReact.png');
    var txt4 = document.createElement('p');
    txt4.innerHTML = "R<span>ea</span>ct";
    divImg4.appendChild(img4);
    divImg4.appendChild(txt4);

    var divImg5 = document.createElement('div');
    divImg5.classList.add('card2');
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

    var myDiv1 = document.createElement('div')
    myDiv1.classList.add("card")
    contentSection.appendChild(myDiv1)
    var myImg = document.createElement('img');
    myImg.setAttribute('src', 'assets/logo/guessTheFlagLg.png');
    myImg.classList.add('websiteLogo')
    myDiv1.appendChild(myImg);
    var myLilTitle = document.createElement('h1');
    myLilTitle.innerHTML = "G<span>ue</span>ss Th<span>e</span> Fl<span>a</span>g"
    myDiv1.appendChild(myLilTitle);
    var myLilText = document.createElement('p');
    myLilText.innerHTML = "J<span>u</span>st <span>a</span> l<span>i</span>ttl<span>e</span> g<span>a</span>m<span>e</span>";
    myDiv1.appendChild(myLilText);
    myLilDiv1 = document.createElement('div');
    myDiv1.appendChild(myLilDiv1);
    var gitLogo = document.createElement('img');
    gitLogo.setAttribute('src', 'assets/logo/github.svg');
    gitLogo.classList.add("gitLogo");
    myLilDiv1.appendChild(gitLogo);
    var myLink = document.createElement('a');
    myLink.setAttribute('href', "https://github.com/Shog00n/DevFrontEnd/tree/PublicMain/guessTheFlag")
    myLink.textContent = "Code here !"
    myLilDiv1.appendChild(myLink);

    
    var myDiv2 = document.createElement('div')
    myDiv2.classList.add("card")
    contentSection.appendChild(myDiv2)
    var myImg2 = document.createElement('img');
    myImg2.setAttribute('src', 'assets/logo/storyMeLogo.png');
    myImg2.classList.add('websiteLogo')
    myDiv2.appendChild(myImg2);
    var myLilTitle2 = document.createElement('h1');
    myLilTitle2.innerHTML = "St<span>o</span>r<span>y</span> M<span>e</span>"
    myDiv2.appendChild(myLilTitle2);
    var myLilText2 = document.createElement('p');
    myLilText2.innerHTML = "J<span>u</span>st <span>a</span> r<span>a</span>nd<span>o</span>m st<span>o</span>r<span>y</span>";
    myDiv2.appendChild(myLilText2);
    myLilDiv2 = document.createElement('div');
    myDiv2.appendChild(myLilDiv2);
    var gitLogo = document.createElement('img');
    gitLogo.setAttribute('src', 'assets/logo/github.svg');
    gitLogo.classList.add("gitLogo");
    myLilDiv2.appendChild(gitLogo);
    var myLink2 = document.createElement('a');
    myLink2.setAttribute('href', "https://github.com/Shog00n/DevFrontEnd/tree/PublicMain/storyMe")
    myLink2.textContent = "Code here !"
    myLilDiv2.appendChild(myLink2);

    var myDiv3 = document.createElement('div')
    myDiv3.classList.add("card")
    contentSection.appendChild(myDiv3)
    var myImg3 = document.createElement('img');
    myImg3.setAttribute('src', 'assets/logo/appelLogo.png');
    myImg3.classList.add('websiteLogo')
    myDiv3.appendChild(myImg3);
    var myLilTitle3 = document.createElement('h1');
    myLilTitle3.innerHTML = "Ch<span>e</span>ck St<span>u</span>d<span>e</span>nts"
    myDiv3.appendChild(myLilTitle3);
    var myLilText3 = document.createElement('p');
    myLilText3.innerHTML = "J<span>u</span>st <span>a</span> l<span>i</span>ttl<span>e</span> <span>a</span>pp f<span>o</span>r ch<span>e</span>ck <span>i</span>f st<span>u</span>d<span>e</span>nt w<span>a</span>s h<span>e</span>r<span>e</span>";
    myDiv3.appendChild(myLilText3);
    myLilDiv3 = document.createElement('div');
    myDiv3.appendChild(myLilDiv3);
    var gitLogo = document.createElement('img');
    gitLogo.setAttribute('src', 'assets/logo/github.svg');
    gitLogo.classList.add("gitLogo");
    myLilDiv3.appendChild(gitLogo);
    var myLink3 = document.createElement('a');
    myLink3.setAttribute('href', "https://github.com/Shog00n/DevFrontEnd/tree/PublicMain/ProjetAppelPerm")
    myLink3.textContent = "Code here !"
    myLilDiv3.appendChild(myLink3);

    
})

btnCtc.addEventListener('click', function() {
    cleanAll()
    section.classList.toggle('ctc');
    var myTitle = document.createElement('h1');
    myTitle.innerHTML = "C<span>o</span>nt<span>a</span>ct M<span>e</span>";
    titleSection.appendChild(myTitle);
    myForm = document.createElement('FORM');
    myForm.classList.add('form');
    contentSection.appendChild(myForm);
    myInput = document.createElement('input');
    myInput.setAttribute('type', 'text');
    myInput.setAttribute('placeholder', "Your email");
    myInput.classList.add('input');
    myForm.appendChild(myInput);
    myTextArea = document.createElement('textarea');
    myTextArea.setAttribute('placeholder', "Your message")
    myForm.appendChild(myTextArea);
    myBtn = document.createElement('button'); 
    myBtn.classList.add("btn");
    myBtn.innerHTML = "S<span>e</span>nd 📤";
    myForm.appendChild(myBtn);

})
