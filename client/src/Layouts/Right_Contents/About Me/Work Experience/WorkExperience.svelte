<script>
  import { fetchSomething } from "../../../../fetchingCalls";
  import Loading from "../../../../Loading.svelte";

  import { fade, fly } from "svelte/transition";

  let workexp = fetchSomething("workexperiences", "", "GET");
  $: uniq_mentionedYears = [];
  $: currentYear = "";
  $: boundingright = false;
  $: boundingleft = true;

  Promise.resolve(workexp).then((val) => {
    // console.log(val);
    let mentionedYears = [];
    val.forEach((el) => {
      mentionedYears.push(el.year);
    });
    uniq_mentionedYears = [...new Set(mentionedYears)];
    currentYear = uniq_mentionedYears[0];
    // console.log(uniq_mentionedYears);
  });

  const karatClick = (direction) => {
    console.log(direction);
    let indexOfCurYear = uniq_mentionedYears.findIndex(
      (el) => el === currentYear
    );
    console.log("pre", indexOfCurYear);
    if (direction === "right") {
      currentYear = uniq_mentionedYears[indexOfCurYear + 1];
    } else if (direction === "left") {
      currentYear = uniq_mentionedYears[indexOfCurYear - 1];
    }
    indexOfCurYear = uniq_mentionedYears.findIndex((el) => el === currentYear);

    // console.log("post", indexOfCurYear);
    // console.log("length", uniq_mentionedYears.length - 1);
    if (indexOfCurYear > 0) {
      boundingleft = false;
    } else if (indexOfCurYear === 0) {
      boundingleft = true;
    }

    if (indexOfCurYear === uniq_mentionedYears.length - 1) {
      boundingright = true;
    } else if (indexOfCurYear < uniq_mentionedYears.length - 1) {
      boundingright = false;
    }
  };
</script>

{#await workexp}
  <Loading />
{:then results}
  <div class="workexperience">
    <div class="tracker">
      {#each uniq_mentionedYears as year}
        <div
          class="trackercirc"
          title={year}
          style="opacity: {year === currentYear ? '1' : '.25'};"
        />
      {/each}
    </div>
    <div class="arrow" id="left">
      {#if !boundingleft}
        <button class="arrowspan" on:click={() => karatClick("left")}>
          <ion-icon name="chevron-back-outline" style="pointer-events: none;" />
        </button>
      {/if}
    </div>
    <div class="arrow" id="right">
      {#if !boundingright}
        <button class="arrowspan" on:click={() => karatClick("right")}>
          <ion-icon
            style="pointer-events: none;"
            name="chevron-forward-outline"
          />
        </button>
      {/if}
    </div>
    <div class="year">
      <p>{currentYear}</p>
    </div>
    <div class="content">
      {#each results as result}
        {#if result.year === currentYear}
          <p class="jobtitle">
            {result.jobtitle}
          </p>
          <p class="jobdesc">
            {result.description}
          </p>
        {/if}
      {/each}
    </div>
  </div>
{/await}

<style>
  .workexperience {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .arrow {
    position: absolute;
    width: 10%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .arrowspan {
    font-size: 1.5rem;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: var(--offwhite);
  }
  #left {
    left: 0;
    bottom: 0;
  }
  #right {
    right: 0;
    bottom: 0;
  }
  .tracker {
    width: 100%;
    height: 10%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .trackercirc {
    width: 1rem;
    height: 1rem;
    background-color: var(--offwhite);
    border-radius: 50%;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .year {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    letter-spacing: 1px;
  }
  .content {
    width: 80%;
    height: 100%;
    line-height: 130%;
  }
  .jobtitle {
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .jobdesc {
    font-size: 0.9rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }
</style>
