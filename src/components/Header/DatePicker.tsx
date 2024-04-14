import React, {useEffect, useRef} from 'react';
import flatpickr from 'flatpickr';
import {German} from 'flatpickr/dist/l10n/de';
import {BsCalendar2Event} from 'react-icons/bs';
import {globalStore} from '../../store/global.store';

interface props {
    value?: string;
    day?: string;
    onChange?: (selectedDate: Date[], dateStr: string) => void;
}

const DatePicker = ({value, day = 'Mo', onChange}: props) => {
    const {settingsLanguage} = globalStore();
    const dateRef: any = useRef();

    useEffect(() => {
        if (settingsLanguage === 'de') {
            flatpickr(dateRef.current, {
                dateFormat: 'd.m.Y',
                locale: German,
                weekNumbers: true,
                onChange: onChange,
                defaultDate: value,
            });
        } else {
            flatpickr(dateRef.current, {
                dateFormat: 'd.m.Y',
                weekNumbers: true,
                onChange: onChange,
                defaultDate: value,
            });
        }
        //eslint-disable-next-line
    }, [value, settingsLanguage]);

    return (
        <div className={'relative'}>
            <input
                className={'w-[130px] rounded-r-xl border bg-gray-200 p-2 text-center font-bold outline-0 xl:w-[165px]'}
                ref={dateRef}
                type={'text'}
                name={'datePicker'}
            />
            <div
                className={
                    'pointer-events-none absolute left-[6%] top-[20%] flex w-[22px] items-center justify-between font-bold xl:w-[29px]'
                }>
                <p>{day}</p>
                <div className={'h-[20px] w-[1px] rounded-full bg-gray-500'}></div>
            </div>
            <BsCalendar2Event
                className={'pointer-events-none absolute right-[8%] top-[25%] text-[15px] xl:text-[20px]'}
            />
        </div>
    );
};

export default DatePicker;
