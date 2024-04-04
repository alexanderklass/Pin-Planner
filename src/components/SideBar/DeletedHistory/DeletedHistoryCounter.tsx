import React from 'react';
import { FcFullTrash } from 'react-icons/fc';
import { globalStore } from '../../../store/global.store';

const DeletedHistoryCounter = () => {
    const { deletedList } = globalStore();
    return (
        <div className={'relative'}>
            <FcFullTrash />
            <div
                className={`${deletedList.length === 0 && 'hidden'} absolute -right-1 -top-1 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-white bg-red-500 text-[8px] font-bold text-white xl:h-[20px] xl:w-[20px] xl:text-[11px]`}>
                {deletedList.length}
            </div>
        </div>
    );
};

export default DeletedHistoryCounter;
