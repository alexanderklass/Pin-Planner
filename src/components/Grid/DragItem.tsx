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
    const {setDraggingData} = globalStore();
    const [{isDragging}, drag] = useDrag({
        item: {data: data},
        type: type,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    useEffect(() => {
        if (isDragging) {
            setDraggingData(data);
        }
        //eslint-disable-next-line
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
