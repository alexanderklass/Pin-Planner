import React from 'react';

interface props {
    drag: any;
}

const WindowDraggableBar = ({ drag }: props) => {
    return <div className={`h-[20px] ${drag} w-full bg-white`}>test</div>;
};

export default WindowDraggableBar;
