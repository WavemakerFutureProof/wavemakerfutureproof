import React from "react";
import styled from "styled-components";

import NavBar from "../Components/NavBar/NavBar.js";
import userLoggedOut from "../Images/userLoggedOut.svg";

import logo from "../Images/logo.svg";
import BadgeBlue from "../Images/BadgeBlue.svg";
import BadgeOrange from "../Images/BadgeOrange.svg";
import BadgeRed from "../Images/BadgeRed.svg";
import BadgeGreen from "../Images/BadgeGreen.svg";

import BannerImage from "../Images/headerImages/webHeaderDesktop.jpg"
import BannerImage2 from "../Images/headerImages/CodingBanner1.png";
import BannerImage3 from "../Images/headerImages/Banner3.png";
import BannerImage4 from "../Images/headerImages/Banner4.png";
import BannerImage5 from "../Images/headerImages/CodingBanner2.png";
import BannerImage6 from "../Images/headerImages/Banner6.png";
import BannerImage7 from "../Images/headerImages/Banner7.png";

import {Link} from "react-router-dom";

const imagesArray = [`${BannerImage}`,`${BannerImage2}`,`${BannerImage3}`,`${BannerImage4}`,`${BannerImage5}`,`${BannerImage6}`,`${BannerImage7}`];

class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            currentImageIndex: null
        }
    }
    componentDidMount(){
        const random = Math.floor(Math.random() * imagesArray.length);
        this.setState({currentImageIndex: random});
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
    
                buttonCursor: "auto",
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
    render(){
        return (
            <Container>
                {/* <NavBar
                    showLoggedInImage = {this.state.displayLoggedInAvatar}
                    loginOrLogout = {this.state.loginOrLogout}
                    loginHref = {this.state.loginHref}
                    userProfileLink = {this.state.userProfileLink}
                /> */}
                <IntroContainer>
                    <LogoImage src = {logo} alt = {logo} />
                    <MeaningContainer>
                        <H5> Adjective </H5>
                        <p style = {{textTransform: "lowercase", fontSize: "1.8em", lineHeight: "1.4em"}}> A product, system or person unlikely to become obsolete.</p>
                    </MeaningContainer>
                    <MeaningContainer>
                        <H5> Verb </H5>
                        <p style = {{textTransform: "lowercase", fontSize: "1.8em", lineHeight: "1.4em"}}> Make (a product or system) future proof. 
                        <br></br>"This approach allows you to future-proof your applications</p>
                    </MeaningContainer>
                </IntroContainer>
                <Banner backgroundImage = {imagesArray[this.state.currentImageIndex]}/>
                <div style = {{ textAlign: "center"}}>
                    <H3> Start by selecting a topic! </H3>
                    <BadgesContainer>
                        {/* <a href = "/?navPage=coding"><img src = {BadgeBlue} alt = {BadgeBlue}/></a>
                        <a href = "/?navPage=essential"><img src = {BadgeRed} alt = {BadgeRed}/></a>
                        <a href = "/?navPage=essential"><img src = {BadgeGreen} alt = {BadgeGreen}/></a>
                        <a href = "/?navPage=digitalEnt"><img src = {BadgeOrange} alt = {BadgeOrange}/></a> */}

                        <Link to = "/?navPage=coding"><img src = {BadgeBlue} alt = {BadgeBlue}/></Link>
                        <Link to = "/?navPage=essential"><img src = {BadgeRed} alt = {BadgeRed}/></Link>
                        <Link to = "/?navPage=essential"><img src = {BadgeGreen} alt = {BadgeGreen}/></Link>
                        <Link to = "/?navPage=digitalEnt"><img src = {BadgeOrange} alt = {BadgeOrange}/></Link>
                    </BadgesContainer>
                </div>
            </Container>
        )
    }
}

const Container = styled.div`
    width: 100%;
    margin: 0 auto;
    color: #414042;
    z-index: 150;
    img{
        margin-top: 20px;
    }
`
const IntroContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding-top: 160px;
    @media only screen and (max-width: 650px){
        padding-top: 120px;
    }
`
const LogoImage = styled.img`
    width: 65%;
    margin-bottom: 40px;
    @media only screen and (min-width: 900px){
        width: 56% !important;
    }
`
const MeaningContainer = styled.div`
    padding: 14px 0;
`
const H5 = styled.h5`
    text-transform: lowercase;
    margin-bottom: -10px;
    font-weight: 800;
    font-size: 1.8em;
`
const H3 = styled.h3`
    font-weight: 200;
    font-size: 2.5em;
    padding-bottom: 30px;
    @media only screen and (max-width: 1500px) and (min-width: 800px){
        font-size: 3em;
        padding-bottom: 16px;
    }
    @media only screen and (max-width: 2000px) and (min-width: 1500px){
        font-size: 4em;
        padding-bottom: 24px;
    }
    @media only screen and (min-width: 2000px){
        font-size: 5em;
    }
`
const Banner = styled.div`
    width: 100%;
    height: 300px;
    background: url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin: 50px 0;
`
const BadgesContainer = styled.div`
    color: darkgrey;
    font-weight: 100;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    img{
        width: 50%;
        padding: 30px;
        @media only screen and (max-width: 570px){
            width: 40% !important;
            padding: 10px;
        }
    }
    @media only screen and (max-width: 570px){
        display: block !important;
    }
`
export default Home;