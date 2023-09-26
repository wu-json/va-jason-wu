<script>
  import 'aplayer/dist/APlayer.min.css';
  import { onMount } from 'svelte';
  import APlayer from 'aplayer?client';

  onMount(async () => {
    const ap = new APlayer({
      container: document.getElementById('aplayer'),
      mutex: true,
      audio: [
        {
          theme: '#ebd0c2',
          name: '君の知らない物語',
          artist: 'supercell',
          cover:
            'https://blog-static.fengkx.top/svelte-aplayer/bakemonogatari-ed.jpg',
          url: 'https://blog-static.fengkx.top/svelte-aplayer/bakemonogatari-ed.mp3',
        },
      ],
    });
  });
</script>

<div class="wrapper">
  <div class="content">
    <h1 class="green-gradient-text">voice samples</h1>
    <div class="players">
      <div id="aplayer"></div>
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
    flex-direction: column;
    align-items: center;
    max-width: 600px;
  }
  h1 {
    font-size: 60px;
    margin: 0px;
  }
  .players {
    padding: 30px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
