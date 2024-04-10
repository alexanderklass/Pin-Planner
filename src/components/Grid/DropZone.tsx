import React from 'react';
import { useDrop } from 'react-dnd';

interface props {
    onDrop: (item: any) => void;
    acceptType: string;
    children: any;
    isOverGrid?: boolean;
}

const DropZone = ({ onDrop, acceptType, children, isOverGrid }: props) => {
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
        <div
            ref={drop}
            className={` ${isOver && !isOverGrid ? 'bg-neutral-500' : 'bg-neutral-200'} h-full w-[50px] border border-black xl:w-[80px]`}>
            {children}
        </div>
    );
};

export default DropZone;
