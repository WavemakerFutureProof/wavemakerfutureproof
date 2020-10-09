import React from "react";
import {DisplayContent, UnlockableContent, HideContent} from "./TemplateStyles";
import Header from "../ContentTemplates/Header.js";
import Resources from "../ContentTemplates/Resources.js";
import Quiz from "../../Quiz/Quiz.js";

import What from "../ContentTemplates/What.js";
import Why from "../ContentTemplates/Why.js";
import How from "../ContentTemplates/How.js";
import Navigation from "../Navigation/Navigation.js";

import sal from "sal.js";
import '../../../../node_modules/sal.js/dist/sal.css';

import NavBar from "../../NavBar/NavBar.js";

import userLoggedOut from "../../../Images/userLoggedOut.svg";

class Template extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showUnlockableContent: "none",
            value_key: "",
            quiz_desc_value: "start",

            displayLoginMessage: "block",
            displayLoginContent: "none",

            displayLoggedInAvatar: "",
            displayNavBarLoginMessage: "",
            loginOrLogout: "",
            userProfileLink: "",
            quizDescription: "",

            isLoggedIn: localStorage.getItem("isLoggedIn") || 0
        }
    }
    componentDidUpdate(prevProps, prevState){
        sal({
            once: false
        });

        if(this.props !== prevProps){
            this.setState({
                pageQuizId: this.props.quizId
            });   
            this.checkIfUserIsLoggedIn();
        }
    }
    async logUserOut(){
        try {
            const sdk = window.futureproofSdk();
            const logoutUser = await sdk.auth.stopSession(); 
        } catch (e) {
            console.log("ERROR LOGGING USER OUT", e);
        }
    }
    async checkIfUserIsLoggedIn(){
        // USER IS LOGGED IN
        try {
            const sdk = window.futureproofSdk();
            const userIsLoggedIn = await sdk.auth.session(); 
    
            this.displayUserInformation();
            this.fetchQuiz();
    
            this.setState({         
                displayLoginMessage: "none",
                displayLoginContent: "block",
                loginOrLogout: "Logout",
                loginHref: "https://dev.wavemakerfutureproof.co.uk/",
                userProfileLink: " https://dev.wavemakerfutureproof.co.uk/",
    
                buttonDisabled: false,
                buttonHidden: "1",
                buttonCursor: "pointer"
            });
    
            setTimeout(() => {
                this.setState({
                    displayLoggedInAvatar: this.state.userProfilePicture
                })
            }, 1000);
    
            // if(this.state.quizDescription !== "It doesn't look like this section has a quiz! Sorry about that"){
            //     this.setState({
            //         buttonDisabled: false,
            //         buttonHidden: "1"
            //     })
            // } else {
            //     this.setState({
            //         buttonDisabled: true,
            //         buttonHidden: "0.5"
            //     })
            // }

            this.setState({
                userIsLoggedIn: "true"
            });
    
            return userIsLoggedIn;
    
        } catch (e) {
            console.log("ERROR", e);
            console.log("USER IS NOT LOGGED IN");

            this.disableQuiz();
            console.log(this.state);

            this.setState({
                loginStatus: e.status,
                loginUrl: e.urlWithRedirect,
                displayLoggedInAvatar: `${userLoggedOut}`,
                loginOrLogout: "Login",
    
                // REAL ONES 
                loginHref: e.urlWithRedirect,
                userProfileLink: e.urlWithRedirect,
    
                buttonDisabled: true,
                buttonHidden: "0.5",
                // buttonCursor: "auto",
                quizDescription: "Please login to play the quiz and earn a badge and XP!"
            });
            this.setState({
                userIsLoggedIn: "false"
            });
    
            console.log(this.state.loginStatus);
        }
    }

    async displayUserInformation(){
        const sdk = window.futureproofSdk();
        const user = await sdk.user.profile();


        if(user.data.profilePicture.length >= 1){
            this.setState({
                userProfilePicture: user.data.profilePicture,
            })
        } else {
            this.setState({
                userProfilePicture: {userLoggedOut}
            })  
        }
        this.setState({
            userName: user.data.nickname,
            quizzesCompleted: [user.data.quizzesCompleted],
            userBadges: [... user.data.badges]
        });

        setTimeout(() => {
            this.setState({
                userProfilePicture: user.data.profilePicture
            })
        }, 2000);


        return user;
    }
    async fetchQuiz(){
        try {
            const sdk = window.futureproofSdk();
            const quiz = await sdk.quizzes.get(this.props.quizId); 

            this.setState({
                quiz: quiz,
                quizId: quiz.data.id,
                quizName: quiz.data.name,
                quizQuestions: quiz.data.questions,
                // answerId: quiz.data.questions
            });

            console.log("QUIZ", this.state.quiz.data.questions);
            let totalPoints = 0;
            let arr = [];

            {!!this.state.quiz.data.questions && this.state.quiz.data.questions.map((question) => {
                console.log("Question", question.maxChoices[0].points);
                 totalPoints = (totalPoints += question.maxChoices[0].points);

                 arr.push(parseInt(question.maxChoices[0].points));


                //  console.log(multiply(totalPoints));
                // console.log("Total Points", totalPoints);
            })};

            console.log("Array", arr);

            // arr.reduce((a, b) => a + b, 0);

            this.setState({
                totalAmountOfPoints: arr.reduce((a, b) => a + b, 0)
            });

            console.log(this.state.totalAmountOfPoints);
            
            if(this.state.quizzesCompleted[0].indexOf(this.state.quizId) >  -1){
                this.setState({
                    quizDescription: "Well done, it looks like you've completed the quiz! You can play again if you want, but you won't get any more points!",
                });
            } else {
                this.setState({
                    quizDescription: "You haven't completed the quiz yet! press the start button to begin!",
                });
            }
            return quiz;
        } catch (e){
            this.setState({
                quizDescription: "It doesn't look like this section has a quiz! Sorry about that",
                buttonDisabled: true,
                buttonHidden: "0.5"
            });
            console.log("ERROR! quiz not available");
        }
    }
    disableQuiz = () => {
        this.setState({
            buttonHidden: "0.5",
            buttonDisabled: true
        });
    }
    render(){
        return (
            <div className = "main_container" style = {{display: this.state.is404PagePresent}}>
                {/* <NavBar
                    showLoggedInImage = {this.state.displayLoggedInAvatar}
                    loginOrLogout = {this.state.loginOrLogout}
                    loginHref = {this.state.loginHref}
                    userProfileLink = {this.state.userProfileLink}
                /> */}
                <Header 
                    image = {this.props.image}
                    imageTab = {this.props.imageTab}
                    imageMob = {this.props.imageMob}        
                    name = {this.props.name}
                    headerColour = {this.props.headerColour}
                    description = {this.props.description}
                />

                <What {...this.props} />
                <Why {...this.props} />
                <How {...this.props} />
                <Quiz 
                    topicQuiz = {this.state.quiz}
                    onFinished = {this.handleFinish} 
                    style = {{overflowY: "scroll"}} 
                    // quiz = {this.props.quiz} 
                    quizColour = {this.props.headerColour} 
                    quizDescription = {this.state.quizDescription}
                    buttonDisabled = {this.state.buttonDisabled}
                    buttonHidden = {this.state.buttonHidden}
                    buttonCursor = {this.state.buttonCursor}
                    quizNotFound = {this.state.quizNotFound}
                    doesBadgeExist = {this.state.userBadges}
                    pointsNeeded = {this.state.totalAmountOfPoints}
                />

                <DisplayContent style = {{background: this.props.headerColour, display: this.state.displayLoginMessage}}>
                    <div>
                        <h1> Please login to view resources & further links </h1>
                        <button onClick = {this.proceedToLoginPage}><a id = "quiz" href = "https://wavemakerfutureproof.co.uk" >Login</a></button>
                    </div>
                </DisplayContent>

                <UnlockableContent style = {{display: this.state.displayLoginContent}}>
                    <HideContent style = {{display: this.props.display}}></HideContent>
                    <Resources resources = {this.props.resources}/>
                </UnlockableContent>

                <Navigation {...this.props}/>
            </div>
        )
    }
}

export default Template;