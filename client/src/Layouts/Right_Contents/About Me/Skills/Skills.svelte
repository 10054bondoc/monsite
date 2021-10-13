<script>
  import { fetchSomething } from "../../../../fetchingCalls";
  import { fade } from "svelte/transition";
  import Loading from "../../../../Loading.svelte";

  let techIuse = fetchSomething("skills", "?techiuse=true", "GET");
  let otherprofs = fetchSomething("skills", "?techiuse=false", "GET");
  // Promise.resolve(techIuse).then((val) => console.log(val));
</script>

{#await techIuse}
  <Loading />
{:then results}
  <div class="skills">
    <div class="techiuse">
      <p class="label">TECH I USE</p>
      <ul class="techlist">
        {#each results as result}
          <li
            id={result.label}
            on:mouseenter={(e) => {
              // console.dir(e.target);
              e.target.children[0].style.opacity = ".15";
              e.target.children[1].style.opacity = "1";
            }}
            on:mouseleave={(e) => {
              // console.dir(e.target);
              e.target.children[0].style.opacity = "1";
              e.target.children[1].style.opacity = "0";
            }}
          >
            <div
              class="logoimg"
              style="background: url('MYURL{result.logo
                .url}'); background-size: contain; opacity: 1;"
            />
            <p
              class="techlabel"
              style="font-size: {result.label.length > 8 ? '.60rem' : '.75rem'};
                opacity: 0;"
            >
              {result.label}
            </p>
          </li>
        {/each}
      </ul>
    </div>
    {#await otherprofs then results}
      <div class="others">
        <p class="label">OTHER PROFICIENCIES</p>
        <ul class="otherslist">
          {#each results as result}
            <li
              id={result.label}
              on:mouseenter={(e) => {
                console.dir(e.target);
                e.target.children[0].style.opacity = ".15";
                e.target.children[1].style.opacity = "1";
              }}
              on:mouseleave={(e) => {
                e.target.children[0].style.opacity = "1";
                e.target.children[1].style.opacity = "0";
              }}
            >
              <div
                class="logoimg"
                style="background: url('MYURL{result.logo
                  .url}'); background-size: contain; opacity: 1;"
              />
              <p
                class="techlabel"
                style="font-size: {result.label.length > 8
                  ? '.60rem'
                  : '.75rem'}; opacity: 0;"
              >
                {result.label}
              </p>
            </li>
          {/each}
        </ul>
      </div>
    {/await}
  </div>
{/await}

<style>
  .skills {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  .skills > * {
    width: 100%;
    height: auto;
    align-self: flex-start;
    justify-self: start;
  }
  .label {
    font-weight: 700;
    opacity: 0.9;
    margin-bottom: 0.5rem;
  }
  .techiuse {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  .techlist {
    display: flex;
    flex-wrap: wrap;
  }
  .otherslist {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    background-color: var(--gray);
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    padding: 0.15rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
    position: relative;
    overflow: hidden;
  }
  .techlabel {
    color: rgb(46, 46, 46);
    text-align: center;
    font-weight: 700;
    position: absolute;

    transition: 0.1s ease-in-out;
  }
  .logoimg {
    transition: 0.1s ease-in-out;
    width: 85%;
    height: 85%;
  }
</style>
