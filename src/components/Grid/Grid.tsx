import { FcCheckmark } from 'react-icons/fc';
import React, { useEffect } from 'react';
import { initLaneData, startTimeList } from '../../init/initGridData';
import { globalStore } from '../../store/global.store';
import DropZone from './DropZone';
import DragItem from './DragItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Switcher from '../SideBar/Switcher';
import schedulerIcon from '../../assets/images/scheduler-icon.png';
import PayedSymbol from './PayedSymbol';

const Grid = () => {
    const {
        gridData,
        handleCustomerClicked,
        customerList,
        setCustomerList,
        date,
        emitSuccessToast,
        emitFailedToast,
        setGridData,
        settingsLaneGrids,
        useTranslate,
    } = globalStore();
    const time = startTimeList();
    const changedNotification = useTranslate('NotificationBookingMoved');
    const cantMoveNotification = useTranslate('NotificationCantMoveBooking');
    const onDrop = (item: any, laneIndex: number, timeIndex: number) => {
        const data = item.data;
        const laneOffset = laneIndex - data.startLane;
        const timeOffset = timeIndex - data.startTime;
        const endLane = data.endLane + laneOffset;
        const endTime = data.endTime + timeOffset;
        const outOfRange = endTime >= 22 || endLane >= 12;
        if (outOfRange) {
            emitFailedToast(cantMoveNotification);
            return;
        }
        let oldCustomerList = [...customerList];
        let newCustomerList = oldCustomerList.map((customer: any) => {
            if (customer.customerName === data.customerName && customer.date === date) {
                return {
                    ...customer,
                    startLane: laneIndex,
                    endLane: endLane,
                    startTime: timeIndex,
                    endTime: endTime,
                };
            }
            return customer;
        });
        setCustomerList(newCustomerList);
        emitSuccessToast(changedNotification);
    };

    const fetchCustomerList = () => {
        const updatedLane = initLaneData(settingsLaneGrids);
        const filteredCustomerList = customerList.filter((item: any) => {
            return item.date === date;
        });
        filteredCustomerList.forEach((item: any) => {
            for (let i = item.startLane; i <= item.endLane; i++) {
                for (let j = item.startTime; j <= item.endTime; j++) {
                    updatedLane[i].time[j] = {
                        ...updatedLane[i].time[j],
                        customerName: item.customerName,
                        customerNumber: item.customerNumber,
                        date: item.date,
                        customerNotes: item.customerNotes,
                        workerName: item.workerName,
                        startLane: item.startLane,
                        endLane: item.endLane,
                        startTime: item.startTime,
                        endTime: item.endTime,
                        customerColor: item.customerColor,
                        payedStatus: item.payedStatus,
                    };
                }
            }
        });
        setGridData(updatedLane);
    };

    useEffect(() => {
        fetchCustomerList();
        //eslint-disable-next-line
    }, [customerList, date, settingsLaneGrids]);

    const laneItems = () => {
        return gridData.map((lane, index) => {
            return (
                <div
                    key={index}
                    className={`${index % 4 === 2 && 'bg-neutral-300'} 
                                ${index % 4 === 3 && 'bg-neutral-300'} 
                                flex w-[80px] items-center justify-center border border-black bg-neutral-100 font-bold`}>
                    {lane.bahn}
                </div>
            );
        });
    };

    const timeItems = () => {
        return time.map((time: string, index: number) => {
            return (
                <div
                    key={index}
                    className={`flex h-full w-[80px] flex-col 
                      ${index === 21 && 'rounded-bl-xl'} 
                      ${index % 4 === 2 && 'bg-neutral-300'} 
                      ${index % 4 === 3 && 'bg-neutral-300'} 
                      items-center justify-center border border-black bg-neutral-100 text-center font-bold`}>
                    {time}
                </div>
            );
        });
    };

    const gridItems = () => {
        return gridData.map((lane, laneIndex) => {
            return (
                <div className={'flex h-full flex-col'} key={laneIndex}>
                    {lane.time.map((time, timeIndex) => {
                        return (
                            <DropZone
                                acceptType={'lane'}
                                isOverColor={'bg-gray-600'}
                                key={timeIndex}
                                onDrop={(item) => onDrop(item, laneIndex, timeIndex)}>
                                {time.customerName && (
                                    <DragItem
                                        type={'lane'}
                                        key={timeIndex}
                                        onClick={() => handleCustomerClicked(laneIndex, timeIndex)}
                                        color={time.customerColor}
                                        isDraggingColor={'bg-green-300'}
                                        data={time}>
                                        <p className={'break-all'}>
                                            {time.startLane === laneIndex &&
                                                time.startTime === timeIndex &&
                                                time.customerName}
                                        </p>
                                        {time.payedStatus && <PayedSymbol />}
                                    </DragItem>
                                )}
                            </DropZone>
                        );
                    })}
                </div>
            );
        });
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={'flex h-full flex-row justify-center p-5'}>
                <div className={'flex flex-col justify-center'}>
                    <div className={'flex flex-row'}>
                        <div
                            className={
                                'flex w-[80px] items-center justify-center rounded-tl-xl border border-black bg-neutral-300 p-1 text-center'
                            }>
                            <img className={'w-[35px] rounded-md'} src={schedulerIcon} alt={'ICON'} />
                        </div>
                        {laneItems()}
                    </div>
                    <div className={'flex h-full flex-row'}>
                        <div className={'flex flex-col'}>{timeItems()}</div>
                        {gridItems()}
                    </div>
                </div>
                <Switcher />
            </div>
        </DndProvider>
    );
};

export default Grid;
