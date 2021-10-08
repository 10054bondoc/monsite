<script>
  import { fetchSomething } from "../../../fetchingCalls";
  import { fade } from "svelte/transition";
  import Loading from "../../../Loading.svelte";

  let allWorks = fetchSomething("works", "", "GET");
  console.log(allWorks);
</script>

{#await allWorks}
  <Loading />
{:then results}
  <div class="works">
    <ul class="listofworks">
      {#each results as result}
        <li class="workitem">
          <ion-icon class="opensite" name="open-outline" />
          {result.title}
          {#if result.description}
            <p class="desc">{result.description}</p>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
{/await}

<style>
  .works {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .listofworks {
    width: 100%;
    height: auto;
    align-self: flex-start;
  }
  .workitem {
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  .opensite {
    cursor: pointer;
    margin-right: 0.5rem;
  }
  .desc {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    line-height: 130%;
    font-weight: 400;
    text-align: justify;
  }
</style>
