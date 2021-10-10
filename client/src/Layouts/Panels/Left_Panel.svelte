<script>
  import { location } from "svelte-spa-router";
  import BlogLeft from "../Left_contents/Blog_left.svelte";
  import MeLeft from "../Left_contents/Me_left.svelte";
  import { idHeight } from "../../stores";

  $: imatblog = $location.split("/").includes("BLOG");
  $: panelwidth = imatblog ? "7.5%" : "50%";
  $: imageDiv = undefined;
  window.addEventListener("resize", () => {
    // console.log(imageDiv.height);
    if (!imatblog) {
      idHeight.update((n) => (n = imageDiv.height));
    }
  });
  window.addEventListener("load", () => {
    // console.log(imageDiv.height);
    if (!imatblog) {
      idHeight.update((n) => (n = imageDiv.height));
    }
  });
</script>

<div class="leftpanel" style="width: {panelwidth};">
  <div
    class="mypic"
    style="height: {!imatblog ? '100%' : '15%'}; width: {imatblog
      ? '100%'
      : '100%'};"
  >
    <img
      bind:this={imageDiv}
      src="../moi2luminosity_g.jpg"
      alt="mypic"
      class="pic"
      style="top: {imatblog ? '10%' : '-10%'}; left: {imatblog
        ? '10%'
        : '-10%'}; width: {imatblog ? '80%' : '60%'};"
    />
  </div>
  {#if imatblog}
    <BlogLeft />
  {:else}
    <MeLeft />
  {/if}
</div>

<style>
  .leftpanel {
    position: relative;

    height: 100%;
    background-color: #dfe0df;
    box-shadow: -5px 5px 15px rgb(136, 136, 136);
    transition: 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
  }
  .mypic {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
  }
  .pic {
    position: absolute;
    height: auto;

    border-radius: 50%;

    transition: 0.3s ease-in-out;
    opacity: 0.95;
  }
</style>
