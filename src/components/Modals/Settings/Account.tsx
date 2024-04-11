import React from 'react';
import BreakingLine from '../../BreakingLine';
import {globalStore} from '../../../store/global.store';
import {useTranslation} from 'react-i18next';

const Account = () => {
    const {settingsLanguage, setSettingsLanguage} = globalStore();
    const {t, i18n} = useTranslation();

    const changeLanguage = (lng: any) => {
        setSettingsLanguage(lng);
        i18n.changeLanguage(lng);
    };

    return (
        <div className={'flex w-full animate-fade flex-col gap-2'}>
            <div className={'flex items-center justify-between'}>
                <p className={'w-[150px] text-gray-600'}>Name:</p>
                <input
                    disabled={true}
                    className={'w-full rounded-md p-1 text-center ring-1 ring-purple-400'}
                    type={'text'}
                    name={'accountName'}
                    placeholder={'Max Mustermann'}
                />
            </div>
            <div className={'flex items-center justify-between'}>
                <p className={'w-[150px] text-gray-600'}>{t('SettingsAccountRole')}</p>
                <input
                    disabled={true}
                    className={'w-full rounded-md p-1 text-center ring-1 ring-purple-400'}
                    type={'text'}
                    name={'role'}
                    placeholder={'Administrator'}
                />
            </div>
            <div className={'flex items-center justify-between'}>
                <p className={'w-[150px] text-gray-600'}>E-Mail: </p>
                <input
                    disabled={true}
                    className={'w-full rounded-md p-1 text-center ring-1 ring-purple-400'}
                    name={'e-mail'}
                    placeholder={'testmail@gmail.com'}
                    type={'email'}
                />
            </div>
            <BreakingLine/>
            <div className={'flex items-center justify-between'}>
                <p className={'w-[150px] text-gray-600'}>{t('SettingsAccountLanguage')}</p>
                <select
                    name={'language'}
                    onChange={(e) => changeLanguage(e.target.value)}
                    value={settingsLanguage}
                    className={'w-full rounded-md p-1'}>
                    <option value={'de'}>{t('languageValueDE')}</option>
                    <option value={'en'}>{t('languageValueEN')}</option>
                </select>
            </div>
        </div>
    );
};

export default Account;
