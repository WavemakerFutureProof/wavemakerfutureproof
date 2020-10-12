import React from "react";
import Banner from "./Banner.js";
import MainContent from "./MainContent.js";

class Why extends React.Component{
    render(){
        return (
            <div>
                <Banner
                    bannerText = {this.props.whyBannerText}
                    bannerDesc = {this.props.whyBannerDesc}
                    bannerColour = {this.props.headerColour}
                />
                <MainContent 
                    why = {this.props.why}
                />
            </div>
        )
    }
}

export default Why;