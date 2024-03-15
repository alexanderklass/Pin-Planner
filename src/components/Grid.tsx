import { FcOrgUnit } from 'react-icons/fc';
import React from 'react';
import { startTimeList } from '../init/initGridData';
import { globalStore } from '../store/global.store';
import DropZone from './DropZone';
import DragItem from './DragItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Switcher from './Switcher';

const Grid = () => {
    const { gridData, handleCustomerClicked, customerList, setCustomerList, date, fetchCustomerList } = globalStore();
    const time = startTimeList();
    const onDrop = (item: any, laneIndex: number, timeIndex: number) => {
        const time = item.time;
        const laneOffset = laneIndex - time.startLane;
        const timeOffset = timeIndex - time.startTime;
        const endLane = time.endLane + laneOffset;
        const endTime = time.endTime + timeOffset;
        const outOfRange = endTime >= 22 || endLane >= 12;
        if (outOfRange) return;
        let oldCustomerList = [...customerList];
        let newCustomerList = oldCustomerList.map((customer: any) => {
            if (customer.customerName === time.customerName && customer.date === date) {
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
        fetchCustomerList();
    };

    const laneItems = () => {
        return gridData.map((lane, index) => {
            return (
                <div
                    key={index}
                    className={`w-[80px] ${index % 4 === 2 && 'bg-neutral-300'} ${index % 4 === 3 && 'bg-neutral-300'} border border-black bg-neutral-100 p-1 text-center font-bold`}>
                    {lane.bahn}
                </div>
            );
        });
    };

    const timeItems = () => {
        return time.map((time: string, index: number) => {
            return (
                <div
                    className={`flex h-[40px] w-[80px] 
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
                <div key={laneIndex}>
                    {lane.time.map((time, timeIndex) => {
                        return (
                            <DropZone
                                className={`flex h-[40px] w-[80px] items-center justify-center border border-black bg-neutral-200`}
                                acceptType={'lane'}
                                onDrop={(item) => onDrop(item, laneIndex, timeIndex)}>
                                {time.customerName && (
                                    <DragItem
                                        type={'lane'}
                                        onClick={() => handleCustomerClicked(laneIndex, timeIndex)}
                                        color={time.color}
                                        time={time}
                                        lane={lane}>
                                        <p className={'break-all'}>
                                            {time.startLane === laneIndex &&
                                                time.startTime === timeIndex &&
                                                time.customerName}
                                        </p>
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
            <div className={'mt-10 flex flex-row justify-center'}>
                <div className={'flex flex-col justify-center'}>
                    <div className={'flex flex-row'}>
                        <div
                            className={
                                'flex w-[80px] items-center justify-center rounded-tl-xl border border-black bg-gray-200 p-1 text-center'
                            }>
                            <FcOrgUnit className={'text-[25px]'} />
                        </div>
                        {laneItems()}
                    </div>
                    <div className={'flex flex-row items-center justify-center'}>
                        <div className={'flex flex-col'}>{timeItems()}</div>
                        <div className={'flex flex-row'}>{gridItems()}</div>
                    </div>
                </div>
                <Switcher />
            </div>
        </DndProvider>
    );
};

export default Grid;
