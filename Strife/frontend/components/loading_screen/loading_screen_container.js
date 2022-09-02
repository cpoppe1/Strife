import { connect } from "react-redux";
import { withRouter } from "react-router";
import LoadingScreen from "./loading_screen";



const mSTP = (state) => {


    //current discord loading messages as of sep 2, 2022
    const randomLoadingMessage = [
        "Strife was almost called Bonfire before we picked our name. It was meant to be nice and cozy.",
        "Loading ...",
        "Strife was almost called Wyvern before we picked our name. Not too proud of that one.",
        "Strife is a Discord Clone made by Michael R. for App Academy Fullstack Project.",
        "Strife is a full blown clone of Discord.",
        "Our logo's name is Mr.Wumpus.",
        "There are a bunch of hidden Easter Eggs in the app that happen when you click certain things...",
        "Discord started as a game company making a mobile game called Fates Forever.",
        "Discord’s official birthday is May 13, 2015.",
        "We came up with the idea of Discord Nitro over morning breakfast potatoes.",

        "Strife is a synom for discord",

        "Our mascot, Wumpus, was originally created as a character with no friends :(",
        "In Discord's early days, light theme was the only theme. Scary times.",
        "In the ancient days, Discord started as a browser-only app.",
        "Our HypeSquad program has three houses you can be sorted in to by taking the in-app quiz: Bravery, Balance, and Brilliance.",
        "The character on our 404 page is a robot hamster named Nelly.",
        "You can play our version of the Snake game on our 404 page by pressing a ~secret~ button.",
        "There's a very small—and we mean small—chance you can get a secret ringtone when calling someone. Good luck!",
        "Our old Partner mascot was an elf named Springle. He recently retired.",

        //tips
        "You can type /nick to quickly change your nickname in a server.",
        "Type a plus sign before an emoji name to turn it into a reaction.",
        "Right click to pin messages in a channel or DM to save them for later.",
        "Change each participant's volume by right-clicking them in a call.",
        "You can drag and drop files onto Discord to upload them.",
        "You can join up to 100 servers.",
        "You can create channel categories to group and organize your channels.",
        "Link your favorite social media accounts in the connections settings.",
        "Customize Discord's appearance in the user settings menu.",
        "Hide muted channels in a server by right clicking the server name.",
        ""

    ]

    




    return {
        
    }
}


const mDTP = (dispatch) => {
    return {

    }
}



const LoadingScreenContainer = withRouter(connect(mSTP,mDTP)(LoadingScreen));
export default LoadingScreenContainer;