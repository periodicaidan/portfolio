import React from 'react';
import ProjectCard from '../components/ProjectCard';
import NavBar from '../components/NavBar';
import projectData from '../data/projects.json';

export default function Home(props) {
    return <>
        <NavBar />
        <main>
            <div className="columns">
                {projectData.map(project => <ProjectCard {...project} />)}
            </div>
        </main>
    </>;
}