import React from 'react';
import { useDrag } from 'react-dnd';

interface props {
    type: string;
    data: any;
    children: any;
    color?: string;
    isDraggingColor?: string;
    onClick?: () => void;
}

const DragItem = ({ data, type, children, color, onClick, isDraggingColor }: props) => {
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
            className={`${isDragging && isDraggingColor} ${color} relative flex h-full w-full animate-jump-in cursor-pointer items-center justify-center text-[14px] font-bold animate-duration-300 animate-ease-linear`}>
            {children}
        </div>
    );
};

export default DragItem;
