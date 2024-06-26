import React from 'react';
import {globalStore} from '../../../store/global.store';

const LaneSettings = () => {
    const {settingsLaneGrids, setSettingsLaneGrids, settingsPrice, setSettingsPrice, useTranslate} = globalStore();

    return (
        <div className={'flex w-full animate-fade flex-col gap-2'}>
            <div className={'flex items-center justify-between'}>
                <p className={'w-full text-gray-600'}>{useTranslate('SettingsLaneCounterText')}</p>
                <select
                    name={'settingsNumberLanes'}
                    value={settingsLaneGrids}
                    onChange={(e) => setSettingsLaneGrids(Number(e.target.value))}
                    className={'w-[250px] rounded-md p-1 text-center'}>
                    {Array.from({length: 18}).map((_, index) => {
                        return (
                            <option value={index} key={index}>
                                {index}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className={'flex items-center justify-between'}>
                <p className={'w-full text-gray-600'}>{useTranslate('SettingsLaneOpeningTimeText')}</p>
                <div className={'flex w-full flex-row items-center justify-end gap-1'}>
                    <select disabled={true} className={'w-[73px] rounded-md p-1 text-center'} name={'settingsStartTime'}>
                        {Array.from({length: 18}).map((_, index) => {
                            return (
                                <option value={index} key={index}>
                                    {index + 1}
                                </option>
                            );
                        })}
                    </select>
                    <select disabled={true} className={'w-[73px] rounded-md p-1 text-center'} name={'settingsEndTime'}>
                        {Array.from({length: 18}).map((_, index) => {
                            return (
                                <option value={index} key={index}>
                                    {index + 1}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </div>
            <div className={'flex w-full items-center'}>
                <p className={'w-full text-gray-600'}>{useTranslate('SettingsLanePrice')}</p>
                <input
                    className={'w-[150px] rounded-md p-1 text-center'}
                    type={'number'}
                    onChange={(e) => setSettingsPrice(Number(e.target.value))}
                    value={settingsPrice}
                    name={'currentPrice'}
                />
            </div>
        </div>
    );
};

export default LaneSettings;
