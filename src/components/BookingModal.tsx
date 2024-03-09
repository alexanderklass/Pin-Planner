import React from 'react';
import { Dialog } from '@headlessui/react';
import { globalStore } from '../store/global.store';
import { GiBowlingStrike } from 'react-icons/gi';
import { LuTimer } from 'react-icons/lu';
import { IoPersonAddSharp } from 'react-icons/io5';
import { BsTelephonePlusFill } from 'react-icons/bs';
import { FaStickyNote } from 'react-icons/fa';
import { time } from '../init/initGridData';

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
        customerNumber,
        customerName,
        startTime,
        startLane,
        endTime,
        endLane,
    } = globalStore();

    return (
        <Dialog className={'fixed left-[45%] top-[25%]'} open={bookingModal} onClose={() => {}}>
            <Dialog.Panel
                className={'flex w-[200px] flex-col items-center justify-center gap-1 rounded-xl border border-gray-600 bg-neutral-800 p-3 shadow shadow-black'}
            >
                <Dialog.Title className={'font-bold text-gray-200'}>Buchen</Dialog.Title>
                <div className={'flex w-full flex-col gap-2'}>
                    <div className={'relative'}>
                        <input
                            onChange={(e) => setCustomerName(e.target.value)}
                            name={'customerName'}
                            type={'text'}
                            value={customerName}
                            className={'w-full rounded-xl p-1 pl-6'}
                            placeholder={'Kundenname...'}
                            autoComplete={'off'}
                        />
                        <IoPersonAddSharp className={'absolute left-1 top-2'} />
                    </div>
                    <div className={'relative'}>
                        <input
                            onChange={(e) => setCustomerNumber(e.target.value)}
                            name={'customerNumber'}
                            type={'text'}
                            value={customerNumber}
                            className={'w-full rounded-xl p-1 pl-6'}
                            autoComplete={'off'}
                            placeholder={'Kundennummer...'}
                        />
                        <BsTelephonePlusFill className={'absolute left-1 top-2'} />
                    </div>
                    <div className={'flex flex-row items-center justify-center gap-1'}>
                        <select
                            className={'w-full rounded-xl p-1 text-center'}
                            value={startLane}
                            name={'startLane'}
                            onChange={(e) => setStartLane(Number(e.target.value))}
                        >
                            {Array.from({ length: 12 }).map((_, index) => {
                                return (
                                    <option key={index} value={index}>
                                        {index + 1}
                                    </option>
                                );
                            })}
                        </select>
                        <GiBowlingStrike className={'h-[30px] text-[50px] text-gray-200'} />
                        <select
                            className={'w-full rounded-xl p-1 text-center'}
                            value={endLane}
                            name={'endLane'}
                            onChange={(e) => setEndLane(Number(e.target.value))}
                        >
                            {Array.from({ length: 12 }).map((_, index) => {
                                return (
                                    <option key={index} value={index}>
                                        {index + 1}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className={'flex flex-row items-center justify-center gap-1'}>
                        <select
                            className={'w-full rounded-xl p-1 text-center'}
                            name={'startTime'}
                            value={startTime}
                            onChange={(e) => setStartTime(Number(e.target.value))}
                        >
                            {time().map((time, index) => {
                                return (
                                    <option key={index} value={index}>
                                        {time}
                                    </option>
                                );
                            })}
                        </select>
                        <LuTimer className={'h-[30px] text-[50px] text-gray-200'} />
                        <select
                            className={'w-full rounded-xl p-1 text-center'}
                            name={'endTime'}
                            value={endTime}
                            onChange={(e) => setEndTime(Number(e.target.value))}
                        >
                            {time().map((time, index) => {
                                return (
                                    <option key={index} value={index}>
                                        {time}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className={'relative'}>
                        <input
                            name={'workerName'}
                            placeholder={'Eingetragon von...'}
                            autoComplete={'off'}
                            className={'w-full rounded-xl p-1 pl-6 shadow shadow-gray-400'}
                        />
                        <FaStickyNote className={'absolute left-1 top-2'} />
                    </div>
                    <textarea rows={3} name={'customerNotes'} className={'w-full resize-none rounded-xl bg-gray-100 p-1'} placeholder={'Notizen...'} />
                    <div className={'flex flex-row items-center justify-center gap-2'}>
                        <button
                            className={
                                ' flex h-[30px] w-full items-center justify-center rounded-xl border border-green-600 bg-green-500 p-2 text-white transition-all hover:bg-green-600'
                            }
                        >
                            Buchen
                        </button>
                        <button
                            onClick={() => setBookingModal(false)}
                            className={'h-[30px] w-full rounded-xl border border-red-700 bg-red-500 text-white transition-all hover:bg-red-600'}
                        >
                            Schließen
                        </button>
                    </div>
                </div>
            </Dialog.Panel>
        </Dialog>
    );
};

export default BookingModal;
