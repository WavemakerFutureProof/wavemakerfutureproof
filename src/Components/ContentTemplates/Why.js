import React from "react";
import Banner from "../Templates/Banner.js";
import MainContent from "./Templates/MainContent.js";

class Why extends React.Component{
    render(){
        return (
            <div>
                <Banner/>
                <MainContent/>
            </div>
        )
    }
}

export default Why;