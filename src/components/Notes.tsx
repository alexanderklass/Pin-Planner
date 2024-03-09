import React from 'react';
import extraBookingImage from '../assets/images/extrabooking-background.png';
import cookingImage from '../assets/images/cook-background.png';
import clubroomImage from '../assets/images/clubroom-background.png';

const Notes = () => {
    return (
        <div className={'flex h-full w-full animate-fade flex-col gap-1 p-2'}>
            <textarea
                className={'h-full resize-none rounded-xl p-2 opacity-70 placeholder:rounded-xl placeholder:bg-gray-200 placeholder:p-1'}
                style={{ backgroundImage: `url(${extraBookingImage})` }}
                placeholder={'Sonderbuchungen...'}
            />
            <textarea
                className={'h-full resize-none rounded-xl p-2 opacity-70 placeholder:rounded-xl placeholder:bg-gray-200 placeholder:p-1'}
                style={{ backgroundImage: `url(${cookingImage})` }}
                placeholder={'Koch...'}
            />
            <textarea
                className={'h-full resize-none rounded-xl p-2 opacity-70 placeholder:rounded-xl placeholder:bg-gray-200 placeholder:p-1'}
                style={{ backgroundImage: `url(${clubroomImage})` }}
                placeholder={'Clubraum...'}
            />
            <button className={'rounded-xl bg-violet-500 p-1 font-bold text-white transition-colors hover:bg-violet-600'}>Speichern</button>
        </div>
    );
};

export default Notes;
