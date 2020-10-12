import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background: blue;
`
export const ContentContainer = styled.div`
    width: 90%;
    color: white;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: "one two three";
    padding: 20px 0;
    a{
        color: white;
        text-decoration: none;
        padding: 40px 20px;
        width: 90%;
        @media only screen and (max-width: 1100px) and (min-width: 750px){
            padding: 20px 20px;
            border-radius: 20px;
        }
    }
    h1{
        font-size: 2.4em;
        color: white;
        line-height: 1.2em;
        padding-bottom: 14px;
        @media only screen and (min-width: 2200px){
            font-size: 3.6em;
        }
        @media only screen and (min-width: 1600px) and (max-width: 2200px){
            font-size: 3em;
        }
        @media only screen and (max-width: 960px) and (min-width: 760px){
            font-size: 2.2em;
        }
        @media only screen and (max-width: 760px) and (min-width: 630px){
            font-size: 1.4em;
        }
        @media only screen and (max-width: 400px) and (min-width: 300px){
            font-size: 2.3em;
        }
        @media only screen and (max-width: 300px){
            font-size: 2em;
        }
    }
    .link{
        color: white;
        text-decoration: none;
        font-size: 1.1em;
        &:hover{
            text-decoration: underline;
        }
        @media only screen and (min-width: 2200px){
            font-size: 1.6em;
        }
        @media only screen and (min-width: 1600px) and (max-width: 2200px){
            font-size: 1.3em;
        }
        @media only screen and (max-width: 960px) and (min-width: 760px){
            font-size: 1em;
        }
        @media only screen and (max-width: 760px) and (min-width: 630px){
            font-size: 1em;
        }

    }
    .previous{
        div{
            @media only screen and (max-width: 630px){
                border-bottom: 2px solid white;
                padding-bottom: 30px;
            }
        }
    }
    .back{
        margin-left: auto;
        margin-right: auto;
        @media only screen and (max-width: 630px){
            background: none;
        }
        div{
            @media only screen and (max-width: 630px){
                border-bottom: 2px solid white;
                padding-bottom: 30px;
                padding-top: 30px;
            }
        }
    }
    .next{
        margin-left: auto;
        margin-right: 0;
        grid-area: three;
        div{
            @media only screen and (max-width: 630px){
                padding-top: 30px;
            }
        }
    }
    @media only screen and (min-width: 1350px) and (max-width: 2000px){
        width: 78%;
    }
    @media only screen and (min-width: 2000px){
        width: 70%;
    }
    @media only screen and (max-width: 630px){
        display: block;
        text-align: center;
    }
`