import { FcOrgUnit } from 'react-icons/fc';
import React, { useState } from 'react';
import { initLaneData, time } from '../init/initGridData';
import DropZone from './DropZone';
import DragItem from './DragItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Switcher from './Switcher';

const Grid = () => {
    const [gridData, setGridData] = useState(initLaneData());
    const onDrop = (item: any, laneIndex: number, timeIndex: number) => {
        const updatedLane = [...gridData];
        updatedLane.forEach((lane) => {
            lane.time.forEach((time) => {
                for (let i = time.startLane; i <= time.endLane; i++) {
                    for (let j = time.startTime; j < time.endTime; j++) {
                        updatedLane[i].time[j] = {
                            ...updatedLane[i].time[j],
                            customerName: item.time.customerName,
                            startLane: item.time.startLane,
                            endLane: item.time.endLane,
                        };
                    }
                }
            });
        });
        setGridData(updatedLane);
        //resetPrevLane(prevLaneID, prevTimeID)
    };

    const resetPrevLane = (prevLaneIndex: number, prevTimeIndex: number) => {
        const deletedUpdatedLane = [...gridData];
        deletedUpdatedLane[prevLaneIndex].time[prevTimeIndex] = {
            ...deletedUpdatedLane[prevLaneIndex].time[prevTimeIndex],
            customerName: '',
        };
        setGridData(deletedUpdatedLane);
    };

    const laneItems = () => {
        return gridData.map((lane, index) => {
            return (
                <div
                    key={index}
                    className={`w-[80px] ${index % 4 === 2 && 'bg-sky-300'} ${index % 4 === 3 && 'bg-sky-300'} border border-black bg-neutral-100 p-1 text-center font-bold`}
                >
                    {lane.bahn}
                </div>
            );
        });
    };

    const timeItems = () => {
        return time().map((time: string, index: number) => {
            return (
                <div
                    className={`flex h-[40px] w-[80px] ${index === 21 && 'rounded-bl-xl'} ${index % 4 === 2 && 'bg-purple-300'} ${index % 4 === 3 && 'bg-purple-300'} items-center justify-center border border-black bg-neutral-100 text-center font-bold`}
                >
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
                                className={`relative h-[40px] w-[80px] border border-black bg-neutral-200`}
                                acceptType={'lane'}
                                onDrop={(item) => onDrop(item, laneIndex, timeIndex)}
                            >
                                {time.customerName && (
                                    <DragItem type={'lane'} color={'bg-green-500'} time={time} lane={lane}>
                                        {time.customerName}
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
                <div className={'flex flex-col items-center justify-center'}>
                    <div className={'flex flex-row'}>
                        <div className={'flex w-[80px] items-center justify-center rounded-tl-xl border border-black bg-gray-200 p-1 text-center'}>
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
