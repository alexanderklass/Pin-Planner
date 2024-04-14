import React from 'react';
import {FcConferenceCall} from 'react-icons/fc';
import OnlineStatusPing from './OnlineStatusPing';
import {globalStore} from "../../../store/global.store";

interface props {
    time: string;
    name: string;
    notes: string;
    onlineStatus?: boolean;
    customer: any;
}

const DailyHistoryCustomer = ({time, name, notes, onlineStatus, customer}: props) => {
    const {setOptionsModal, setOptionsData, gridData} = globalStore()

    const customerClicked = (customer: any) => {
        setOptionsModal(true);
        const startLane = customer.startLane
        const startTime = customer.startTime
        setOptionsData(gridData[startLane].time[startTime]);
    }
    
    return (
        <div
            onClick={() => customerClicked(customer)}
            className={
                'relative flex w-[195px] cursor-pointer hover:ring-2 hover:ring-purple-400 animate-fade-right flex-row items-center justify-start gap-5 rounded-xl border border-gray-400 bg-gray-300 p-1 xl:w-[255px]'
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
