import React, { useState } from 'react';
import DeletedCustomer from './DeletedCustomer';

const DeletedHistory = () => {
    const [deletesList, setDeletedList] = useState([
        {
            name: 'Hans',
            number: '123123123',
            startLane: '1',
            endLane: '2',
            startTime: '14:00',
            endTime: '16:00',
            notes: 'asdadasdadasd asdasdadasd adadasdasdasd asdasdasdada',
        },
    ]);

    return (
        <div className={'no-scrollbar flex max-h-[832px] w-full flex-col gap-1 overflow-y-auto scroll-smooth p-1'}>
            {deletesList.map((item, index) => {
                return (
                    <DeletedCustomer
                        name={item.name}
                        number={item.number}
                        lanes={item.startLane + ' ' + item.endLane}
                        time={item.startTime + ' ' + item.endTime + ' Uhr'}
                        notes={item.notes}
                    />
                );
            })}
        </div>
    );
};

export default DeletedHistory;
