import React, {useState} from 'react';
import {Dialog} from '@headlessui/react';
import {globalStore} from '../../../store/global.store';
import {FcPaid, FcEmptyTrash} from 'react-icons/fc';
import {startTimeList, endTimeList} from '../../../init/initGridData';
import InfoHover from '../../InfoHover';
import ConfirmModal from '../Confirm/ConfirmModal';
import ColorList from './ColorList';

const OptionsModal = () => {
    const {
        optionsModal,
        setOptionsModal,
        customerList,
        setCustomerList,
        emitToast,
        deletedLaneToLocalStorage,
        useTranslate,
        setOptionsData,
        optionsData,
        settingsLaneGrids,
        date,
    } = globalStore();
    const selectStartTime = startTimeList();
    const selectEndTime = endTimeList();
    const [hoverDeleteButton, setHoverDeleteButton] = useState(false);
    const [hoverPayButton, setHoverPayButton] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const optionsLaneGreater = optionsData.startLane > optionsData.endLane;
    const optionsTimeGreater = optionsData.startTime > optionsData.endTime;
    const activeConfirmButton = !optionsData.customerName || optionsLaneGreater || optionsTimeGreater;
    const disablePayedButton =
        optionsData.customerName === 'Außer Betrieb' || optionsData.customerName === 'Ganztagsbuchung';
    const bookingAdjustedNotification = useTranslate('NotificationOptionsChanged');
    const bookingDeletedNotification = useTranslate('NotificationBookingDeleted');
    const bookingPayedNotification = useTranslate('NotificationBookingPayed');
    const cantAdjustCustomerNotification = useTranslate('GridCantMoveCustomer');

    const confirmUpdateOptions = () => {
        const oldList = [...customerList];
        if (checkIfCanAdjustCustomer()) return emitToast('error', cantAdjustCustomerNotification);
        const newList = oldList.map((customer: any) => {
            if (customer.uID === optionsData.uID && customer.date === date) {
                return {
                    ...customer,
                    customerNumber: optionsData.customerNumber,
                    startLane: optionsData.startLane,
                    endLane: optionsData.endLane,
                    startTime: optionsData.startTime,
                    endTime: optionsData.endTime,
                    customerNotes: optionsData.customerNotes,
                    customerColor: optionsData.customerColor,
                    price: optionsData.price,
                };
            }
            return customer;
        });
        setCustomerList(newList);
        emitToast('success', bookingAdjustedNotification);
        setOptionsModal(false);
    };

    const checkIfCanAdjustCustomer = () => {
        const filteredList = customerList.filter((item: any) => {
            return (
                item.date === date &&
                item.startLane <= optionsData.endLane &&
                item.endLane >= optionsData.startLane &&
                item.startTime <= optionsData.endTime &&
                item.endTime >= optionsData.startTime &&
                item.uID !== optionsData.uID
            );
        });
        return filteredList.length > 0;
    };

    const handleDeleteCustomer = () => {
        const oldList = [...customerList];
        const newList = oldList.filter((item: any) => {
            return item.uID !== optionsData.uID && item.date === date;
        });
        setCustomerList(newList);
        emitToast('success', bookingDeletedNotification);
        deletedLaneToLocalStorage();
        setOptionsModal(false);
    };

    const handleChange = (event: any) => {
        const numbers = ['startLane', 'endLane', 'startTime', 'endTime'];
        const checkForNumber = numbers.includes(event.target.name);
        const value = checkForNumber ? Number(event.target.value) : event.target.value;
        setOptionsData({
            ...optionsData,
            [event.target.name]: value,
        });
    };

    const handlePaymentStatus = () => {
        const oldList = [...customerList];
        const newList = oldList.map((customer: any) => {
            if (customer.uID === optionsData.uID && customer.date === date) {
                return {
                    ...customer,
                    payedStatus: true,
                };
            }
            return customer;
        });
        setCustomerList(newList);
        emitToast('success', bookingPayedNotification);
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
            onClose={() => {
            }}>
            <Dialog.Panel
                className={
                    'flex animate-jump-in flex-col items-center justify-center gap-3 rounded-xl border border-gray-600 bg-neutral-700 p-3 shadow shadow-gray-500 animate-duration-300 animate-ease-linear'
                }>
                <div className={'flex flex-col items-start justify-start gap-2 rounded-xl bg-sky-100 p-3'}>
                    <Dialog.Title className={'font-bold text-gray-600'}>
                        {useTranslate('OptionsModalText')}
                    </Dialog.Title>
                    <div className={'flex flex-row gap-1'}>
                        <div className={'flex flex-col gap-1'}>
                            <div className={'flex flex-col'}>
                                <p>{useTranslate('BookingModalCustomerName')}</p>
                                <input
                                    value={optionsData.customerName}
                                    onChange={(e) => handleChange(e)}
                                    name={'customerName'}
                                    disabled={true}
                                    className={'w-full rounded-xl border border-gray-300 p-1 outline-0'}
                                />
                            </div>
                            <div className={'flex flex-col'}>
                                <p>{useTranslate('BookingModalCustomerNumber')}</p>
                                <input
                                    value={optionsData.customerNumber}
                                    onChange={(e) => handleChange(e)}
                                    name={'customerNumber'}
                                    className={'w-full rounded-xl border border-gray-300 p-1 outline-0'}
                                />
                            </div>
                            <div className={'flex flex-col'}>
                                <p>{useTranslate('BookingModalLanes')}</p>
                                <div className={'flex flex-row gap-2'}>
                                    <select
                                        value={optionsData.startLane}
                                        onChange={(e) => handleChange(e)}
                                        name={'startLane'}
                                        className={'w-full rounded-xl border border-gray-300 p-1 outline-0'}>
                                        {Array.from({length: settingsLaneGrids}).map((_, index) => {
                                            return (
                                                <option key={index} value={index}>
                                                    {index + 1}
                                                </option>
                                            );
                                        })}
                                    </select>
                                    <select
                                        value={optionsData.endLane}
                                        onChange={(e) => handleChange(e)}
                                        name={'endLane'}
                                        className={'w-full rounded-xl border border-gray-300 p-1 outline-0'}>
                                        {Array.from({length: settingsLaneGrids}).map((_, index) => {
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
                                        value={optionsData.startTime}
                                        onChange={(e) => handleChange(e)}
                                        name={'startTime'}
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
                                        value={optionsData.endTime}
                                        onChange={(e) => handleChange(e)}
                                        name={'endTime'}
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
                                <ColorList/>
                            </div>
                        </div>
                        <div className={'flex flex-col'}>
                            <p>{useTranslate('BookingModalNotes')}</p>
                            <textarea
                                onChange={(e) => handleChange(e)}
                                value={optionsData.customerNotes}
                                placeholder={useTranslate('BookingModalNotesPH')}
                                name={'customerNotes'}
                                className={'h-full resize-none rounded-xl border border-gray-300 p-2 outline-0'}
                            />
                            <div>
                                <p>{useTranslate('BookingModalWorkerName')}</p>
                                <input
                                    className={`rounded-xl border border-gray-300 p-1 font-bold`}
                                    disabled={true}
                                    name={'workerName'}
                                    value={optionsData.workerName}
                                />
                            </div>
                            <div>
                                <p>{useTranslate('OptionsCurrentPrice')}</p>
                                <input
                                    className={`rounded-xl border border-gray-300 ${optionsData.payedStatus ? 'bg-green-200' : 'bg-red-200'} p-1 font-bold`}
                                    disabled={true}
                                    name={'price'}
                                    value={optionsData.price?.toFixed(2) + '€'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'flex w-full flex-row items-center justify-between'}>
                    <div className={'flex flex-row items-center justify-center gap-1'}>
                        <button
                            onClick={handlePaymentStatus}
                            onMouseEnter={() => setHoverPayButton(true)}
                            onMouseLeave={() => setHoverPayButton(false)}
                            className={`${disablePayedButton && 'hidden'} relative flex items-center justify-center rounded-full bg-green-300 p-1 transition-all hover:bg-green-400 disabled:bg-gray-500`}>
                            <FcPaid className={`text-[25px]`}/>
                            <InfoHover
                                active={hoverPayButton}
                                text={useTranslate('OptionsModalPayedButtonHoverInfo')}
                            />
                        </button>
                        <button
                            onClick={handleDeleteModal}
                            onMouseEnter={() => setHoverDeleteButton(true)}
                            onMouseLeave={() => setHoverDeleteButton(false)}
                            className={
                                'relative flex items-center justify-center rounded-full bg-red-400 p-1 text-center transition-all hover:bg-red-500'
                            }>
                            <FcEmptyTrash className={'text-[25px]'}/>
                            <InfoHover
                                active={hoverDeleteButton}
                                text={useTranslate('OptionsModalDeleteButtonHoverInfo')}
                            />
                        </button>
                    </div>
                    <div className={'flex flex-row gap-1'}>
                        <button
                            onClick={confirmUpdateOptions}
                            disabled={activeConfirmButton}
                            className={
                                'outline-text flex h-[30px] w-[90px] items-center justify-center rounded-md bg-sky-500 p-2 font-bold text-white transition-all hover:bg-sky-600 disabled:bg-gray-500'
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
                <ConfirmModal confirm={confirmDelete} decline={declineDelete} open={openDeleteModal}/>
            </Dialog.Panel>
        </Dialog>
    );
};

export default OptionsModal;
