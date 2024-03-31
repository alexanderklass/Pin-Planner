import React from 'react';
import BreakingLine from '../../BreakingLine';
import { globalStore } from '../../../store/global.store';

const Design = () => {
    const { useTranslate } = globalStore();
    return (
        <div className={'flex w-full animate-fade flex-col gap-2'}>
            <div className={'flex w-full justify-between'}>
                <p className={'w-[150px] text-gray-600'}>{useTranslate('SettingsDesignColor')}</p>
                <select name={'designColor'} className={'w-full rounded-md p-1'}>
                    <option>Standart</option>
                </select>
            </div>
            <BreakingLine />
            <div className={'flex items-center'}>
                <p className={'w-[105px] text-gray-600'}>{useTranslate('SettingsDesignNotifications')}</p>
                <input name={'notificationToggle'} type={'checkbox'} />
            </div>
            <div className={'flex items-center'}>
                <p className={'w-[150px] text-gray-600'}>{useTranslate('SettingsDesignPosition')}</p>
                <select name={'notificationsPosition'} className={'w-full rounded-md p-1'}>
                    <option>Standart</option>
                    <option>Mitte oben</option>
                    <option>Links oben</option>
                </select>
            </div>
            <BreakingLine />
        </div>
    );
};

export default Design;
