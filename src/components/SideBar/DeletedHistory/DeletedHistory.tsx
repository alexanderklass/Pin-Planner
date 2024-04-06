import React, { useEffect } from 'react';
import DeletedCustomer from './DeletedCustomer';
import { globalStore } from '../../../store/global.store';
import Placeholder from '../Placeholder';
import { switchIndexToTime } from '../../../init/initGridData';

const DeletedHistory = () => {
    const { date, customerList, deletedList, setDeletedList, setCustomerList, emitToast, useTranslate } = globalStore();
    const placeholderText = useTranslate('DeletedHistoryEmptyList');
    const recoveredNotification = useTranslate('NotificationBookingRecovered');
    const permDeletedNotification = useTranslate('NotificationBookingPermRemoved');
    const cantRecoverLane = useTranslate('BookingCantBookCustomer');
    const getStorageItems = () => {
        const itemsArray: any = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key: any = localStorage.key(i);
            let value: any = JSON.parse(localStorage.getItem(key) ?? '');
            if (value.date === date) itemsArray.push({ key, value });
        }
        setDeletedList(itemsArray);
    };

    const recoverLane = (index: number, id: any) => {
        const key = localStorage.key(index);
        const storageItem = localStorage.getItem(key ?? '');
        const value = JSON.parse(storageItem ?? 'null');
        if (checkIfCanRecoverLane(value)) return emitToast('error', cantRecoverLane);
        const restoredCustomer = {
            date: value.date,
            uID: value.uID,
            customerName: value.customerName,
            startLane: value.startLane,
            endLane: value.endLane,
            startTime: value.startTime,
            endTime: value.endTime,
            customerColor: value.customerColor,
            customerNumber: value.customerNumber,
            workerName: value.workerName,
            customerNotes: value.customerNotes,
            payedStatus: false,
        };
        setCustomerList([...customerList, restoredCustomer]);
        localStorage.removeItem(id);
        emitToast('success', recoveredNotification);
    };

    const checkIfCanRecoverLane = (value: any) => {
        const filteredList = customerList.filter((item: any) => {
            return (
                item.date === date &&
                item.startLane <= value.endLane &&
                item.endLane >= value.startLane &&
                item.startTime <= value.endTime &&
                item.endTime >= value.startTime
            );
        });
        return filteredList.length > 0;
    };

    const deleteStorageItem = (id: any) => {
        localStorage.removeItem(id);
        emitToast('success', permDeletedNotification);
        getStorageItems();
    };

    useEffect(() => {
        getStorageItems();
        //eslint-disable-next-line
    }, [date, customerList]);

    return (
        <div
            className={
                'no-scrollbar flex max-h-[832px] w-full flex-col items-center gap-1 overflow-y-auto scroll-smooth p-1'
            }>
            {deletedList.length > 0 ? (
                deletedList.map((customer: any, index: number) => {
                    const startTimeConverted = switchIndexToTime(customer.value.startTime);
                    const endTimeConverted = switchIndexToTime(customer.value.endTime);
                    const startLane = customer.value.startLane === 0 ? 1 : customer.value.startLane + 1;
                    const endLane = customer.value.endLane === 0 ? 1 : customer.value.endLane + 1;
                    return (
                        <DeletedCustomer
                            key={index}
                            name={customer.value.customerName}
                            number={customer.value.customerNumber}
                            lanes={startLane + ' - ' + endLane}
                            time={startTimeConverted + ' - ' + endTimeConverted + ' Uhr'}
                            notes={customer.value.customerNotes}
                            permRemoveLane={() => deleteStorageItem(customer.key)}
                            recoverLane={() => recoverLane(index, customer.key)}
                        />
                    );
                })
            ) : (
                <Placeholder text={placeholderText} />
            )}
        </div>
    );
};

export default DeletedHistory;
