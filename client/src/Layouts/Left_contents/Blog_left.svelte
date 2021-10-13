<script>
  import { fade } from "svelte/transition";
  import { onMount, afterUpdate } from "svelte";
  import { push } from "svelte-spa-router";
  import { currentBlognav } from "../../stores";
  const contents = ["all", "books", "filmtvs", "ragbag"];

  const ionicons = [
    "file-tray-stacked",
    "book",
    "videocam",
    "chatbubble-ellipses",
  ];
  $: fromLocal = "";
  onMount(() => {
    fromLocal = window.sessionStorage.getItem("page");
    if (!fromLocal) {
      fromLocal = "all";
    }
    currentBlognav.update((n) => (n = fromLocal));
    // console.log(fromLocal);
    push(`/BLOG/${fromLocal}`);
  });
  afterUpdate(() => {
    fromLocal = window.sessionStorage.getItem("page");
    if (!fromLocal) {
      fromLocal = "all";
    }
  });
</script>

<div class="me" in:fade={{ delay: 200, duration: 200 }}>
  {#each contents as content, i}
    <span
      class="content"
      title={content}
      style="background-color: {fromLocal === content
        ? 'ivory'
        : 'transparent'};"
      on:mouseenter={(e) => {
        if (fromLocal !== content) {
          e.target.style.backgroundColor = "rgb(240, 240, 240, .8)";
        }
      }}
      on:mouseleave={(e) => {
        if (fromLocal !== content) {
          e.target.style.backgroundColor = "transparent";
        }
      }}
      on:click={() => {
        currentBlognav.update((n) => (n = content));
        fromLocal = content;
        window.sessionStorage.setItem("page", content);
        push(`/BLOG/${content}`);
      }}
    >
      <ion-icon name="{ionicons[i]}-outline" />
    </span>
  {/each}
</div>

<style>
  .me {
    width: 100%;
    height: 50%;
    position: absolute;
    top: 20%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-bottom: 1rem;
    padding-top: 1rem;
    font-size: 1.5rem;
    opacity: 0.81;

    cursor: pointer;
    transition: 0.1s ease-in-out;
  }
  ion-icon {
    pointer-events: none;
  }
</style>
