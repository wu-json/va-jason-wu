<script>
  import 'aplayer/dist/APlayer.min.css';
  import { onMount } from 'svelte';
  import APlayer from 'aplayer?client';

  onMount(async () => {
    const ap = new APlayer({
      container: document.getElementById('aplayer'),
      mutex: true,
      theme: 'red',
      audio: [
        {
          'name': '光るなら',
          'artist': 'Goose house',
          'url': 'https://blog-static.fengkx.top/svelte-aplayer/hikarunara.mp3',
          'lrc': 'https://blog-static.fengkx.top/svelte-aplayer/hikarunara.lrc',
          'cover':
            'https://blog-static.fengkx.top/svelte-aplayer/hikarunara.jpg',
        },
        {
          'name': '神奇的糊塗魔藥',
          'artist': '林家謙',
          'url':
            'https://blog-static.fengkx.top/svelte-aplayer/margic-sillines.mp3',
          'lrc':
            'https://blog-static.fengkx.top/svelte-aplayer/margic-silliness.lrc',
          'cover':
            'https://blog-static.fengkx.top/svelte-aplayer/margic-sillines.jpg',
        },
        {
          'name': '君の知らない物語',
          'artist': 'supercell',
          'url':
            'https://blog-static.fengkx.top/svelte-aplayer/bakemonogatari-ed.mp3',
          'lrc':
            'https://blog-static.fengkx.top/svelte-aplayer/bakemonogatari-ed.lrc',
          'cover':
            'https://blog-static.fengkx.top/svelte-aplayer/bakemonogatari-ed.jpg',
        },
        {
          'name': '「戦場ヶ原、蕩れ」',
          'artist': '神前暁',
          'url':
            'https://blog-static.fengkx.top/svelte-aplayer/senjougahara.mp3',
          'cover':
            'https://blog-static.fengkx.top/svelte-aplayer/senjougahara.jpg',
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
    max-width: 800px;
    min-width: 600px;
    padding: 30px;
  }
  h1 {
    font-size: 60px;
  }
  .players {
    width: 100%;
  }
  @media only screen and (max-width: 800px) {
    .content {
      width: calc(100% - 60px);
      text-align: center;
      min-width: auto;
      max-width: auto;
    }
  }
</style>
