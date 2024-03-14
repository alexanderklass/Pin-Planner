import React from 'react';
import Header from '../components/Header';
import Grid from '../components/Grid';
import BookingModal from '../components/BookingModal';
import OptionsModal from '../components/OptionsModal';

const Calendar = () => {
    return (
        <React.Fragment>
            <div className={`flex h-full flex-col bg-neutral-800`}>
                <Header />
                <Grid />
            </div>
            <BookingModal />
            <OptionsModal />
        </React.Fragment>
    );
};

export default Calendar;
