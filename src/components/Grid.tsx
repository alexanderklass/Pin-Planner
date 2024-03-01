import React, {useEffect, useState} from 'react';
import {initLaneData} from "../init/initGridData";
import DropZone from "./DropZone";
import DragItem from "./DragItem";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const Grid = () => {
    const [gridData, setGridData] = useState(initLaneData())
    const onDrop = (item: any, laneIndex: number, timeIndex: number) => {
        if (item.lane.id === laneIndex && item.time.id === timeIndex) return
        const updatedLane = [...gridData];
        updatedLane[laneIndex].time[timeIndex] = {...updatedLane[laneIndex].time[timeIndex], customerName: item.time.customerName};
        setGridData(updatedLane);
        resetPrevLane(item.lane.id, item.time.id)
    }

    const resetPrevLane = (prevLaneIndex: number, prevTimeIndex: number) => {
        const deletedUpdatedLane = [...gridData];
        deletedUpdatedLane[prevLaneIndex].time[prevTimeIndex] = {...deletedUpdatedLane[prevLaneIndex].time[prevTimeIndex], customerName: ''};
        setGridData(deletedUpdatedLane);
    }

    const laneItems = () => {
        return gridData.map((lane, index) => {
            return <div key={index} className={"text-center w-[60px] border border-black"}>{lane.bahn}</div>
        })
    }

    useEffect(() => {
        gridData[0].time[0].customerName = "peter"
    }, []);

    const gridItems = () => {
        return gridData.map((lane, laneIndex) => {
            return (
                <div className={""} key={laneIndex}>
                    {lane.time.map((time, timeIndex) => {
                        return (
                            <DropZone acceptType={"lane"} onDrop={(item) => onDrop(item, laneIndex, timeIndex)}>
                                {time.customerName && <DragItem type={"lane"} time={time} lane={lane}>{time.customerName}</DragItem>}
                            </DropZone>
                        )
                    })}
                </div>
            )
        });
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={"flex flex-col justify-center items-center"}>
                <div className={"flex justify-center items-center flex-row"}>
                    {laneItems()}
                </div>
                <div className={"flex flex-row justify-center items-center"}>
                    {gridItems()}
                </div>
            </div>
        </DndProvider>
    );
};

export default Grid;