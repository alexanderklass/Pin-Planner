import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { globalStore } from '../../../store/global.store';
import { FcPaid, FcEmptyTrash } from 'react-icons/fc';
import { startTimeList, endTimeList } from '../../../init/initGridData';
import InfoHover from '../../InfoHover';
import ConfirmModal from '../Confirm/ConfirmModal';
import ColorList from './ColorList';

const OptionsModal = () => {
    const {
        optionsModal,
        setOptionsModal,
        setOptionsCustomerNotes,
        setOptionsCustomerName,
        setOptionsStartTime,
        setOptionsCustomerNumber,
        setOptionsStartLane,
        setOptionsEndLane,
        setOptionsEndTime,
        optionsEndTime,
        optionsCustomerNotes,
        optionsStartTime,
        optionsEndLane,
        optionsStartLane,
        optionsCustomerNumber,
        optionsCustomerName,
        customerList,
        setCustomerList,
        emitSuccessToast,
        deletedLaneToLocalStorage,
        optionsCustomerColor,
        useTranslate,
        date,
    } = globalStore();
    const selectStartTime = startTimeList();
    const selectEndTime = endTimeList();
    const [hoverDeleteButton, setHoverDeleteButton] = useState(false);
    const [hoverPayButton, setHoverPayButton] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const optionsLaneGreater = optionsStartLane > optionsEndLane;
    const optionsTimeGreater = optionsStartTime > optionsEndTime;
    const activeConfirmButton = !optionsCustomerNumber || optionsLaneGreater || optionsTimeGreater;
    const disablePayedButton = optionsCustomerName === 'Außerbetrieb' || optionsCustomerName === 'Ganztagsbuchung';
    const bookingAdjustedNotification = useTranslate('NotificationOptionsChanged');
    const bookingDeletedNotification = useTranslate('NotificationBookingDeleted');
    const bookingPayedNotification = useTranslate('NotificationBookingPayed');

    const confirmUpdateOptions = () => {
        const oldList = [...customerList];
        const newList = oldList.map((customer: any) => {
            if (customer.customerName === optionsCustomerName && customer.date === date) {
                return {
                    ...customer,
                    customerNumber: optionsCustomerNumber,
                    startLane: optionsStartLane,
                    endLane: optionsEndLane,
                    startTime: optionsStartTime,
                    endTime: optionsEndTime,
                    customerNotes: optionsCustomerNotes,
                    customerColor: optionsCustomerColor,
                };
            }
            return customer;
        });
        setCustomerList(newList);
        emitSuccessToast(bookingAdjustedNotification);
        setOptionsModal(false);
    };

    const handleDeleteCustomer = () => {
        const oldList = [...customerList];
        const newList = oldList.filter((item: any) => {
            return item.customerName !== optionsCustomerName && item.date === date;
        });
        setCustomerList(newList);
        emitSuccessToast(bookingDeletedNotification);
        deletedLaneToLocalStorage();
        setOptionsModal(false);
    };

    const handlePaymentStatus = () => {
        const oldList = [...customerList];
        const newList = oldList.map((customer: any) => {
            if (customer.customerName === optionsCustomerName && customer.date === date) {
                return {
                    ...customer,
                    payedStatus: true,
                };
            }
            return customer;
        });
        setCustomerList(newList);
        emitSuccessToast(bookingPayedNotification);
        setOptionsModal(false);
    };

    const handleDeleteModal = () => {
        setOpenDeleteModal(true);
    };

    const confirmDelete = () => {
        handleDeleteCustomer();
        setOpenDeleteModal(false);
        setOptionsModal(false);
    };

    const declineDelete = () => {
        setOpenDeleteModal(false);
    };

    return (
        <Dialog
            className={'fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50'}
            open={optionsModal}
            onClose={() => {}}>
            <Dialog.Panel
                className={
                    'flex animate-jump-in flex-col items-center justify-center gap-3 rounded-xl border border-gray-600 bg-neutral-700 p-3 shadow shadow-gray-500 animate-duration-300 animate-ease-linear'
                }>
                <div className={'flex flex-row items-center justify-start gap-2 rounded-xl bg-sky-100 p-3'}>
                    <div className={'flex flex-col gap-1'}>
                        <Dialog.Title className={'font-bold text-gray-600'}>
                            {useTranslate('OptionsModalText')}
                        </Dialog.Title>
                        <div className={'flex flex-col'}>
                            <p>{useTranslate('BookingModalCustomerName')}</p>
                            <input
                                value={optionsCustomerName}
                                onChange={(e) => setOptionsCustomerName(e.target.value)}
                                name={'optionsCustomerName'}
                                disabled={true}
                                className={'w-full rounded-xl border border-gray-300 p-1 outline-0'}
                            />
                        </div>
                        <div className={'flex flex-col'}>
                            <p>{useTranslate('BookingModalCustomerNumber')}</p>
                            <input
                                value={optionsCustomerNumber}
                                onChange={(e) => setOptionsCustomerNumber(e.target.value)}
                                name={'optionsCustomerNumber'}
                                className={'w-full rounded-xl border border-gray-300 p-1 outline-0'}
                            />
                        </div>
                        <div className={'flex flex-col'}>
                            <p>{useTranslate('BookingModalLanes')}</p>
                            <div className={'flex flex-row gap-2'}>
                                <select
                                    value={optionsStartLane}
                                    onChange={(e) => setOptionsStartLane(Number(e.target.value))}
                                    name={'optionsStartLane'}
                                    className={'w-full rounded-xl border border-gray-300 p-1 outline-0'}>
                                    {Array.from({ length: 12 }).map((_, index) => {
                                        return (
                                            <option key={index} value={index}>
                                                {index + 1}
                                            </option>
                                        );
                                    })}
                                </select>
                                <select
                                    value={optionsEndLane}
                                    onChange={(e) => setOptionsEndLane(Number(e.target.value))}
                                    name={'optionsEndLane'}
                                    className={'w-full rounded-xl border border-gray-300 p-1 outline-0'}>
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
                        <div className={'flex flex-col'}>
                            <p>{useTranslate('BookingModalTime')}</p>
                            <div className={'flex flex-row gap-2'}>
                                <select
                                    value={optionsStartTime}
                                    onChange={(e) => setOptionsStartTime(Number(e.target.value))}
                                    name={'optionsStartTime'}
                                    className={'w-full rounded-xl border border-gray-300 p-1 outline-0'}>
                                    {selectStartTime.map((time, index) => {
                                        return (
                                            <option key={index} value={index}>
                                                {time}
                                            </option>
                                        );
                                    })}
                                </select>
                                <select
                                    value={optionsEndTime}
                                    onChange={(e) => setOptionsEndTime(Number(e.target.value))}
                                    name={'optionsEndTime'}
                                    className={'w-full rounded-xl border border-gray-300 p-1 outline-0'}>
                                    {selectEndTime.map((time, index) => {
                                        return (
                                            <option key={index} value={index}>
                                                {time}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <ColorList />
                        </div>
                    </div>
                    <div>
                        <p>{useTranslate('BookingModalNotes')}</p>
                        <textarea
                            onChange={(e) => setOptionsCustomerNotes(e.target.value)}
                            value={optionsCustomerNotes}
                            placeholder={useTranslate('BookingModalNotesPH')}
                            name={'optionsCustomerNotes'}
                            className={'h-[245px] resize-none rounded-xl border border-gray-300 p-2 outline-0'}
                        />
                    </div>
                </div>
                <div className={'flex w-full flex-row items-center justify-between'}>
                    <div className={'flex flex-row items-center justify-center gap-1'}>
                        <button
                            onClick={handlePaymentStatus}
                            onMouseEnter={() => setHoverPayButton(true)}
                            onMouseLeave={() => setHoverPayButton(false)}
                            className={`${disablePayedButton && 'hidden'} relative flex w-[35px] items-center justify-center rounded-md bg-green-300 p-1 transition-all hover:bg-green-400 disabled:bg-gray-500`}>
                            <FcPaid className={`text-[30px]`} />
                            <InfoHover
                                active={hoverPayButton}
                                text={useTranslate('OptionsModalPayedButtonHoverInfo')}
                                width={'w-[220px]'}
                            />
                        </button>
                        <button
                            onClick={handleDeleteModal}
                            onMouseEnter={() => setHoverDeleteButton(true)}
                            onMouseLeave={() => setHoverDeleteButton(false)}
                            className={
                                'relative flex w-[35px] items-center justify-center rounded-md bg-red-400 p-1 text-center transition-all hover:bg-red-500'
                            }>
                            <FcEmptyTrash className={'text-[30px]'} />
                            <InfoHover
                                active={hoverDeleteButton}
                                text={useTranslate('OptionsModalDeleteButtonHoverInfo')}
                                width={'w-[130px]'}
                            />
                        </button>
                    </div>
                    <div className={'flex flex-row gap-1'}>
                        <button
                            onClick={confirmUpdateOptions}
                            disabled={activeConfirmButton}
                            className={
                                'flex h-[30px] w-[90px] items-center justify-center rounded-md bg-sky-500 p-2 font-bold text-white transition-all hover:bg-sky-600 disabled:bg-gray-500'
                            }>
                            {useTranslate('OptionsModalConfirmButton')}
                        </button>
                        <button
                            className={
                                'flex h-[30px] w-[90px] items-center justify-center rounded-md bg-gray-300 p-2 font-bold transition-all hover:bg-gray-400'
                            }
                            onClick={() => setOptionsModal(false)}>
                            {useTranslate('OptionsModalCloseButton')}
                        </button>
                    </div>
                </div>
                <ConfirmModal confirm={confirmDelete} decline={declineDelete} open={openDeleteModal} />
            </Dialog.Panel>
        </Dialog>
    );
};

export default OptionsModal;
