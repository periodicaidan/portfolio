<script lang="ts">
  import SocialMediaItem from './SocialMenuItem.svelte';
  import socialMediaData from '../data/socials';
import SocialMenuItem from './SocialMenuItem.svelte';
</script>

<header class="navbar">
  <!-- Left Section -->
  <section class="navbar-section">
    <a href="/" class="btn btn-link">guest@github.io</a>
  </section>

  <!-- Middle/Brand/Logo thing -->
  <section class="navbar-center">
    <!-- TODO: Come up with a logo to include in the middle section -->
    <b class="text-bold">pa</b>
  </section>

  <!-- Right Section -->
  <section class="navbar-section">
    <a href="assets/ATManningResume.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-link">resume</a>
    <div class="popover popover-bottom">
      <a href="#" class="btn btn-link">socials</a>
      <div class="popover-container">
        <ul class="menu">
          {#each socialMediaData as social}
            <SocialMenuItem {...social} />
          {/each}
        </ul>
      </div>
    </div>
  </section>
</header>