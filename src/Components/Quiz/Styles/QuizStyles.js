import styled from "styled-components";


export const BigOverlay = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    background: grey;
    top: 0;
    left: 0;
    z-index: 100000000000000000;
    transition: 1s all;

    visibility: ${props => props.OverlayContainer};
    opacity: ${props => props.OverlayOpacity};
`

export const ContentWrapper = styled.div`
    overflow: hidden;
`
/* HOME PAGE STYLES */ 
export const Home = styled.div`
    position: absolute;
    width: 100%; 
    left:0;
    top: 0;
    z-index: 10001;
    color: white;
    position: relative;
    overflow: hidden;
    transition: 1.6s;
    @media only screen and (min-width: 600px) and (max-width: 1900px){
        padding: 30px 0;
    }
    @media only screen and (min-width: 1900px) and (max-width: 2350px){
        padding: 40px 0;
    }
    @media only screen and (min-width: 2350px){
        padding: 50px 0;
    }

    .content-container{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        h1{
            font-size: 4em;
            line-height: 1.2em;
            color: white;
            font-weight: 800;
            width: 100%;
            margin-bottom: 12px;
            margin: 0 auto;
            @media only screen and (min-width: 1900px) and (max-width: 2350px){
                font-size: 6em;
            }
            @media only screen and (min-width: 2350px){
                font-size: 7em;
            }
            @media only screen and (max-width: 600px) and (min-width: 500px){
                font-size: 3.6em;
            }
            @media only screen and (max-width: 500px) and (min-width: 400px){
                font-size: 3.4em;
            }
            @media only screen and (max-width: 560px){
                text-align: center;
                font-size: 6em;
                margin-left: 0;
            }
            @media only screen and (max-width: 750px){
                width: 100%;
            }
        }
        .button-container{
            width: 40%;
            text-align: center;
            button{
                border: 4px solid white;
                cursor: pointer;
                border-radius: 8px;
                font-size: 2.2em;
                padding: 20px 50px;
                color: white;
                transition: .4s all;
                font-weight: 600;
                &:hover{
                    
                }
                @media only screen and (max-width: 430px){
                    width: 100%;
                    padding: 14px;
                }
                @media only screen and (max-width: 700px) and (min-width: 430px){
                    font-size: 2.2em;
                    margin-top: 14px;  
                    width: 100%;
                    padding: 14px;
                }
                @media only screen and (max-width: 1400px) and (min-width: 800px){
                    font-size: 2.8em;
                    padding: 15px 36px;
                }
                @media only screen and (min-width: 1400px) and (max-width: 2000px){
                    font-size: 3.6em;
                    padding: 20px 50px;
                }
                @media only screen and (min-width: 2000px){
                    font-size: 4.2em;
                    padding: 30px 100px;
                }
            }
            @media only screen and (max-width: 800px){
                margin: 0 auto;
                padding: 30px;
            }
            @media only screen and (min-width: 2000px){
                width: 25%;
            }
        }
        @media only screen and (min-width: 2000px){
            width: 70%;
        }
        @media only screen and (min-width: 1350px) and (max-width: 2000px){
            width: 78%;
        }
        @media only screen and (max-width: 1350px) and (min-width: 700px){
            width: 90%;
        }
        @media only screen and (max-width: 560px) and (min-width: 430px){
            display: block;
        }
        @media only screen and (max-width: 430px){
            display: block;
        }
    }
    .quiz-description{
        @media only screen and (min-width: 700px) and (max-width: 1350px){
            width: 90%;
        }
        width: 90%;
        margin: 0 auto;
        p{
            color: white;
            width: 70%;
            @media only screen and (max-width: 580px){
                width: 100%;
            }
            @media only screen and (min-width: 1900px) and (max-width: 2350px){
                font-size: 1.5em;
            }
            @media only screen and (min-width: 2350px){
                font-size: 1.7em;
            }
        }
        @media only screen and (max-width: 580px){
            width: 90%;
            text-align: center;
            padding-bottom: 10px;
        }
        @media only screen and (min-width: 1350px) and (max-width: 2000px){
            width: 78%;
        }
        @media only screen and (min-width: 2000px){
            width: 70%;
        }
    }
    .top-quiz-wave{
        position: absolute;
        top: -5%;
        right: 0;
        width: 500px;
        display: none;
        @media only screen and (max-width: 1400px) and (min-width: 800px){
            width: 700px;
        }
        @media only screen and (min-width: 1400px) and (max-width: 2000px){
            width: 850px;
        }
        @media only screen and (min-width: 2000px){
            width: 1200px;
        }
    }
    .bottom-quiz-wave{
        position: absolute;
        bottom: 0;
        right: 0;
        width: 250px;
        display: none;
        @media only screen and (max-width: 1400px) and (min-width: 800px){
            width: 350px;
        }
        @media only screen and (min-width: 1400px) and (max-width: 2000px){
            width: 500px;
        }
        @media only screen and (min-width: 2000px){
            width: 750px;
        }
    }
