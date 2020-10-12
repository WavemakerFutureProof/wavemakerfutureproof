import React from "react";
import Banner from "./Banner.js";

import MainContent from "./MainContent.js";

class How extends React.Component{
    render(){
        return (
            <div>
                <Banner
                    bannerText = {this.props.howBannerText}
                    bannerDesc = {this.props.howBannerDesc}
                    bannerColour = {this.props.headerColour}
                />
                <MainContent 
                    how = {this.props.how}
                />
            </div>
        )
    }
}

export default How;