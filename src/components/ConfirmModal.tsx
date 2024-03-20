import React from 'react';
import { Dialog } from '@headlessui/react';
import { FcInfo } from 'react-icons/fc';

interface props {
    confirm?: () => void;
    decline?: () => void;
    text: string;
    open: boolean;
}

const ConfirmModal = ({ open, confirm, decline, text }: props) => {
    return (
        <Dialog
            className={
                'fixed left-[42%] top-[20%] z-10 rounded-xl border border-gray-500 bg-purple-400 p-2 shadow shadow-black'
            }
            open={open}
            onClose={() => {}}>
            <div className={'flex flex-col gap-5 rounded-xl bg-gray-200 p-3'}>
                <div className={'flex flex-row items-center justify-center gap-1'}>
                    <FcInfo className={'text-[25px]'} />
                    <Dialog.Title className={'text-center font-bold'}>{text}</Dialog.Title>
                </div>
                <div className={'flex w-full flex-row justify-end gap-1'}>
                    <button
                        className={
                            'rounded-md border border-gray-400 bg-green-300 p-1 text-[14px] font-bold transition-all hover:bg-green-400'
                        }
                        onClick={confirm}>
                        Bestätigen
                    </button>
                    <button
                        className={
                            'rounded-md border border-gray-400 bg-gray-300 p-1 text-[14px] font-bold transition-all hover:bg-gray-400'
                        }
                        onClick={decline}>
                        Schließen
                    </button>
                </div>
            </div>
        </Dialog>
    );
};

export default ConfirmModal;
