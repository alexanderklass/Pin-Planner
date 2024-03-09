import React from 'react';

const Notes = () => {
    return (
        <div className={'flex h-full w-full animate-fade flex-col gap-1 p-2'}>
            <textarea className={'h-full resize-none rounded-xl p-2'} placeholder={'Sonderbuchungen...'} />
            <textarea className={'h-full resize-none rounded-xl p-2'} placeholder={'Koch...'} />
            <textarea className={'h-full resize-none rounded-xl p-2'} placeholder={'Clubraum...'} />
            <button className={'rounded-xl bg-violet-500 p-1 font-bold text-white transition-colors hover:bg-violet-600'}>Speichern</button>
        </div>
    );
};

export default Notes;
