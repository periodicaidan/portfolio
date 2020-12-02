import React from 'react';
import './Hero.css';

export default function Hero(_props) {
    return (
        <div id="banner" className="hero hero-lg bg-primary">
            <div className="hero-body">
                <h1 className="text-center">Aidan T. Manning</h1>
                <p className="text-center text-large" style={{ textShadow: '0 0 0.3em black' }}>
                    Software engineer with a chemistry background. <br />
                    Analytical-minded, solution-oriented, evidence-driven. <br />
                    Proficient in front- and back-end web technologies. <br />
                    Enthusastic about Rust and low-level/systems programming. <br />
                    Almost a decade of technical writing experience. <br />
                    Life is an optimization problem.
                </p>
            </div>
        </div>
    );
}