import React from "react";
import Calendar from "./pages/Calendar";
import TitleBar from "./components/TitleBar";
import "./languages/i18n";

function App() {
    return (
        <div className="App h-screen">
            <TitleBar/>
            <Calendar/>
        </div>
    );
}

export default App;
