import React, { useEffect, useState } from 'react';
import DailyHistoryCustomer from './DailyHistoryCustomer';
import { globalStore } from '../../../store/global.store';
import { switchIndexToTime, switchTimeToIndex } from '../../../utils/timeIndexConverter';
import Placeholder from '../Placeholder';

const DailyHistory = () => {
    const { customerList, date, useTranslate } = globalStore();
    const [currentTimeIndex, setCurrentTimeIndex] = useState(-1);
    const placeholderText = useTranslate('DailyHistoryEmptyList');
    const getIndexToTime = (startTime: number, endTime: number) => {
        const switchedStartTime = switchIndexToTime(startTime);
        const switchedEndTime = switchIndexToTime(endTime + 1);
        return `${switchedStartTime} - ${switchedEndTime} Uhr`;
    };

    const highlightCurrentTime = () => {
        const time = new Date();
        const fullTime = time.getHours() + ':' + time.getMinutes();
        const indexOfTime = switchTimeToIndex(fullTime);
        if (indexOfTime === undefined) return;
        setCurrentTimeIndex(indexOfTime);
    };

    const isTimeInRange = (startTime: number | undefined, endTime: number | undefined) => {
        if (startTime === undefined || endTime === undefined) return;
        return currentTimeIndex >= startTime && currentTimeIndex <= endTime;
    };

    const filteredCustomerList = customerList
        .filter((customer: any) => customer.date === date)
        .sort((a: any, b: any) => a.startTime - b.startTime)
        .sort((a: any, b: any) => a.endTime - b.endTime);

    useEffect(() => {
        highlightCurrentTime();
        const timer = setInterval(() => highlightCurrentTime(), 3000);
        return () => clearInterval(timer);
    }, [date]);

    return (
        <div className={'no-scrollbar flex max-h-[832px] flex-col gap-1 overflow-y-auto scroll-smooth p-1'}>
            {filteredCustomerList.length > 0 ? (
                filteredCustomerList.map((customer: any, index) => {
                    return (
                        <DailyHistoryCustomer
                            key={index}
                            onlineStatus={isTimeInRange(customer.startTime, customer.endTime)}
                            name={customer.customerName}
                            time={getIndexToTime(customer.startTime, customer.endTime)}
                            notes={customer.customerNotes}
                        />
                    );
                })
            ) : (
                <Placeholder text={placeholderText} />
            )}
        </div>
    );
};

export default DailyHistory;
