import React from 'react';
import { useDrop } from 'react-dnd';

interface props {
    onDrop: (item: any) => void;
    acceptType: string;
    children: any;
    isOverColor?: string;
}

const DropZone = ({ onDrop, acceptType, children, isOverColor }: props) => {
    const [{ isOver }, drop] = useDrop({
        accept: acceptType,
        drop: (item) => {
            onDrop(item);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    });
    return (
        <div ref={drop} className={`${isOver && isOverColor} h-full w-[80px] border border-black bg-neutral-200`}>
            {children}
        </div>
    );
};

export default DropZone;
