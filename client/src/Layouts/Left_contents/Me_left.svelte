<script>
  import { idHeight } from "../../stores";
  import { fade } from "svelte/transition";

  const navItems = ["WORKS", "SKILLS", "WORK EXPERIENCE", "ETC"];
  $: currentNavItem = "WORKS";
</script>

<div class="me" in:fade={{ duration: 100, delay: 300 }}>
  <div
    class="id"
    style="
  height: {$idHeight}px;
  "
  >
    <div class="circle" />
    <div class="items">
      <h1>IAN BONDOC</h1>
      <h2>Web Developer</h2>
      <h2>Quezon City, Philippines</h2>
      <h2>jibondocph@gmail.com</h2>
    </div>
  </div>
  <div class="socials" style="top: {$idHeight - $idHeight * 0.165}px;">
    <ion-icon class="socialicon" name="logo-github" title="github" />
    <ion-icon class="socialicon" name="logo-linkedin" title="linkedin" />
    <ion-icon class="socialicon" name="logo-instagram" title="instagram" />
  </div>
  <div class="nav">
    <ul class="listcont">
      {#each navItems as item}
        <li
          id={item}
          style="opacity: {currentNavItem === item ? '1' : '.5'};
          "
          on:mouseenter={(e) => {
            if (currentNavItem !== item) {
              e.target.style.opacity = "1";
            }
          }}
          on:mouseleave={(e) => {
            if (currentNavItem !== item) {
              e.target.style.opacity = ".5";
            }
          }}
          on:click={() => {
            currentNavItem = item;
          }}
        >
          {item}
          {#if currentNavItem === item}
            <ion-icon name="caret-forward-outline" style="color: #e18050;" />
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .me {
    width: 100%;
    height: 100%;
    position: relative;

    font-family: "Roboto", "sans-serif";
  }
  .id {
    position: absolute;
    top: -10%;
    left: -10%;
    width: 110%;
    /* background-color: rgba(0, 0, 0, 0.212); */
  }
  .circle {
    height: 100%;
    width: 54.5%;
    border-radius: 50%;
    /* background-color: rgba(255, 255, 0, 0.404); */
    float: left;
    shape-outside: circle();
    margin-right: 2rem;
  }
  .items {
    color: #67534a;
    margin-top: 12%;
    letter-spacing: 0.5px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 900;
  }
  h2 {
    margin-bottom: 0.4rem;
    font-size: 0.9rem;
    font-weight: 700;
    opacity: 0.75;
  }
  .socials {
    position: absolute;
    width: 10%;
    height: 50%;
    /* top: 50%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* background-color: rgba(0, 255, 13, 0.404); */
  }
  .socialicon {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    transform: scale(1.25);
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.7;
    cursor: pointer;
  }

  .nav {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1rem;
    text-align: right;
    margin-right: 1rem;
  }
  .listcont > * {
    margin-bottom: 1.25rem;
    font-weight: 700;
    color: #67534a;
    cursor: pointer;
    transition: 0.1s ease-in-out;
  }
</style>
