import { create } from 'zustand';
import { initLaneData, IBahn, colorList } from '../init/initGridData';
import { toast } from 'react-toastify';

export interface IGlobal {
    bookingModal: boolean;
    optionsModal: boolean;
    customerName: string;
    customerNumber: string;
    startLane: number;
    endLane: number;
    startTime: number;
    endTime: number;
    workerName: string;
    customerNotes: string;
    customerColor: string;

    optionsCustomerName: string;
    optionsCustomerNumber: string;
    optionsStartLane: number;
    optionsEndLane: number;
    optionsStartTime: number;
    optionsEndTime: number;
    optionsCustomerColor: string;
    optionsCustomerNotes: string;

    setOptionsCustomerName: (name: string) => void;
    setOptionsCustomerNumber: (number: string) => void;
    setOptionsStartLane: (start: number) => void;
    setOptionsEndLane: (end: number) => void;
    setOptionsStartTime: (start: number) => void;
    setOptionsEndTime: (end: number) => void;
    setOptionsCustomerColor: (color: string) => void;
    setOptionsCustomerNotes: (note: string) => void;

    setCustomerName: (name: string) => void;
    setCustomerNumber: (number: string) => void;
    setStartLane: (lane: number) => void;
    setEndLane: (lane: number) => void;
    setStartTime: (time: number) => void;
    setEndTime: (time: number) => void;
    setWorkerName: (name: string) => void;
    setBookingModal: (toggle: boolean) => void;
    setOptionsModal: (toggle: boolean) => void;
    setCustomerNotes: (note: string) => void;
    setCustomerColor: (color: string) => void;

    gridData: IBahn[];
    setGridData: (data: IBahn[]) => void;
    customerList: object[];
    setCustomerList: (customer: object[]) => void;
    fetchCustomerList: () => void;

    date: string;
    setDate: (newDate: string) => void;
    currentDay: string;
    setCurrentDay: (day: string) => void;

    resetLanes: () => void;
    handleCustomerClicked: (laneIndex: number, timeIndex: number) => void;
    randomColorPicker: () => void;

    emitSuccessToast: (message: string) => void;
    emitFailedToast: (message: string) => void;

    notesList: object[];
    setNotesList: (note: object[]) => void;
}

export const globalStore = create<IGlobal>((set, get) => ({
    notesList: [],
    setNotesList: (note: object[]) => set({ notesList: note }),

    gridData: initLaneData(),
    setGridData: (data) => set({ gridData: data }),
    customerList: [],
    setCustomerList: (customer) => set({ customerList: customer }),
    fetchCustomerList: () => {
        const { date, setGridData, customerList } = get();
        const updatedLane = initLaneData();
        const filteredCustomerList = customerList.filter((item: any) => {
            return item.date === date;
        });
        filteredCustomerList.forEach((item: any) => {
            for (let i = item.startLane; i <= item.endLane; i++) {
                for (let j = item.startTime; j <= item.endTime; j++) {
                    updatedLane[i].time[j] = {
                        ...updatedLane[i].time[j],
                        customerName: item.customerName,
                        customerNumber: item.customerNumber,
                        date: item.date,
                        customerNotes: item.customerNotes,
                        workerName: item.workerName,
                        startLane: item.startLane,
                        endLane: item.endLane,
                        startTime: item.startTime,
                        endTime: item.endTime,
                        customerColor: item.customerColor,
                        payedStatus: item.payedStatus,
                    };
                }
            }
        });
        setGridData(updatedLane);
    },

    date: '',
    setDate: (newDate) => set({ date: newDate }),
    currentDay: '',
    setCurrentDay: (day) => set({ currentDay: day }),

    bookingModal: false,
    optionsModal: false,
    customerName: '',
    customerNumber: '',
    startLane: 0,
    endLane: 0,
    startTime: 0,
    endTime: 0,
    workerName: '',
    customerNotes: '',
    customerColor: '',

    optionsCustomerName: '',
    optionsCustomerNumber: '',
    optionsStartLane: 0,
    optionsEndLane: 0,
    optionsStartTime: 0,
    optionsEndTime: 0,
    optionsCustomerColor: '',
    optionsCustomerNotes: '',

    setOptionsCustomerName: (name) => set({ optionsCustomerName: name }),
    setOptionsCustomerNumber: (number) => set({ optionsCustomerNumber: number }),
    setOptionsStartLane: (start) => set({ optionsStartLane: start }),
    setOptionsEndLane: (end) => set({ optionsEndLane: end }),
    setOptionsStartTime: (start) => set({ optionsStartTime: start }),
    setOptionsEndTime: (end) => set({ optionsEndTime: end }),
    setOptionsCustomerNotes: (note) => set({ optionsCustomerNotes: note }),
    setOptionsCustomerColor: (color) => set({ optionsCustomerColor: color }),

    setCustomerName: (name) => set({ customerName: name }),
    setCustomerNumber: (number) => set({ customerNumber: number }),
    setStartLane: (lane) => set({ startLane: lane }),
    setEndLane: (lane) => set({ endLane: lane }),
    setStartTime: (time) => set({ startTime: time }),
    setEndTime: (time) => set({ endTime: time }),
    setWorkerName: (name) => set({ workerName: name }),
    setBookingModal: (toggle) => set({ bookingModal: toggle }),
    setOptionsModal: (toggle) => set({ optionsModal: toggle }),
    setCustomerNotes: (note) => set({ customerNotes: note }),
    setCustomerColor: (color) => set({ customerColor: color }),
    resetLanes: () => {
        const {
            setCustomerNumber,
            setCustomerName,
            setStartLane,
            setEndLane,
            setStartTime,
            setEndTime,
            setWorkerName,
            setCustomerColor,
            setCustomerNotes,
        } = get();
        setCustomerNumber('');
        setCustomerName('');
        setWorkerName('');
        setCustomerColor('');
        setCustomerNotes('');
        setStartLane(0);
        setEndLane(11);
        setStartTime(0);
        setEndTime(21);
    },

    handleCustomerClicked: (laneIndex, timeIndex) => {
        const {
            setOptionsModal,
            setOptionsCustomerName,
            setOptionsCustomerNotes,
            setOptionsCustomerColor,
            setOptionsCustomerNumber,
            setOptionsEndLane,
            setOptionsEndTime,
            setOptionsStartLane,
            setOptionsStartTime,
            gridData,
        } = get();
        setOptionsModal(true);
        const customerData = gridData[laneIndex].time[timeIndex];
        setOptionsCustomerName(customerData.customerName);
        setOptionsCustomerNumber(customerData.customerNumber);
        setOptionsCustomerNotes(customerData.customerNotes);
        setOptionsCustomerColor(customerData.customerColor);
        setOptionsEndLane(customerData.endLane);
        setOptionsEndTime(customerData.endTime);
        setOptionsStartLane(customerData.startLane);
        setOptionsStartTime(customerData.startTime);
    },
    randomColorPicker: () => {
        const { setCustomerColor } = get();
        const index = Math.floor(Math.random() * colorList.length);
        const color = colorList[index].colorGrid;
        setCustomerColor(color);
    },
    emitSuccessToast: (msg) => {
        toast.success(msg, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    },
    emitFailedToast: (msg) => {
        toast.error(msg, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    },
}));