`
export const QuizNotFound = styled.div`
    position: fixed;
    height: 90vh;
    width: 100%;
    top: 50%;
    left: 50%;
    z-index: 999999999999999999999999999999999999999999999;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    transition: .7s all;
    overflow: hidden;

    @media only screen and (min-width: 576px) and (max-width: 1400px){
        height: 92vh;
        width: 100%;
    }
    @media only screen and (max-width: 576px){
        width: 100%;
        height: 100vh;
        border-radius: 0;
    }

    h1{
        position: absolute;
        left: 50%;
        top: 50%;
        color: white;
        font-size: 5em;
        transform: translate(-50%,-50%);
        width: 100%;
        text-align: center;
        @media only screen and (min-width: 2000px){
            font-size: 7em;
        }
        @media only screen and (min-width: 1400px) and (max-width: 2000px){
            font-size: 6em;
        }
        @media only screen and (min-width: 500px) and (max-width: 800px){
            font-size: 4em;
        }
        @media only screen and (max-width: 500px){
            font-size: 3.4em;
        }
    }
    .quitQuiz{
        font-weight: 800;
        color: white;
        position: absolute;
        top: 2%;
        left: 2%;
        font-size: 1.5em;
        cursor: pointer;
        @media only screen and (max-width: 800px) and (min-width: 574px){
            font-size: 2.2em;
        }
        @media only screen and (max-width: 1500px) and (min-width: 800px){
            font-size: 3em;
        }
        @media only screen and (min-width: 1500px) and (max-width: 2000px){
            font-size: 3.4em;
        }
        @media only screen and (min-width: 2000px){
            font-size: 5em;
        }
    }
`

export const WaveNum1 = styled.img`
    position: absolute;
    height: 80%;
    width: 80%;
    right: -12%;
    top: 40%;
    transform: rotate(-10deg);
    z-index: -100000;
    @media only screen and (max-width: 500px){
        height: 100%;
        width: 100%;
    }
`

export const WaveNum2 = styled.img`
    position: absolute;
    height: 50%;
    width: 50%;
    left: -10%;
    top: -18%;
    z-index: -1000000;
    transform: rotate(180deg);
    @media only screen and (max-width: 500px){
        height: 70%;
        width: 70%;
        top: -22%;
    }
