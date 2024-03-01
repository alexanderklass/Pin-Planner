import React from 'react';
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Portal from "./pages/Portal";
import Calendar from "./pages/Calendar";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Login/>}/>
                <Route path={"/portal"} element={<Portal/>}/>
                <Route path={"/calendar"} element={<Calendar/>}/>
            </Routes>
        </div>
    );
}

export default App;
