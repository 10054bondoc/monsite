<script>
  import { fetchSomething } from "../../../../fetchingCalls";
  import Loading from "../../../../Loading.svelte";
  import Entry from "./Entry.svelte";
  let allblogs = fetchSomething("blogs", "", "GET");

  Promise.resolve(allblogs).then((val) => {
    const datum = new Date(val[0].published_at);
    // console.log(datum.toLocaleDateString());
    // console.log(val[0].published_at);
  });
</script>

<div class="all">
  <div class="allheader">
    <p class="greeting" id="hi">
      Hi! <span id="subgreeting">More about me...</span>
    </p>
  </div>
  <div class="contents">
    {#await allblogs}
      <Loading />
    {:then results}
      {#each results as result}
        <Entry entrydata={result} />
      {/each}
    {/await}
  </div>
</div>

<style>
  .all {
    width: 100%;
    height: 100%;
    letter-spacing: 0.5px;
    display: flex;
    flex-direction: column;
  }
  .allheader {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: flex-start;
  }
  #hi {
    font-weight: 900;
    font-size: 4rem;
  }
  #subgreeting {
    font-weight: 500;
    font-size: 1rem;
  }
  .contents {
    width: 100%;
    height: 100%;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
</style>
