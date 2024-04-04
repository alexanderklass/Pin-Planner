import React, { useState } from 'react';
import { BsQuestionCircle } from 'react-icons/bs';
import InfoHover from './InfoHover';

const RequiredInfo = () => {
    const [hoverMouse, setHoverMouse] = useState(false);
    return (
        <div className={'absolute right-7 top-2'}>
            <BsQuestionCircle
                className={'absolute text-[20px]'}
                onMouseEnter={() => setHoverMouse(true)}
                onMouseLeave={() => setHoverMouse(false)}></BsQuestionCircle>
            <InfoHover active={hoverMouse} text={'Alle roten Felder müssen ausgefüllt sein!'} width={'w-[250px]'} />
        </div>
    );
};

export default RequiredInfo;
