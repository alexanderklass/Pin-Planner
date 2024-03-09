import { create } from 'zustand';

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
}

export const globalStore = create<IGlobal>((set) => ({
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
}));
