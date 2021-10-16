<script>
  import { currentCVnav } from "../../stores";
  import Works from "./About Me/Works/Works.svelte";
  import WorkExperience from "./About Me/Work Experience/WorkExperience.svelte";
  import Skills from "./About Me/Skills/Skills.svelte";
  import Etc from "./About Me/Etc/Etc.svelte";
  const navigator = [
    { text: "WORKS", comp: Works },
    { text: "WORK EXPERIENCE", comp: WorkExperience },
    { text: "SKILLS", comp: Skills },
    { text: "ETC", comp: Etc },
  ];
  $: indexOfSelected = navigator.findIndex((el) => el.text === $currentCVnav);
  $: selectedNavItem = navigator[indexOfSelected];
</script>

<div class="me">
  <svelte:component this={selectedNavItem.comp} />
</div>

<style>
  .me {
    position: relative;
    width: 100%;
    height: 80vh;
    color: var(--offwhite);
    font-family: "Roboto", "sans-serif";
    letter-spacing: 0.5px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
