class DOMElement {
    constructor(type, options = {}) {
        if (typeof type !== 'string') {
            throw new Error('Type must be a string.');
        }
        if (options.parent && !(options.parent instanceof Element)) {
            throw new Error('Parent must be a DOM element.');
        }

        this.element = document.createElement(type);

        const { elementClass, content, parent } = options;

        if (elementClass) {
            this.element.classList.add(elementClass);
        }

        if (content) {
            this.element.innerHTML = content; 
        }

        if (parent) {
            parent.appendChild(this.element);
        }
    }

    getElement() {
        return this.element;
    }
}

function createSkillElement(skillName, skillClass, skillLogo, skillLevel, parentElement) {
    const skillDiv = new DOMElement('div', {
        elementClass: skillClass,
        parent: parentElement
    });

    new DOMElement('p', {
        elementClass: `${skillClass}-name`,
        content: skillName,
        parent: skillDiv.getElement()
    });

    let img = new DOMElement('img', {
        elementClass: `${skillClass}-logo`,
        parent: skillDiv.getElement()
    });

    img.getElement().setAttribute('src', `${skillLogo}`);


    new DOMElement('p', {
        elementClass: `${skillClass}-level`,
        content: `Niveau: ${skillLevel}/5`,
        parent: skillDiv.getElement()
    });
}

function createContactForm(parentElement) {
    const contactDiv = new DOMElement('div', {
        elementClass: 'contactDiv',
        parent: parentElement
    });

    new DOMElement('p', {
        elementClass: 'contactText',
        content: 'Pour me contacter, veuillez remplir le formulaire ci-dessous:',
        parent: contactDiv.getElement()
    });

    const form = new DOMElement('form', {
        elementClass: 'contactForm',
        parent: contactDiv.getElement()
    });

    new DOMElement('input', {
        elementClass: 'nameInput',
        parent: form.getElement()
    }).getElement().setAttribute('placeholder', 'Votre nom');

    new DOMElement('input', {
        elementClass: 'emailInput',
        parent: form.getElement()
    }).getElement().setAttribute('placeholder', 'Votre email');

    new DOMElement('textarea', {
        elementClass: 'messageInput',
        parent: form.getElement()
    }).getElement().setAttribute('placeholder', 'Votre message');

    let submit = new DOMElement('input', {
        elementClass: 'submitButton',
        parent: form.getElement()
    });
    
    let submitElement = submit.getElement();
    submitElement.setAttribute('type', 'submit');
    submitElement.setAttribute('value', 'Envoyer');

    form.getElement().addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.querySelector('.nameInput').value;
        const email = document.querySelector('.emailInput').value;
        const message = document.querySelector('.messageInput').value;
    
        const response = await fetch('http://127.0.0.1:3001/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });
    
        if (response.ok) {
            alert('Email envoyé');
        } else {
            alert('Erreur lors de l’envoi de l’email');
        }
    });
}

function createProjectCard(projectName, projectLink, projectDescription, parentElement) {
    const projectCard = new DOMElement('div', {
        elementClass: 'projectCard',
        parent: parentElement
    });

    new DOMElement('h3', {
        elementClass: 'projectName',
        content: projectName,
        parent: projectCard.getElement()
    });

    new DOMElement('a', {
        elementClass: 'projectLink',
        content: 'Voir le projet',
        parent: projectCard.getElement()
    }).getElement().setAttribute('href', projectLink);

    new DOMElement('p', {
        elementClass: 'projectDescription',
        content: projectDescription,
        parent: projectCard.getElement()
    });
}

class SectionManager {
    constructor() {
        this.titleSection = document.querySelector('.titleSection');
        this.content = document.querySelector('.content');
        this.footSection = document.querySelector('.footSection');

        if (!this.titleSection || !this.content || !this.footSection) {
            throw new Error('Sections are not properly initialized.');
        }
    }

    cleanSections() {
        [this.titleSection, this.content, this.footSection].forEach(section => {
            section.classList.remove('active');
            while (section.firstChild) {
                section.removeChild(section.firstChild);
            }
        });
    }

