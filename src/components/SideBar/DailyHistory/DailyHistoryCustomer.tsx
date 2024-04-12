import React from 'react';
import {FcConferenceCall} from 'react-icons/fc';
import OnlineStatusPing from './OnlineStatusPing';

interface props {
    time?: string;
    name?: string;
    notes?: string;
    onlineStatus?: boolean;
}

const DailyHistoryCustomer = ({time, name, notes, onlineStatus}: props) => {
    return (
        <div
            className={
                'relative flex w-[195px] hover:ring-2 hover:ring-purple-400 animate-fade-right flex-row items-center justify-start gap-5 rounded-xl border border-gray-400 bg-gray-300 p-1 xl:w-[255px]'
            }>
            <FcConferenceCall className={'rounded-xl bg-gray-400 p-1 text-[25px] xl:text-[35px]'}/>
            <div className={'flex w-[195px] flex-col items-start justify-center'}>
                <p className={'text-xs font-bold xl:text-[14px]'}>{name}</p>
                <p className={'rounded-xl bg-purple-300 px-1 text-xs font-bold text-gray-600 xl:text-[13px]'}>{time}</p>
                <p className={'break-all text-xs xl:text-[14px]'}>{notes}</p>
            </div>
            <OnlineStatusPing active={onlineStatus}/>
        </div>
    );
};

export default DailyHistoryCustomer;
