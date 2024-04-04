import React from 'react';
import { Dialog } from '@headlessui/react';
import { FcInfo } from 'react-icons/fc';
import { globalStore } from '../../../store/global.store';

interface props {
    confirm?: () => void;
    decline?: () => void;
    open: boolean;
}

const ConfirmModal = ({ open, confirm, decline }: props) => {
    const { useTranslate } = globalStore();
    const text = useTranslate('ConfirmModalText');
    const deleteButton = useTranslate('ConfirmModalDeleteButton');
    const closeButton = useTranslate('ConfirmModalCloseButton');
    const headerText = useTranslate('ConfirmModalHeaderText');
    return (
        <Dialog
            className={
                'fixed inset-0 -top-[600px] flex animate-jump-in items-center justify-center animate-duration-300 animate-ease-linear'
            }
            open={open}
            onClose={() => {}}>
            <Dialog.Panel
                className={
                    'flex min-w-[420px] flex-col items-center justify-center rounded-xl bg-gray-200 p-4 shadow shadow-black ring-8 ring-red-500 ring-opacity-80'
                }>
                <p className={'text-[18px] font-bold'}>{headerText}</p>
                <div className={'flex flex-row items-center justify-center gap-1'}>
                    <FcInfo className={'rounded-full text-[25px] ring-2'} />
                    <Dialog.Title className={'text-center'}>{text}</Dialog.Title>
                </div>
                <div className={'mt-5 flex w-full flex-row justify-center gap-1'}>
                    <button
                        className={
                            'outline-text min-w-[90px] rounded-md border border-gray-400 bg-red-500 p-1 text-[14px] font-bold transition-all hover:bg-red-600'
                        }
                        onClick={confirm}>
                        {deleteButton}
                    </button>
                    <button
                        className={
                            'min-w-[90px] rounded-md border border-gray-400 bg-gray-300 p-1 text-[14px] font-bold transition-all hover:bg-gray-400'
                        }
                        onClick={decline}>
                        {closeButton}
                    </button>
                </div>
            </Dialog.Panel>
        </Dialog>
    );
};

export default ConfirmModal;
