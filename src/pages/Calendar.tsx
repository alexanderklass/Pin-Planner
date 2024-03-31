import React from 'react';
import Header from '../components/Header/Header';
import Grid from '../components/Grid/Grid';
import BookingModal from '../components/Modals/Booking/BookingModal';
import OptionsModal from '../components/Modals/Options/OptionsModal';
import CustomToastContainer from '../components/CustomToastContainer';
import CalendarBackground from '../components/CalendarBackground';
import SettingsModal from '../components/Modals/Settings/SettingsModal';
import 'react-toastify/dist/ReactToastify.css';

const Calendar = () => {
    return (
        <React.Fragment>
            <CalendarBackground>
                <Header />
                <Grid />
            </CalendarBackground>
            <SettingsModal />
            <BookingModal />
            <OptionsModal />
            <CustomToastContainer />
        </React.Fragment>
    );
};

export default Calendar;
