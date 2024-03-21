import React from 'react';
import { useDrop } from 'react-dnd';

interface props {
    onDrop: (item: any) => void;
    acceptType: string;
    children: any;
}

const DropZone = ({ onDrop, acceptType, children }: props) => {
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
        <div ref={drop} className={`${isOver && 'bg-gray-700'} h-full w-[80px] border border-black bg-neutral-200`}>
            {children}
        </div>
    );
};

export default DropZone;