`
export const AboutContainer = styled.div`
    position: fixed;
    height: 90vh;
    width: 100%;
    top: 50%;
    left: 50%;
    z-index: 99999999999999999999999999999;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    transition: .7s all;
    overflow: hidden;

    @media only screen and (min-width: 576px) and (max-width: 1400px){
        height: 92vh;
        width: 100%;
    }
    @media only screen and (max-width: 576px){
        width: 100%;
        height: 100vh;
        border-radius: 0;
    }
    div{
        padding: 64px;
        padding-top: 80px;


        @media only screen and (min-width: 2000px){
            padding-top: 240px;
        }
        @media only screen and (min-width: 1600px) and (max-width: 2000px){
            padding-top: 160px;
        }
        @media only screen and (max-width: 1100px) and (min-width: 800px){
            padding-top: 120px;
        }
        @media only screen and (max-width: 800px){
            padding-top: 60px;
            padding-left: 30px;
            padding-right: 30px;
        }
        ul{
            color: white;
            li{
                font-size: 1.3em;
                @media only screen and (min-width: 2000px){
                    font-size: 2.4em;
                }
                @media only screen and (min-width: 1600px) and (max-width: 2000px){
                    font-size: 2em;
                }
                @media only screen and (max-width: 1100px) and (min-width: 800px){
                    font-size: 1.2em;
                }
                @media only screen and (max-width: 800px){
                    font-size: 1em;
                }
            }
        }
        button{
            font-size: 3em;
            padding: 24px 60px;
            background: white;
            border: none;
            border-radius: 10px;
            margin-top: 60px;
            color: white;
            cursor: pointer;
            border: 4px solid white;
            font-weight: 600;

            @media only screen and (min-width: 2000px){
                font-size: 4.5em;
                padding: 44px 100px;
            }
            @media only screen and (min-width: 1600px) and (max-width: 2000px){
                font-size: 3.5em;
                padding: 36px 80px;
            }
            @media only screen and (max-width: 1100px) and (min-width: 800px){
                font-size: 2.8em;
                padding: 30px 70px;
            }
            @media only screen and (max-width: 800px) and (min-width: 500px){
                font-size: 2.2em;
                padding: 24px 60px;
            }
            @media only screen and (max-width: 500px){
                margin-top: 60px;
                font-size: 1.6em;
                padding: 20px 50px;
            }
        }
    }
    h1{
        text-align: left;
        color: white;
        font-size: 4.2em;
        line-height: 1.2em;

        @media only screen and (min-width: 2000px){
            font-size: 9em;
        }
        @media only screen and (max-width: 2000px) and (min-width: 1600px){
            font-size: 7em;
        }
        @media only screen and (max-width: 1100px) and (min-width: 800px){
            font-size: 3.6em;
        }
        @media only screen and (max-width: 800px) and (min-width: 500px){
            font-size: 3em;
            padding-bottom: 40px;
        }
        @media only screen and (max-width: 500px){
            font-size: 2.4em;
            padding-bottom: 60px;
        }
    }
    h3{
        text-align: left;
        color: white;
        font-size: 3em;

        @media only screen and (min-width: 2000px){
            font-size: 5.4em;
        }
        @media only screen and (max-width: 2000px) and (min-width: 1600px){
            font-size: 4.2em;
        }
        @media only screen and (max-width: 1100px) and (min-width: 800px){
            font-size: 2.8em;
        }
        @media only screen and (max-width: 800px) and (min-width: 500px){
            font-size: 2.2em;
        }
        @media only screen and (max-width: 500px){
            font-size: 1.7em; 
        }
    }

    .quitQuiz{
        font-weight: 800;
        color: white;
        position: absolute;
        top: 2%;
        left: 2%;
        font-size: 1.5em;
        cursor: pointer;
        @media only screen and (max-width: 800px) and (min-width: 574px){
            font-size: 2.2em;
        }
        @media only screen and (max-width: 1600px) and (min-width: 800px){
            font-size: 3em;
        }
        @media only screen and (min-width: 1600px) and (max-width: 2000px){
            font-size: 3.4em;
        }
        @media only screen and (min-width: 2000px){
            font-size: 5em;
        }
    }
`

export const QuizAndSummaryContainer = styled.div`
    position: fixed;
    height: 90vh;
    width: 88%;
    top: 50%;
    left: 50%;
    z-index: 99999999999999999999;
    transform: translate(-50%, -50%);
    border-radius: 8px; 
    transition: .7s all;
    overflow: hidden;
    @media only screen and (min-width: 2000px){
        height: 94vh;
    }
    @media only screen and (min-width: 580px) and (max-width: 1400px){
        height: 92vh;
    }
    @media only screen and (max-width: 580px){
        height: 100vh;
        padding: 0;
        width: 100%;
    }
