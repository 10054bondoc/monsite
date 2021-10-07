<script>
  import { push, location } from "svelte-spa-router";
  import { aboutToCloseAboutMe } from "../stores";
  $: curPage = $location.split("/").includes("BLOG") ? "BLOG" : "ABOUT ME";
  const pages = ["ABOUT ME", "BLOG"];
</script>

<div class="header">
  {#each pages as page}
    <p
      class={page}
      style="opacity: {curPage === page ? '1' : '.5'};"
      on:mouseenter={(e) => {
        if (e.target.innerText !== curPage) {
          e.target.style.opacity = 0.9;
        }
        if (page === "BLOG") {
          aboutToCloseAboutMe.update((n) => (n = true));
        }
      }}
      on:mouseleave={(e) => {
        if (e.target.innerText !== curPage) {
          e.target.style.opacity = 0.5;
        }
        if (page === "BLOG") {
          aboutToCloseAboutMe.update((n) => (n = false));
        }
      }}
      on:click={(e) => {
        if (e.target.innerText === "BLOG") {
          push(`/${e.target.innerText}`);
        } else {
          push("/");
        }
      }}
    >
      {page}
    </p>
  {/each}
</div>

<style>
  .header {
    width: 100%;
    height: 5%;
    align-self: flex-end;
    padding-bottom: 2rem;

    display: flex;
    justify-content: end;
    align-items: center;

    font-family: "Roboto", sans-serif;
  }
  p {
    margin-left: 3rem;
    margin-right: 2rem;
    color: #67534a;
    font-weight: 900;
    letter-spacing: 1px;

    cursor: pointer;
    transition: 0.1s ease-in-out;
  }
</style>
