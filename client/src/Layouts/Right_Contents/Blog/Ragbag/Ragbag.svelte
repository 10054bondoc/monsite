<script>
  import { fetchSomething } from "../../../../fetchingCalls";
  import Loading from "../../../../Loading.svelte";
  import Entry from "../All/Entry.svelte";

  let allragbags = fetchSomething("blogs", "?category=Ragbag", "GET");
</script>

<div class="ragbags">
  <div class="ragbagheader">
    <p>RAGBAG</p>
  </div>
  <div class="ragbaggallery">
    {#await allragbags}
      <div class="loadcont">
        <Loading />
      </div>
    {:then results}
      {#each results as result}
        <Entry entrydata={result} />
      {/each}
    {/await}
  </div>
</div>

<style>
  .ragbags {
    width: 100%;
    height: 100%;
    letter-spacing: 0.5px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    overflow: auto;
  }
  .ragbagheader {
    width: 100%;
    height: auto;
    font-weight: 700;
    font-size: 1.7rem;
    padding-bottom: 1rem;
  }
  .ragbaggallery {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
  }
  .loadcont {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
