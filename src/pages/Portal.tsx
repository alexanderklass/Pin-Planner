import React from 'react';
import {FaAddressBook} from "react-icons/fa6";
import { IoTimerSharp } from "react-icons/io5";
import {Link} from "react-router-dom"
const Portal = () => {
    return (
        <div className={"flex gap-2 h-screen justify-center items-center"}>
            <Link to={"/calendar"}>
                <button className={"bg-gray-200 flex flex-col justify-center items-center w-[150px] h-[80px] rounded-lg font-bold hover:bg-gray-300 transition-all"}>
                    <FaAddressBook className={"text-xl"}/>
                    <p>Buchungen</p>
                </button>
            </Link>
            <button className={"bg-gray-200 flex flex-col justify-center items-center w-[150px] h-[80px] rounded-lg font-bold hover:bg-gray-300 transition-all"}>
                <IoTimerSharp className={"text-xl"}/>
                <p>Arbeitszeiten</p>
            </button>
        </div>
    );
};

export default Portal;