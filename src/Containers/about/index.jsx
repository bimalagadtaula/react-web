
import React from "react";
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeader from "../../Components/PageHeader";
import './style.scss';

const About=()=>{
    return (
        <section id="about_us">
          <PageHeader
          headertxt="About me"
          icon = {<BsInfoCircleFill size={20}/>} />
        </section>
      );
} 
export default About;
