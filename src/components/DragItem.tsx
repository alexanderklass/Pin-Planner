import React from 'react';
import { useDrag } from 'react-dnd';

interface props {
    type: string;
    lane: any;
    time: any;
    children: any;
    color?: string;
    onClick?: () => void;
}

const DragItem = ({ lane, time, type, children, color, onClick }: props) => {
    const [{ isDragging }, drag] = useDrag({
        item: { lane: lane, time: time },
        type: type,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    return (
        <div
            ref={drag}
            onClick={onClick}
            className={`${isDragging && 'bg-green-400'} ${color} flex h-full w-full animate-fade cursor-pointer items-center justify-center text-[14px] font-bold shadow shadow-black duration-75`}>
            {children}
        </div>
    );
};

export default DragItem;
