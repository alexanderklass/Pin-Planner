import React, {useState} from "react";
import {FcSupport, FcNeutralTrading} from "react-icons/fc";
import {Dialog, Switch} from "@headlessui/react";
import {globalStore} from "../../../store/global.store";
import {GiBowlingStrike} from "react-icons/gi";
import {LuTimer} from "react-icons/lu";
import {IoPersonAddSharp} from "react-icons/io5";
import {BsTelephonePlusFill} from "react-icons/bs";
import {FaStickyNote} from "react-icons/fa";
import {startTimeList, endTimeList} from "../../../init/initGridData";
import {nanoid} from "nanoid";
import InfoHover from "../../InfoHover";
import RequiredInfo from "../../RequiredInfo";

const BookingModal = () => {
    const {
        bookingModal,
        setBookingModal,
        setStartLane,
        setEndLane,
        setCustomerName,
        setCustomerNumber,
        setStartTime,
        setEndTime,
        setWorkerName,
        setCustomerNotes,
        workerName,
        customerNumber,
        customerName,
        startTime,
        startLane,
        endTime,
        endLane,
        customerNotes,
        customerColor,
        customerList,
        setCustomerColor,
        date,
        setCustomerList,
        randomColorPicker,
        resetLanes,
        emitToast,
        useTranslate,
        settingsLaneGrids,
    } = globalStore();

    const [inactiveLane, setInactiveLane] = useState(false);
    const [bookAllDay, setBookAllDay] = useState(false);
    const [infoBookAllDay, setInfoBookAllDay] = useState(false);
    const [infoInactiveLane, setInfoInactiveLane] = useState(false);
    const selectStartTime = startTimeList();
    const selectEndTime = endTimeList();
    const laneGreater = startLane > endLane;
    const timeGreater = startTime > endTime;
    const activeBookingButton = !customerName || !customerNumber || !workerName || laneGreater || timeGreater;
    const bookingNotification = useTranslate("NotificationBooking");
    const cantBookCustomerMessage = useTranslate("BookingCantBookCustomer");
    const maintenanceBooking = useTranslate("MaintenanceBooking");
    const blockFullDay = useTranslate("BlockFullDay");
    const hoverInfoFulDay = useTranslate("BlockHoverInfo");
    const hoverInfoMaintenance = useTranslate("MaintenanceHoverInfo");

    const addCustomer = () => {
        if (checkIfCanAddCustomer()) return emitToast("error", cantBookCustomerMessage);
        setCustomerList([
            ...customerList,
            {
                uID: nanoid(),
                customerName: customerName,
                customerNumber: customerNumber,
                customerColor: customerColor,
                date: date,
                startLane: startLane,
                endLane: endLane,
                startTime: startTime,
                endTime: endTime,
                workerName: workerName,
                customerNotes: customerNotes,
                payedStatus: false,
            },
        ]);
        closeBookingModal();
        emitToast("success", bookingNotification);
    };

    const checkIfCanAddCustomer = () => {
        const filteredList = customerList.filter((item: any) => {
            return (
                item.date === date &&
                item.startLane <= endLane &&
                item.endLane >= startLane &&
                item.startTime <= endTime &&
                item.endTime >= startTime
            );
        });
        return filteredList.length > 0;
    };

    const addAllDayBookingToList = () => {
        if (!bookAllDay) {
            setBookAllDay(true);
            setCustomerName(blockFullDay);
            setCustomerNumber(blockFullDay);
            setCustomerNotes(blockFullDay);
            setWorkerName(blockFullDay);
            setCustomerColor("bg-black");
            setStartTime(0);
            setStartLane(0);
            setEndLane(settingsLaneGrids - 1);
            setEndTime(21);
        } else if (bookAllDay) {
            setBookAllDay(false);
            resetLanes();
            randomColorPicker();
        }
    };

    const addMaintainingLane = () => {
        if (!inactiveLane) {
            setInactiveLane(true);
            setCustomerName(maintenanceBooking);
            setCustomerNumber(maintenanceBooking);
            setCustomerNotes(maintenanceBooking);
            setWorkerName(maintenanceBooking);
            setCustomerColor("bg-black");
        } else if (inactiveLane) {
            setInactiveLane(false);
            resetLanes();
            randomColorPicker();
        }
    };

    const closeBookingModal = () => {
        setBookingModal(false);
        setBookAllDay(false);
        setInactiveLane(false);
    };

    return (
        <Dialog
            className={
                "fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50"
            }
            open={bookingModal}
            onClose={() => {
            }}
        >
            <Dialog.Panel
                className={
                    "flex animate-jump-in flex-col items-center justify-center gap-3 rounded-xl border border-gray-600 bg-neutral-700 p-3 shadow shadow-gray-500 animate-duration-300 animate-ease-linear"
                }
            >
                <div
                    className={"relative flex flex-row gap-2 rounded-xl bg-gray-200 p-3"}
                >
                    <RequiredInfo/>
                    <div className={"flex w-full flex-col"}>
                        <Dialog.Title className={"font-bold text-gray-600"}>
                            {useTranslate("BookingModalText")}
                        </Dialog.Title>
                        <div>
                            <p className={"text-gray-600"}>
                                {useTranslate("BookingModalCustomerName")}
                            </p>
                            <div className={"relative"}>
                                <input
                                    disabled={bookAllDay || inactiveLane}
                                    onChange={(e) => setCustomerName(e.target.value)}
                                    name={"customerName"}
                                    type={"text"}
                                    value={customerName}
                                    className={`w-full rounded-xl ${!customerName && "border-red-500"} border border-gray-300 p-2 pl-6 outline-0`}
                                    placeholder={"Max Mustermann"}
                                    autoComplete={"off"}
                                />
                                <IoPersonAddSharp className={"absolute left-1 top-3"}/>
                            </div>
                        </div>
                        <div>
                            <p className={"text-gray-600"}>
                                {useTranslate("BookingModalCustomerNumber")}
                            </p>
                            <div className={"relative"}>
                                <input
                                    disabled={bookAllDay || inactiveLane}
                                    onChange={(e) => setCustomerNumber(e.target.value)}
                                    name={"customerNumber"}
                                    type={"text"}
                                    value={customerNumber}
                                    className={`w-full rounded-xl ${!customerNumber && "border-red-500"} border border-gray-300 p-2 pl-6 outline-0`}
                                    autoComplete={"off"}
                                    placeholder={"01234/56789010"}
                                />
                                <BsTelephonePlusFill className={"absolute left-1 top-3"}/>
                            </div>
                        </div>
                        <div>
                            <p className={"text-gray-600"}>
                                {useTranslate("BookingModalLanes")}
                            </p>
                            <div
                                className={"flex flex-row items-center justify-center gap-1"}
                            >
                                <select
                                    disabled={bookAllDay}
                                    className={
                                        "w-full rounded-xl border border-gray-300 p-2 text-center outline-0"
                                    }
                                    value={startLane}
                                    name={"startLane"}
                                    onChange={(e) => setStartLane(Number(e.target.value))}
                                >
                                    {Array.from({length: settingsLaneGrids}).map((_, index) => {
                                        return (
                                            <option key={index} value={index}>
                                                {index + 1}
                                            </option>
                                        );
                                    })}
                                </select>
                                <GiBowlingStrike className={"h-[30px] text-[50px]"}/>
                                <select
                                    disabled={bookAllDay}
                                    className={
                                        "w-full rounded-xl border border-gray-300 p-2 text-center outline-0"
                                    }
                                    value={endLane}
                                    name={"endLane"}
                                    onChange={(e) => setEndLane(Number(e.target.value))}
                                >
                                    {Array.from({length: settingsLaneGrids}).map((_, index) => {
                                        return (
                                            <option key={index} value={index}>
                                                {index + 1}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <div>
                            <p className={"text-gray-600"}>
                                {useTranslate("BookingModalTime")}
                            </p>
                            <div
                                className={"flex flex-row items-center justify-center gap-1"}
                            >
                                <select
                                    disabled={bookAllDay}
                                    className={
                                        "w-full rounded-xl border border-gray-300 p-2 text-center outline-0"
                                    }
                                    name={"startTime"}
                                    value={startTime}
                                    onChange={(e) => setStartTime(Number(e.target.value))}
                                >
                                    {selectStartTime.map((time, index) => {
                                        return (
                                            <option key={index} value={index}>
                                                {time}
                                            </option>
                                        );
                                    })}
                                </select>
                                <LuTimer className={"h-[30px] text-[50px]"}/>
                                <select
                                    disabled={bookAllDay}
                                    className={
                                        "w-full rounded-xl border border-gray-300 p-2 text-center outline-0"
                                    }
                                    name={"endTime"}
                                    value={endTime}
                                    onChange={(e) => setEndTime(Number(e.target.value))}
                                >
                                    {selectEndTime.map((time, index) => {
                                        return (
                                            <option key={index} value={index}>
                                                {time}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                        </div>
                        <div>
                            <p className={"text-gray-600"}>
                                {useTranslate("BookingModalWorkerName")}
                            </p>
                            <div className={"relative"}>
                                <input
                                    name={"workerName"}
                                    placeholder={useTranslate("BookingModalWorkerNamePH")}
                                    value={workerName}
                                    onChange={(e) => setWorkerName(e.target.value)}
                                    autoComplete={"off"}
                                    className={`w-full ${!workerName && "border-red-500"} rounded-xl border border-gray-300 p-2 pl-6 outline-0`}
                                />
                                <FaStickyNote className={"absolute left-1 top-3"}/>
                            </div>
                        </div>
                    </div>
                    <div className={"flex w-full flex-col justify-end"}>
                        <p className={"text-gray-600"}>
                            {useTranslate("BookingModalNotes")}
                        </p>
                        <textarea
                            rows={3}
                            onChange={(e) => setCustomerNotes(e.target.value)}
                            name={"customerNotes"}
                            value={customerNotes}
                            className={
                                "h-[300px] w-full resize-none rounded-xl border border-gray-300 p-2 outline-0"
                            }
                            placeholder={useTranslate("BookingModalNotesPH")}
                        />
                    </div>
                </div>
                <div className={"flex w-full flex-row items-center justify-between"}>
                    <div className={"flex flex-row items-center justify-center gap-1"}>
                        <Switch
                            checked={inactiveLane}
                            onChange={addMaintainingLane}
                            onMouseEnter={() => setInfoInactiveLane(true)}
                            onMouseLeave={() => setInfoInactiveLane(false)}
                            className={`${inactiveLane ? "bg-green-400" : "bg-gray-200"} relative flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full transition-colors`}
                        >
                            <FcSupport className={"text-[20px]"}/>
                            <InfoHover
                                active={infoInactiveLane}
                                text={hoverInfoMaintenance}
                            />
                        </Switch>
                        <Switch
                            checked={bookAllDay}
                            onChange={addAllDayBookingToList}
                            onMouseEnter={() => setInfoBookAllDay(true)}
                            onMouseLeave={() => setInfoBookAllDay(false)}
                            className={`${bookAllDay ? "bg-green-400" : "bg-gray-200"} relative flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full transition-colors`}
                        >
                            <FcNeutralTrading className={"text-[20px]"}/>
                            <InfoHover active={infoBookAllDay} text={hoverInfoFulDay}/>
                        </Switch>
                    </div>
                    <div className={"flex flex-row gap-1"}>
                        <button
                            onClick={addCustomer}
                            disabled={activeBookingButton}
                            className={
                                "outline-text flex h-[30px] w-[90px] items-center justify-center rounded-md bg-green-500 p-2 font-bold text-white transition-all hover:bg-green-600 disabled:bg-gray-500"
                            }
                        >
                            {useTranslate("BookingModalBookingButton")}
                        </button>
                        <button
                            onClick={closeBookingModal}
                            className={
                                "flex h-[30px] w-[90px] items-center justify-center rounded-md bg-gray-300 p-2 font-bold transition-all hover:bg-gray-400"
                            }
                        >
                            {useTranslate("BookingModalCloseButton")}
                        </button>
                    </div>
                </div>
            </Dialog.Panel>
        </Dialog>
    );
};

export default BookingModal;
