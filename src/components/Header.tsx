import React, { useEffect, useState } from 'react';
import 'flatpickr/dist/flatpickr.min.css';
import { FcCalendar } from 'react-icons/fc';
import { IoIosSearch } from 'react-icons/io';
import { FcReadingEbook } from 'react-icons/fc';
import { FcSettings } from 'react-icons/fc';
import { FcMenu } from 'react-icons/fc';
import { globalStore } from '../store/global.store';
import DatePicker from './DatePicker';

const Header = () => {
    const { setBookingModal, resetLanes, randomColorPicker, date, setDate, fetchCustomerList } = globalStore();
    const [openMenuBar, setOpenMenuBar] = useState<boolean>(false);
    const [currentDay, setCurrentDay] = useState('');
    const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
    const openModalBooking = () => {
        resetLanes();
        randomColorPicker();
        setBookingModal(true);
    };

    const handleDatePickerValue = (selectedDates: Date[], dateStr: string) => {
        setDate(dateStr);
        const dayIndex = getNewDayIndex(selectedDates[0]);
        setCurrentDay(days[dayIndex]);
    };

    const handleStartUpDate = () => {
        const date = new Date();
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        setDate(`${day}.${month}.${year}`);
    };

    const handleStartUpCurrentWeekDay = () => {
        const dayIndex = getNewDayIndex(new Date());
        setCurrentDay(days[dayIndex]);
    };

    const getNewDayIndex = (day: Date) => {
        return day.getDay();
    };

    useEffect(() => {
        handleStartUpDate();
        handleStartUpCurrentWeekDay();
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        fetchCustomerList();
        //eslint-disable-next-line
    }, [date]);

    return (
        <header
            className={
                'border-b-1 flex w-full flex-row items-center justify-between border-b border-neutral-600 bg-neutral-700 p-3'
            }>
            <div className={'flex flex-row items-center justify-center gap-1 text-gray-100'}>
                <FcCalendar className={'text-[40px]'} />
                <p className={'font-bold'}>Buchungen</p>
            </div>

            <div className={'flex flex-row items-center justify-center'}>
                <button
                    className={
                        'rounded-l-xl border bg-sky-500 p-2 font-bold text-white transition-all hover:bg-sky-600'
                    }
                    onClick={openModalBooking}>
                    Buchen
                </button>
                <button className={'border bg-gray-200 p-2 font-bold transition-all hover:bg-gray-300'}>Heute</button>
                <div className={'relative flex items-center justify-center'}>
                    <IoIosSearch className={'absolute left-2 text-xl'} />
                    <input
                        type={'search'}
                        className={'w-[300px] border p-2 pl-8 outline-0'}
                        placeholder={'Suchen...'}
                    />
                </div>
                <DatePicker value={date} onChange={handleDatePickerValue} day={currentDay} />
            </div>

            <div
                className={`relative flex flex-row items-center justify-center gap-2 ${openMenuBar ? 'rounded-r-xl' : 'rounded-xl'} bg-neutral-200 p-1 text-white`}>
                <div
                    className={`absolute -left-[65px] flex rounded-l-xl bg-neutral-200 p-1 ${!openMenuBar && 'hidden'} animate-fade-left flex-row items-center justify-center transition-all`}>
                    <button className={'hover:animate-wiggle-more'}>
                        <FcReadingEbook className={'text-[30px]'} />
                    </button>
                    <button className={'hover:animate-wiggle-more'}>
                        <FcSettings className={'text-[30px]'} />
                    </button>
                </div>

                <button onClick={() => setOpenMenuBar(!openMenuBar)}>
                    <FcMenu className={`text-[30px] transition-all duration-300 ${openMenuBar && 'rotate-90'}`} />
                </button>
            </div>
        </header>
    );
};

export default Header;
