import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.scss"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
 
};

function Slider() {
  return (
    <div className="main">
      <Carousel responsive={responsive} infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
       keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}>
        {data.map((d, index) => (
          <div key={index} className="card-data">
            <div className="imgg">
              <img src={d.img} alt="" className="card-img" />
            </div>
            <div className="writtens">
              <span>{d.name}</span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
const data = [
  {
    name: 'Rate Review & Deep Dive Workshop',
    img: "/Khoros Banner_Tiffany.jpg",
    review: `Rate Review & Deep Dive Workshops are hour-long
       small group sessions with an Upwork coach and up to 10 peers 
       from your work category. These sessions are designed to move beyond the strategy and theory lessons from our standard workshops and provide a personalized review for each attendee, to be analyzed and discussed during the session.`
  },
  {
    name: 'One-on-One Strategy Call Bundle with Upwork',
    img: '/Khoros Banner_1_1  (bundle).jpg',
    review: `With the popularity of Upwork''s exceptional coaches, slots for One-on-One Strategy and Follow-up Calls with an Upwork Coach are in high demand and the availability is based on first-come, first-served! To secure your spot, register today and take a giant leap towards achieving your goals.`
  },
  {
    name: 'Raise freelancing rates',
    img: '/Raise freelancing rates thumbnail.png',
    review: `Now that you know how to effectively raise your freelancing rates, take some time to showcase your skills by editing your profile or adding to your portfolio. Also, check out Mike''s website to learn more about his offerings and expertise.`
  },
  {
    name: 'Generative AI 101',
    img: '/Generative AI 101 LP thumbnail.png',
    review: 'Learning Path'
  },
  {
    name: 'AI chatbot creation',
    img: '/AI chatbot creation thumbnail.png',
    review: 'In this mini course, Ivan builds a customer service chatbot, showing you how to create a free chatbot for your business.',
  }
];

export default Slider;
