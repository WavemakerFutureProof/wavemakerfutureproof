import React from 'react';
import './App.css';
import ScrollToTop from "./ScrollToTop.js";

import Template from "./Components/Templates/MainTemplate/Template.js";
import NavTemplate from "./Components/Templates/NavTemplate.js";
import Template404 from "./Components/Templates/Template404.js";
import Footer from "./Components/Footer.js";
import Home from "./Components/Home.js";

import {BrowserRouter as Router, Route} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faHourglass} from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagramSquare, faTwitter} from '@fortawesome/free-brands-svg-icons'

import NavBar from "./Components/NavBar/NavBar.js";

import userLoggedOut from "./Images/userLoggedOut.svg";


library.add(faHourglass, faFacebookSquare, faInstagramSquare, faTwitter);

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {  
      jsonData: [],
      navData: [],
      display404: "none",
      showHome: "none",
      showTemplate: "",


      displayLoginMessage: "block",
      displayLoginContent: "none",

      displayLoggedInAvatar: "",
      displayNavBarLoginMessage: "",
      loginOrLogout: "",
      userProfileLink: "",
      quizDescription: "",

      displayUnknown404: "block",
      displayTemplate404: "none",

      isLoggedIn: localStorage.getItem("isLoggedIn") || 0
    }
  }
  async componentDidUpdate(){
    
  }
  async componentDidMount(){

    // if(window.location.pathname = "/"){
    //   setTimeout(() => {
    //     window.open("https://dev.wavemakerfutureproof.co.uk/");
    //   })
    // }
    // USER LOGIN STUFF
    // this.checkIfUserIsLoggedIn();
    // this.checkIfUserIsLoggedIn();
    // this.quizHasNotBeenCompleted();

    // let loginURL = 'https://seanrs97.github.io/jsonData/userProfile.json';

    // const loginSelf = this;
    // fetch(loginURL).then(response => {
    //   if(response.ok){
    //     response.json().then(data => {    
    //       loginSelf.setState({
    //           nickname: data[0].data.nickname,
    //           quizzesCompleted: data[0].data.quizzesCompleted,
    //           profilePicture: data[0].data.profilePicture,
    //       })
    //     });
    //     this.setState({
    //         status: response.status
    //     });
    //   }
    // });

    let baseURL = 'https://wavemakerfutureproof.github.io/content_data/';
    let params = (new URL(document.location)).searchParams;
    
    let myURL;
    if (params.get("page")===null) {
      this.setState({
        showHome: "block",
        showTemplate: "none"
      });
    } else {
      myURL = `${baseURL}${params.get("page")}.json`;
      this.setState({
        showHome: "none",
        showTemplate: "block"
      })
    }

    if(params.get("page") !== null){
      myURL = `${baseURL}${params.get("page")}.json`;
      console.log("URL NAME", myURL)
      this.setState({
        showHome: "none",
        showTemplate: "block"
      });

      const self = this;
      fetch(myURL).then(response => {
        if(response.ok){
          response.json().then(data => {
            console.log("RESPONSE", data)
            self.setState({
              jsonData: data[0]
            })
          });
          this.setState({
            displayTemplate404: "none",
            displayFooter404: "block",
            displayUnknown404: "none"
          })
        } else {
          this.setState({
            displayTemplate404: "block",
            displayFooter404: "block",
            showTemplate: "none",
            displayUnknown404: "block"
          })
        }
      });
    } 


    if(this.state.displayTemplate404 === "block"){
      this.setState({
        showTemplate: "none"
      })
    }


    // let navURL = 'https://seanrs97.github.io/navData/';
    // let navParams = (new URL(document.location)).searchParams;
    // let myNavURL;
    // if (params.get("navPage")===null) {
    //   this.setState({
    //     showHome: "block",
    //     showNavTemplate: "none"
    //   });
    // } else {
    //   myNavURL = `${navURL}${navParams.get("navPage")}.json`;
    //   this.setState({
    //     showHome: "none",
    //     showNavTemplate: "block"
    //   })
    // }

    // if(navParams.get("navPage") !== null){
    //   myNavURL = `${navURL}${navParams.get("navPage")}.json`;
    //   this.setState({
    //     showHome: "none",
    //     showNavTemplate: "block"
    //   });
    //   const navSelf = this;
    //   fetch(myNavURL).then(response => {
  
    //     console.log("RESPONSE", response);
    //     if(response.url === undefined){
    //       console.log("FJC<")
    //     }
    //     if(response.ok){
    //       response.json().then(data => {  
    //         navSelf.setState({
    //           navData: data
    //         })
    //       });
    //       this.setState({
    //         display404: "none",
    //         displayFooter404: "block",
    //         displayUnknown404: "none"
    //       })
    //     } else {
    //       this.setState({
    //         display404: "block",
    //         displayFooter404: "block",
    //         displayUnknown404: "block"
    //       })
    //     }
    //   });
    // }
  }
  // componentDidUpdate(){
  //   this.checkIfQuizIsComplete();
  // }
  // checkIfQuizIsComplete = () => {


  // if(this.state.pageQuizId !== undefined && this.state.pageQuizId !== null){
  //     let quizId = this.state.pageQuizId;

  //     if(this.state.quizzesCompleted.indexOf(quizId) > -1){
  //         console.log("Quiz has been completed");
  //         this.setState({
  //             quizDescription: "Well done, the quiz is complete!"
  //         })
  //     } else {
  //         console.log("QUIZ HAS NOT BEEN COMPLETED")
  //     }
  //   }
  // }
  // async fetchQuiz(){
  //     try {
  //         const sdk = window.futureproofSdk();
  //         const quiz = await sdk.quizzes.get("6rmJrdxlWl54wvS5KkVc"); 

  //         console.log("QUIZ", quiz);

  //         return quiz;
  //     } catch (e){
  //         // this.setState({
  //         //     quizDescription: "It doesn't look like this section has a quiz! Sorry about that",
  //         //     buttonDisabled: true,
  //         //     buttonHidden: "0.5"
  //         // })
  //     }
  // }
  // quizHasNotBeenCompleted = () => {
  //   if(this.state.loginStatus === 401){
  //       this.setState({
  //           quizDescription: "You need to login to complete the quiz!"
  //       })
  //   } else {
  //       this.setState({
  //           quizDescription: "You haven't completed the quiz yet! click the play button to start!"
  //       });
  //         this.fetchQuiz();
  //     }
  // }
  // Check to see if user is logged in or not
