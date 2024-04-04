import React from 'react';

interface props {
    text: string;
}

const Placeholder = ({ text }: props) => {
    return (
        <p
            className={
                'w-[200px] animate-fade break-words rounded-xl border border-gray-600 bg-purple-300 p-1 text-center text-gray-600 xl:w-[250px]'
            }>
            {text}
        </p>
    );
};

export default Placeholder;
