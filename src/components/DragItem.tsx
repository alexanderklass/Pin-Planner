import React from 'react';
import { useDrag } from 'react-dnd';

interface props {
	type: string;
	lane: any;
	time: any;
	children: any;
	color?: string;
}

const DragItem = ({ lane, time, type, children, color }: props) => {
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
			className={`${isDragging && 'bg-red-300'} ${color} absolute h-full w-full text-center`}
		>
			{children}
		</div>
	);
};

export default DragItem;
