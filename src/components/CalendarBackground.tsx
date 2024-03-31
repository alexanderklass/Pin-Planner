import React from 'react';

interface props {
    children: React.ReactNode;
}

const CalendarBackground = ({ children }: props) => {
    return <div className={'flex h-full flex-col bg-neutral-800'}>{children}</div>;
};

export default CalendarBackground;
