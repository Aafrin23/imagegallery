
import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import img1 from "../src/assets/images/bird.jpeg";
import img2 from "../src/assets/images/dove.jpeg";
import img3 from "../src/assets/images/crane.jpeg";
import img4 from "../src/assets/images/eagle.jpeg";
import img5 from "../src/assets/images/peco.jpeg";
import img6 from "../src/assets/images/flam.jpeg";
import img7 from "../src/assets/images/kf.jpeg";
import img8 from "../src/assets/images/os.jpeg";



const root = ReactDOM.createRoot(document.getElementById("root"));

function Gallery(props) {
  return (
    <div className='container img'>
      <div className='bind'>
      <img src={props.image} alt="bird"></img> 
      <h2 className="name">{props.name}</h2>
      </div>
    </div>
  )
}

const photo = [
  {
    image: img6,
    name: "Flamingo"
  },
  {
    image: img2,
    name: "Dove"
  },
  {
    image: img7,
    name: "KingFisher"
  },
  {
    image: img4,
    name: "Eagle"
  },
  {
    image: img5,
    name: "Peacock"
  },
  {
    image: img1,
    name: "Linet"
  },
  {
    image: img3,
    name: "Crane"
  },
  {
    image: img8,
    name: "Ostrich"
  }
];
root.render(
  <div className='container'>
    {photo.map((item, index) => (
      <Gallery key={index} image={item.image} name={item.name} />
    ))}
  </div>
);