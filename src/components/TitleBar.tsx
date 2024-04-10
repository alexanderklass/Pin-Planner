import React, { FC } from 'react';
import { IoCloseSharp } from 'react-icons/io5';

const TitelBar: FC = () => {
    const isElectron = typeof process !== 'undefined' && !!process.versions.electron;
    
    const closeWindow = () => {
        window.close();
    };

    return (
        <div
            className={`${!isElectron && 'hidden'} drag-title-bar fixed left-0 right-0 flex h-[25px] cursor-pointer flex-row items-center justify-end bg-neutral-600`}>
            <div className={'drag-no-buttons flex h-full flex-row'}>
                <button onClick={closeWindow} className={'p-1 hover:bg-red-500'}>
                    <IoCloseSharp className={'w-[30px] text-white'} />
                </button>
            </div>
        </div>
    );
};

export default TitelBar;
