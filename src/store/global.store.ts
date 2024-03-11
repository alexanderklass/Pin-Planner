import { create } from 'zustand';
import { initLaneData, IBahn } from '../init/initGridData';
export interface IGlobal {
    bookingModal: boolean;
    customerName: string;
    customerNumber: string;
    startLane: number;
    endLane: number;
    startTime: number;
    endTime: number;
    setCustomerName: (name: string) => void;
    setCustomerNumber: (number: string) => void;
    setStartLane: (lane: number) => void;
    setEndLane: (lane: number) => void;
    setStartTime: (time: number) => void;
    setEndTime: (time: number) => void;
    setBookingModal: (toggle: boolean) => void;
    gridData: IBahn[];
    setGridData: (data: IBahn[]) => void;
    addBooking: () => void;
    resetLanes: () => void;
}

export const globalStore = create<IGlobal>((set, get) => ({
    gridData: initLaneData(),
    setGridData: (data) => set({ gridData: data }),
    bookingModal: false,
    customerName: '',
    customerNumber: '',
    startLane: 0,
    endLane: 0,
    startTime: 0,
    endTime: 0,
    workerName: '',
    setCustomerName: (name: string) => set({ customerName: name }),
    setCustomerNumber: (number: string) => set({ customerNumber: number }),
    setStartLane: (lane) => set({ startLane: lane }),
    setEndLane: (lane) => set({ endLane: lane }),
    setStartTime: (time) => set({ startTime: time }),
    setEndTime: (time) => set({ endTime: time }),
    setBookingModal: (toggle: boolean) => set({ bookingModal: toggle }),
    addBooking: () => {
        const { gridData, customerName, startLane, endLane, startTime, endTime, setGridData } = get();
        const updatedLane = [...gridData];
        for (let i = startLane; i < endLane; i++) {
            for (let j = startTime; j < endTime; j++) {
                updatedLane[i].time[j].customerName = customerName;
                updatedLane[i].time[j].startLane = startLane;
                updatedLane[i].time[j].endLane = endLane;
                updatedLane[i].time[j].startTime = startTime;
                updatedLane[i].time[j].endTime = endTime;
            }
        }
        setGridData(updatedLane);
    },
    resetLanes: () => {},
}));
