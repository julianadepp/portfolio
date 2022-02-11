import React from 'react';
import crochet from '../media/crochetTrackerStandIn.jpeg'
import flashcards from '../media/flashcardsScreenshot.png'

function ProjectTemplate(props) {
    const projects = [
        {
            title: 'Flashcards',
            img: flashcards,
            stack: 'Vanilla Javascript, HTML5, CSS',
            description: 'This is a matching game with words and their definitions.',
        },
        {
            title: 'Crochet Tracker',
            img: crochet,
            stack: 'Django, PostgreSQL, React',
            description: 'This app is designed to help people track various aspects of their crochet projects.',
        },
    ]

    return (
        <div className='proj-parent'>
            {projects.map(project=>
            <div className='proj-child'>
                <div className='circle'><img src={project.img} alt='screenshot of project'className='proj-img'/></div>
                <h3>{project.title}</h3>
                <p className='proj-stack'>{project.stack}</p>
                <p className='proj-desc'>{project.description}</p>
            </div>
            )}
        </div>
    );
}

export default ProjectTemplate;