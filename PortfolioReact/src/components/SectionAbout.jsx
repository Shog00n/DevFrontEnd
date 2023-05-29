import FullPage, { FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'

export default function SectionAbout() {
    // State 

    // Comportements

    // Render
    return (
        
        <section id="About">
            <div className="txtAbout">
                <h1>About Me</h1>
                <p>Hi ! I'm <span>Pablo Hassoun</span>. I'm 26 year's old <br />I'm a FrontEnd Dev !</p>
                <div>
                    <button className="btn btnHire" role="button">Hire</button>
                    <a href="Skills"><button className="btn btnSkills" role="button">Skills</button></a>
                </div>
            </div>
            <img src="imageAbout.png" alt="" />
        </section>
    )
}