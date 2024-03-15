export interface IBahn {
    id: number;
    bahn: string;
    time: ITime[];
}

interface ITime {
    bahnID: number;
    id?: number;
    color: string;
    date: string;
    customerName: string;
    workerName: string;
    customerNumber: string;
    notes: string;
    startLane: number;
    endLane: number;
    startTime: number;
    endTime: number;
    payedStatus: boolean;
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
                date: '',
                customerName: '',
                workerName: '',
                customerNumber: '',
                notes: '',
                startLane: 0,
                endLane: 0,
                startTime: 0,
                endTime: 0,
                payedStatus: false,
                price: 0,
            };
            bahn.time.push(time);
        }
        dataArray.push(bahn);
    }
    return dataArray;
};

export const startTimeList = () => {
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

export const endTimeList = () => {
    return [
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
        '01:00',
    ];
};

export const colorList = [
    { colorGrid: 'bg-yellow-400' },
    { colorGrid: 'bg-yellow-500' },
    { colorGrid: 'bg-yellow-800' },
    { colorGrid: 'bg-lime-400' },
    { colorGrid: 'bg-lime-500' },
    { colorGrid: 'bg-lime-800' },
    { colorGrid: 'bg-green-400' },
    { colorGrid: 'bg-green-500' },
    { colorGrid: 'bg-green-800' },
    { colorGrid: 'bg-orange-400' },
    { colorGrid: 'bg-orange-500' },
    { colorGrid: 'bg-orange-800' },
    { colorGrid: 'bg-amber-400' },
    { colorGrid: 'bg-amber-500' },
    { colorGrid: 'bg-amber-800' },
    { colorGrid: 'bg-teal-400' },
    { colorGrid: 'bg-teal-500' },
    { colorGrid: 'bg-teal-800' },
    { colorGrid: 'bg-cyan-400' },
    { colorGrid: 'bg-cyan-500' },
    { colorGrid: 'bg-cyan-800' },
    { colorGrid: 'bg-red-400' },
    { colorGrid: 'bg-red-500' },
    { colorGrid: 'bg-red-800' },
    { colorGrid: 'bg-violet-400' },
    { colorGrid: 'bg-violet-500' },
    { colorGrid: 'bg-violet-800' },
    { colorGrid: 'bg-sky-400' },
    { colorGrid: 'bg-sky-500' },
    { colorGrid: 'bg-sky-800' },
    { colorGrid: 'bg-blue-400' },
    { colorGrid: 'bg-blue-500' },
    { colorGrid: 'bg-blue-800' },
    { colorGrid: 'bg-indigo-400' },
    { colorGrid: 'bg-indigo-500' },
    { colorGrid: 'bg-indigo-800' },
    { colorGrid: 'bg-purple-400' },
    { colorGrid: 'bg-purple-500' },
    { colorGrid: 'bg-purple-800' },
    { colorGrid: 'bg-fuchsia-400' },
    { colorGrid: 'bg-fuchsia-500' },
    { colorGrid: 'bg-fuchsia-800' },
    { colorGrid: 'bg-pink-400' },
    { colorGrid: 'bg-pink-500' },
    { colorGrid: 'bg-pink-800' },
    { colorGrid: 'bg-rose-400' },
    { colorGrid: 'bg-rose-500' },
    { colorGrid: 'bg-rose-800' },
];

export const swapTimeToIndex = (time: string) => {
    let [hour, minute] = time.split(':').map(Number);
    if (minute > 30) minute = 30;
    if (minute < 30) minute = 0;
    const modifiedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
    switch (modifiedTime) {
        case '14:00':
            return 0;
        case '14:30':
            return 1;
        case '15:00':
            return 2;
        case '15:30':
            return 3;
        case '16:00':
            return 4;
        case '16:30':
            return 5;
        case '17:00':
            return 6;
        case '17:30':
            return 7;
        case '18:00':
            return 8;
        case '18:30':
            return 9;
        case '19:00':
            return 10;
        case '19:30':
            return 11;
        case '20:00':
            return 12;
        case '20:30':
            return 13;
        case '21:00':
            return 14;
        case '21:30':
            return 15;
        case '22:00':
            return 16;
        case '22:30':
            return 17;
        case '23:00':
            return 18;
        case '23:30':
            return 19;
        case '00:00':
            return 20;
        case '00:30':
            return 21;
        case '01:00':
            return 22;
        default:
            return undefined;
    }
};
