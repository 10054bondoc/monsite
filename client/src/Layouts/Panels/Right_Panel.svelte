<script>
  import Router, { location } from "svelte-spa-router";
  import Blog from "../Right_Contents/Blog_right.svelte";
  import Me from "../Right_Contents/Me_right.svelte";
  const routes = {
    "/": Me,
    "/blog": Blog,
  };
  $: bgc = $location.split("/").includes("BLOG") ? "#55596a" : "#e18050";
  $: panelwidth = $location.split("/").includes("BLOG") ? "95%" : "50%";
</script>

<div class="rightpanel" style="background-color: {bgc}; width: {panelwidth};">
  <Router {routes} />
</div>

<style>
  .rightpanel {
    height: 100%;
    transition: 0.3s ease-in-out;
  }
</style>
