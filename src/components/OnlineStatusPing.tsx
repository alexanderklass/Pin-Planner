import React from 'react';

interface props {
    active?: boolean;
}

const OnlineStatusPing = ({ active }: props) => {
    return (
        <div className={'absolute right-2 top-2 '}>
            {active ? (
                <>
                    <div className={'relative z-10 h-[10px] w-[10px] rounded-full border border-green-600 bg-green-500'}></div>
                    <div className={'absolute right-0 top-0 z-0 h-[10px] w-[10px] animate-ping rounded-full bg-green-500'}></div>
                </>
            ) : (
                <>
                    <div className={'z-10 h-[10px] w-[10px] rounded-full border border-red-700 bg-red-500'}></div>
                </>
            )}
        </div>
    );
};

export default OnlineStatusPing;