`
/* MAIN QUIZ STYLES */

export const QuizContainer = styled.div`
    z-index: 999999999999999999999999999;
`
export const Container = styled.div`
    width: 100%;
    padding: 14px;
    transition: 1.2s all;
    color: white;
    height: 90vh;
    z-index: 100000;
    position: relative;
    @media only screen and (min-width: 2000px){
        height: 94vh;
    }
    @media only screen and (min-width: 580px) and (max-width: 1400px){
        height: 92vh;
    }
    @media only screen and (max-width: 580px){
        height: 100vh;
        padding: 0;
        width: 100%;
    }
    .main-content-container{
        top: 38%;
        position: absolute;
        transform: translateY(-30%);
        @media only screen and (max-width: 574px){
            width: 100%;
            height: 100vh;
            top: 38%;
        }
        @media only screen and (max-width: 800px) and  (min-width: 574px){
            left: 50%;
            top: 44%;
            transform: translate(-50%, -50%);
            width: 94%;
        }
        @media only screen and (max-width: 1050px) and (min-width: 800px){
            left: 50%;
            top: 44%;
            transform: translate(-50%, -50%);
            width: 84%;
        }
        @media only screen and (min-width: 1050px) and (max-width: 1500px){
            width: 84%;
            left: 50%;
            top: 44%;
            transform: translate(-50%, -50%);
        }
        @media only screen and (min-width: 1500px) and (max-width: 2000px){
            top: 44%;
            left: 50%;
            width: 75%;
            transform: translate(-50%, -50%);
        }
        @media only screen and (min-width: 2000px){
            top: 40%;
            left: 50%;
            width: 78%;
            transform: translate(-50%, -50%);
        }
    }
    .quitQuiz{
        font-weight: 800;
        color: white;
        position: absolute;
        top: 0;
        left: 6px;
        font-size: 1.5em;
        cursor: pointer;
        @media only screen and (max-width: 800px) and (min-width: 574px){
            font-size: 2.2em;
            top: 15px;
            left: 15px;
        }
        @media only screen and (max-width: 1500px) and (min-width: 800px){
            top: 30px;
            left: 30px;
            font-size: 3em;
        }
        @media only screen and (min-width: 1500px) and (max-width: 2000px){
            top: 40px;
            left: 40px;
            font-size: 3.4em;
        }
        @media only screen and (min-width: 2000px){
            top: 60px;
            left: 60px;
            font-size: 5em;
        }
    }
    h1{ 
        text-align: center;
        font-weight: 400;
        font-size: 6em;
        color: white;
    }
    .numberOfQuestionsContainer{
        text-align: center;
        font-size: 1em;
        font-weight: 100;
        transition: 1s all;
        .qNumber{
            color: white;
            font-weight: 100;
            @media only screen and (max-width: 574px){
                font-size: 1em;
                position: absolute;
                top: -30px;
                left: 50%;
                transform: translateX(-50%);
            }
            @media only screen and (max-width: 1050px) and (min-width: 574px){
                font-size: 1em;
            }
            @media only screen and (max-width: 1500px) and (min-width: 1050px){
                font-size: 1.4em;
            }
            @media only screen and (min-width: 1500px) and (max-width: 2000px){
                font-size: 1.5em;
            }
            @media only screen and (min-width: 2000px){
                font-size: 2.8em;
            }
        }
    }
`
export const OverlayContainer = styled.div`
    position:absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.35;
    background: black;
    z-index: 6665;
    transition: .6s all;
    display: none;
