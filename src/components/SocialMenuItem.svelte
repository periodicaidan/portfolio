<script lang="ts">
  export let name: string;
  export let url: string;
  export let icon: string;
</script>

<li class="menu-item">
  <a 
    href={url}
    class="btn btn-link tooltip"
    target="_blank"
    rel="noopener noreferrer"
    data-tooltip={name}
  >
    <i class={icon}></i>  
  </a>
</li>