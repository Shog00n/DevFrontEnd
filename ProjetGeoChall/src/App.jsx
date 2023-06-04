import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeSection from "./components/HomeSection";
import Manche1Section from "./components/Manche1Section";
import Manche2Section from "./components/Manche2Section";
import Manche3Section from "./components/Manche3Section";
import Manche4Section from "./components/Manche4Section";
import ResultSection from "./components/ResultSection";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
    // State
    const [userInfo, setUserInfo] = useState({
        userName: "Pablo", userScore: 0, userPB: 0,
    });
    

    // Comportements
    const upScore = () => {
        let copyInfos = [...userInfo];

        let copyInfosUpdate = copyInfos.userScore + 100;

        setUserInfo(copyInfosUpdate);
    }

    // Render 
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeSection />} />
                <Route path="/Manche1" 
                element={<Manche1Section
                    onClick = {() => upScore()}
                 />} />
                <Route path="/Manche2" element={<Manche2Section />} />
                <Route path="/Manche3" element={<Manche3Section />} />
                <Route path="/Manche4" element={<Manche4Section />} />
                <Route path="/Results" element={<ResultSection />} />
            </Routes>
            {userInfo.userScore}
            <Footer />
        </div>
    )
}

export default App;