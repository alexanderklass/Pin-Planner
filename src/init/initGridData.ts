export interface IBahn {
    id: number;
    bahn: string;
    time: ITime[];
}

interface ITime {
    uID: string;
    id?: number;
    customerColor: string;
    date: string;
    customerName: string;
    workerName: string;
    customerNumber: string;
    customerNotes: string;
    startLane: number;
    endLane: number;
    startTime: number;
    endTime: number;
    payedStatus: boolean;
    price: number;
    isOverGrid: boolean;
}

export const initLaneData = (laneGrids: number) => {
    let dataArray: IBahn[] = [];
    for (let i = 0; i < laneGrids; i++) {
        let bahn: IBahn = {
            id: i,
            bahn: (i + 1).toString(),
            time: [],
        };
        for (let j = 0; j < 22; j++) {
            let time: ITime = {
                uID: '',
                id: j,
                customerColor: '',
                date: '',
                customerName: '',
                workerName: '',
                customerNumber: '',
                customerNotes: '',
                startLane: 0,
                endLane: 0,
                startTime: 0,
                endTime: 0,
                payedStatus: false,
                price: 0,
                isOverGrid: false,
            };
            bahn.time.push(time);
        }
        dataArray.push(bahn);
    }
    return dataArray;
};

export const days = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];

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

export const pickColorList = [
    'bg-purple-500',
    'bg-red-500',
    'bg-black',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-lime-500',
    'bg-orange-500',
    'bg-stone-500',
];
