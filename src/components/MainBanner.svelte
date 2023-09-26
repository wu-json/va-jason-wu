<script>
  import Button from './Button.svelte';

  function contactMe() {
    alert('hello');
  }
</script>

<div class="wrapper">
  <div class="content">
    <div><img src="./images/profile.png" alt="profile" /></div>
    <div class="text-content">
      <h1 class="blue-gradient-text">jason wu</h1>
      <h2>voice actor (based in us)</h2>
      <Button text="contact me" on:click={contactMe} />
    </div>
  </div>
</div>

<style>
  .wrapper {
    height: 100vh;
    margin: 0px;
    padding: 0px;
    width: 100%;
  }
  .content {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    display: flex;
    flex-direction: row;
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
</style>
