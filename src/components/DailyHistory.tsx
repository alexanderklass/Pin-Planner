import React, { useState } from 'react';
import DailyHistoryCustomer from './DailyHistoryCustomer';

const DailyHistory = () => {
    const [customerList, setCustomerList] = useState([
        {
            name: 'peter',
            time: '16:00-17:00 Uhr',
            Notes: 'dasdadasd asdasdasd asdasd asd ada',
            activeStatus: false,
        },
        {
            name: 'peter',
            time: '16:00-17:00 Uhr',
            Notes: 'dasdadasd asdasdasd asdasd asd ada',
            activeStatus: true,
        },
        {
            name: 'peter',
            time: '16:00-17:00 Uhr',
            Notes: 'dasdadasd asdasdasd asdasddasdasd asdasdasd as dad asdas da sda asd ada',
            activeStatus: true,
        },
    ]);

    return (
        <div className={'no-scrollbar flex max-h-[832px] flex-col gap-1 overflow-y-auto scroll-smooth p-1'}>
            {customerList.map((customer, index) => {
                return <DailyHistoryCustomer name={customer.name} time={customer.time} notes={customer.Notes} onlineStatus={customer.activeStatus} />;
            })}
        </div>
    );
};

export default DailyHistory;
