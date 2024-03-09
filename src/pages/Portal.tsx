import React from 'react';
import { FaAddressBook } from 'react-icons/fa6';
import { IoTimerSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Portal = () => {
    return (
        <div className={'flex h-screen items-center justify-center gap-2 bg-neutral-800'}>
            <Link to={'/calendar'}>
                <button
                    className={'flex h-[80px] w-[150px] flex-col items-center justify-center rounded-lg bg-gray-200 font-bold transition-all hover:bg-gray-300'}
                >
                    <FaAddressBook className={'text-xl'} />
                    <p>Buchungen</p>
                </button>
            </Link>
            <button
                className={'flex h-[80px] w-[150px] flex-col items-center justify-center rounded-lg bg-gray-200 font-bold transition-all hover:bg-gray-300'}
            >
                <IoTimerSharp className={'text-xl'} />
                <p>Arbeitszeiten</p>
            </button>
        </div>
    );
};

export default Portal;
