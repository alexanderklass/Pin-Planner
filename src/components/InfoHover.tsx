import React from 'react';
import { FcInfo } from 'react-icons/fc';
import { Transition } from '@headlessui/react';

interface props {
    active: boolean;
    text: string;
    width: string;
}

const InfoHover = ({ active, text, width }: props) => {
    return (
        <Transition
            show={active}
            enter={'transition-opacity duration-150'}
            enterFrom={'opacity-0'}
            enterTo={'opacity-100'}
            leave='transition-opacity duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div
                className={`pointer-events-none absolute -top-8 left-2 flex ${width} items-center justify-center break-words rounded-md border border-gray-500 bg-gray-200 p-1 text-gray-600`}>
                <FcInfo />
                <p className={'text-[12px] font-bold'}>{text}</p>
            </div>
        </Transition>
    );
};

export default InfoHover;
