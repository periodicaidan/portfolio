<script lang="ts">
  import ProjectCard from './ProjectCard.svelte';
  import projectData from '../data/projects';
</script>

<main class="container">
  <div class="columns">
    {#each projectData as project}
      <ProjectCard {...project} />
    {/each}
  </div>
</main>

<style>
  main.container {
    width: 80% !important;
    margin: auto !important;
  }
</style>