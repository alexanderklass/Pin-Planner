import { create } from 'zustand';
import { IBahn, colorList } from '../init/initGridData';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export interface IGlobal {
    useTranslate: (text: string) => any;

    bookingModal: boolean;
    optionsModal: boolean;

    settingsModal: boolean;
    setSettingsModal: (toggle: boolean) => void;
    settingsJsonData: any;
    setSettingsJsonData: (data: any) => void;
    settingsLaneGrids: number;
    setSettingsLaneGrids: (number: number) => void;
    settingsLanguage: string;
    setSettingsLanguage: (language: string) => void;

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

    optionsPrice: number;
    setOptionsPrice: (price: number) => void;

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

    deletedLaneToLocalStorage: () => void;
    deletedList: object[];
    setDeletedList: (item: object[]) => void;
}

export const globalStore = create<IGlobal>((set, get) => ({
    useTranslate: (text) => {
        const { t } = useTranslation();
        return t(text);
    },

    notesList: [],
    setNotesList: (note: object[]) => set({ notesList: note }),

    deletedList: [],
    setDeletedList: (item) => set({ deletedList: item }),

    gridData: [],
    setGridData: (data) => set({ gridData: data }),
    customerList: [],
    setCustomerList: (customer) => set({ customerList: customer }),

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

    settingsModal: false,
    setSettingsModal: (toggle) => set({ settingsModal: toggle }),
    settingsJsonData: {
        laneSettings: {
            currentLaneGrids: 11,
            currentTimeGrids: 22,
            currentPrice: 12.5,
        },
        language: 'DE',
        colorDesign: 'default',
        notifications: true,
        notificationsPosition: 'default',
    },
    setSettingsJsonData: (data: any) => set({ settingsJsonData: data }),
    settingsLaneGrids: 12,
    setSettingsLaneGrids: (number) => set({ settingsLaneGrids: number }),
    settingsLanguage: 'de',
    setSettingsLanguage: (language) => set({ settingsLanguage: language }),

    optionsCustomerName: '',
    optionsCustomerNumber: '',
    optionsStartLane: 0,
    optionsEndLane: 0,
    optionsStartTime: 0,
    optionsEndTime: 0,
    optionsCustomerColor: '',
    optionsCustomerNotes: '',
    optionsPrice: 0,

    setOptionsCustomerName: (name) => set({ optionsCustomerName: name }),
    setOptionsCustomerNumber: (number) => set({ optionsCustomerNumber: number }),
    setOptionsStartLane: (start) => set({ optionsStartLane: start }),
    setOptionsEndLane: (end) => set({ optionsEndLane: end }),
    setOptionsStartTime: (start) => set({ optionsStartTime: start }),
    setOptionsEndTime: (end) => set({ optionsEndTime: end }),
    setOptionsCustomerNotes: (note) => set({ optionsCustomerNotes: note }),
    setOptionsCustomerColor: (color) => set({ optionsCustomerColor: color }),
    setOptionsPrice: (price) => set({ optionsPrice: price }),

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
            setOptionsPrice,
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
        setOptionsPrice(customerData.price);
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
    deletedLaneToLocalStorage: () => {
        const deletedLane = {
            customerName: get().optionsCustomerName,
            customerNumber: get().optionsCustomerNumber,
            customerNotes: get().optionsCustomerNotes,
            customerColor: get().optionsCustomerColor,
            startLane: get().optionsStartLane,
            endLane: get().optionsEndLane,
            startTime: get().optionsStartTime,
            endTime: get().optionsEndTime,
            date: get().date,
            //workerName: ,
            payedStatus: false,
            //bahnID: optionsId,
        };
        const deleteLaneJson = JSON.stringify(deletedLane);
        if (deletedLane) localStorage.setItem(get().optionsCustomerName.toString(), deleteLaneJson);
    },
}));
