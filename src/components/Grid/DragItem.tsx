import React, {useEffect} from "react";
import {useDrag} from "react-dnd";
import {globalStore} from "../../store/global.store";

interface props {
    type: string;
    data: any;
    children: any;
    color: string;
    onClick: () => void;
}

const DragItem = ({data, type, children, color, onClick}: props) => {
    const {gridData, setGridData, setDraggingData} = globalStore();
    const [{isDragging}, drag] = useDrag({
        item: {data: data},
        type: type,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const colorGrid = () => {
        const oldGrid = [...gridData];
        for (let i = data.startLane; i <= data.endLane; i++) {
            for (let j = data.startTime; j <= data.endTime; j++) {
                oldGrid[i].time[j] = {
                    ...oldGrid[i].time[j],
                    customerColor: "bg-neutral-400",
                };
            }
        }
        setGridData(oldGrid);
    };

    useEffect(() => {
        if (isDragging) {
            //colorGrid();
            setDraggingData(data);
        }
    }, [isDragging]);

    return (
        <div
            ref={drag}
            onClick={onClick}
            className={`${color} relative flex h-full w-full cursor-pointer items-center justify-center text-[14px] font-bold`}
        >
            {children}
        </div>
    );
};

export default DragItem;
