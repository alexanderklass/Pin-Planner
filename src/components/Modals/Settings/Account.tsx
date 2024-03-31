import React from 'react';
import BreakingLine from '../../BreakingLine';
import { globalStore } from '../../../store/global.store';
import { useTranslation } from 'react-i18next';

const Account = () => {
    const { settingsLanguage, setSettingsLanguage } = globalStore();
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng: any) => {
        setSettingsLanguage(lng);
        i18n.changeLanguage(lng);
    };

    return (
        <div className={'flex w-full animate-fade flex-col gap-2'}>
            <div className={'flex items-center justify-between'}>
                <p className={'w-[150px] text-gray-600'}>Name:</p>
                <input
                    className={'w-full rounded-md p-1 text-center'}
                    type={'text'}
                    name={'accountName'}
                    placeholder={'Max Mustermann'}
                />
            </div>
            <div className={'flex items-center justify-between'}>
                <p className={'w-[150px] text-gray-600'}>{t('SettingsAccountRole')}</p>
                <input
                    className={'w-full rounded-md p-1 text-center'}
                    type={'text'}
                    name={'role'}
                    readOnly={true}
                    placeholder={'Administrator'}
                />
            </div>
            <div className={'flex items-center justify-between'}>
                <p className={'w-[150px] text-gray-600'}>E-Mail: </p>
                <input
                    className={'w-full rounded-md p-1 text-center'}
                    name={'e-mail'}
                    placeholder={'testmail@gmail.com'}
                    type={'email'}
                />
            </div>
            <BreakingLine />
            <div className={'flex items-center justify-between'}>
                <p className={'w-[150px] text-gray-600'}>{t('SettingsAccountLanguage')}</p>
                <select
                    name={'language'}
                    onChange={(e) => changeLanguage(e.target.value)}
                    value={settingsLanguage}
                    className={'w-full rounded-md p-1'}>
                    <option value={'de'}>Deutsch</option>
                    <option value={'en'}>Englisch</option>
                </select>
            </div>
        </div>
    );
};

export default Account;
