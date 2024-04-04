import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { globalStore } from '../../../store/global.store';
import { IoCloseSharp } from 'react-icons/io5';
import { MdAccountCircle } from 'react-icons/md';
import { MdOutlineSettings } from 'react-icons/md';
import { MdOutlineDesignServices } from 'react-icons/md';
import Account from './Account';
import LaneSettings from './LaneSettings';
import Design from './Design';

const SettingsModal = () => {
    const { settingsModal, setSettingsModal, useTranslate } = globalStore();
    const [selectedContent, setSelectedContent] = useState(0);
    const settingsContent = [
        {
            name: useTranslate('SettingsAccountButton'),
            content: <Account />,
            icon: <MdAccountCircle />,
        },
        {
            name: useTranslate('SettingsLaneButton'),
            content: <LaneSettings />,
            icon: <MdOutlineSettings />,
        },
        {
            name: useTranslate('SettingsDesignButton'),
            content: <Design />,
            icon: <MdOutlineDesignServices />,
        },
    ];
    const closeSettingsModal = () => {
        setSettingsModal(false);
        setSelectedContent(0);
    };

    const renderContentSelectors = () => {
        return (
            <>
                {settingsContent.map((content, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => setSelectedContent(index)}
                            className={`flex w-full ${selectedContent === index && 'bg-purple-300'} flex-row items-center gap-1 rounded-md border border-gray-400 bg-gray-100 p-1 hover:bg-purple-300`}>
                            <div className={'text-[20px]'}>{content.icon}</div>
                            {content.name}
                        </button>
                    );
                })}
            </>
        );
    };

    const renderContent = () => {
        return settingsContent[selectedContent].content;
    };
    return (
        <Dialog
            className={'fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50'}
            open={settingsModal}
            onClose={() => {}}>
            <Dialog.Panel
                className={
                    'flex w-[600px] animate-jump-in flex-col items-center justify-center gap-2 rounded-xl border border-gray-600 bg-neutral-700 p-3 shadow shadow-gray-500 animate-duration-300 animate-ease-linear'
                }>
                <div
                    className={
                        'flex h-[40px] w-full flex-row items-center justify-between rounded-md border-b border-gray-500 bg-gray-200'
                    }>
                    <Dialog.Title className={'mx-2 text-[16px] font-bold text-gray-600'}>
                        {useTranslate('SettingsModalText')}
                    </Dialog.Title>
                    <button onClick={closeSettingsModal} className={'mx-1'}>
                        <IoCloseSharp className={'text-[25px] text-gray-600'} />
                    </button>
                </div>
                <div className={'flex h-[400px] w-full flex-row justify-between gap-2'}>
                    <div className={'flex h-full w-[300px] flex-col items-center gap-1 rounded-md bg-gray-200 p-2'}>
                        {renderContentSelectors()}
                    </div>
                    <div className={'flex h-full w-full flex-col gap-2'}>
                        <div className={'flex h-full w-full flex-col items-center rounded-md bg-gray-200 p-2'}>
                            {renderContent()}
                        </div>
                        <div className={'flex w-full items-center justify-between rounded-md bg-gray-300 p-2'}>
                            <div>
                                <button
                                    className={
                                        'outline-text min-w-[70px] rounded-md border border-gray-400 bg-red-500 p-1 text-[14px] font-bold text-white transition-all hover:bg-red-600'
                                    }>
                                    {useTranslate('SettingsLogoutButton')}
                                </button>
                            </div>
                            <div className={'gap flex flex-row justify-between gap-1'}>
                                <button
                                    className={
                                        'outline-text min-w-[70px] rounded-md border border-gray-400 bg-purple-500 p-1 text-[14px] font-bold text-white transition-colors hover:bg-purple-600'
                                    }>
                                    {useTranslate('SettingsSaveButton')}
                                </button>
                                <button
                                    onClick={closeSettingsModal}
                                    className={
                                        'min-w-[70px] rounded-md border border-gray-400 bg-gray-400 p-1 text-[14px] font-bold transition-colors hover:bg-gray-500'
                                    }>
                                    {useTranslate('SettingsCloseButton')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog.Panel>
        </Dialog>
    );
};

export default SettingsModal;
