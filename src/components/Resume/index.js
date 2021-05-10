import React from  'react';


function Resume() {
    return (
        <div className="row justify-content-left">
            <div className="col-md-9 blue">
                <h1>Resume</h1>
                <p>Download my resume <a href="https://drive.google.com/file/d/1g0VVY3DBlvMaZ6lb-d6QmFTQCwBAYGe6/view?usp=sharing">here</a>.</p>
                <h2>Front-end Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h2>Back-end Proficiencies</h2>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                </ul>
            </div>

        </div>
    )
}

export default Resume;