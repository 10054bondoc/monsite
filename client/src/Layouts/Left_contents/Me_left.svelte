<script>
  import { idHeight, currentCVnav } from "../../stores";
  import { fade, fly } from "svelte/transition";

  const navItems = ["WORKS", "SKILLS", "WORK EXPERIENCE", "ETC"];
  $: copyNotCheck = true;
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
      <h3>
        jibondocph@gmail.com
        <span
          title="copy to clipboard"
          style="opacity: 1;"
          class="copy"
          on:click={() => {
            navigator.clipboard.writeText("jibondocph@gmail.com");

            copyNotCheck = false;

            setTimeout(() => {
              copyNotCheck = true;
            }, 1000);
          }}
        >
          {#if copyNotCheck}
            <ion-icon
              style="pointer-events: none; "
              name="copy-outline"
              in:fade={{ duration: 100 }}
            />
          {:else}
            <ion-icon
              style="pointer-events: none; "
              name="checkmark-outline"
              in:fly={{ delay: 100, y: -5, duration: 100 }}
            />
          {/if}
        </span>
      </h3>
    </div>
  </div>
  <div class="socials" style="top: {$idHeight - $idHeight * 0.165}px;">
    <span
      class="socialicon"
      title="github"
      on:click={() => {
        window.open("https://github.com/10054bondoc");
      }}
    >
      <ion-icon name="logo-github" style="pointer-events: none; " />
    </span>
    <span
      class="socialicon"
      title="linkedin"
      on:click={() => {
        window.open("https://www.linkedin.com/in/ian-bondoc-2a0504109/");
      }}
    >
      <ion-icon style="pointer-events: none; " name="logo-linkedin" />
    </span>
    <span
      class="socialicon"
      title="instagram"
      on:click={() => {
        window.open("https://www.instagram.com/ayyamiyan");
      }}
    >
      <ion-icon style="pointer-events: none; " name="logo-instagram" />
    </span>
  </div>
  <div class="nav">
    <ul class="listcont">
      {#each navItems as item}
        <li
          id={item}
          style="opacity: {$currentCVnav === item ? '1' : '.5'};
          "
          on:mouseenter={(e) => {
            if ($currentCVnav !== item) {
              e.target.style.opacity = "1";
            }
          }}
          on:mouseleave={(e) => {
            if ($currentCVnav !== item) {
              e.target.style.opacity = ".5";
            }
          }}
          on:click={() => {
            currentCVnav.update((n) => (n = item));
          }}
        >
          {item}
          {#if $currentCVnav === item}
            <span>
              <ion-icon
                name="caret-forward-outline"
                style="color: #e18050; pointer-events: none;"
              />
            </span>
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
  h3 {
    margin-bottom: 0.4rem;
    font-size: 0.9rem;
    font-weight: 700;
    opacity: 1;
  }
  .copy {
    cursor: pointer;
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
