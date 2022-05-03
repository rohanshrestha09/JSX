import { v4 as uuidv4 } from "uuid";
import c from "../images/c.webp";
import javascript from "../images/javascript.webp";
import react from "../images/react.png";
import node from "../images/node.jpg";
import express from "../images/expressjs.png";
import mongo from "../images/mongo.webp";

const data = [
  {
    id: uuidv4(),
    title: "C Programming",
    imgSrc: c,
    text: "C (/ˈsiː/, as in the letter c) is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie and Bell Labs, and remains very widely used and influential.",
  },
  {
    id: uuidv4(),
    title: "JavaScript",
    imgSrc: javascript,
    text: "JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. ",
  },
  {
    id: uuidv4(),
    title: "React.js",
    imgSrc: react,
    text: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta.",
  },
  {
    id: uuidv4(),
    title: "Node.js",
    imgSrc: node,
    text: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. ",
  },
  {
    id: uuidv4(),
    title: "Express.js",
    imgSrc: express,
    text: "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software. It is designed for building web applications and APIs.",
  },
  {
    id: uuidv4(),
    title: "MongoDb",
    imgSrc: mongo,
    text: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
  },
];
export default data;
