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
    startTime: number | string;
    endTime: number | string;
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