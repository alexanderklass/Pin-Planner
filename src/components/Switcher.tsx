import React, { useState } from 'react';
import { FcClock } from 'react-icons/fc';
import { FcKindle } from 'react-icons/fc';
import { FcFullTrash } from 'react-icons/fc';
import Notes from './Notes';
import DailyHistory from './DailyHistory';
import DeletedHistory from './DeletedHistory';

const Switcher = () => {
    const [switcherData, setSwitcherData] = useState<any>([
        {
            name: 'Notizen',
            icon: <FcKindle />,
            active: false,
            element: <Notes />,
        },
        {
            name: 'Tagesverlauf',
            icon: <FcClock />,
            active: false,
            element: <DailyHistory />,
        },
        {
            name: 'Papierkorb',
            icon: <FcFullTrash />,
            active: false,
            element: <DeletedHistory />,
        },
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [mouseHover, setMouseHover] = useState(-1);
    const hoverAnimation = (index: number) => {
        setMouseHover(index);
    };
    const resetHoverAnimation = () => {
        setMouseHover(-1);
    };

    return (
        <div className={'flex flex-col rounded-r-xl border border-black bg-gray-200'}>
            <div className={'flex flex-row'}>
                {switcherData.map((item: any, index: number) => {
                    return (
                        <button
                            onClick={() => setCurrentIndex(index)}
                            onMouseEnter={() => hoverAnimation(index)}
                            onMouseLeave={resetHoverAnimation}
                            key={index}
                            className={`flex w-[90px] flex-col ${switcherData.length - 1 === index && 'rounded-tr-xl'} items-center justify-center bg-gray-300 p-2`}
                        >
                            <div className={`${mouseHover === index && 'animate-wiggle-more'} text-[30px]`}>{item.icon}</div>
                            <p className={'text-[15px] font-bold'}>{item.name}</p>
                            <div className={`h-[7px] w-full rounded-xl ${currentIndex === index && 'animate-jump bg-sky-500'}`}></div>
                        </button>
                    );
                })}
            </div>
            <div className={'flex h-full items-start justify-center'}>{switcherData[currentIndex].element}</div>
        </div>
    );
};

export default Switcher;
