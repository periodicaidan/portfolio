import React from 'react';

export function ProjectCard(props) {
    const { githubHosted, title, lang, description } = props;
    const { repo, demo } = githubHosted 
        ? { repo: `https://github.com/${owner}/${name}`, demo: `https://${owner}.github.io/${name}` }
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