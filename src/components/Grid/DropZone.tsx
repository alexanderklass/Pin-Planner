import React, {useCallback} from "react";
import {useDrop} from "react-dnd";
import {globalStore} from "../../store/global.store";

interface props {
    onDrop: (item: any) => void;
    onHover: boolean;
    hoverIndex: { startLane: number, startTime: number, data: any };
    acceptType: string;
    children: any;
}

const DropZone = ({onDrop, acceptType, children, onHover, hoverIndex}: props) => {
    const {setGridData, gridData, draggingData} = globalStore()
    const [{isOver}, drop] = useDrop({
        accept: acceptType,
        drop: (item) => {
            onDrop(item);
        },
        hover: () => {
            if (isOver) {
                changeHoverColor();
            } else {
                resetHoverColor();
            }
        },
        collect: (monitor) => ({
            isOver: monitor.isOver({shallow: true}),
        }),
    });

    const changeHoverColor = useCallback(() => {
        const laneOffset = hoverIndex.startLane - draggingData.startLane;
        const timeOffset = hoverIndex.startTime - draggingData.startTime;
        const endLane = draggingData.endLane + laneOffset;
        const endTime = draggingData.endTime + timeOffset;
        const oldGrid = [...gridData];
        const outOfRange = endTime > 21 || endLane >= 12;
        if (outOfRange) return;
        for (let i = hoverIndex.startLane; i <= endLane; i++) {
            for (let j = hoverIndex.startTime; j <= endTime; j++) {
                oldGrid[i].time[j] = {
                    ...oldGrid[i].time[j],
                    isOverGrid: true,
                };
            }
        }
        setGridData(oldGrid);
    }, [gridData])

    const resetHoverColor = useCallback(() => {
        const oldGrid = [...gridData];
        for (let i = 0; i < oldGrid.length; i++) {
            for (let j = 0; j < oldGrid[i].time.length; j++) {
                oldGrid[i].time[j] = {
                    ...oldGrid[i].time[j],
                    isOverGrid: false,
                };
            }
        }
        setGridData(oldGrid);
    }, [gridData])

    return (
        <div
            ref={drop}
            className={`${onHover ? `${draggingData.customerColor}` : "bg-neutral-200"} h-full w-[50px] border border-black xl:w-[80px]`}
        >
            {children}
        </div>
    );
};

export default DropZone;
