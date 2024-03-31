import React from 'react';
import { FcFullTrash } from 'react-icons/fc';
import { globalStore } from '../../../store/global.store';

const DeletedHistoryCounter = () => {
    const { deletedList } = globalStore();
    return (
        <div className={'relative'}>
            <FcFullTrash />
            <div
                className={`${deletedList.length === 0 && 'hidden'} absolute -right-1 -top-1 flex h-[20px] w-[20px] items-center justify-center rounded-full border border-white bg-red-500 text-[11px] font-bold text-white`}>
                {deletedList.length}
            </div>
        </div>
    );
};

export default DeletedHistoryCounter;
