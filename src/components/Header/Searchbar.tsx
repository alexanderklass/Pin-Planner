import React, { useState } from 'react';
import { globalStore } from '../../store/global.store';
import { days } from '../../init/initGridData';
import { FcPodiumWithSpeaker } from 'react-icons/fc';

const Searchbar = () => {
    const { setDate, customerList, setCurrentDay, useTranslate } = globalStore();
    const [searchValue, setSearchValue] = useState('');
    const [searchList, setSearchList] = useState<any>([]);
    const [isInputFocused, setInputFocus] = useState(false);
    const [isMouseOver, setMouseOver] = useState(false);

    const onChangeSearch = async (event: any) => {
        setSearchValue(event.target.value);
        if (event.target.value === '') return;
        const filteredResponse = customerList.filter((item: any) =>
            item.customerName.toLowerCase().startsWith(event.target.value.toLowerCase()),
        );
        setSearchList(filteredResponse);
    };

    const onClickSearch = (date: any) => {
        const splitDate = date.split('.');
        const newDay = new Date(splitDate[2], splitDate[1] - 1, splitDate[0]).getDay();
        setCurrentDay(days[newDay]);
        setDate(date);
        setSearchValue('');
    };

    return (
        <React.Fragment>
            <input
                type={'search'}
                name={'searchBar'}
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                onChange={onChangeSearch}
                value={searchValue}
                autoComplete={'off'}
                className={'w-[300px] border p-2 pl-8 outline-0'}
                placeholder={useTranslate('HeaderSearchPlaceholder')}
            />
            {(isInputFocused || isMouseOver) && searchList.length !== 0 && searchValue !== '' ? (
                <div
                    className={
                        'no-scrollbar absolute top-10 z-20 flex h-auto max-h-[300px] flex-col overflow-y-auto rounded-bl-lg rounded-br-lg border border-gray-500 bg-gray-200 md:w-[300px]'
                    }>
                    {searchList.map((item: any, index: number) => {
                        return (
                            <div
                                onClick={() => onClickSearch(item.date)}
                                onMouseEnter={() => setMouseOver(true)}
                                onMouseLeave={() => setMouseOver(false)}
                                key={index}
                                className={'flex cursor-pointer flex-row items-center gap-2 p-2 hover:bg-gray-300'}>
                                <div className={'rounded-md bg-gray-100 p-1'}>
                                    <FcPodiumWithSpeaker className={'text-[25px]'} />
                                </div>
                                <div className={'flex w-full flex-row justify-between'}>
                                    <div>{item.customerName}</div>
                                    <div>{item.date}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : null}
        </React.Fragment>
    );
};

export default Searchbar;
