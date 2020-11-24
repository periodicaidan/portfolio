import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ProjectShowcase from '../components/ProjectShowcase';
import Footer from '../components/Footer';

export default function Home(props) {
    return <>
        <NavBar />
        <Hero />
        <ProjectShowcase />
        <Footer />
    </>;
}