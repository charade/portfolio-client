import Traveler from "../assets/imgs/traveler.png";
import Foody from "../assets/imgs/foody.png";
import Api from "../assets/imgs/api.png"
import Sneakers from "../assets/imgs/sneakers.png";

export type ProjectItemType = {
    image : string,
    title :string,
    link : string,
    description : string,
    stack : string
}

export const projectsDetails = {
    front : [
        {
            image : Foody,
            title : 'Foody',
            link : 'https://efoody.netlify.app/',
            description : 'foody is a cooking enthusiasts application. The main purpose of foody is searching for recipes. Users can search a meal by country, name, by main ingredient or by fist letter. User can save meals locally and and see his history by adding favorites or delete.' ,
            stack : 'React.Js'
        },
        {
            image : Traveler,
            title : 'Traveler',
            link : '', //need to add
            description : 'Traveler is a memories saver application. I wanted this application to keep a track of user memories related to a place it could be a nice moment in a restaurant or a sweet afternoon in park. Users are free to create their own memories categories. With Traveler a memory can be attached a location, a comment, a category, a custom marker to locate a place on an interactive map',
            stack : "Typescript | React.Js | react-leaflet | @mui/material"
        }
    ],
    back : [
        {
            image : Api,
            title : "Sneakers Api",
            link : "https://charles-ek-sneakers-api.herokuapp.com/docs/",
            description : "An e-commerce api for fetching sneakers. It's v1 i'm still working on. The goal of this project is to provide a free constrainte api for e-commerce developper project. I noticed that almost free api have some contrainte on number or request, so this growing api is to help developpers who want to build a side project for e-commerce",
            stack : "Node.Js | Express.Js | Sequelize | MySQl"
        }
    ],
    fullstack : [
        {
            image : Sneakers,
            title: "Sneakers",
            link : '',//need to add
            description: "An e-commerce projet build width React.Js and using my Sneakers Api",
            stack : "TypeScript | React.js | React-three/fiber | @mui/material"
        }
    ]
}