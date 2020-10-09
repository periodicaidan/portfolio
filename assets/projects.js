class Project {
   title;
   language;
   description;
   repo;
   demo;
   
   constructor(title, language, description, repo, demo) {
       this.title = title;
       this.language = language;
       this.description = description;
       this.repo = repo;
       this.demo = demo;
   }

   static githubHosted(title, language, description, name, owner="periodicaidan") {
       let repo = `https://github.com/${owner}/${name}`;
       let demo = `https://${owner}.github.io/${name}`;
       return new Project(title, language, description, repo, demo);
   }

   makeCard() {
        return `<div class="card col-6 col-md-12">
            <div class="card-header">
                <h4 class="card-title">${this.title}</h4>
                <p class="card-subtitle text-gray">${this.language}</p>
            </div>
            <div class="divider"></div>
            <div class="card-body">
                ${this.description}
            </div>
            <div class="card-footer">
                <a href="${this.demo}" target="_blank" class="btn btn-success" ${this.demo == null && 'disabled'}>Demo</a>
                <a href="${this.repo}" target="_blank" class="btn btn-secondary">Repo</a>
            </div>
        </div>`
   }        
}

let projects = [
    Project.githubHosted(
        'NCBI Model Organism Insepctor', 
        'JavaScript', 
        'Makes use of the Entrez eutils to make queries for biomolecular strucutres',
        'NCBI-Model-Organism-Inspector',
        'summer-mute'
    )
];

$(document).ready(() => {
    $('main .columns')
        .append(projects.map(p => p.makeCard()));
})