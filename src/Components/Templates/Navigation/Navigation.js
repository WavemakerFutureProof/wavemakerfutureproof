import React from "react";
import {Container, ContentContainer} from "./NavigationStyles.js";

class Navigation extends React.Component {
    render(){
        return (
            <Container style = {{background: this.props.headerColour}}>
                <ContentContainer>
                    {!!this.props.previousNavigation && this.props.previousNavigation.map((content) =>
                        <a className = "previous" href = {content.link} key = {content.link}>
                            <div>
                                <h1> Previous Topic </h1>
                                <span className = "link"> {content.text} </span>
                            </div>
                        </a>
                    )}
                    {!!this.props.backNavigation && this.props.backNavigation.map((content) =>
                        <a className = "back" href = {content.link} key = {content.link}>
                            <div>
                                <h1> Return to </h1>
                                <span className = "link"> {content.text} </span>
                            </div>
                        </a>
                    )}
                    {!!this.props.nextNavigation && this.props.nextNavigation.map((content) =>
                        <a className = "next" href = {content.link} key = {content.link}>
                            <div>
                                <h1> Next Topic</h1>
                                <span className = "link"> {content.text}  </span>
                            </div>
                        </a>
                    )}
                </ContentContainer>
            </Container>
        )
    }
}

export default Navigation;