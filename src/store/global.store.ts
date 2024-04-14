import {create} from 'zustand';
import {IBahn, colorList} from '../init/initGridData';
import {toast, ToastOptions} from 'react-toastify';
import {useTranslation} from 'react-i18next';

export interface IGlobal {
    useTranslate: (text: string) => any;

    draggingData: any;
    setDraggingData: (data: any) => void;

    bookingModal: boolean;
    optionsModal: boolean;

    settingsModal: boolean;
    settingsLaneGrids: number;
    settingsLanguage: string;
    settingsPrice: number;
    setSettingsModal: (toggle: boolean) => void;
    setSettingsLaneGrids: (number: number) => void;
    setSettingsLanguage: (language: string) => void;
    setSettingsPrice: (number: number) => void;

    customerName: string;
    customerNumber: string;
    startLane: number;
    endLane: number;
    startTime: number;
    endTime: number;
    workerName: string;
    customerNotes: string;
    customerColor: string;

    optionsData: any;
    setOptionsData: (data: any) => void;

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

    date: string;
    setDate: (newDate: string) => void;
    currentDay: string;
    setCurrentDay: (day: string) => void;

    resetLanes: () => void;
    randomColorPicker: () => void;

    emitToast: (type: string, message: string) => void;
    checkIfCanMoveCustomer: (startLane: number, endLane: number, startTime: number, endTime: number, uID: string) => boolean;

    notesList: object[];
    setNotesList: (note: object[]) => void;

    deletedLaneToLocalStorage: () => void;
    deletedList: object[];
    setDeletedList: (item: object[]) => void;
}

export const globalStore = create<IGlobal>((set, get) => ({
    useTranslate: (text) => {
        const {t} = useTranslation();
        return t(text);
    },

    draggingData: {},
    setDraggingData: (data: any) => set({draggingData: data}),

    notesList: [],
    setNotesList: (note: object[]) => set({notesList: note}),

    deletedList: [],
    setDeletedList: (item) => set({deletedList: item}),

    gridData: [],
    setGridData: (data) => set({gridData: data}),
    customerList: [],
    setCustomerList: (customer) => set({customerList: customer}),

    date: '',
    setDate: (newDate) => set({date: newDate}),
    currentDay: '',
    setCurrentDay: (day) => set({currentDay: day}),

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

    settingsModal: false,
    settingsLaneGrids: 12,
    settingsLanguage: 'en',
    settingsPrice: 13,
    setSettingsModal: (toggle) => set({settingsModal: toggle}),
    setSettingsLaneGrids: (number) => set({settingsLaneGrids: number}),
    setSettingsLanguage: (language) => set({settingsLanguage: language}),
    setSettingsPrice: (price) => set({settingsPrice: price}),

    optionsData: {},
    setOptionsData: (data) => set({optionsData: data}),

    setCustomerName: (name) => set({customerName: name}),
    setCustomerNumber: (number) => set({customerNumber: number}),
    setStartLane: (lane) => set({startLane: lane}),
    setEndLane: (lane) => set({endLane: lane}),
    setStartTime: (time) => set({startTime: time}),
    setEndTime: (time) => set({endTime: time}),
    setWorkerName: (name) => set({workerName: name}),
    setBookingModal: (toggle) => set({bookingModal: toggle}),
    setOptionsModal: (toggle) => set({optionsModal: toggle}),
    setCustomerNotes: (note) => set({customerNotes: note}),
    setCustomerColor: (color) => set({customerColor: color}),
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
            settingsLaneGrids
        } = get();
        setCustomerNumber('');
        setCustomerName('');
        setWorkerName('');
        setCustomerColor('');
        setCustomerNotes('');
        setStartLane(0);
        setEndLane(settingsLaneGrids - 1);
        setStartTime(0);
        setEndTime(21);
    },
    randomColorPicker: () => {
        const {setCustomerColor} = get();
        const index = Math.floor(Math.random() * colorList.length);
        const color = colorList[index].colorGrid;
        setCustomerColor(color);
    },
    checkIfCanMoveCustomer: (startLane, endLane, startTime, endTime, uID) => {
        const {customerList} = get();
        const filteredList: any = customerList.filter((item: any) => {
            return (
                item.date === get().date &&
                item.startLane <= endLane &&
                item.endLane >= startLane &&
                item.startTime <= endTime &&
                item.endTime >= startTime &&
                item.uID !== uID
            );
        });
        return filteredList.length > 0;
    },
    emitToast: (type: string, msg: string) => {
        const options: ToastOptions = {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        };
        if (type === 'success') toast.success(msg, options);
        if (type === 'error') toast.error(msg, options);
    },
    deletedLaneToLocalStorage: () => {
        const {optionsData} = get();
        const deletedLane = optionsData;
        const deleteLaneJson = JSON.stringify(deletedLane);
        if (deletedLane) localStorage.setItem(optionsData.uID, deleteLaneJson);
    },
}));
