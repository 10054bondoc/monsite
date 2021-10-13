<script>
  import { onMount } from "svelte";
  import { currentBlognav } from "../../stores";
  import All from "./Blog/All/All.svelte";
  import Books from "./Blog/Books/Books.svelte";
  import Filmtv from "./Blog/Filmtv/Filmtv.svelte";
  import Ragbag from "./Blog/Ragbag/Ragbag.svelte";

  onMount(() => {
    // console.log("am i ringing");
  });
  const navigator = [
    { text: "all", comp: All },
    { text: "books", comp: Books },
    { text: "filmtvs", comp: Filmtv },
    { text: "ragbag", comp: Ragbag },
  ];

  $: indexOfCurrent = navigator.findIndex((el) => el.text === $currentBlognav);
  $: selectedNavItem = navigator[indexOfCurrent];
  // console.log("selectedNavItem", selectedNavItem);
</script>

<div class="blog">
  <svelte:component this={selectedNavItem.comp} />
</div>

<style>
  .blog {
    width: 100%;
    height: 100%;
    padding: 1rem;

    color: var(--offwhite);
    font-family: "Roboto", "sans-serif";
  }
</style>
