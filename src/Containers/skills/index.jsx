
import React from "react";
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeader from "../../Components/PageHeader";
import './style.scss';
const Skills=()=>{
    return (
      <section id="skills">
      <PageHeader
      headertxt="My skills"
      icon = {<BsInfoCircleFill size={20}/>} />
    </section>
      );
} 
export default Skills;
