interface IBahn {
    id: number;
    bahn: string;
    time: ITime[];
}

interface ITime {
    bahnID: number;
    id?: number;
    color: string;
    customerName: string;
    workerName: string;
    customerNumber: string;
    notes: string;
    startLane: number;
    endLane: number;
    startTime: number;
    endTime: number;
    payedStatus: boolean;
    firstIndex: number;
    secondIndex: number;
    price: number;
}

export const initLaneData = () => {
    let dataArray: IBahn[] = [];
    for (let i = 0; i < 12; i++) {
        let bahn: IBahn = {
            id: i,
            bahn: (i + 1).toString(),
            time: [],
        };
        for (let j = 0; j < 22; j++) {
            let time: ITime = {
                bahnID: 0,
                id: j,
                color: '',
                customerName: '',
                workerName: '',
                customerNumber: '',
                notes: '',
                startLane: 0,
                endLane: 0,
                startTime: 0,
                endTime: 0,
                payedStatus: false,
                firstIndex: 0,
                secondIndex: 0,
                price: 0,
            };
            bahn.time.push(time);
        }
        dataArray.push(bahn);
    }
    return dataArray;
};

export const time = () => {
    return [
        '14:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',
        '16:30',
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:00',
        '19:30',
        '20:00',
        '20:30',
        '21:00',
        '21:30',
        '22:00',
        '22:30',
        '23:00',
        '23:30',
        '00:00',
        '00:30',
    ];
};
