import React, { useEffect } from 'react';
import 'flatpickr/dist/flatpickr.min.css';
import { FcCalendar } from 'react-icons/fc';
import { IoIosSearch } from 'react-icons/io';
import { FcSettings } from 'react-icons/fc';
import { globalStore } from '../../store/global.store';
import { days } from '../../init/initGridData';
import DatePicker from './DatePicker';
import Searchbar from './Searchbar';

const Header = () => {
    const {
        setBookingModal,
        resetLanes,
        randomColorPicker,
        date,
        setDate,
        currentDay,
        setCurrentDay,
        setSettingsModal,
        useTranslate,
    } = globalStore();
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

    const handleToday = () => {
        handleStartUpDate();
        handleStartUpCurrentWeekDay();
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

    return (
        <header
            className={
                'border-b-1 flex w-full flex-row items-center justify-between border-b border-neutral-600 bg-neutral-700 p-3 text-xs xl:text-base'
            }>
            <div className={'flex flex-row items-center justify-center gap-1 text-gray-100'}>
                <FcCalendar className={'text-[30px] xl:text-[40px]'} />
                <p className={'outline-text font-bold'}>{useTranslate('HeaderSchedulerTitle')}</p>
            </div>

            <div className={'flex flex-row items-center justify-center'}>
                <button
                    className={
                        'outline-text rounded-l-xl border bg-sky-500 p-2 font-bold text-white transition-all hover:bg-sky-600'
                    }
                    onClick={openModalBooking}>
                    {useTranslate('HeaderBookingButton')}
                </button>
                <button
                    onClick={handleToday}
                    className={'border bg-gray-200 p-2 font-bold transition-all hover:bg-gray-300'}>
                    {useTranslate('HeaderTodayButton')}
                </button>
                <div className={'relative flex items-center justify-center'}>
                    <IoIosSearch className={'absolute left-2 text-xl'} />
                    <Searchbar />
                </div>
                <DatePicker value={date} onChange={handleDatePickerValue} day={currentDay} />
            </div>

            <div className={`flex flex-row items-center justify-center rounded-xl bg-neutral-200 transition-all`}>
                <button
                    onClick={() => setSettingsModal(true)}
                    className={'rounded-xl p-1 transition-all hover:scale-110 hover:bg-purple-300'}>
                    <FcSettings className={'text-[15px] xl:text-[25px]'} />
                </button>
            </div>
        </header>
    );
};

export default Header;
