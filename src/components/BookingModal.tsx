import React, { useState } from 'react';
import { FcSupport, FcNeutralTrading } from 'react-icons/fc';
import { Dialog, Switch } from '@headlessui/react';
import { globalStore } from '../store/global.store';
import { GiBowlingStrike } from 'react-icons/gi';
import { LuTimer } from 'react-icons/lu';
import { IoPersonAddSharp } from 'react-icons/io5';
import { BsTelephonePlusFill } from 'react-icons/bs';
import { FaStickyNote } from 'react-icons/fa';
import { startTimeList, endTimeList } from '../init/initGridData';
import InfoHover from './InfoHover';

const BookingModal = () => {
    const {
        bookingModal,
        setBookingModal,
        setStartLane,
        setEndLane,
        setCustomerName,
        setCustomerNumber,
        setStartTime,
        setEndTime,
        addBooking,
        setWorkerName,
        setCustomerNotes,
        workerName,
        customerNumber,
        customerName,
        startTime,
        startLane,
        endTime,
        endLane,
        customerNotes,
    } = globalStore();

    const [inactiveLane, setInactiveLane] = useState(false);
    const [bookAllDay, setBookAllDay] = useState(false);
    const [infoBookAllDay, setInfoBookAllDay] = useState(false);
    const [infoInactiveLane, setInfoInactiveLane] = useState(false);
    const selectStartTime = startTimeList();
    const selectEndTime = endTimeList();
    const laneGreater = startLane > endLane;
    const timeGreater = startTime > endTime;
    const activeBookingButton = !customerName || !customerNumber || !workerName || laneGreater || timeGreater;

    return (
        <Dialog className={'fixed left-[35%] top-[25%]'} open={bookingModal} onClose={() => {}}>
            <Dialog.Panel
                className={
                    'flex w-full flex-col items-center justify-center gap-3 rounded-xl border border-gray-600 bg-neutral-700 p-3 shadow shadow-gray-500'
                }>
                <div className={'flex flex-row gap-2 rounded-xl bg-gray-200 p-3'}>
                    <div className={'flex w-full flex-col'}>
                        <Dialog.Title className={'font-bold'}>Buchen</Dialog.Title>
                        <div>
                            <p className={'text-gray-600'}>Kundenname</p>
                            <div className={'relative'}>
                                <input
                                    disabled={bookAllDay || inactiveLane}
                                    onChange={(e) => setCustomerName(e.target.value)}
                                    name={'customerName'}
                                    type={'text'}
                                    value={customerName}
                                    className={`w-full rounded-xl ${!customerName && 'border-red-500'} border border-gray-300 p-2 pl-6 outline-0`}
                                    placeholder={'Max Mustermann'}
                                    autoComplete={'off'}
                                />
                                <IoPersonAddSharp className={'absolute left-1 top-3'} />
                            </div>
                        </div>
                        <div>
                            <p className={'text-gray-600'}>Telefonnummer</p>
                            <div className={'relative'}>
                                <input
                                    disabled={bookAllDay || inactiveLane}
                                    onChange={(e) => setCustomerNumber(e.target.value)}
                                    name={'customerNumber'}
                                    type={'text'}
                                    value={customerNumber}
                                    className={`w-full rounded-xl ${!customerNumber && 'border-red-500'} border border-gray-300 p-2 pl-6 outline-0`}
                                    autoComplete={'off'}
                                    placeholder={'01234/56789010'}
                                />
                                <BsTelephonePlusFill className={'absolute left-1 top-3'} />
                            </div>
                        </div>
                        <div>
                            <p className={'text-gray-600'}>Bahnen:</p>
                            <div className={'flex flex-row items-center justify-center gap-1'}>
                                <select
                                    disabled={bookAllDay}
                                    className={'w-full rounded-xl border border-gray-300 p-2 text-center outline-0'}
                                    value={startLane}
                                    name={'startLane'}
                                    onChange={(e) => setStartLane(Number(e.target.value))}>
                                    {Array.from({ length: 12 }).map((_, index) => {
                                        return (
                                            <option key={index} value={index}>
                                                {index + 1}
                                            </option>
                                        );
                                    })}
                                </select>
                                <GiBowlingStrike className={'h-[30px] text-[50px]'} />
                                <select
                                    disabled={bookAllDay}
                                    className={'w-full rounded-xl border border-gray-300 p-2 text-center outline-0'}
                                    value={endLane}
                                    name={'endLane'}
                                    onChange={(e) => setEndLane(Number(e.target.value))}>
                                    {Array.from({ length: 12 }).map((_, index) => {
                                        return (
                                            <option key={index} value={index}>
                                                {index + 1}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <div>
                            <p className={'text-gray-600'}>Uhrzeit:</p>
                            <div className={'flex flex-row items-center justify-center gap-1'}>
                                <select
                                    disabled={bookAllDay}
                                    className={'w-full rounded-xl border border-gray-300 p-2 text-center outline-0'}
                                    name={'startTime'}
                                    value={startTime}
                                    onChange={(e) => setStartTime(Number(e.target.value))}>
                                    {selectStartTime.map((time, index) => {
                                        return (
                                            <option key={index} value={index}>
                                                {time}
                                            </option>
                                        );
                                    })}
                                </select>
                                <LuTimer className={'h-[30px] text-[50px]'} />
                                <select
                                    disabled={bookAllDay}
                                    className={'w-full rounded-xl border border-gray-300 p-2 text-center outline-0'}
                                    name={'endTime'}
                                    value={endTime}
                                    onChange={(e) => setEndTime(Number(e.target.value))}>
                                    {selectEndTime.map((time, index) => {
                                        return (
                                            <option key={index} value={index}>
                                                {time}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <div>
                            <p className={'text-gray-600'}>Mitarbeitername</p>
                            <div className={'relative'}>
                                <input
                                    name={'workerName'}
                                    placeholder={'Eingetragon von...'}
                                    value={workerName}
                                    onChange={(e) => setWorkerName(e.target.value)}
                                    autoComplete={'off'}
                                    className={`w-full ${!workerName && 'border-red-500'} rounded-xl border border-gray-300 p-2 pl-6 outline-0`}
                                />
                                <FaStickyNote className={'absolute left-1 top-3'} />
                            </div>
                        </div>
                    </div>
                    <div className={'flex w-full flex-col justify-end'}>
                        <p className={'text-gray-600'}>Notizen:</p>
                        <textarea
                            rows={3}
                            onChange={(e) => setCustomerNotes(e.target.value)}
                            name={'customerNotes'}
                            value={customerNotes}
                            className={'h-[300px] w-full resize-none rounded-xl border border-gray-300 p-2 outline-0'}
                            placeholder={'Kundennotizen hier eintragen...'}
                        />
                    </div>
                </div>
                <div className={'flex w-full flex-row items-center justify-between'}>
                    <div className={'flex flex-row items-center justify-center gap-1'}>
                        <Switch
                            checked={inactiveLane}
                            onChange={setInactiveLane}
                            onMouseEnter={() => setInfoInactiveLane(true)}
                            onMouseLeave={() => setInfoInactiveLane(false)}
                            className={`${inactiveLane ? 'bg-green-400' : 'bg-gray-200'} relative flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full transition-colors`}>
                            <FcSupport className={'text-[20px]'} />
                            <InfoHover
                                active={infoInactiveLane}
                                text={'Ausgewählte Bahn und Zeit auf außerbetrieb stellen!'}
                                width={'w-[330px]'}
                            />
                        </Switch>
                        <Switch
                            checked={bookAllDay}
                            onChange={setBookAllDay}
                            onMouseEnter={() => setInfoBookAllDay(true)}
                            onMouseLeave={() => setInfoBookAllDay(false)}
                            className={`${bookAllDay ? 'bg-green-400' : 'bg-gray-200'} relative flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full transition-colors`}>
                            <FcNeutralTrading className={'text-[20px]'} />
                            <InfoHover
                                active={infoBookAllDay}
                                text={'Ganzen tag blockieren oder buchen!'}
                                width={'w-[220px]'}
                            />
                        </Switch>
                    </div>
                    <div className={'flex flex-row gap-1'}>
                        <button
                            onClick={addBooking}
                            disabled={activeBookingButton}
                            className={
                                'flex h-[30px] w-[90px] items-center justify-center rounded-md bg-green-500 p-2 font-bold text-white transition-all hover:bg-green-600 disabled:bg-gray-300 disabled:text-black'
                            }>
                            Buchen
                        </button>
                        <button
                            onClick={() => setBookingModal(false)}
                            className={
                                'flex h-[30px] w-[90px] items-center justify-center rounded-md bg-gray-300 p-2 font-bold transition-all hover:bg-gray-400'
                            }>
                            Schließen
                        </button>
                    </div>
                </div>
            </Dialog.Panel>
        </Dialog>
    );
};

export default BookingModal;
