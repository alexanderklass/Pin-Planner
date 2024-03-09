import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SpinnerLoader from '../components/SpinnerLoader';

const Login = () => {
    const [startLoading, setStartLoading] = useState(false);
    useEffect(() => {
        setStartLoading(true);
        setTimeout(() => {
            setStartLoading(false);
        }, 3000);
    }, []);

    return (
        <section className={'flex h-screen flex-col items-center justify-center gap-2 bg-neutral-800'}>
            {startLoading ? (
                <SpinnerLoader />
            ) : (
                <React.Fragment>
                    <div className={'flex flex-col gap-2'}>
                        <input className={'rounded-full bg-gray-200 p-1 text-center'} type={'text'} />
                        <input className={'rounded-full bg-gray-200 p-1 text-center'} type={'password'} />
                        <div className={'flex flex-row gap-1'}>
                            <input type={'checkbox'} />
                            <p className={'text-white'}>Merken</p>
                        </div>
                    </div>
                    <div>
                        <Link to={'/portal'}>
                            <button className={'w-[185px] rounded-xl bg-black p-1 text-white'}>Login</button>
                        </Link>
                    </div>
                </React.Fragment>
            )}
        </section>
    );
};

export default Login;
