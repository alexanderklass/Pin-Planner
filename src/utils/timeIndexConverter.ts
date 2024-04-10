export const switchIndexToTime = (startTime: number) => {
    switch (startTime) {
        case 0:
            return '14:00';
        case 1:
            return '14:30';
        case 2:
            return '15:00';
        case 3:
            return '15:30';
        case 4:
            return '16:00';
        case 5:
            return '16:30';
        case 6:
            return '17:00';
        case 7:
            return '17:30';
        case 8:
            return '18:00';
        case 9:
            return '18:30';
        case 10:
            return '19:00';
        case 11:
            return '19:30';
        case 12:
            return '20:00';
        case 13:
            return '20:30';
        case 14:
            return '21:00';
        case 15:
            return '21:30';
        case 16:
            return '22:00';
        case 17:
            return '22:30';
        case 18:
            return '23:00';
        case 19:
            return '23:30';
        case 20:
            return '00:00';
        case 21:
            return '00:30';
        case 22:
            return '01:00';
    }
};

export const switchTimeToIndex = (time: string) => {
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
