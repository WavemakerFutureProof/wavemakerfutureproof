import styled from "styled-components";


export const UnlockableContent = styled.div`
    position: relative;
`
export const HideContent = styled.div`
    height: 100%;
    width: 100%;
    background: grey;
    opacity: 0.98;
    z-index: 100;
    position: absolute;
    left: 0;
    top: 0;

    display: none;
`
export const DisplayContent = styled.div`
    margin-bottom: 40px;
    padding: 40px 0;
    div{
        width: 90%;
        @media only screen and (min-width: 1280px) and (max-width: 2000px){
            width: 78%;
        }
        @media only screen and (min-width: 2000px){
            width: 70%;
        }
        margin: 0 auto;
        h1{
            color: white;
            line-height: 1.2em;
            text-align: center;
            font-size: 4em;
            @media only screen and (min-width: 2000px){
                font-size: 6em;
            }
            @media only screen and (max-width: 600px){
                font-size: 3.6em;
            }
        }
        .content-desc{
            color: white;
            padding-bottom: 40px;
            @media only screen and (min-width: 1650px) and (max-width: 2000px){
                font-size: 1.6em;
            }
            @media only screen and (min-width: 2000px){
                font-size: 2em;
            }
        }
        button{
            margin: 0 auto;
            display: block;
            margin-top: 50px;
            border: none;
            background: white;
            font-size: 2.6em;
            border-radius: 10px;
            padding: 26px 100px;
            cursor: pointer;
            font-family: Dosis;
            font-weight: 900;
            letter-spacing: 0.05em;
            color: #595858;
            a{
                text-decoration: none;
            }
            @media only screen and (min-width: 2000px){
                font-size: 4em !important;
            }
            @media only screen and (max-width: 600px){
                font-size: 1.8em;
            }
        }
    }
`