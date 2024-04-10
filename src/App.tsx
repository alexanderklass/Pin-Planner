import React from "react";
import {Routes, Route} from "react-router-dom";
import Calendar from "./pages/Calendar";
import TitleBar from "./components/TitleBar";
import "./languages/i18n";

function App() {
    return (
        <div className="App h-screen">
            <TitleBar/>
            <Routes>
                <Route path={"/"} element={<Calendar/>}/>
            </Routes>
        </div>
    );
}

export default App;