`
export const DialogContainer = styled.div`
    transform: translate(-50%,-50%);
    position: absolute;
    width: 30%;
    padding: 40px 20px;
    background: white;
    color: black;
    top: 50%;
    left: 50%;
    text-align: center;
    z-index: 6666;
    border-radius: 10px;
    h1{
        font-size: 1.4em;
        color: black;
        font-weight: 600;
        font-family: sans-serif;
        @media only screen and (max-width: 800px) and (min-width: 430px){
            font-size: 1.6em
        }
        @media only screen and (min-width: 800px) and (max-width: 1100px){
            font-size: 1.8em;
        }
        @media only screen and (min-width: 1100px) and (max-width: 2000px){
            font-size: 2.2em;
        }
        @media only screen and (min-width: 2000px){
            font-size: 2.8em;
        }
    }
    button{
        width: 35%;
        margin: 10px;
        border-radius: 5px;
        border: none;
        padding: 10px;
        cursor: pointer;
        background: #e8e8e8;
        font-size: 1.1em;
        @media only screen and (max-width: 110px) and (min-width: 430px){
            font-size: 1.2em;
            width: 40%;
            padding: 16px;
        }
        @media only screen and (min-width: 1100px) and (max-width: 2000px){
            font-size: 1.4em;
        }
        @media only screen and (min-width: 2000px){
            font-size: 1.7em;
            padding: 20px;
        }
    }
    @media only screen and (max-width: 430px){
        width: 80%;
    }
    @media only screen and (max-width: 800px) and (min-width: 430px){
        width: 60%;
    }
    @media only screen and (min-width: 800px) and (max-width: 1100px){
        width: 48%;
    }
    @media only screen and (min-width: 1100px) and (max-width: 2000px){
        width: 40%;
    }
    @media only screen and (min-width: 2000px){
        width: 35%;
    }
