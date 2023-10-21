import React from "react";
import "./Hero.css"
import Navbar from "../Navbar/Navbar";


export default function HeroSection() {
  
function aboutMeDescription(){
    
    const str= "About Me: I am a mechatronics engineer who has worked in different kind of projects such as building an electrical car door, doing some research about automating the process of counting tree frogs using python and giving IT technical support to USAA, but then I realized that my biggest passion lies on web development, so I have been creating some really nice projects you can dig in by looking at the portfolio section.";
    return str
}

    return (
      
      <section>
        <Navbar></Navbar>
        <div className="content-box">
          <div className="content">
            <h5 className="greeting">Hey there, I'am</h5>
            <div>
              <h1 className="full-inName"><spam className="name">Blas Nunez</spam></h1>
              <h4 className="front-end">Front-end Developer</h4>
            </div>
            <p className="introduction">I am a dude who is passionate for web development and project management, 
            with international work experience, and <span className="and">a football lover</span></p>
            <p className="hero-software">Software:</p>
            <div className="section-icons">
              <div className="icon icon-html">HTML</div>
              <div className="icon icon-css">CSS</div>
              <div className="icon icon-javaScript">javaScript</div>
              <div className="icon icon-react">react</div>
              <div className="icon icon-nodeJs">nodeJs</div>
              <div className="icon icon-mySql">MySQL</div>
              <div className="icon icon-springboot">springboot</div>
              <div className="icon icon-git">git</div>
            </div>
          </div>
          <div className="picture">{aboutMeDescription()}</div>
        </div>
      </section>
    );
  }