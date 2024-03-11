import React, { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import { German } from 'flatpickr/dist/l10n/de';
import { BsCalendar2Event } from 'react-icons/bs';

interface props {
    value?: string;
    day?: string;
}

const DatePicker = ({ value, day = 'Mo' }: props) => {
    const dateRef: any = useRef();

    useEffect(() => {
        flatpickr(dateRef.current, {
            dateFormat: 'd.m.Y',
            locale: German,
            weekNumbers: true,
        });
    }, [value]);
    return (
        <div className={'relative'}>
            <input className={'w-[165px] rounded-xl border p-2 text-center font-bold'} value={value} ref={dateRef} type={'text'} />
            <div className={'pointer-events-none absolute left-[6%] top-[20%] border-r border-gray-400 pr-1 font-bold'}>{day}</div>
            <BsCalendar2Event className={'pointer-events-none absolute right-[8%] top-[25%] text-[20px]'} />
        </div>
    );
};

export default DatePicker;
