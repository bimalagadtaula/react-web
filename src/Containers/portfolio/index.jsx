
import React from "react";
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeader from "../../Components/PageHeader";
import './style.scss';
const Portfolio=()=>{
    return (
      <section id="Portfolio">
      <PageHeader
      headertxt="My Portfolio"
      icon = {<BsInfoCircleFill size={20}/>} />
    </section>
      );
} 
export default Portfolio;
