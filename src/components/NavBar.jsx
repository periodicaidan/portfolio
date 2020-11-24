import React from 'react';
import socialMediaData from '../data/socials.json';

export default function NavBar(props) {
    return (
        <header className="navbar" style={{ width: '80%', margin: 'auto' }}>
            {/* Left section */}
            <section className="navbar-section">
                <a href="/" className="btn btn-link">guest@github.io</a>
            </section>

            {/* Middle/Brand/Logo thing */}
            <section className="navbar-center">
                {/* TODO: Come up with a logo and include it in the middle section */}
                <b className="text-bold">pa</b>
            </section>

            {/* Right section */}
            <section className="navbar-section">
                <a href="assets/ATManningResume.pdf" target="_blank" className="btn btn-link">resume</a>
                <div className="popover popover-bottom">
                    <a href="#" className="btn btn-link">socials</a>
                    <div className="popover-container">
                        <ul className="menu">
                            {socialMediaData.map(social => <SocialMenuItem {...social} />)}
                        </ul>
                    </div>
                </div>
            </section>
        </header>
    );
}

function SocialMenuItem(props) {
    const { name, url, icon } = props;

    return (
        <li className="menu-item">
            <a 
                href={url} 
                className="btn btn-link tooltip"
                target="_blank"
                data-tooltip={name}
            >
                <i className={icon}></i>
            </a>
        </li>
    )
}