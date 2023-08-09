import csharp from "./images/c-sharp logo.png";
import webdev from "./images/html5-logo-31816.png";
import python from "./images/Python-Logo.png";
import unity from "./images/unitylogo.png";
import sql from "./images/sql.png";
import node from "./images/nodejs-1-logo.png";
import figma from "./images/Figma-1-logo.png";
import reactlogo from "./images/reactlogo.svg";
import docker from "./images/docker-logo.png";

export const images = [
  csharp,
  webdev,
  python,
  unity,
  sql,
  node,
  figma,
  reactlogo,
  docker,
];

const ImageByIndex = (index) => images[index % images.length];

export default ImageByIndex;
