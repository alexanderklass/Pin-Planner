import React from 'react';
import { Dialog } from '@headlessui/react';
import { globalStore } from '../store/global.store';
import { FcPaid, FcEmptyTrash } from 'react-icons/fc';

const OptionsModal = () => {
    const {
        optionsModal,
        setOptionsModal,
        setOptionsCustomerNotes,
        setOptionsCustomerName,
        setOptionsStartTime,
        setOptionsCustomerColor,
        setOptionsCustomerNumber,
        setOptionsStartLane,
        setOptionsEndLane,
        setOptionsEndTime,
        optionsEndTime,
        optionsCustomerNotes,
        optionsCustomerColor,
        optionsStartTime,
        optionsEndLane,
        optionsStartLane,
        optionsCustomerNumber,
        optionsCustomerName,
    } = globalStore();
    return (
        <Dialog className={'fixed left-[35%] top-[25%]'} open={optionsModal} onClose={() => {}}>
            <Dialog.Panel
                className={
                    'flex w-full flex-col items-center justify-center gap-3 rounded-xl border border-gray-600 bg-neutral-700 p-3 shadow shadow-gray-500'
                }>
                <div className={'flex flex-row items-center justify-start gap-2 rounded-xl bg-sky-100 p-3'}>
                    <div className={'flex flex-col gap-1'}>
                        <Dialog.Title className={'font-bold'}>Kundenanpassung</Dialog.Title>
                        <div className={'flex flex-col'}>
                            <p>Kundenname</p>
                            <input
                                value={optionsCustomerName}
                                onChange={(e) => setOptionsCustomerName(e.target.value)}
                                name={'optionsCustomerName'}
                                className={'w-full rounded-xl border border-gray-300 p-1 outline-0'}
                            />
                        </div>
                        <div className={'flex flex-col'}>
                            <p>Telefonnummer</p>
                            <input
                                value={optionsCustomerNumber}
                                onChange={(e) => setOptionsCustomerNumber(e.target.value)}
                                name={'optionsCustomerNumber'}
                                className={'w-full rounded-xl border border-gray-300 p-1 outline-0'}
                            />
                        </div>
                        <div className={'flex flex-col'}>
                            <p>Bahnen:</p>
                            <div className={'flex flex-row gap-2'}>
                                <select
                                    value={optionsStartLane}
                                    onChange={(e) => setOptionsStartLane(Number(e.target.value))}
                                    name={'optionsStartLane'}
                                    className={'w-full rounded-xl border border-gray-300 p-1 outline-0'}>
                                    <option></option>
                                </select>
                                <select
                                    value={optionsEndLane}
                                    onChange={(e) => setOptionsEndLane(Number(e.target.value))}
                                    name={'optionsEndLane'}
                                    className={'w-full rounded-xl border border-gray-300 p-1 outline-0'}>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className={'flex flex-col'}>
                            <p>Uhrzeit:</p>
                            <div className={'flex flex-row gap-2'}>
                                <select
                                    value={optionsStartTime}
                                    onChange={(e) => setOptionsStartTime(Number(e.target.value))}
                                    name={'optionsStartTime'}
                                    className={'w-full rounded-xl border border-gray-300 p-1 outline-0'}>
                                    <option></option>
                                </select>
                                <select
                                    value={optionsEndTime}
                                    onChange={(e) => setOptionsEndTime(Number(e.target.value))}
                                    name={'optionsEndTime'}
                                    className={'w-full rounded-xl border border-gray-300 p-1 outline-0'}>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>Notizen</p>
                        <textarea
                            onChange={(e) => setOptionsCustomerNotes(e.target.value)}
                            value={optionsCustomerNotes}
                            placeholder={'Kundennotizen anpassen...'}
                            name={'optionsCustomerNotes'}
                            className={'h-[245px] resize-none rounded-xl border border-gray-300 p-2 outline-0'}
                        />
                    </div>
                </div>
                <div className={'flex w-full flex-row items-center justify-between'}>
                    <div className={'flex flex-row items-center justify-center gap-1'}>
                        <button
                            className={
                                'flex w-[50px] items-center justify-center rounded-md bg-green-400 p-1 transition-all hover:bg-green-500'
                            }>
                            <FcPaid className={'rounded-md bg-green-200 text-[30px]'} />
                        </button>
                        <button
                            className={
                                'flex w-[50px] items-center justify-center rounded-md bg-red-400 p-1 text-center transition-all hover:bg-red-500'
                            }>
                            <FcEmptyTrash className={'rounded-md bg-red-200 text-[30px]'} />
                        </button>
                    </div>
                    <div className={'flex flex-row gap-1'}>
                        <button
                            className={
                                'flex h-[30px] w-[90px] items-center justify-center rounded-md bg-sky-500 p-2 font-bold text-white transition-all hover:bg-sky-600'
                            }>
                            Bestätigen
                        </button>
                        <button
                            className={
                                'flex h-[30px] w-[90px] items-center justify-center rounded-md bg-gray-300 p-2 font-bold transition-all hover:bg-gray-400'
                            }
                            onClick={() => setOptionsModal(false)}>
                            Schließen
                        </button>
                    </div>
                </div>
            </Dialog.Panel>
        </Dialog>
    );
};

export default OptionsModal;
