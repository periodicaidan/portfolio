<script lang="ts">
  export let title: string;
  export let lang: string;
  export let description: string;
  export let githubHosted: boolean;
  export let name: string;
  export let owner = 'periodicaidan';
  export let repo = githubHosted && `https://github.com/${owner}/${name}`;
  export let demo = githubHosted && `https://${owner}.github.io/${name}`;
</script>

<div class="column col-6 col-md-12 my-2">
  <div class="card">
    <div class="card-header">
      <h4 class="card-title">{title}</h4>
      <span class="card-subtitle text-gray text-uppercase">{lang}</span>
    </div>
    <div class="divider" />
    <div class="card-body">
      {description}
    </div>
    <div class="card-footer">
      <a href={demo} target="_blank" rel="noopener noreferrer" class="btn btn-success" disabled={!demo}>Demo</a>
      <a href={repo} target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Repo</a>
    </div>
  </div>
</div>