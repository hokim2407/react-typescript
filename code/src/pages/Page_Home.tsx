import React from "react";
import tw, { css } from "twin.macro";
const Home = () => {
    return (
        <div
            className=""
            css={[
                tw`text-3xl font-bold underline`,
                css`
                    background: #ff802c;
                `,
            ]}
        >
            hello
        </div>
    );
};

export default Home;
