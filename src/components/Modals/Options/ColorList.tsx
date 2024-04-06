import React, { useState } from 'react';
import { pickColorList } from '../../../init/initGridData';
import { globalStore } from '../../../store/global.store';

const ColorList = () => {
    const { optionsData, setOptionsData } = globalStore();
    const [selectedColorIndex, setSelectedColorIndex] = useState(-1);

    const selectColor = (index: number, color: string) => {
        setSelectedColorIndex(index);
        setOptionsData({ ...optionsData, customerColor: color });
    };

    return (
        <div className={'mt-1 flex flex-row items-center justify-center gap-0.5 rounded-xl border bg-blue-200 p-1'}>
            {pickColorList.map((color, index) => {
                return (
                    <div
                        key={index}
                        onClick={() => selectColor(index, color)}
                        className={`${color} ${selectedColorIndex === index && 'border-red-700'} h-[20px] w-[20px] cursor-pointer rounded-full border-2 transition-all hover:scale-110`}></div>
                );
            })}
        </div>
    );
};

export default ColorList;