//   async checkIfUserIsLoggedIn(){
//     // USER IS LOGGED IN
//     try {
//         const sdk = window.futureproofSdk();
//         const userIsLoggedIn = await sdk.auth.session(); 


//         this.displayUserInformation();


//         console.log("USER LOGGED IN", userIsLoggedIn);


//         this.setState({         
//             displayLoginMessage: "none",
//             displayLoginContent: "block",
//             loginOrLogout: "Logout",
//             loginHref: "https://dev.wavemakerfutureproof.co.uk/",
//             userProfileLink: " https://dev.wavemakerfutureproof.co.uk/",

//             buttonHidden: "1",
//             buttonCursor: "pointer"
//         });

//         setTimeout(() => {
//             this.setState({
//                 displayLoggedInAvatar: this.state.userProfilePicture
//             })
//         }, 1000);

//         if(this.state.quizDescription !== "It doesn't look like this section has a quiz! Sorry about that"){
//             this.setState({
//                 buttonDisabled: false,
//                 buttonHidden: "1"
//             })
//         } else {
//             this.setState({
//                 buttonDisabled: true,
//                 buttonHidden: "0.5"
//             })
//         }

//         return userIsLoggedIn;

//     } catch (e) {
//         console.log("ERROR", e);
//         console.log("USER IS NOT LOGGED IN");
//         this.setState({
//             loginStatus: e.status,
//             loginUrl: e.urlWithRedirect,
//             displayLoggedInAvatar: `${userLoggedOut}`,
//             loginOrLogout: "Login",

//             // REAL ONES 
//             loginHref: e.urlWithRedirect,
//             userProfileLink: e.urlWithRedirect,

//             // userProfileLink: "https://wm-educational-pwa-dev.web.app/login",
//             // loginHref: "https://wm-educational-pwa-dev.web.app/login",
//             buttonDisabled: true,
//             buttonHidden: "0.5",
//             buttonCursor: "auto"
//         });
        
//         this.setState({
//             buttonDisabled: false,
//             buttonHidden: "1"
//         })

//         console.log(this.state.loginStatus);
//     }
// }
// async displayUserInformation(){
//   const sdk = window.futureproofSdk();
//   const user = await sdk.user.profile();

//   if(user.data.profilePicture.length >= 1){
//       this.setState({
//           userProfilePicture: user.data.profilePicture,
//       })
//   } else {
//       this.setState({
//           userProfilePicture: {userLoggedOut}
//       })  
//   }
//   this.setState({
//       userName: user.data.nickname,
//       quizzesCompleted: user.data.quizzesCompleted
//   });
//   setTimeout(() => {
//       this.setState({
//           userProfilePicture: user.data.profilePicture
//       })
//   }, 2000);

//   // this.refreshPage();

//   return user;
// }
  render(){
    return(
      <div className="App">
        <Router>
          {/* <Route exact path = "/home" component = {Home}/> */}
          <ScrollToTop>
              {/* <NavBar
                showLoggedInImage = {this.state.displayLoggedInAvatar}
                loginOrLogout = {this.state.loginOrLogout}
                loginHref = {this.state.loginHref}
                userProfileLink = {this.state.userProfileLink}
              /> */}
              <Template404 display404 = {this.state.displayUnknown404}/>
              <div>
                <div style = {{display: this.state.showTemplate}}>
                  <Template {...this.state.jsonData} is404PagePresent = {this.state.displayMainContent404}/>
                </div>
                <Template404 display404 = {this.state.displayTemplate404} />
              </div>
              <div>
                <div>
                  <NavTemplate {...this.state.navData}/>
                </div>
                <Template404 display404 = {this.state.display404} />
              </div>
            <Footer display404 = {this.state.displayFooter404}/>
          </ScrollToTop>
        </Router> 
      </div>
    )
  }
}
export default App;
