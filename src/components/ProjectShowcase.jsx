import React from 'react';
import projectData from '../data/projects.json';

export default function ProjectShowcase(_props) {
    return (
        <main className="container" style={{ width: '80%', margin: 'auto' }}>
            <div className="columns">
                {projectData.map(project => <ProjectCard {...project} />)}
            </div>
        </main>
    );
}

function ProjectCard(props) {
    // This would be so much easier to explain in TSX but...
    // The props can be one of these (all fields are strings unless otherwise annotated): 
    //      { title, lang, description, repo, demo }
    //      { title, lang, description, githubHosted: boolean, owner, name }
    
    // First we get out the common fields: title, lang, and description
    const { title, lang, description } = props;

    // Now we get out the props for the 2nd type
    const { githubHosted, name } = props;
    const owner = props.owner ?? 'periodicaidan';

    // Finally get the repo and demo, either by constructing them from the 2nd type
    // or just by destructuring props again
    const { repo, demo } = githubHosted 
        ? { 
            repo: `https://github.com/${owner}/${name}`, 
            demo: `https://${owner}.github.io/${name}` 
        }
        : props;
    
    return (
        <div className="column col-6 col-md-12 my-2">
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">{title}</h4>
                    <span className="card-subtitle text-gray text-uppercase">{lang}</span>
                </div>
                <div className="divider" />
                <div className="card-body">
                    {description}
                </div>
                <div className="card-footer">
                    <a href={demo} target="_blank" class="btn btn-success" disabled={demo == null}>Demo</a>
                    <a href={repo} target="_blank" class="btn btn-secondart">Repo</a>
                </div>
            </div>
        </div>
    );
}