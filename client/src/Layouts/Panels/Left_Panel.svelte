<script>
  import { location } from "svelte-spa-router";

  $: panelwidth = $location.split("/").includes("BLOG") ? "5%" : "50%";
</script>

<div class="leftpanel" style="width: {panelwidth};" />

<style>
  .leftpanel {
    height: 100%;
    background-color: #dfe0df;
    box-shadow: -5px 5px 15px rgb(136, 136, 136);
    transition: 0.3s ease-in-out;
  }
</style>
