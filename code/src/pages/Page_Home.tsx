import React from "react";
import tw, { css } from "twin.macro";
const Home = () => {
    return (
        <div className="">
            <div
                css={[
                    tw`text-3xl font-bold underline text-primary`,
                    css`
                        background: #ff802c;
                    `,
                ]}
            >
                hello
            </div>
            <button className="btn-base">hi</button>
            <button className="btn-base tablet:bg-[#856ffd]">bye</button>
        </div>
    );
};

export default Home;
