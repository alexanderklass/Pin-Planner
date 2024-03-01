import React from 'react';
import {useDrop} from "react-dnd";


interface props {
    onDrop: (item: any) => void;
    acceptType: string;
    children: any;
}

const DropZone = ({onDrop, acceptType, children}: props) => {
    const [{isOver}, drop] = useDrop({
        accept: acceptType,
        drop: (item) => {
            onDrop(item)
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });
    return (
        <div ref={drop} className={`${isOver && "bg-green-300"} bg-gray-200 relative w-[60px] h-[35px] border border-black`}>
            {children}
        </div>
    );
};

export default DropZone;