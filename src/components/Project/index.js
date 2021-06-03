import React from 'react';


const projects = [
    {
        name: 'SneakerBay',
        liveUrl: 'https://sneakerbay.herokuapp.com/',
        gitUrl: 'https://github.com/mrhumpherys/sneakerBay',
        img: 'sneakerbay.png'
    },
    {
        name: 'Sports Buzz',
        liveUrl: 'https://sports-buzz.herokuapp.com/',
        gitUrl: 'https://github.com/mrhumpherys/social-sports',
        img: 'sports.png'
    },
    {
        name: 'Bored in the House',
        liveUrl: 'https://iitoneloc.github.io/covid-master/index.html',
        gitUrl: 'https://github.com/iiTONELOC/covid-master',
        img: 'bored.jpeg'
    },
    {
        name: 'Weather Dashboard',
        liveUrl: 'https://mrhumpherys.github.io/Weather-Dashboard/',
        gitUrl: 'https://github.com/mrhumpherys/Weather-Dashboard',
        img: 'weather2.png'
    },
    {
        name: 'Workday Scheduler',
        liveUrl: 'https://mrhumpherys.github.io/workday-scheduler/',
        gitUrl: 'https://github.com/mrhumpherys/workday-scheduler',
        img: 'workday1.png'
    },{
        name: 'Javascript Quiz',
        liveUrl: 'https://mrhumpherys.github.io/javascript-quiz/',
        gitUrl: 'https://github.com/mrhumpherys/javascript-quiz',
        img: 'Start.png'
    },
]

function Project() {
    


    return (
        <>
        <div className="row justify-content-left">
            <div className="col-md-6">
                <h1 className="blue">Portfolio</h1>
            </div>
        </div>
        <div className="row justify-content-center mt-3">
            
                {projects.map((project) => (
                    <div className='col-md-4 mb-5' key={project.name}>
                        <div className="card h-100 mycard">
                            <img className="card-img-top" src={require(`../../assets/img/${project.img}`).default} alt={project.name}></img>
                            <div className="card-body">
                                
                                <a href={project.liveUrl} className="btn mr-5 green" rel="noreferrer" target="_blank">{project.name}</a>
                                <a
                                    className="btn btn-link btn-floating btn-lg text-light m-1 ml-5"
                                    href={project.gitUrl}
                                    role="button"
                                    data-mdb-ripple-color="dark"
                                    rel="noreferrer"
                                    target="_blank"
                                    ><i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
                
            
        </div>
        </>
    )
}

export default Project;