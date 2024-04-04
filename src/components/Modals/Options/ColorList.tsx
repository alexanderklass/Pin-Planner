import React, { useState } from 'react';
import { pickColorList } from '../../../init/initGridData';
import { globalStore } from '../../../store/global.store';

const ColorList = () => {
    const { setOptionsCustomerColor } = globalStore();
    const [selectedColor, setSelectedColor] = useState(-1);
    const selectColor = (index: number, color: string) => {
        setSelectedColor(-1);
        setSelectedColor(index);
        setOptionsCustomerColor(color);
    };
    return (
        <div className={'mt-1 flex flex-row items-center justify-center gap-0.5 rounded-xl border bg-blue-200 p-1'}>
            {pickColorList.map((color, index) => {
                return (
                    <div
                        key={index}
                        onClick={() => selectColor(index, color)}
                        className={`${color} ${selectedColor === index && 'border-red-700'} h-[20px] w-[20px] cursor-pointer rounded-full border-2 transition-all hover:scale-110`}></div>
                );
            })}
        </div>
    );
};

export default ColorList;
