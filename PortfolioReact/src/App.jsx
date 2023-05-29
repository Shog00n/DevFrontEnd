
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import SectionAbout from "./components/SectionAbout";
import SectionSkill from "./components/SectionSkill";
import FullPage, { FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'


function App() {
    // State

    // Comportements

    // Render
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/About" element={<SectionAbout />} />
                <Route path="/Skills" element={<SectionSkill />} />
            </Routes>

            
            
            {/* <FullPage>
                
                    <FullPageSections>
                        <FullpageSection style={{height: '100vh'}}>
                            <SectionAbout />
                        </FullpageSection>
                    
                        <FullpageSection style={{height: '100vh'}}>
                            <SectionSkill /> 
                        </FullpageSection>
                </FullPageSections>
            </FullPage> */}
        </div>
    );
}

export default App;