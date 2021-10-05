<script>
  import { idHeight } from "../../stores";
  import { fade } from "svelte/transition";
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
    <ion-icon name="logo-github" title="github" />
    <ion-icon name="logo-linkedin" title="linkedin" />
    <ion-icon name="logo-instagram" title="instagram" />
  </div>
  <div class="nav" />
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
  ion-icon {
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
</style>
