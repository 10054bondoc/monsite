<script>
  import { fetchSomething } from "../../../../fetchingCalls";
  import Loading from "../../../../Loading.svelte";

  let allfilmtvs = fetchSomething("blogs", "?category=Film_tv_review", "GET");
</script>

<div class="filmtvreviews">
  <div class="filmtvheader">
    <p>FILM/TV REVIEWS</p>
  </div>
  <div class="filmtvgallery">
    {#await allfilmtvs}
      <div class="loadcont">
        <Loading />
      </div>
    {:then results}
      {#each results as result}
        <div class="filmtvcover">
          <img src="MYURL{result.cover.url}" alt={result.title} />
        </div>
      {/each}
    {:catch}
      <p>something went wrong</p>
    {/await}
  </div>
</div>

<style>
  .filmtvreviews {
    width: 100%;
    height: 100%;
    letter-spacing: 0.5px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    overflow: auto;
  }
  .filmtvheader {
    width: 100%;
    height: auto;
    font-weight: 700;
    font-size: 1.7rem;
    padding-bottom: 1rem;
  }

  .filmtvgallery {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
  }
  .filmtvcover {
    width: 7rem;
    height: 10rem;
    padding: 0.3rem;
    background-color: var(--bluedark);
    margin: 0.1rem;
    transition: 0.1s ease-in-out;
    cursor: pointer;
  }
  .filmtvcover:hover {
    transform: scale(1.05);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .loadcont {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
