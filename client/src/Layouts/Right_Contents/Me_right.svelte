<script>
  import { currentCVnav } from "../../stores";
  import Works from "./Works/Works.svelte";
  import WorkExperience from "./Work Experience/WorkExperience.svelte";
  import Skills from "./Skills/Skills.svelte";
  import Etc from "./Etc/Etc.svelte";
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
    height: 100%;
    color: var(--offwhite);
    font-family: "Roboto", "sans-serif";
    letter-spacing: 0.5px;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: auto;
  }
</style>