`
export const LifelineContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    transition: 1s all;
    margin: 0 auto;
    color: white;
    margin-top: 30px;
    p{
        padding: 14px 20px;
        position: relative;
        text-align: center;
        background: rgba(71,187,230,0.6);
        margin: 0 8px;
        border-radius: 4px;
        margin: 0 auto;
        font-size: 1.1em;
        border: 2px solid white;
        span{
            color: white;
            &:nth-child(1){
                @media only screen and (max-width: 1050px) and (min-width: 574px){
                    margin-right: 8px;
                }
                @media only screen and (max-width: 1500px) and (min-width: 1050px){
                    margin-right: 10px;
                }
            }
            @media only screen and (max-width: 1500px) and (min-width: 1050px){
                font-size: 1.3em;
            }
        }
        &:nth-child(1){
            flex-grow: 1.5;
            @media only screen and (max-width: 800px) and (min-width: 430px){
                flex-grow: 0.8;
            }
            @media only screen and (max-width: 1050px) and (min-width: 800px){
                flex-grow: 0.7;
            }
            @media only screen and (min-width: 1050px) and (max-width: 1500px){
                flex-grow: 0.5;
            }
            @media only screen and (min-width: 1500px) and (max-width: 2000px){
                flex-grow: 0.6;
            }
            @media only screen and (min-width: 2000px){
                flex-grow: 0.7;
            }
        }
        @media only screen and (max-width: 1050px) and (min-width: 574px){
            font-size: 1.2em;
            padding: 16px 12px;
        }
        @media only screen and (max-width: 1500px) and (min-width: 1050px){
            padding: 25px 40px;

            font-size: 1.2em;
        }
        @media only screen and (min-width: 1500px) and (max-width: 2000px){
            font-size: 1.8em;
            padding: 18px 40px;
        }
        @media only screen and (min-width: 2000px){
            font-size: 2.6em;
            padding: 30px 50px;
        }
    }
    @media only screen and (max-width: 574px){
        margin-top: 60px;
    }
    @media only screen and (max-width: 800px) and (min-width: 574px){
        width: 60%;
        margin-top: 20px;
    }
    @media only screen and (max-width: 1050px) and (min-width: 800px){
        margin-top: 60px;
        width: 100%;
    }
    @media only screen and (min-width: 1050px) and (max-width: 1500px){
        margin-top: 30px;
        width: 100%;
    }
    @media only screen and (min-width: 1500px) and (max-width: 2000px){
        width: 100%;
        margin-top: 30px;
    }
    @media only screen and (min-width: 2000px){
        width: 66%;
        margin-top: 40px;
    }
`
export const H5 = styled.h1`
    font-size: 1.5em !important;
    margin-bottom: 5px;
    line-height: 1.35em;
    text-align: center;
    padding: 0 20px;
    transition: 1s all;
    color: white;
    margin-top: 5px;
    @media only screen and (max-width: 800px) and (min-width: 574px){
        font-size: 1.85em !important;
        margin-top: 30px;
    }
    @media only screen and (max-width: 1050px) and (min-width: 800px){
        font-size: 2.1em !important;
        margin-top: 20px;
    }
    @media only screen and (min-width: 1050px) and (max-width: 1500px){
        font-size: 2.5em !important;   
        margin-top: 20px;
    }
    @media only screen and (min-width: 1500px) and (max-width: 2000px){
        font-size: 2.9em !important;
        margin-top: 10px;
    }
    @media only screen and (min-width: 2000px){
        font-size: 4.2em !important;
        margin-top: 20px;
    }
`
export const OptionsContainer = styled.div`
    display: inline-block;
    transition: 1s all;
    width: 85%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    // grid-template-columns: repeat(2, 1fr);
    // grid-template-rows: repeat(2, 1fr);
    margin: 0 auto;
    .option{
        background: rgba(71, 187, 230, 0.6);
        border: 1px solid white;
        border-radius: 4px;
        display: inline-block;
        width: 90%;
        text-align: center;
        color: white;
        cursor: pointer;
        margin: 10px;
        padding: 40px 20px;
        transition: .3s linear all;
        transition: .3s all;
        font-size: 1.2em;
        &:hover{
            background: rgba(71, 187, 230, 1);
        }
        @media only screen and (max-width: 425px){
            padding: 16px 0;
            font-size: 1.1em;
        }
        @media only screen and (max-width: 1050px) and (min-width: 574px){
            padding: 10px;
            font-size: 1.1em;
        }
        @media only screen and (min-width: 1050px) and (max-width: 1500px){
            padding: 20px;
            font-size: 1.45em;
        }
        @media only screen and (min-width: 1500px) and (max-width: 2000px){
            font-size: 1.6em;
            padding: 22px;
        }
        @media only screen and (min-width: 2000px){
            font-size: 2.6em;
            padding: 40px;
        }
    }
    @media only screen and (max-width: 425px){
        display: block;
        text-align: center;
        width: 100%;
    }
    @media only screen and (max-width: 574px) and (min-width: 425px){
        display: block;
        text-align: center;
    }
    @media only screen and (max-width: 800px) and (min-width: 574px){
        width: 100%;
    }
    @media only screen and (max-width: 1500px) and (min-width: 800px){
        width: 86%;
        grid-gap: 16px;
        margin-top: 22px;
    }
    @media only screen and (min-width: 1500px) and (max-width: 2000px){
        width: 76%;
        grid-gap: 16px;
        margin-top: 22px;
    }
    @media only screen and (min-width: 2000px){
        grid-gap: 60px;
        margin-top: 60px;
    }
`
export const TimeMessage = styled.div`
    position: absolute;
    bottom: 5%;
    width: 100%;
    transition: .3s all;
    h1{
        font-weight: 800;
        font-size: 2em;
        @media only screen and (min-width: 2000px){
            font-size: 5em;
        }
    }
    @media only screen and (min-width: 1400px) and (max-width: 2000px){
        bottom: 8%;
    }
    @media only screen and (min-width: 2000px){
        bottom: 12%;
    }
`

export const SummaryContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 9999999999999999999999999991;
`