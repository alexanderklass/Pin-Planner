import React from 'react';
import { FcConferenceCall } from 'react-icons/fc';
import OnlineStatusPing from './OnlineStatusPing';

interface props {
    time?: string;
    name?: string;
    notes?: string;
    onlineStatus?: boolean;
}

const DailyHistoryCustomer = ({ time, name, notes, onlineStatus }: props) => {
    return (
        <div
            className={
                'relative flex animate-fade-right flex-row items-center justify-start gap-5 rounded-xl border border-gray-400 bg-gray-300 p-1'
            }>
            <FcConferenceCall className={'rounded-xl bg-gray-400 p-1 text-[35px]'} />
            <div className={'flex w-[195px] flex-col items-start justify-center'}>
                <p className={'text-[14px] font-bold'}>{name}</p>
                <p className={'rounded-xl bg-purple-300 px-1 text-[13px] font-bold text-gray-600'}>{time}</p>
                <p className={'break-all text-[14px]'}>{notes}</p>
            </div>
            <OnlineStatusPing active={onlineStatus} />
        </div>
    );
};

export default DailyHistoryCustomer;
