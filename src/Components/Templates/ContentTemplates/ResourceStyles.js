import styled from "styled-components";

export const Container = styled.div`
    margin-top: 20px;
`
export const ContentContainer = styled.div`
`
export const Header = styled.div`
    background: ${props => props.headerColour};
    color: white;
    div{
        width: 90%;
        padding: 30px 0;
        margin: 0 auto;
        h1{
            font-size: 4em;
            line-height: 1.2em;
            color: white;
            font-weight: 800;
            width: 100%;
            margin-bottom: 12px;
            margin: 0 auto;
            @media only screen and (min-width: 2350px){
                font-size: 7em;
            }
            @media only screen and (min-width: 1900px) and (max-width: 2350px){
                font-size: 6em;
            }
            @media only screen and (max-width: 600px) and (min-width: 500px){
                font-size: 3.6em;
            }
            @media only screen and (max-width: 500px) and (min-width: 400px){
                font-size: 3.4em;
            }
            @media only screen and (max-width: 400px){
                font-size: 2.4em;
            }
            @media only screen and (max-width: 750px){
                width: 100%;
            }
        }
        p{
            color: white;
            font-size: 1em;
            width: 70%;
            padding-left: 10px
            @media only screen and (min-width: 2350px){
                font-size: 1.75em;
            }
            @media only screen and (min-width: 1900px) and (max-width: 2350px){
                font-size: 1.5em;
            }
            @media only screen and (min-width: 2350px){
                font-size: 1.7em;
            }
            @media only screen and (max-width: 750px){
                width: 90%;
            }
        }
        @media only screen and (min-width: 2000px){
            width: 70%;
            padding: 50px 0;
            margin: 0 auto;
        }
        @media only screen and (min-width: 1350px) and (max-width: 2000px){
            width: 78%;
            padding: 40px 0;
            margin: 0 auto;
        }
    }
`
export const MainContentContainer = styled.div`
    div{
        width: 90%;
        margin: 0 auto;
        .mainHeading{
            line-height: 1.5em;
            font-size: 4em;
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
            @media only screen and (max-width: 400px){
                font-size: 2.4em;
            }
            @media only screen and (max-width: 750px){
                width: 100%;
            }
        }
        h2{
            font-size: 4.4em;
            line-height: 1.2em;
            @media only screen and (max-width: 560px){
                text-align: left;
                width: 100%; 
                font-size: 3.6em;
            }
            @media only screen and (min-width: 1900px) and (max-width: 2350px){
                font-size: 6em;
            }
            @media only screen and (min-width: 2350px){
                font-size: 7em;
            }
        }
        p{
            margin-left: 10px;
            font-size: 1em;
            width: 70%;
            @media only screen and (max-width: 560px){
                margin: 0 auto;
                width: 100%;
            }
            @media only screen and (min-width: 1900px) and (max-width: 2350px){
                font-size: 1.4em;
            }
            @media only screen and (min-width: 2350px){
                font-size: 1.8em;
            }
        }
        @media only screen and (min-width: 2000px){
            width: 70%;
        }
        @media only screen and (min-width: 1350px) and (max-width: 2000px){
            width: 78%;
        }
    }
`
export const WatchAndLearn = styled.div`
    margin-top: 40px !important;
    .links-wrapper{
        width: 100%;
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(3, 1fr);
        margin-top: 30px;
        @media only screen and (max-width: 1000px) and (min-width: 600px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media only screen and (max-width: 600px){
            grid-template-columns: repeat(1, 1fr);
        }

        .link-wrapper{
            width: 100%;
            border: 1.5px solid #5c5c5c;
            border-radius: 8px;
            position: relative;
            background: #ff6161;
            overflow: hidden;
            min-height: 35vh;
            @media only screen and (max-width: 1200px) and (min-width: 1000px){
                min-height: 28vh;
            }
            @media only screen and (max-width: 1000px) and (min-width: 600px){
                min-height: 25vh;
            }
            @media only screen and (max-width: 600px){
                min-height: 20vh;
            }
            h2{
                font-size: 1.5em;
                padding: 16px;
                font-weight: 800;
                font-family: Dosis;
                line-height: 1.4em;
                text-transform: uppercase;
                color: white;
                @media only screen and (min-width: 1900px) and (max-width: 2350px){
                    font-size: 2.8em;
                }
                @media only screen and (min-width: 2350px){
                    font-size: 3.2em;
                }
                @media only screen and (max-width: 600px){
                    width: 90%;
                }
            }
            p{
                color: white;
                font-size: 0.9em;
                padding: 0 16px;
                margin-left: 0;
                padding-bottom: 50px;
                font-weight: 600;
                @media only screen and (min-width: 1900px) and (max-width: 2350px){
                    font-size: 1.5em;
                }
                @media only screen and (min-width: 2350px){
                    font-size: 1.65em;
                }
                @media only screen and (max-width: 600px){
                    width: 90%;
                }
            }
            .link{
                padding-bottom: 8px;
                padding-left: 16px;
                padding-right: 16px;
                padding-top: 8px;
                position: absolute;
                bottom: 0;
                text-decoration: none;
                color: white;
                font-weight: 600;
                @media only screen and (min-width: 1900px) and (max-width: 2350px){
                    font-size: 1.5em;
                }
                @media only screen and (min-width: 2350px){
                    font-size: 1.7em;
                }
            }
            &:nth-child(1n){
                background: ${props => props.singleColour};

            }
            &:nth-child(2n){
                background: ${props => props.singleColour};

            }
            &:nth-child(3n){
                background: ${props => props.singleColour};
            }
            &:nth-child(4n){
                background: ${props => props.singleColour};

            }
            &:nth-child(5n){
                background: ${props => props.singleColour};

            }
            &:nth-child(6n){
                background: ${props => props.singleColour};
            }
        }
    }
`
export const UsefulLinks = styled.div`
    margin-top: 40px !important;
    .links-wrapper2{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        flex-direction: row;
        margin: auto 0 auto -10px;
        @media only screen and (min-width: 600px) and (max-width: 1000px){
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;
        }
        .link-wrapper{
            flex-grow: 0.5;
            width: 40%;
            border: 1.5px solid #5c5c5c;
            border-radius: 8px;
            position: relative;
            background: white;
            overflow: hidden;
            min-height: 35vh;
            justify-content: space-between;
            margin: 10px;
            &:nth-of-type(even){
                margin-right: -10px;
            }
            &:last-child{
                &:nth-of-type(odd){
                    margin-right: -10px;
                }
            }
            @media only screen and (max-width: 1200px) and (min-width: 1000px){
                min-height: 28vh;
            }
            @media only screen and (max-width: 1000px) and (min-width: 600px){
                min-height: 25vh;
                width: 100%;
                margin: 0 10px;
            }
            @media only screen and (max-width: 600px){
                width: 100%;
                min-height: 20vh;
            }
            &:nth-child(1n){
                flex-grow: 6;
                @media only screen and (max-width: 1000px) and (min-width: 0px){
                    flex-grow: 0;
                }
            }
            &:nth-child(2n){
                flex-grow: 0.1;
                @media only screen and (max-width: 1000px) and (min-width: 0px){
                    flex-grow: 0;
                }
            }
            &:nth-child(3n){
                flex-grow: 0.1;
                @media only screen and (max-width: 1000px) and (min-width: 0px){
                    min-height: 0;
                    flex-grow: 0;
                }
            }
            &:nth-child(4n){
                flex-grow: 6;
                @media only screen and (max-width: 1000px) and (min-width: 0px){
                    flex-grow: 0;
                }
            }

            h2{
                font-size: 1.5em;
                padding: 16px;
                font-weight: 800;
                font-family: Dosis;
                line-height: 1.4em;
                text-transform: uppercase;
                color: white;
                @media only screen and (min-width: 1900px) and (max-width: 2350px){
                    font-size: 2.8em;
                }
                @media only screen and (min-width: 2350px){
                    font-size: 3.2em;
                }
                @media only screen and (max-width: 600px){
                    width: 90%;
                }
            }
            p{
                color: white;
                font-size: 0.9em;
                padding: 0 16px;
                margin-left: 0;
                padding-bottom: 50px;
                font-weight: 600;
                @media only screen and (min-width: 1900px) and (max-width: 2350px){
                    font-size: 1.5em;
                }
                @media only screen and (min-width: 2350px){
                    font-size: 1.65em;
                }
                @media only screen and (max-width: 600px){
                    width: 90%;
                }
            }
            .link{
                padding-bottom: 8px;
                padding-left: 16px;
                padding-right: 16px;
                padding-top: 8px;
                position: absolute;
                bottom: 0;
                text-decoration: none;
                color: white;
                font-weight: 600;
                @media only screen and (min-width: 1900px) and (max-width: 2350px){
                    font-size: 1.5em;
                }
                @media only screen and (min-width: 2350px){
                    font-size: 1.7em;
                }
            }
            &:nth-child(1n){
                background: ${props => props.singleColour};
            }
            &:nth-child(2n){
                background: ${props => props.singleColour};
            }
            &:nth-child(3n){
                background: ${props => props.singleColour};
            }
            &:nth-child(4n){
                background: ${props => props.singleColour};
            }
            @media only screen and (max-width: 600px){
                margin: 10px 0;
            }
        }
        @media only screen and (max-width: 600px){
            margin: 0;
        }
    }
`
export const CareerPathways = styled.div`
    margin-top: 40px !important;
    .links-wrapper3{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        flex-direction: row;
        padding-bottom: 10px;
        margin: 0;
        @media only screen and (min-width: 600px) and (max-width: 1000px){
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;
        }
        .link-wrapper{
            flex-grow: 0.5;
            width: 40%;
            border: 1.5px solid #5c5c5c;
            border-radius: 8px;
            position: relative;
            background: #ff6161;
            overflow: hidden;
            min-height: 35vh;
            &:nth-of-type(even){
                margin-right: -10px;
            }
            justify-content: space-between;
            margin: 10px;

            @media only screen and (max-width: 1200px) and (min-width: 1000px){
                min-height: 28vh;
            }
            @media only screen and (max-width: 1000px) and (min-width: 600px){
                min-height: 25vh;
                width: 100%;
                margin: 0;
            }
            @media only screen and (max-width: 600px){
                width: 100%;
                min-height: 20vh;
            }
            &:nth-child(1){
                background: none;
                h2{
                    color: #4d4d4d;
                }
                p{
                    color: #4d4d4d;
                }
            }
            &:nth-child(2){
                background: none;
                h2{
                    color: #4d4d4d;
                }
                p{
                    color: #4d4d4d;
                }
            }
            &:nth-child(1n){
                flex-grow: 0.1;
                @media only screen and (max-width: 1000px){
                    flex-grow: 0;
                }
            }
            &:nth-child(2n){
                flex-grow: 6;
                @media only screen and (max-width: 1000px){
                    flex-grow: 0;
                }
            }
            h2{
                font-size: 1.5em;
                padding: 16px;
                font-weight: 800;
                font-family: Dosis;
                line-height: 1.4em;
                text-transform: uppercase;
                color: white;
                @media only screen and (min-width: 1900px) and (max-width: 2350px){
                    font-size: 2.8em;
                }
                @media only screen and (min-width: 2350px){
                    font-size: 3.2em;
                }
                @media only screen and (max-width: 600px){
                    width: 90%;
                }
            }
            p{
                color: white;
                font-size: 0.9em;
                padding: 0 16px;
                margin-left: 0;
                padding-bottom: 50px;
                font-weight: 600;
                @media only screen and (min-width: 1900px) and (max-width: 2350px){
                    font-size: 1.5em;
                }
                @media only screen and (min-width: 2350px){
                    font-size: 1.65em;
                }
                @media only screen and (max-width: 600px){
                    width: 90%;
                }
            }
            .link{
                padding-bottom: 8px;
                padding-left: 16px;
                padding-right: 16px;
                padding-top: 8px;
                position: absolute;
                bottom: 0;
                text-decoration: none;
                color: #4d4d4d;
                font-weight: 600;
                @media only screen and (min-width: 1900px) and (max-width: 2350px){
                    font-size: 1.5em;
                }
                @media only screen and (min-width: 2350px){
                    font-size: 1.7em;
                }
            }
            &:nth-child(3n){
                background: ${props => props.singleColour};
                h2{
                    color: white;
                }
                p{
                    color: white;
                }
                .link{
                    color: white;
                }
            }
            &:nth-child(4n){
                background: ${props => props.singleColour};
                h2{
                    color: white;
                }
                p{
                    color: white;
                }
                .link{
                    color: white;
                }
            }
            &:nth-of-type(odd){
                margin-left: 0;
            }
            &:nth-of-type(even){
                margin-right: 0;
            }
            @media only screen and (max-width: 600px){
                margin: 10px 0;
            }
        }
        @media only screen and (max-width: 1000px) and (min-width: 600px){
            margin-left: 0;
        }
        @media only screen and (max-width: 600px){
            margin: 0;
        }
    }
`