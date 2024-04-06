import React from 'react';
import { useDrag } from 'react-dnd';

interface props {
    type: string;
    data: any;
    children: any;
    color?: string;
    onClick?: () => void;
}

const DragItem = ({ data, type, children, color, onClick }: props) => {
    const [{ isDragging }, drag] = useDrag({
        item: { data: data },
        type: type,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <div
            ref={drag}
            onClick={onClick}
            className={`${isDragging ? 'bg-green-300' : `${color}`} relative flex h-full w-full cursor-pointer items-center justify-center text-[14px] font-bold`}>
            {children}
        </div>
    );
};

export default DragItem;
