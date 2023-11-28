
import React from "react";
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeader from "../../Components/PageHeader";
import './style.scss';
const Resume=()=>{
    return (
      <section id="resume">
      <PageHeader
      headertxt="My resume"
      icon = {<BsInfoCircleFill size={20}/>} />
    </section>
      );
} 
export default Resume;
