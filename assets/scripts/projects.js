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
        return `<div class="column col-6 col-md-12 my-2">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">${this.title}</h4>
                    <span class="card-subtitle text-gray text-uppercase">${this.language}</span>
                </div>
                <div class="divider"></div>
                <div class="card-body">
                    ${this.description}
                </div>
                <div class="card-footer">
                    <a href="${this.demo}" target="_blank" class="btn btn-success" ${this.demo == null && 'disabled'}>Demo</a>
                    <a href="${this.repo}" target="_blank" class="btn btn-secondary">Repo</a>
                </div>
            </div>
        </div>`;
   }        
}

let projects = [
    Project.githubHosted(
        'NCBI Model Organism Insepctor', 
        'JavaScript', 
        'Makes use of the Entrez eutils to make queries for biomolecular strucutres',
        'NCBI-Model-Organism-Inspector',
        'summer-mute'
    ),

    Project.githubHosted(
        'Weather Dashboard',
        'JavaScript',
        'A simple weather dashboard',
        'weather-dashboard'
    ),

    Project.githubHosted(
        'Work Day Scheduler',
        'JavaScript',
        'A simple day-planner',
        'work-day-planner'
    ),

    new Project(
        'GBARS',
        'Rust',
        'Experimental GameBoy emulator written in Rust',
        'https://github.com/periodicaidan/gbars',
        null,
    ),

    new Project(
        'TDLib for Dart',
        'Dart',
        'Dart port of the Telegram Database Library (TDLib)',
        'https://github.com/periodicaidan/dart_tdlib'
    ),

    new Project(
        'kmeans',
        'Rust',
        'A k-means implementation in Rust',
        'https://github.com/periodicaidan/kmeans'
    )
];

$(document).ready(() => {
    $('main .columns')
        .append(projects.map(p => p.makeCard()));
})