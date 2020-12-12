<script lang="ts">
  import Navbar from './components/Navbar.svelte';
  import Hero from './components/Hero.svelte';
  import ProjectShowcase from './components/ProjectShowcase.svelte';
  import Footer from './components/Footer.svelte';
</script>

<Navbar />
<Hero />
<ProjectShowcase />
<Footer />

<style global>
  @import '../assets/spectre.css/dist/spectre.min.css';
</style>