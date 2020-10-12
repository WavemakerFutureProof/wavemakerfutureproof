import React from "react";
import {Container, ContentContainer, Header, MainContentContainer, WatchAndLearn, UsefulLinks, CareerPathways} from "./ResourceStyles";

import QuizImage1 from "../../../Images/SVG/quiz-wave-1.svg";
import {uid} from 'react-uid';

class Resources extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            randomHeight: 0
        }
    }
    randomNumberGenerator = (min, max) => {
        let range = max - min;
        let random = Math.random();
        random = random * (range + 1);
        random = random + min;
    
        return random;
    }
    render(){
        return (
            <Container>
                {!!this.props.resources && this.props.resources.map((resource) =>
                    <ContentContainer key={uid(resource)}>
                        <Header key = {resource.title} headerColour = {this.props.headerColour}>
                            <div>
                                <h1 className = "content-text">{resource.title}</h1>
                                <p> {resource.text} </p>
                            </div>
                        </Header>
                        <MainContentContainer>
                            <WatchAndLearn singleColour = {this.props.singleColour}>
                                <h1 className = "mainHeading"> Watch and Learn </h1>
                                <p> We've scoured the interet to find the most helpful videos, games, quizzes, websites and everything in between! We hope these will help you in your educational journey!</p>
                                <div className = "links-wrapper">
                                    {!!resource.watch_and_learn && resource.watch_and_learn.map((link) =>
                                        <div className = "link-wrapper" 
                                            key = {link.text}
                                            style = {
                                                {backgroundImage: `url(${QuizImage1})` ,
                                                backgroundRepeat: "no-repeat",
                                                backgroundAttachment: "fixed",
                                                backgroundSize: "cover",
                                                backgroundPosition: "center"
                                            }}>
                                            <h2> {link.text} </h2>
                                            <p> {link.desc} </p>
                                            <a href = {link.link} className = "link"> Visit Link  &rarr; </a>
                                        </div>
                                    )}
                                </div>
                            </WatchAndLearn>
                            <UsefulLinks singleColour = {this.props.singleColour}>
                                <h1 className = "mainHeading"> Useful Links </h1>
                                <p> We've collected the most useful links we could find to help you in your educational journey!  </p>
                                <div className  = "links-wrapper2">
                                {!!resource.useful_links && resource.useful_links.map((link) =>
                                        <div className = "link-wrapper" 
                                            key={uid(link)}
                                            style = {
                                                {backgroundImage: `url(${QuizImage1})` ,
                                                backgroundRepeat: "no-repeat",
                                                backgroundAttachment: "fixed",
                                                backgroundSize: "cover",
                                                backgroundPosition: "center bottom"
                                            }}>
                                            <h2> {link.text} </h2>
                                            <p> {link.desc} </p>
                                            <a href = {link.link} className = "link"> Visit Link  &rarr; </a>
                                        </div>
                                    )}
                                </div>
                            </UsefulLinks>
                            <CareerPathways singleColour = {this.props.singleColour}>
                                <h1 className = "mainHeading"> Career Pathways </h1>
                                <p> Take a look at some of the career pathways that are available to you right now!</p>
                                <div className  = "links-wrapper3">
                                {!!resource.careers && resource.careers.map((link) =>
                                    <div className = "link-wrapper" 
                                        key={uid(link)}
                                        style = {
                                            {backgroundImage: `url(${QuizImage1})` ,
                                            backgroundRepeat: "no-repeat",
                                            backgroundAttachment: "fixed",
                                            backgroundSize: "cover",
                                            backgroundPosition: "right top"
                                        }}>
                                        <h2> {link.text} </h2>
                                        <p> {link.desc} </p>
                                        <a href = {link.link} className = "link"> Visit Link  &rarr; </a>
                                    </div>
                                )}
                            </div>
                            </CareerPathways>
                        </MainContentContainer>
                    </ContentContainer>
                )}
            </Container>
        )
    }
}

export default Resources