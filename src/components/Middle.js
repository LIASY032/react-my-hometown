import React from 'react';
import Button from './Button';
import "./Middle.css";


const images = ["images/塔.jpg",
                    "images/恩平博物馆.jpg",
                "images/恩平歇马举人村.jpg" ,
                "images/恩平老街道里的旧记忆.jpg",
                "images/温泉.jpeg" ,
    "images/鳌峰公园.jpg"];
    
let index = 0;


function Middle() {
    return (
        <div className="middle-container">
            <video src='videos/恩平.mp4' autoPlay loop muted></video>
            <div className="image-container">
                <div class="w3-display-container mySlides">
                    <img src="images/塔.jpg" className="image"/>
                        
                    <button class="button w3-display-right w3-black" onClick={next}>&#10095;</button>
                    <button class="button w3-display-left w3-black" onClick={previous}>&#10094;</button>
                </div>
                

                
            

            </div>
            
        </div>
    )
}




function next() {
    const image = document.querySelector(".image");
    if (index === images.length -1) {
        index = 0;
    } else {
        index += 1;
    }
    // console.log(image.src);
    image.src = images[index];

    
    
    
}

function previous() {
    const image = document.querySelector(".image");
    if (index === 0) {
        index = images.length - 1;
    } else {
        index -= 1;
    }
    image.src = images[index];
}

export default Middle
