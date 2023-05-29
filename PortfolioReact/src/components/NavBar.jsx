
import { Fullpage, FullpageSection } from "@ap.cx/react-fullpage"
export default function NavBar() {
    // State

    // Comportements
    // Render
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src="logoRed.png" alt="Logo" />
                    <h1>Pablo Hassoun</h1>

                </div>
                <div className="menuNavBar">
                    <ul>
                        <li><a href="About"><button className="btn btnAbout" role="button">About</button></a></li>
                        <li><a href="Skills"><button className="btn btnSkills" role="button">Skills</button></a></li>
                        <li><button className="btn btnWorks" role="button">Works</button></li>
                        <li><button className="btn btnContact" role="button">Contact</button></li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}