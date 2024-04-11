import React from 'react';
import {FcInfo} from 'react-icons/fc';
import {Transition} from '@headlessui/react';

interface props {
    active: boolean;
    text: string;
}

const InfoHover = ({active, text}: props) => {
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
                className={`pointer-events-none absolute -top-8 left-2 gap-1 items-center flex whitespace-nowrap rounded-md border border-gray-500 bg-gray-200 p-1 text-gray-600`}>
                <FcInfo/>
                <p className={'text-[12px] font-bold'}>{text}</p>
            </div>
        </Transition>
    );
};

export default InfoHover;
