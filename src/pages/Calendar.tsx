import React from 'react';
import Header from '../components/Header';
import Grid from '../components/Grid';
import BookingModal from '../components/BookingModal';
import OptionsModal from '../components/OptionsModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Calendar = () => {
    return (
        <React.Fragment>
            <div className={`flex h-full flex-col bg-neutral-800`}>
                <Header />
                <Grid />
            </div>
            <BookingModal />
            <OptionsModal />
            <ToastContainer
                position='top-right'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
        </React.Fragment>
    );
};

export default Calendar;
