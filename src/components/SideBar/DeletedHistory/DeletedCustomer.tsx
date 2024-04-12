import React from 'react';
import {FcDeleteDatabase} from 'react-icons/fc';
import {FcDataBackup} from 'react-icons/fc';
import {globalStore} from '../../../store/global.store';

interface props {
    name?: string;
    number?: string;
    lanes?: string;
    time?: string;
    notes?: string;
    permRemoveLane: (id: any) => void;
    recoverLane: () => void;
}

const DeletedCustomer = ({name, number, lanes, time, notes, permRemoveLane, recoverLane}: props) => {
    const {useTranslate} = globalStore();
    const Tlane = useTranslate('DeletedCustomerLane');
    const Ttime = useTranslate('DeletedCustomerTime');
    const Tnotes = useTranslate('DeletedCustomerNotes');
    return (
        <div
            className={
                'relative hover:ring-2 hover:ring-purple-400 flex w-[195px] animate-fade-left flex-row items-center justify-between rounded-xl border border-gray-400 bg-gray-300 xl:w-[255px]'
            }>
            <div className={'mx-2 flex w-[195px] flex-col break-words text-[12px] xl:text-[14px]'}>
                <p>
                    <span className={'font-bold'}>Name: </span>
                    {name}
                </p>
                <p>
                    <span className={'font-bold'}>Tel: </span>
                    {number}
                </p>
                <p>
                    <span className={'font-bold'}>{Tlane} </span>
                    {lanes}
                </p>
                <p>
                    <span className={'font-bold'}>{Ttime} </span>
                    {time}
                </p>
                <p>
                    <span className={'font-bold'}>{Tnotes} </span>
                    {notes}
                </p>
            </div>
            <div className={'absolute right-1 top-1 flex flex-row items-center justify-center gap-1 text-[25px]'}>
                <button
                    onClick={recoverLane}
                    className={'rounded-full border border-gray-400 bg-gray-100 p-1 transition-all hover:bg-green-300'}>
                    <FcDataBackup className={'text-[14px] xl:text-[20px]'}/>
                </button>
                <button
                    onClick={permRemoveLane}
                    className={'rounded-full border border-gray-400 bg-gray-100 p-1 transition-all hover:bg-red-200'}>
                    <FcDeleteDatabase className={'text-[14px] xl:text-[20px]'}/>
                </button>
            </div>
        </div>
    );
};

export default DeletedCustomer;