    injectContent(contentType) {
        this.cleanSections();

        if (contentType === 'about') {
            new DOMElement('h1', {
                elementClass: 'aboutTitle',
                content: 'À propos de moi !',
                parent: this.titleSection
            });

            new DOMElement('p', {
                elementClass: 'aboutContentText',
                content:`Je m'appelle Pablo.</br> 
                        Je suis passionné de développement web depuis des années.</br>
                        Je suis complètement autodidacte, j'apprends et je progresse chaque jour.</br>
                        Vous trouverez sur ce site mon avancement ainsi que mon travail.`,
                parent: this.content
            });

            new DOMElement('p', {
                elementClass: 'skillsFoot',
                content: 'Pablo.nP',
                parent: this.footSection
            });

            this.titleSection.classList.add('active');
            this.content.classList.add('active');
            this.footSection.classList.add('active');
        }

        if (contentType === 'skills') {
            new DOMElement('h1', {
                elementClass: 'skillsTitle',
                content: 'Mes Compétences !',
                parent: this.titleSection
            });

            let divGenSkills = new DOMElement('div', {
                elementClass: 'skillsContentText',
                parent:this.content
            })

            const skillData = [
                { name: 'HTML', class: 'skillsDiv', logo: 'assets/logo/logoHTML.png', level: 4 },
                { name: 'CSS', class: 'skillsDiv', logo: 'assets/logo/logoCSS.png', level: 3.5 },
                { name: 'JS', class: 'skillsDiv', logo: 'assets/logo/logoJS.png', level: 3 },
                { name: 'React', class: 'skillsDiv', logo: 'assets/logo/logoREACT.png', level: 1 },
                { name: 'PostgreSQL', class: 'skillsDiv', logo: 'assets/logo/logoSQL.png', level: 2.5 },
                { name: 'Python', class: 'skillsDiv', logo: 'assets/logo/logoPYTHON.png', level: 3 },
                // Ajoutez d'autres compétences ici...
            ];

            skillData.forEach(({ name, class: skillClass, logo, level }) => {
                createSkillElement(name, skillClass, logo, level, divGenSkills.getElement());
            });

            this.titleSection.classList.add('active');
            this.content.classList.add('active');
        }
        if (contentType === 'works') {
            new DOMElement('h1', {
                elementClass: 'worksTitle',
                content: 'Mes Projets !',
                parent: this.titleSection
            });
        
            const projectData = [
                { name: 'Protocole Rentrée', link: 'http://lien1.com', description: `Il s'agit d'une app administratif</br>Facilitant le travail de la Vie Scolaire` },
                { name: 'Le jeu de la scolarité', link: 'http://lien2.com', description: `Il s'agit d'un jeu de type Quizz` },
                // Ajoutez d'autres projets ici...
            ];

            let divGenWorks = new DOMElement('div', {
                elementClass: 'divGenWorks',
                parent: this.content
            })
        
            projectData.forEach(({ name, link, description }) => {
                createProjectCard(name, link, description, divGenWorks.getElement());
            });
        
            this.titleSection.classList.add('active');
            this.content.classList.add('active');
        }
        if (contentType === 'contact') {
            new DOMElement('h1', {
                elementClass: 'contactTitle',
                content: 'Contactez-moi !',
                parent: this.titleSection
            });
        
            createContactForm(this.content);
        
        
            this.titleSection.classList.add('active');
            this.content.classList.add('active');
        }
        // ... (gestion d'autres types de contenu)
    }
}

const sectionManager = new SectionManager();

document.querySelector('.btnAbout').addEventListener('click', () => {
    sectionManager.injectContent('about');
});
document.querySelector('.btnSkill').addEventListener('click', () => {
    sectionManager.injectContent('skills');
});
document.querySelector('.btnContact').addEventListener('click', () => {
    sectionManager.injectContent('contact');
});
document.querySelector('.btnWorks').addEventListener('click', () => {
    sectionManager.injectContent('works');
});
