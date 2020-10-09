// To find where data is being pulled from, check ComponentDidMount
// To find how questions are being displayed, check the DisplayQuestions method
// To find how the quiz is being submitted, check the SubmitQuiz method. >> Note this is just a mock up and isn't in use currently

// To find the JSON file for the quiz, go to the public folder and then jsonfiles/example-quiz.json

// To find the HTML is being rendered to the UI, check the Render Method
// To find any styles, check the Styled components at the bottom of the page

import React from "react";
import styled from "styled-components";

// STYLESHEET 
import {ContentWrapper, QuizAndSummaryContainer, QuizContainer, DialogContainer, 
        OverlayContainer, Container, SummaryContainer} from "./Styles/QuizStyles.js";

// METHODS
import {showOptions, showTargetElement, hideTargetElement, startTimer, displayQuestions,
        startGame, end, submitQuiz, getBadge, quizBadgeWon, submitBadge} from "./QuizMethods.js";

import HomeTemplate from "./Templates/HomeTemplate.js";
import AboutTemplate from "./Templates/AboutTemplate.js";
import QuizFeatures from "./Templates/QuizFeatures.js";
import Summary from "./Templates/Summary";

class Quiz extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            quizData: this.props.quiz,

             // Quiz functionality states
             questions: [],
             currentQuestion: {},
             nextQuestion: {},
             previousQuestion: {},
             answer: "",
             numberOfQuestions: 0,
             numberOfAnsweredQuestions: 0,
             currentQuestionIndex: 0,
             score: 0,
             nextButtonDisabled: false, 
             previousButtonDisabled: true,
             previousRandomNumber: [],
             disableButtons: false,
             time: {},
 
             // Show / Hide components and return states 
             showQuestions: "block",
             showSummary: " ",
             showDialog: "none",
             showOverlay: "none",
             returnHome: false,
             displayQuiz: "translateX(-100%) scale(0)",
             answerMessage: "",
             showConfetti: "none",
             optionDisabled: true,
             backgroundChange: "#23758b",
             homeAppear: "",
             doesQuizExist: "",
             questionDisplay: "translateX(0)",
             showTimeMessage: "translateX(-100%)",

             answeredQuestions: [],

             quizShow: "",
             quizScale: "0%",
             quizVisibility: "hidden",

             showMainOverlay: "none",
             overlayOpacity: "0",
             overlayVisibility: "hidden",  


             entireQuizVisibility: "",
             isSummaryDisplayed: "hidden",

             quizBadgeShowHeight: "scaleY(0)",
             quizBadgeShowVisibility: "hidden",
             quizPassed: false,

             quizPoints: 0,

             displayAbout: "0%"
        }
        this.interval = null
    }
    async componentDidUpdate(prevProps, prevState){

        if(prevState.quizPassed !== this.state.quizPassed){
            if(this.state.quizPassed === true){
                console.log("quiz has been passed, badge submitted");
                submitBadge(this);
            }
        }

        if(prevProps.topicQuiz !== this.props.topicQuiz){

            const quizData = this.props.topicQuiz;

             // Check if quiz exists
            if(quizData.status === 200){
                this.setState({
                    quizData: quizData.data,
                    questions: quizData.data.questions,
                    quizId: quizData.data.id
                });
                if(this.state.currentQuestionIndex !== 0){
                    this.setState({
                        currentQuestionIndex: 0,
                        score: 0
                    });
                    showOptions(".option");
                }
                displayQuestions(
                    this.state.questions,
                    this.state.currentQuestion,
                    this.state.nextQuestion,
                    this.state.previousQuestion,
                    this
                )
                if(this.state.isSummaryDisplayed !== "dissapear .6s linear forwards"){
                    this.setState({
                        isSummaryDisplayed: "dissapear .6s linear forwards"
                    })
                } else {
                    // this.setState({
                    //     entireQuizVisibility: "none"
                    // });
                }
            } else {
                console.log("QUIZ DOES NOT EXIST");
                this.setState({
                    entireQuizVisibility: "none"
                });
            }
    
            // setTimeout(() => {
            //     this.setState({
            //         isSummaryDisplayed: "visible"
            //     })
            // }, 2200);
        }
    }
    componentDidMount = () => {
       getBadge(this, "7lBmXyuXcmXXiL0BDaeP");
       this.setState({
           badgeId: "7lBmXyuXcmXXiL0BDaeP"
       })
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    openAbout = () => {
        console.log("QUIZ STARTED");
        this.setState({
            displayAbout: "100%",
            quizScale: "100%",
            quizVisibility: "visible"
        });
    }
    startTimer = () => {
        const countdownTime = Date.now() + 60000;
        this.interval = setInterval(() => {
            const now = new Date();
            const distance = countdownTime - now;
            const minutes = Math.floor((distance % (1000 * 60 * 60)) /  (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000 );
            
            if(seconds <= 15){
                this.setState({
                    showTimeMessage: "translateX(0)"
                });
                setTimeout(() => {
                    this.setState({
                        showTimeMessage: "translateX(-100%)"
                    })
                }, 3000);
            }
            if(distance < 0){
                clearInterval(this.interval);
                this.setState({
                    time: {
                        minutes: 0,
                        seconds: 0
                    }
                }, () => {
                    // end(this);
                    submitQuiz(this);
                }); 
            } else {
                this.setState({
                    time: {
                        minutes,
                        seconds
                    }
                })
            }
        }, 1000);
    }
    startQuiz = () => {
        setTimeout(() => {
            this.setState({
                displayQuiz: "translateX(0) scale(1)",
                quizShow: "block",
                showMainOverlay: "block",

                overlayVisibility: "visible",
                overlayOpacity: 0.7,
                displayAbout: "0%",
                
                isSummaryDisplayed: "hidden",
                quizPoints: 0
            }); 
        }, 800);
        showTargetElement(this);
        startGame(this);
        this.startTimer();
        if(this.state.currentQuestionIndex !== 0){
            this.resetQuiz();
        }
    }
    resetQuiz = () => { 

        clearInterval(this.interval);
        showOptions(".option");
        this.setState({
            showQuestions: "block",
            currentQuestionIndex: 0,
            currentQuestion: this.state.questions[0],
            nextQuestion: this.state.questions[0 + 1],
            answer: this.state.questions[0].answer,
            previousQuestion: undefined,
            endNumOfQuestions: 0,
            endNumOfAnsweredQuestions: 0,
            success: "",
            successMessage: "",
            score: 0,
            endScore: 0,
            showSummary: "dissapear .6s linear forwards",
            isSummaryDisplayed: "visible",
            displayQuiz: "translateX(0) scale(1)",
            showConfetti: "none",
            questionDisplay: "translateX(0)",

            quizPoints: 0,
            answeredQuestions: []

        });

        this.startTimer();

    }
    handleOptionClick = (e) => {
        this.setState({
            questionDisplay: "translateX(350%)",
            answeredQuestions: [...this.state.answeredQuestions, parseInt(e.target.id)]
        });
        setTimeout(() => {
            this.setState({
                questionDisplay: "translateX(0)"
            });
            this.setState(prevState => ({
                score: prevState.score + 1,
                currentQuestionIndex: prevState.currentQuestionIndex +1,
                numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1,
                answerMessage: ""
            }), () => {
                if(this.state.nextQuestion === undefined){
                    this.setState({
                        questionDisplay: "translateX(900%)",
                    });
                    // end(this);
                    submitQuiz(this);
                    // quizBadgeWon(this);
                    setTimeout(() => {
                        submitBadge(this);
                    }, 2000);
                } else {
                    displayQuestions(
                        this.state.questions,
                        this.state.currentQuestion,
                        this.state.nextQuestion,
                        this.state.previousQuestion,
                        this
                    )
                }
            })
        }, 1000)
    }
    // THIS IS WHERE WE LIKELY SEND THE QUESTIONS BACK TO THE BACKEND
    // submitQuiz = () => {
    //     // SEND THIS TO BACKEND TO BE CHECKED 
    //     console.log("answered questions", this.state.answeredQuestions);

    //     fetch("http://backendServer/api/quiz/answers", {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json"
    //         },
    //         body: JSON.stringify(this.state.answeredQuestions)
    //         .then((result) => {
    //             if(result.json().wonQuiz === true){
    //                 this.setState({
    //                     quizWon: true
    //                 })
    //             } else {
    //                 this.setState({
    //                     quizWon: false
    //                 });
    //             }
    //         })
    //     })
    // }
    // Used when the user selects 'no' from the dialog menu to resume the quiz
    resumeQuiz = () => {
        this.setState({
            showDialog: "none",
            showOverlay: "none"
        });
        const currentTime = this.state.time.seconds + "000";
        const resumeTime = parseInt(currentTime) ;

        const countdownTime = Date.now() + resumeTime;
        this.interval = setInterval(() => {
            const now = new Date();
            const distance = countdownTime - now;
            const minutes = Math.floor((distance % (1000 * 60 * 60)) /  (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000 );

            if(distance < 0){
                clearInterval(this.interval);
                this.setState({
                    time: {
                        minutes: 0,
                        seconds: 0
                    }
                }, () => {
                    // end(this);
                    submitQuiz(this);
                });
            } else {
                this.setState({
                    time: {
                        minutes,
                        seconds
                    }
                })
            }
        }, 1000);
    }
    quitQuiz = () => {
        this.setState({
            showDialog: "block",
            showOverlay: "block",
        });
        clearInterval(this.interval);
    }
    quitLogin = () => {
        this.setState({
            canUserPlayQuiz: "0"
        })
    }
    exitQuiz = () => {
        this.setState({
            showDialog: "none",
            showOverlay: "none",
            displayQuiz: "translateX(0) scale(1)",

            quizShow: "none",
            quizScale: "0%",
            quizVisibility: "hidden", 


            showMainOverlay: "none",

            overlayVisibility: "hidden",
            overlayOpacity: 0
        });
        hideTargetElement(this);
    }
    exitAboutPage = () => {
        this.setState({
            displayAbout: "0%",
            displayQuiz: "translateX(0) scale(1)",
            showOverlay: "none",
            quizShow: "none",
            quizScale: "0%",
            quizVisibility: "hidden",

            showMainOverlay: "none",
        })
    }
    returnHome = () => {
        this.setState({
            quizShow: "none",
            quizScale: "0%",
            quizVisibility: "hidden",

            showMainOverlay: "none",
            overlayVisibility: "hidden",
            overlayOpacity: 0
        });
        hideTargetElement(this);
    }
    closeBadgeWon = () => {
        this.setState({
            quizBadgeShowHeight: "scaleY(1)",
            quizBadgeShowVisibility: "hidden"
        });
    }
    
    render(){
        const {
            endScore,
            endNumOfQuestions,
            success,
            successMessage,
        } = this.state;

        return (
            <React.Fragment>
                <HomeTemplate 
                    homeAppear = {this.state.homeAppear} 
                    openAbout = {this.openAbout}
                    buttonDisabled = {this.props.buttonDisabled}
                    buttonHidden = {this.props.buttonHidden}
                    buttonCursor = {this.props.buttonCursor}
                    quizColour = {this.props.quizColour}
                    quizDescription = {this.props.quizDescription}
                />
                <ContentWrapper className = "content-wrapper" onScroll = {this.handleScroll} style = {{animation: this.state.doesQuizExist, display:this.state.entireQuizVisibility}}>
                    <QuizAndSummaryContainer id = "quizAndSummary" style = {{height: this.state.quizScale, visibility: this.state.quizVisibility}}>
                        <AboutTemplate
                            quizColour = {this.props.quizColour}
                            displayAbout = {this.state.displayAbout}
                            exitAboutPage = {this.exitAboutPage}
                            startQuiz = {this.startQuiz}
                        />
                        <QuizContainer>
                            <div style = {{position: "relative"}}>
                            <DialogContainer style = {{display: this.state.showDialog, zIndex: "100000001"}}>
                                <h1> Are you sure you want to quit the quiz? </h1>
                                <button onClick = {this.exitQuiz}> Yes </button>
                                <button onClick = {this.resumeQuiz}> No </button>
                            </DialogContainer>
                            <OverlayContainer style = {{display: this.state.showOverlay, zIndex: "100000000"}}/>

                            <Container style = {{background: this.props.quizColour}}>
                                <QuizFeatures
                                    quizColour = {this.props.quizColour}
                                    quitQuiz = {this.quitQuiz}
                                    questionDisplay = {this.state.questionDisplay}
                                    questionVisibility = {this.state.questionVisibility}
                                    optionDisabled = {this.state.optionDisabled}
                                    handleOptionClick = {this.handleOptionClick}
                                    showTimeMessage = {this.state.showTimeMessage}
                                    currentQuestion = {this.state.currentQuestion}
                                    currentQuestionIndex = {this.state.currentQuestionIndex}
                                    numberOfQuestions = {this.state.numberOfQuestions}
                                    time = {this.state.time}
                                />
                            </Container>
                        </div>
                        </QuizContainer>
                        {/* visibility: this.state.isSummaryDisplayed */}
                        <SummaryContainer style = {{animation: this.state.showSummary,  visibility: this.state.isSummaryDisplayed}}>
                            <Summary
                                quizColour = {this.props.quizColour}
                                quizPoints = {this.state.quizPoints}
                                numOfQuestions = {endNumOfQuestions}
                                success = {success}
                                successMessage = {successMessage}
                                playAgain = {this.resetQuiz}
                                homeReturn = {this.returnHome}
                                showConfetti = {this.state.showConfetti}

                                style = {{background: this.props.quizColour}}
                            />
                            <BadgeUnlocked style = {{visibility: this.state.quizBadgeShowVisibility, transform: this.state.quizBadgeShowHeight, zIndex: "99999999999"}}>
                                <div className = "content-container">
                                    <img src = {this.state.badgeUrl} alt = {this.state.badgeUrl} />
                                    <div className = "text-container">
                                        <h3> Congratulations, you have unlocked the badge </h3>
                                        <p> {this.state.badgeName} </p>
                                        <button onClick = {this.closeBadgeWon}> Okay </button>
                                    </div>
                                </div>
                            </BadgeUnlocked>
                        </SummaryContainer>
                    </QuizAndSummaryContainer>
                </ContentWrapper>
            </React.Fragment>
        )
    }
}

const BadgeUnlocked = styled.div`
    height: 50%;
    width: 50%;
    margin: 0 auto;
    position: absolute;
    left: 25%;
    top: 0%;
    transform: translate(-50%, -50%);
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 1150px) and (min-width: 700px){
        width: 75%;
    }
    @media only screen and (max-width: 700px){
        width: 85%;
    }
    img{
        height: 50%;
        width: 50%;
        display: block;
        margin: 0 auto;
    }
    .content-container{
        background: white;
        transform: translateY(10%);
        padding: 40px;
        border-radius: 20px;
        border: 2px solid #abb8c5;
        transition: .6s linear;

        @media only screen and (max-width: 1150px) and (min-width: 700px){
            transform: translateX(-15%) translateY(20%);
        }
        @media only screen and (max-width: 700px){
            transform: translateX(-20.5%) translateY(25%);
        }
    }
    .text-container{
        text-align: center;
        h3{
            font-weight: 800;
            font-size: 2em;
            color: #33cdff;
        }
        p{
            font-size: 2em;
            font-style: italic;
            font-weight: 800;
            color: #bcbcbc;
        }
        button{ 
            background: #33cdff;
            border: none;
            border-radius: 10px;
            padding: 20px 40px;
            font-size: 2em;
            color: white;
            font-weight: 600;
            margin-top: 30px;
            cursor: pointer;
        }
    }
`
export default Quiz;