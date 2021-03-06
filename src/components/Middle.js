import React from 'react';
import Button from './Button';
import "./Middle.css";


const images = [
    "images/塔.jpg",
    "images/恩平碉堡.gif",
    
    "images/恩平博物馆.jpg",
    "images/恩平歇马举人村.jpg" ,
    "images/恩平老街道里的旧记忆.jpg",
    "images/温泉.jpeg" ,
    "images/鳌峰公园.jpg"];

const content = [
    "Xi Chun tower stands on the east side of the Jinjiang River mixed in the city, the posture is majestic, like an inverted Na pen, the front of the pen pointed to the sky. Xi Chun Pagoda was first built in the twenty-eighth year of Emperor Qianlong's reign in the Qing Dynasty (1763 AD). It is a seven-story solid tower. Villagers prayed that this pagoda would bring prosperity to the city and bring out a large number of talented people. In the first year of Daoguang's reign (1821), villagers thought that the solid pagoda would hinder the generation of talented people, so they built a two-story hollow pagoda on top of the original pagoda, making it a nine-story pagoda. At that time, the tower was listed as one of the eight scenes of Enping, Xi Chunxiao Yu. It is a pity that the old tower was abandoned in 1958. In 1986, Xi Cun Pagoda was rebuilt under the initiative of Enping villagers at home and abroad.",
    "According to the incomplete statistics of enping museum in 2005, there were more than 780 original diaolou in enping, and more than 460 of them were well preserved, including the tang diaolou that gave birth to tang mingzhao, the first deputy secretary general of the United Nations after China resumed its seat in the United Nations.",
    
    "The former site of Enping County Public Library, commonly known as the Bell Tower, is located in the West Gate Neighborhood Committee of the Encheng Sub-district Office along Jiangxi Road. Built in 1929 in the 18th year of the Republic of China, it was first used as the public library of Enping County, then as the office of the Armed Forces Department, and in 2003 as the office building of Enping City Museum. Sitting north to south, brick and concrete structure, Chinese and western architectural style. The total length is 18.1 meters, the total width is 18.54 meters, the building covers an area of 335.57 square meters, the building is 18.34 meters high, a total of 3 floors. In 2012, Guangdong Provincial People's Government announced it as the seventh batch of cultural relic protection units in Guangdong Province.",
    `Xiema, founded in the Yuan Dynasty to Zheng years, has a history of more than 670 years. It is located in the middle of Enping, the hometown of hot springs in China, by the bank of Jinjiang River. Because of the numerous Jrenren in history, it has become a famous "Jrenren Village", a resort for tourism and education.`,
    "Wanxing Road is the most commercially developed old street in Encheng, and it is also a street with the best preserved arcade building in Encheng. It's a place full of stories. Hardware, agricultural and fishing tools, herbalist, snack shop, sugar water shop...... Many of Dayne's childhood memories of going to the fair linger here.",
    `The open air hot spring area of jinjiang hot spring has beautiful natural environment and pleasant scenery. The spring water is crystal clear and smooth. There are more than 50 kinds of hot spring pools with different characteristics, with a new concept of hot spring physiotherapy, fitness and entertainment as one: "feel physiotherapy in sports, enjoy pleasure in enthusiasm and feel life in leisure". Traffic Jiangmen City Penglai Road Overseas Chinese Lian Building, Kaiping Yici Station, Enping Second Yun Station by free shuttle bus or bus.`,
    "Aofeng Park, the largest comprehensive park in Enping City, is also the leading park in Enping. Since the start of the Aofeng Park upgrading project in 2013, Enping has invested nearly 20 million yuan to renovate the entrance and exit square at the front gate of Aofeng Park, the Animal Park, the Stone Carving Park Road and the public toilets, and to build a large number of scenic spots with distinctive features, such as the East Gate Entrance Square, the Chaoyan Path, the climbing plank road, the peach garden, the cherry garden and the Yutang Spring Forest."
];
    
let index = 0;


function Middle() {
    return (
        <div className="middle-container">
            <h1 className="welcome">Welcome to Enping</h1>
            <video src='videos/恩平.mp4' autoPlay loop muted></video>
            <div className="image-container">
                <div class="w3-display-container mySlides">
                    <img src="images/塔.jpg" className="image"/>
                        
                    <button class="button w3-display-right w3-black" onClick={next}>&#10095;</button>
                    <button class="button w3-display-left w3-black" onClick={previous}>&#10094;</button>
                </div>
                <p className="content">
                   {content[index]}
                </p>
                

                
            

            </div>
            
        </div>
    )
}




function next() {
    const image = document.querySelector(".image");
    const imageContent = document.querySelector(".content");
    if (index === images.length -1) {
        index = 0;
    } else {
        index += 1;
    }
    // console.log(image.src);
    image.src = images[index];
    imageContent.innerHTML = content[index];

    
    
    
}

function previous() {
    const image = document.querySelector(".image");
    const imageContent = document.querySelector(".content");
    if (index === 0) {
        index = images.length - 1;
    } else {
        index -= 1;
    }
    image.src = images[index];
     imageContent.innerHTML = content[index];
}

export default Middle
