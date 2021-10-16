<script>
  import { onMount, afterUpdate } from "svelte";
  export let entrydata;

  let dateFormatted;
  let dateFormatted_date;
  let dateFormatted_month;
  let dateFormatted_year;
  let contentsnippet;
  onMount(() => {
    //     console.log(entrydata.cover.url);
    //     console.log(dateFormatted.toLocaleDateString());
  });
  afterUpdate(() => {
    dateFormatted = new Date(entrydata.published_at);
    dateFormatted = dateFormatted.toDateString().split(" ");
    // console.log(dateFormatted);
    dateFormatted_date = dateFormatted[2];
    dateFormatted_month = dateFormatted[1].toUpperCase();
    dateFormatted_year = dateFormatted[3];
    contentsnippet = entrydata.content.slice(0, 250);
  });
</script>

<div class="entry">
  {#if entrydata.cover}
    <div
      class="image"
      style="background: url('MYURL{entrydata.cover
        .url}') top no-repeat; background-size: contain;"
    />
  {/if}
  <div class="detailspart">
    <div class="titlecat">
      <p class="title">{entrydata.title}</p>
      <p class="category">
        {entrydata.category.split("_").join(" ").toUpperCase()} |
        <span class="entrydate"
          >{dateFormatted_date}-{dateFormatted_month}-{dateFormatted_year}</span
        >
      </p>
    </div>
    <div class="snippet">
      {contentsnippet}...<span id="readmore">READ MORE</span>
    </div>
  </div>
</div>

<style>
  .entry {
    padding-top: 1rem;
    border-bottom: 1px solid rgb(38, 38, 54);
    padding-bottom: 1rem;
    min-height: 10rem;
    display: flex;
    justify-content: start;
    align-items: center;

    cursor: pointer;
  }
  .entry:hover {
    background-color: var(--bluelight);
  }
  .entry > * {
    margin-right: 1rem;
  }
  .image {
    height: 100%;
    width: 10%;
  }
  .detailspart {
    width: 90%;
    height: 100%;
  }
  .title {
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  .category {
    font-size: 0.8rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }
  .snippet {
    font-size: 0.8rem;
    line-height: 130%;
  }
  #readmore {
    opacity: 0.5;
  }
</style>
