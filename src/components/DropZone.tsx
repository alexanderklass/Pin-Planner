import React from 'react';
import { useDrop } from 'react-dnd';

interface props {
    onDrop: (item: any) => void;
    acceptType: string;
    children: any;
    className?: any;
}

const DropZone = ({ onDrop, acceptType, children, className }: props) => {
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
        <div ref={drop} className={`${isOver && 'bg-gray-500'} ${className}`}>
            {children}
        </div>
    );
};

export default DropZone;
