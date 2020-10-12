import React from "react";

import {Container, H5, OptionsContainer, LifelineContainer, TimeMessage} from "../Styles/QuizStyles.js";

class QuizFeatures extends React.Component {
    render(){

        const currentQuestion = this.props.currentQuestion;
        const currentQuestionIndex = this.props.currentQuestionIndex;
        const numberOfQuestions = this.props.numberOfQuestions;
        const time = this.props.time

        return (
            <Container style = {{background: this.props.quizColour}}>
                                        
                <span onClick = {this.props.quitQuiz} className = "quitQuiz" > X </span>
                <div className = "main-content-container">
                    <p style = {{transform: this.props.questionDisplay}} className = "numberOfQuestionsContainer">
                        <span className = "qNumber">
                            Question {currentQuestionIndex + 1} of {numberOfQuestions}
                        </span> 
                    </p>
                    <H5 style = {{transform: this.props.questionDisplay}}> {currentQuestion.text} </H5>
                    <OptionsContainer style = {{transform: this.props.questionDisplay, visibility: this.props.questionVisibility, opacity: this.props.questionOpacity }}>
                        {!!currentQuestion.answers && currentQuestion.answers.map((ans) =>
                            <button id = {ans.id} key = {ans.text} style = {{transform: this.props.questionDisplay, opacity: this.props.questionVisibility}} disabled = {!this.props.optionDisabled} className = "option" onClick = {this.props.handleOptionClick}> {ans.text}</button>
                        )}
                    </OptionsContainer>
                    <LifelineContainer style = {{transform: this.props.questionDisplay}}>
                        <p>
                            <span className = "timer help-icon"></span>
                            <span className = "">{time.minutes}:{time.seconds}</span>
                        </p>
                    </LifelineContainer>
                </div>
                <TimeMessage style = {{transform: this.props.showTimeMessage}}>
                    <h1> Time is Running Out! </h1>
                </TimeMessage>
            </Container>
        )
    }
}

export default QuizFeatures;