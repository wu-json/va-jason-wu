<script>
  import { goto } from '$app/navigation';
  import Button from './Button.svelte';
</script>

<div class="wrapper">
  <div class="content">
    <div><img src="./images/profile.png" alt="profile" /></div>
    <div class="text-content">
      <h1 class="blue-gradient-text">jason wu</h1>
      <h2>voice actor (based in us)</h2>
      <Button
        text="contact me"
        on:click={() => goto('mailto:jasonwuva@proton.me')}
      />
    </div>
  </div>
</div>

<style>
  .wrapper {
    position: relative;
    height: 100vh;
    width: 100%;
    margin: 0px;
    padding: 0px;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
  }
  .text-content {
    margin: 20px;
  }
  .text-content :global(button) {
    margin-top: 15px;
  }
  img {
    width: 180px;
    margin: 20px;
  }
  h1 {
    font-size: 60px;
    margin: 0px;
  }
  h2 {
    margin: 10px 0px 0px 0px;
  }
  @media only screen and (max-width: 1200px) {
    .content {
      flex-direction: column;
      max-width: 400px;
      padding: 30px;
      text-align: center;
      transform: translate(-50% + 60px, -50%);
      width: calc(100% - 60px);
    }
    img {
      width: 100%;
      max-width: 180px;
      margin: 0px;
    }
  }
</style>
