import Traveler from "../assets/imgs/traveler.png";
import Foody from "../assets/imgs/foody.png";
import Api from "../assets/imgs/api.png"
import Sneakers from "../assets/imgs/sneakers.png";
import { color } from "./color";
import { CSSProperties } from "styled-components";

export type ProjectItemType = {
    image : string,
    title :string,
    link : string,
    description : string,
    stack : string,
    captionStyle : CSSProperties,
    caption : string,
    underlineColor : string
}

export const projectsDetails = {
    front : [
        {
            image : Foody,
            title : 'Foody',
            link : 'https://efoody.netlify.app/',
            description : 'foody is a cooking enthusiasts application. The main purpose of foody is searching for recipes. Users can search a meal by country, name, by main ingredient or by fist letter. User can save meals locally and and see his history by adding favorites or delete.' ,
            stack : 'React.Js',
            captionStyle :{
                color : color.white,
                fontSize : `${1.5 * window.devicePixelRatio}rem`,
                lineHeight : '40px'
            },
            caption : "Food enthusiasts",
            underlineColor : color.lightBlue,
        },
        {
            image : Traveler,
            title : 'Traveler',
            link : '', //need to add
            description : 'Traveler is a memories saver application. I attached a memory to a location, a memo, a category (for instance restaurants, bars...), a custom marker to locate a memory on an interactive map. Users are free to create their own category'  ,
            stack : "Typescript | React.Js | react-leaflet | @mui/material",
            captionStyle :{
                width : "70%",
                color : color.orange,
                fontSize : `${1.5 * window.devicePixelRatio}rem`,
                lineHeight : '40px',
                textShadow : '0 0 2px black'
            },
            caption: "Interactive map & geolocation",
            underlineColor : color.orange,
        }
    ],
    back : [
        {
            image : Api,
            title : "Sneakers Api",
            link : "https://charles-ek-sneakers-api.herokuapp.com/docs/",
            description : "An e-commerce api for fetching sneakers. The goal of this project is to provide a free api for e-commerce developper side projects. This is a v1, v2 is to come",
            stack : "Node.Js | Express.Js | Sequelize | MySQl",
            caption : " A free fashion e-commerce Api",
            underlineColor : color.orange,
            captionStyle :{
                color : color.darkOrange,
                fontSize : `${1.5 * window.devicePixelRatio}rem`,
                width : "84%",
                lineHeight : '40px',
                textShadow : '0 0 2px black'
            }
        }
    ],
    fullstack : [
        {
            image : Sneakers,
            title: "Sneakers",
            link : '',//need to add
            description: "An e-commerce projet build width React.Js and using my Sneakers Api",
            stack : "TypeScript | React.js | React-three/fiber | @mui/material",
            caption : "e-commerce for fashion",
            underlineColor : color.gray,
            captionStyle :{
                color : color.lightBlue,
                fontSize : `${1.7 * window.devicePixelRatio}rem`,
                // width : "75%",
                textShadow : '0 0 2px black'
            }
        }
    ]
}