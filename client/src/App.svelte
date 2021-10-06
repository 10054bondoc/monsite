<script>
  import Main from "./Layouts/Main.svelte";
  import { idHeight } from "./stores";
  import { onMount } from "svelte";

  onMount(() => {
    idHeight.update((n) => (n = window.innerHeight * 0.42));
    console.log($idHeight);
  });
</script>

<main>
  <Main />
</main>

<style>
  main {
    background-color: #fff6ed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
