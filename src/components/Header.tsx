import React from 'react';
import {AiOutlineSchedule} from "react-icons/ai";
import {IoIosSearch} from "react-icons/io";
const Header = () => {
    return (
        <header className={"flex flex-row p-3 justify-between items-center bg-gray-200 w-full border border-b-1 border-gray-200"}>
            <div className={"flex flex-row gap-1 justify-center items-center"}>
                <AiOutlineSchedule className={"text-[25px]"}/>
                <p className={"font-bold"}>Buchungen</p>
            </div>

            <div className={"flex flex-row gap-2 justify-center items-center"}>
                <button className={"bg-red-300 p-2 rounded-full w-[85px]"}>Buchen</button>
                <button className={"bg-gray-300 p-2 rounded-full w-[85px]"}>Heute</button>
                <div className={"relative flex justify-center items-center"}>
                    <IoIosSearch className={"absolute text-xl left-2"}/>
                    <input type={"search"} className={"p-2 rounded-full pl-8 outline-0"} placeholder={"Suchen..."}/>
                </div>
                <input type={"date"} className={"p-2 text-center rounded-full outline-0"}/>
            </div>

            <div className={"flex flex-row gap-2 justify-center items-center"}>
                <button>symbol</button>
                <button>symbol</button>
                <button>symbol</button>
            </div>
        </header>
    );
};

export default Header;