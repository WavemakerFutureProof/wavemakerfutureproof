import React from "react";
import {Home} from "../Styles/QuizStyles.js";

import QuizImage1 from "../../../Images/SVG/quiz-wave-1.svg";
import QuizImage2 from "../../../Images/SVG/quiz-wave-2.svg";

class HomeTemplate extends React.Component {
    render () {
        return (
            <Home style = {{animation: this.props.homeAppear, background: this.props.quizColour, marginBottom: "20px"}}>
                <div className = "content-container">
                    <h1> Quiz </h1>
                    <div className = "button-container">
                        <button 
                            onClick = {this.props.openAbout} 
                            disabled = {this.props.buttonDisabled}
                            style = {{opacity: this.props.buttonHidden, cursor: this.props.buttonCursor, background: this.props.buttonColour}}
                        >
                                Start
                        </button> 
                    </div>
                </div>
                <div className = "quiz-description">
                    <p> {this.props.quizDescription} </p>
                </div>
                <img alt = "background of wave" src = {QuizImage1} className = "top-quiz-wave" />
                <img alt = "background of wave" src = {QuizImage2} className = "bottom-quiz-wave"/>
            </Home>
        )
    }
}

export default HomeTemplate;