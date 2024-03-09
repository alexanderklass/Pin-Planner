import React from 'react';
import { FcDeleteDatabase } from 'react-icons/fc';
import { FcCheckmark } from 'react-icons/fc';

interface props {
    name?: string;
    number?: string;
    lanes?: string;
    time?: string;
    notes?: string;
}

const DeletedCustomer = ({ name, number, lanes, time, notes }: props) => {
    return (
        <div className={'relative flex animate-fade-left flex-row items-center justify-center rounded-xl border border-gray-400 bg-gray-300 p-1'}>
            <div className={'flex w-[195px] flex-col break-words text-[14px]'}>
                <p>{name}</p>
                <p>{number}</p>
                <p>{lanes}</p>
                <p>{time}</p>
                <p>{notes}</p>
            </div>
            <div className={'absolute right-1 top-1 flex flex-row items-center justify-center gap-1 text-[25px]'}>
                <button className={'rounded-full border border-gray-400 bg-green-200 p-1 transition-all hover:bg-gray-100'}>
                    <FcCheckmark />
                </button>
                <button className={'rounded-full border border-gray-400 bg-red-200 p-1 transition-all hover:bg-gray-100'}>
                    <FcDeleteDatabase />
                </button>
            </div>
        </div>
    );
};

export default DeletedCustomer;
