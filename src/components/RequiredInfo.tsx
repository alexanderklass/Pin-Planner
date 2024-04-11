import React, {useState} from 'react';
import {BsQuestionCircle} from 'react-icons/bs';
import InfoHover from './InfoHover';
import {globalStore} from '../store/global.store';

const RequiredInfo = () => {
    const {useTranslate} = globalStore();
    const [hoverMouse, setHoverMouse] = useState(false);
    return (
        <div className={'absolute right-7 top-2'}>
            <BsQuestionCircle
                className={'absolute text-[20px]'}
                onMouseEnter={() => setHoverMouse(true)}
                onMouseLeave={() => setHoverMouse(false)}></BsQuestionCircle>
            <InfoHover active={hoverMouse} text={useTranslate('BookingRequiredFields')}/>
        </div>
    );
};

export default RequiredInfo;
