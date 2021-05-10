import React from 'react';
import coverImage from "../../assets/img/hero.jpg";

function About() {
  return (
    <div className="container mt-2">
        <div className='row'>
            <div className="col-md-8">
                <h1 className="blue">About Me</h1>
                <p className="blue">Welcome to my portfolio! Check out some of the work I have done since beginning my coding boot camp with the University of Central Florida in the winter of 2020. Before beginning my journey as a full stack web developer I completed my bachelors degree at UCF in 2012 and my masters degree from DePaul University in 2014 in the field of Jazz Performance. I currently work as a freelance musician, private teacher, and composer in the Central Florida area. I have shared the stage with wonderful musicians including Lenny Pickett, Marty Morell, Jeffery Rupert, Chip Mcneill, Mike LeDonne, Ira Sullivan, Grant Stewart, Dr. Lonnie Smith, Sam Rivers, Dana Hall, Terell Stafford, and Bobby Koeble. While also working in the music field I have been working as an International Student Advisor for the past 12 years and am proficient in Microsoft Office Suite, Photoshop, Finale, Sibelius, SEVIS, and internal corporate database systems. I am looking forward to excelling in the web development field, checkout some of my work below and feel free to contact me by phone or email if you would like to reach out.</p>
            </div>
            <div className="col-md-4">
                <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            </div>
        </div>
    </div>
  );
}

export default About;