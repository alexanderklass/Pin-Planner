import React from 'react';

const Login = () => {
    return (
        <section className={"flex flex-col justify-center items-center gap-2 h-screen"}>
            <div className={"flex flex-col gap-2"}>
                <input className={"p-1 bg-gray-200 rounded-full text-center"} type={"text"}/>
                <input className={"p-1 bg-gray-200 rounded-full text-center"} type={"password"}/>
                <div className={"flex gap-1 flex-row"}>
                    <input type={"checkbox"}/>
                    <p>Merken</p>
                </div>
            </div>
            <div>
                <button className={"bg-black w-[185px] text-white p-1 rounded-xl"}>Login</button>
            </div>
        </section>
    );
};

export default Login;