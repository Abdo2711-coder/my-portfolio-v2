import React from "react";
import "./style.css";
import ImageLoader from "../Helpers/imageLoading";
import Header from "../Helpers/Headers/header";
import Button from "../Helpers/Button";
let Desc = `I Am A Front-End Developer With More Than Two Years Of Experience. I Am
From Cairo, Egypt, And I Create Sites For Great People Around The World
To Get More And More Experiences In Developing Sites.`;

const AbouMe = () => {
    return (
        <div id="About" className="text-white text-center">
            <Header Name="About me" Desc={Desc} />
            <div className="flex justify-between flex-col md:flex-row">
                <div className="w-full lg:w-6/12 rounded-lg overflow-hidden">
                    <ImageLoader
                        src={"./images/left-image.jpg"}
                        className="filter blur-sm transition duration-500 ease-in-out"
                        alt=""
                    />
                </div>
                <div className="w-full lg:w-6/12 text-left p-0 pt-3 md:p-5 space-y-4 md:space-y-7">
                    <h2 className="text-3xl font-bold">Education</h2>
                    <p className="mt-7">
                        I study in Integrated Thebes Academy of Sciences
                    </p>
                    <p className="text-xs text-gray-500">Sep 2019 - Jul 2022</p>
                    <Button msg={"READ MORE"} px={"6"} py={"3"} />
                </div>
            </div>
        </div>
    );
};
export default AbouMe;
