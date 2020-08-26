import IsEmpty from "./IsEmpty";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const showOptions = (options) => {
    options = Array.from(document.querySelectorAll(options));
    options.forEach(option => {
        option.style.visibility = "visible";
    });
}
export const showTargetElement = (component) => {
    disableBodyScroll(component.targetElement);
  };
export const hideTargetElement = (component) => {
    enableBodyScroll(component.targetElement);
};
export const startTimer = (component) => {
    const countdownTime = Date.now() + 60000;
    component.interval = setInterval(() => {
        const now = new Date();
        const distance = countdownTime - now;
        const minutes = Math.floor((distance % (1000 * 60 * 60)) /  (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000 );
        
        if(seconds <= 15){
            component.setState({
                showTimeMessage: "translateX(0)"
            });
            setTimeout(() => {
                component.setState({
                    showTimeMessage: "translateX(-100%)"
                })
            }, 3000);
        }
        if(distance < 0){
            clearInterval(component.interval);
            component.setState({
                time: {
                    minutes: 0,
                    seconds: 0
                }
            }, () => {
                component.end();
            });
        } else {
            component.setState({
                time: {
                    minutes,
                    seconds
                }
            })
        }
    }, 1000);
}
export const displayQuestions = (questions, currentQuestion, nextQuestion, previousQuestion, component) => {
    let { currentQuestionIndex } = component.state;

    if(!IsEmpty(component.state.questions)){
        questions = component.state.questions;
        currentQuestion =  questions[currentQuestionIndex];
        nextQuestion = questions[currentQuestionIndex + 1];
        previousQuestion = questions[currentQuestionIndex - 1];

        component.setState({ 
            currentQuestion, 
            nextQuestion,
            previousQuestion,
            previousRandomNumber: [],
        }, () => {
            showOptions(".option");
        });
    }
}
export const startGame = (component) => {
    let {currentQuestionIndex} = component.state;

    let questions = component.state.questions;
    let currentQuestion = component.state.questions[currentQuestionIndex];
    let nextQuestion = component.state.questions[currentQuestionIndex + 1];
    let previousQuestion = component.state.questions[currentQuestionIndex - 1];
    let answer = component.state.questions[currentQuestionIndex].answer;

    if(questions.length === 0 || questions === undefined || currentQuestion.length === 0 || currentQuestion === undefined){
        console.log("somethings gone wrong here")
    } else {
        component.setState({
            questions: questions,
            currentQuestion:currentQuestion,
            nextQuestion: nextQuestion,
            previousQuestion: previousQuestion, 
            numberOfQuestions: questions.length,
            answer:  answer
        });
    }
}
export const end  = (component) => {
    const { state } = component;
    let playerResult = "failed";
    let successMessage = "Please try again!";

    console.log("answered questions", component.state.answeredQuestions);

    const playerStats = {
        score: state.score,
        numberOfQuestions: state.numberOfQuestions,
        numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
    };

    if(playerStats.score === playerStats.numberOfQuestions){
        playerResult = "passed"
        successMessage = "Well done, you can now move on!"
        setTimeout(() => {
            component.setState({
                showConfetti: "block"
            });
        }, 800)
    }
    component.setState({
        endScore: playerStats.score,
        endNumOfQuestions: playerStats.numberOfQuestions,
        endNumOfAnsweredQuestions: playerStats.numberOfAnsweredQuestions,
        endNumberOfCorrectAnswers: playerStats.correctAnswers,
        endNumberOfWrongAnswers: playerStats.wrongAnswers,
        success: playerResult,
        successMessage: successMessage,

    });
    component.setState({
        isSummaryDisplayed: "visible"
    })
    component.setState({
        showQuestions: "none",
        numberOfAnsweredQuestions: 0,
        currentQuestionIndex: playerStats.numberOfQuestions - 1,
        time: {
            minutes: 0,
            seconds: 0
        },
        showSummary: "appear .6s linear forwards",
        displayQuiz: "translateX(-100%) scale(0)",
    });
    clearInterval(component.interval);


    if(component.state.successMessage === undefined || component.state.successMessage === "passed"){
        component.setState({
            unlockContent: "block"
        })
    }
}
export const returnHome = (component) => {
    component.setState({
        quizShow: "none",
        quizScale: "0",
        showMainOverlay: "none",
        overlayVisibility: "hidden",
        overlayOpacity: 0
    });
    hideTargetElement(component);
}