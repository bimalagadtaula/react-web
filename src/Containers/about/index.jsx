import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../Components/PageHeader";
import "./style.scss";
import { Animate } from "react-simple-animate";
import {TbWriting  } from "react-icons/tb";
import { FaLaptopCode , FaDatabase, FaVideo } from "react-icons/fa";
const myDetails = [
  {
    label: "Name",
    value: "Bimala Gadtaula",
  },
  {
    label: "Address",
    value: "Lamki, Kailali",
  },
  {
    label: "Ph number",
    value: "9745687205",
  },
  {
    label: "Email",
    value: "gdbimla@gmail.com",
  },
];
// its passing object inside array
const jobSummery = [
  {
    label: "Summery",
    value: "Hi, I am Bimla Gadtaula, a Frontend developer and Content writer from Nepal. I primarily use HTML, CSS, Javascript, and React JS on my projects to build creative responsive websites. Besides coding, I am fond of writing poetry, learning new things, discovering myself, and enjoying my inner chaos.",
  }
]
const About = () => {
  return (
    <section id="about">
      <PageHeader headertxt="About me" icon={<BsInfoCircleFill size={20} />} />
      <div className="about__content">
        <div className="about__content_txt"> <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: 'translateX(-200px)',
            width: '90%',
          }}
          end={{
            width: '90%',
            transform: 'translateX(0px)',
          }}
        >
          <h3>Frontend developer</h3>
          {jobSummery.map((detail, i) => (
            <p key={i}>
              {detail.value}
            </p>
          ))}
        </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(550px)',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          >
            <h3 className="personal_details">Personal details</h3>
            <ul>
              {/* This part uses the map function to go through each detail in myDetails. */}
              {myDetails.map((detail, index) => (
                <li key={index} className="details-item">
                  <span className="label">{detail.label}:</span>
                  <span className="value">{detail.value}</span>
                </li>
              ))}
            </ul>
          </Animate></div>
        <div className="about__content_image">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(500px)',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          >
          <div className="about__content_image_inside">
            <div> <FaLaptopCode  color="var(--yellow-theme-main)" size={50} /></div>
            <div> <TbWriting color="var(--yellow-theme-main)" size={60} /></div>
            <div>   <FaDatabase color="var(--yellow-theme-main)" size={40} /></div>
            <div>  <FaVideo  color="var(--yellow-theme-main)" size={45} /></div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
