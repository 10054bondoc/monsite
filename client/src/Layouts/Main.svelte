<script>
  import Header from "./Header.svelte";
  import Panel from "./Panel.svelte";
</script>

<div class="main">
  <Header />
  <Panel />
</div>

<style>
  .main {
    width: 70%;
    height: 80%;

    display: flex;
    flex-direction: column;
  }
</style>
