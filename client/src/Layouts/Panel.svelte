<script>
  import LeftPanel from "./Panels/Left_Panel.svelte";
  import RightPanel from "./Panels/Right_Panel.svelte";
</script>

<div class="panel">
  <LeftPanel />
  <RightPanel />
</div>

<style>
  .panel {
    background-color: #dfe0df;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
