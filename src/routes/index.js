import React from "react";
import Drawings from "../containers/Drawings";
import Books from "../containers/Books";
import Bio from "../containers/Bio";
import Landingpage from '../containers/Landingpage';
import Blog from "../containers/Blog";
import Email from "../containers/Email";
import Quotes from "../containers/Quotes";
import App from "./../App";
import Noob from "../containers/Noob";

const publicRoutes = [
    {
        component: Landingpage, // <-- this is the component that'll be rendered
        exact: true, // <-- this says to ONLY match when the path is exactly '/'
        path: "/Landingpage" // <-- ... and this is the actual path to match on
    },
    {
        component: Bio, // <-- this is the component that'll be rendered
        exact: true, // <-- this says to ONLY match when the path is exactly '/'
        path: "/Bio" // <-- ... and this is the actual path to match on
    },
    {
        component: Books, // <-- this is the component that'll be rendered
        exact: true, // <-- this says to ONLY match when the path is exactly '/'
        path: "/Books" // <-- ... and this is the actual path to match on
    },
    {
        component: Drawings, // <-- this is the component that'll be rendered
        exact: true, // <-- this says to ONLY match when the path is exactly '/'
        path: "/Drawings" // <-- ... and this is the actual path to match on
    },
    {
        component: Blog, // <-- this is the component that'll be rendered
        exact: true, // <-- this says to ONLY match when the path is exactly '/'
        path: "/Blog" // <-- ... and this is the actual path to match on
    },
    {
        component: Email, // <-- this is the component that'll be rendered
        exact: true, // <-- this says to ONLY match when the path is exactly '/'
        path: "/Email" // <-- ... and this is the actual path to match on
    },
    {
        component: Quotes, // <-- this is the component that'll be rendered
        exact: true, // <-- this says to ONLY match when the path is exactly '/'
        path: "/Quotes" // <-- ... and this is the actual path to match on
    },
    {
        component: Noob, // <-- this is the component that'll be rendered
        exact: true, // <-- this says to ONLY match when the path is exactly '/'
        path: "/Noob" // <-- ... and this is the actual path to match on
    },
];


export { publicRoutes };
