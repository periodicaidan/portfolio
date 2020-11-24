import React from 'react';
import ProjectCard from '../components/ProjectCard';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import projectData from '../data/projects.json';

export default function Home(props) {
    return <>
        <NavBar />
        <Hero />
        <main style={{ width: '80%', margin: 'auto' }}>
            <div className="columns">
                {projectData.map(project => <ProjectCard {...project} />)}
            </div>
        </main>
    </>;
}