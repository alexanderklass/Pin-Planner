import React, { useEffect, useState } from 'react';
import extraBookingImage from '../assets/images/extrabooking-background.png';
import cookingImage from '../assets/images/cook-background.png';
import clubroomImage from '../assets/images/clubroom-background.png';
import { globalStore } from '../store/global.store';

const Notes = () => {
    const { date, setNotesList, notesList } = globalStore();
    const [focusExtraBooking, setFocusExtraBooking] = useState(true);
    const [focusCooking, setFocusCooking] = useState(true);
    const [focusClub, setFocusClub] = useState(true);

    const [extraNotes, setExtraNotes] = useState('');
    const [cookNotes, setCookNotes] = useState('');
    const [clubNotes, setClubNotes] = useState('');

    const resetCalendarNotes = () => {
        setExtraNotes('');
        setCookNotes('');
        setClubNotes('');
    };
    const fetchCalendarNotes = () => {
        resetCalendarNotes();
        notesList.forEach((note: any) => {
            if (note.date === date) {
                setExtraNotes(note.extraNotes);
                setCookNotes(note.cookNotes);
                setClubNotes(note.clubNotes);
            }
        });
    };

    const addNotesToList = () => {
        const newNoteList = notesList.filter((note: any) => note.date === date);
        if (newNoteList.length === 0) {
            const notes: any = {
                date: date,
                extraNotes: extraNotes,
                cookNotes: cookNotes,
                clubNotes: clubNotes,
            };
            setNotesList([...notesList, notes]);
        } else {
            const customizedNotes = notesList.map((note: any) => {
                if (note.date === date) {
                    return {
                        ...note,
                        extraNotes: extraNotes,
                        cookNotes: cookNotes,
                        clubNotes: clubNotes,
                    };
                }
                return note;
            });
            setNotesList(customizedNotes);
        }
    };

    useEffect(() => {
        fetchCalendarNotes();
        //eslint-disable-next-line
    }, [date]);

    return (
        <div className={'flex h-full w-full animate-fade flex-col gap-1 p-2'}>
            <textarea
                onFocus={() => setFocusExtraBooking(false)}
                onBlur={() => setFocusExtraBooking(true)}
                value={extraNotes}
                onChange={(e) => setExtraNotes(e.target.value)}
                className={`h-full w-full resize-none rounded-xl ${focusExtraBooking && 'opacity-70'} p-2 placeholder:rounded-xl placeholder:bg-gray-200 placeholder:p-1`}
                style={{ backgroundImage: `url(${focusExtraBooking && !extraNotes && extraBookingImage})` }}
                placeholder={'Sonderbuchungen...'}
            />
            <textarea
                onFocus={() => setFocusCooking(false)}
                onBlur={() => setFocusCooking(true)}
                value={cookNotes}
                onChange={(e) => setCookNotes(e.target.value)}
                className={`h-full resize-none rounded-xl p-2 ${focusCooking && 'opacity-70'} placeholder:rounded-xl placeholder:bg-gray-200 placeholder:p-1`}
                style={{ backgroundImage: `url(${focusCooking && !cookNotes && cookingImage})` }}
                placeholder={'Koch...'}
            />
            <textarea
                onFocus={() => setFocusClub(false)}
                onBlur={() => setFocusClub(true)}
                value={clubNotes}
                onChange={(e) => setClubNotes(e.target.value)}
                className={`h-full resize-none rounded-xl p-2 ${focusClub && 'opacity-70'} placeholder:rounded-xl placeholder:bg-gray-200 placeholder:p-1`}
                style={{ backgroundImage: `url(${focusClub && !clubNotes && clubroomImage})` }}
                placeholder={'Clubraum...'}
            />
            <button
                onClick={addNotesToList}
                className={'rounded-xl bg-violet-500 p-1 font-bold text-white transition-colors hover:bg-violet-600'}>
                Speichern
            </button>
        </div>
    );
};

export default Notes;
