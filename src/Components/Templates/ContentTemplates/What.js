import React from "react";
import Banner from "./Banner.js";
import MainContent from "./MainContent.js";

class What extends React.Component{
    render(){
        return (
            <div>
                <Banner
                    bannerText = {this.props.whatBannerText}
                    bannerDesc = {this.props.whatBannerDesc}
                    bannerColour = {this.props.headerColour}
                />
                <MainContent what = {this.props.what}/>
            </div>
        )
    }
}

export default What;