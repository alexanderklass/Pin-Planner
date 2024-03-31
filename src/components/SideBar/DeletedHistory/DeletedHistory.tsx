import React, { useEffect } from 'react';
import DeletedCustomer from './DeletedCustomer';
import { globalStore } from '../../../store/global.store';
import Placeholder from '../Placeholder';

const DeletedHistory = () => {
    const { date, customerList, deletedList, setDeletedList, setCustomerList, emitSuccessToast, useTranslate } =
        globalStore();
    const placeholderText = useTranslate('DeletedHistoryEmptyList');
    const recoveredNotification = useTranslate('NotificationBookingRecovered');
    const permDeletedNotification = useTranslate('NotificationBookingPermRemoved');
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
        const restoredCustomer = {
            date: value.date,
            customerName: value.customerName,
            startLane: value.startLane,
            endLane: value.endLane,
            startTime: value.startTime,
            endTime: value.endTime,
            customerColor: value.customerColor,
            customerNumber: value.customerNumber,
            //workerName: value.workerName,
            customerNotes: value.customerNotes,
            payedStatus: false,
        };
        setCustomerList([...customerList, restoredCustomer]);
        localStorage.removeItem(id);
        emitSuccessToast(recoveredNotification);
    };

    const deleteStorageItem = (id: any) => {
        localStorage.removeItem(id);
        emitSuccessToast(permDeletedNotification);
        getStorageItems();
    };

    useEffect(() => {
        getStorageItems();
        //eslint-disable-next-line
    }, [date, customerList]);

    return (
        <div className={'no-scrollbar flex max-h-[832px] w-full flex-col gap-1 overflow-y-auto scroll-smooth p-1'}>
            {deletedList.length > 0 ? (
                deletedList.map((customer: any, index: number) => {
                    return (
                        <DeletedCustomer
                            key={index}
                            name={customer.value.customerName}
                            number={customer.value.customerNumber}
                            lanes={customer.value.startLane + ' ' + customer.value.endLane}
                            time={customer.value.startTime + ' ' + customer.value.endTime + ' Uhr'}
                            notes={customer.value.customerNotes}
                            permRemoveLane={() => deleteStorageItem(customer.key)}
                            recoverLane={() => recoverLane(index, customer.value.customerName)}
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
