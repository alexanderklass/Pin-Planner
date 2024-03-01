import React from 'react';
import Header from "../components/Header";
import Grid from "../components/Grid";
const Calendar = () => {
    return (
        <div className={"flex flex-col gap-10"}>
            <Header/>
            <Grid/>
        </div>
    );
};

export default Calendar;