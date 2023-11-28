
import React from "react";
import {BsInfoCircleFill} from "react-icons/bs";
import PageHeader from "../../Components/PageHeader";
import './style.scss';
const Contact=()=>{
    return (
      <section id="contact_me">
      <PageHeader
      headertxt="Contact me"
      icon = {<BsInfoCircleFill size={20}/>} />
    </section>
      );
} 
export default Contact;
