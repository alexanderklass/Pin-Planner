import React, { useState } from 'react';
import extraBookingImage from '../assets/images/extrabooking-background.png';
import cookingImage from '../assets/images/cook-background.png';
import clubroomImage from '../assets/images/clubroom-background.png';

const Notes = () => {
    const [focusExtraBooking, setFocusExtraBooking] = useState(true);
    const [focusCooking, setFocusCooking] = useState(true);
    const [focusClub, setFocusClub] = useState(true);
    return (
        <div className={'flex h-full w-full animate-fade flex-col gap-1 p-2'}>
            <div className={'relative flex h-full w-full'}>
                <textarea
                    onFocus={() => setFocusExtraBooking(false)}
                    onBlur={() => setFocusExtraBooking(true)}
                    className={`h-full w-full resize-none rounded-xl ${focusExtraBooking && 'opacity-70'} p-2 placeholder:rounded-xl placeholder:bg-gray-200 placeholder:p-1`}
                    style={{ backgroundImage: `url(${focusExtraBooking && extraBookingImage})` }}
                    placeholder={'Sonderbuchungen...'}
                />
            </div>
            <textarea
                onFocus={() => setFocusCooking(false)}
                onBlur={() => setFocusCooking(true)}
                className={`h-full resize-none rounded-xl p-2 ${focusCooking && 'opacity-70'} placeholder:rounded-xl placeholder:bg-gray-200 placeholder:p-1`}
                style={{ backgroundImage: `url(${focusCooking && cookingImage})` }}
                placeholder={'Koch...'}
            />
            <textarea
                onFocus={() => setFocusClub(false)}
                onBlur={() => setFocusClub(true)}
                className={`h-full resize-none rounded-xl p-2 ${focusClub && 'opacity-70'} placeholder:rounded-xl placeholder:bg-gray-200 placeholder:p-1`}
                style={{ backgroundImage: `url(${focusClub && clubroomImage})` }}
                placeholder={'Clubraum...'}
            />
            <button
                className={'rounded-xl bg-violet-500 p-1 font-bold text-white transition-colors hover:bg-violet-600'}>
                Speichern
            </button>
        </div>
    );
};

export default Notes;
