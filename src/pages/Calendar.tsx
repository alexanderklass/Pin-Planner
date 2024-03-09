import React from 'react';
import Header from '../components/Header';
import Grid from '../components/Grid';
import BookingModal from '../components/BookingModal';

const Calendar = () => {
    return (
        <>
            <div className={`flex h-screen flex-col bg-neutral-800`}>
                <Header />
                <Grid />
            </div>
            <BookingModal />
        </>
    );
};

export default Calendar;
