<script lang="ts">
  import 'aplayer/dist/APlayer.min.css';
  import { onMount } from 'svelte';
  import APlayer from 'aplayer?client';
  import ColorThief from 'colorthief';

  onMount(() => {
    const ap = new APlayer({
      container: document.getElementById('aplayer'),
      mutex: true,
      audio: [
        {
          name: 'Claire Stanfield (Vino)',
          artist: 'Baccano!',
          url: './voice-chops/claire.wav',
          cover: './images/vino.png',
        },
        {
          name: '神奇的糊塗魔藥',
          artist: '林家謙',
          url: 'https://blog-static.fengkx.top/svelte-aplayer/margic-sillines.mp3',
          cover:
            'https://blog-static.fengkx.top/svelte-aplayer/margic-sillines.jpg',
        },
        {
          name: '君の知らない物語',
          artist: 'supercell',
          url: 'https://blog-static.fengkx.top/svelte-aplayer/bakemonogatari-ed.mp3',
          cover:
            'https://blog-static.fengkx.top/svelte-aplayer/bakemonogatari-ed.jpg',
        },
        {
          name: '「戦場ヶ原、蕩れ」',
          artist: '神前暁',
          url: 'https://blog-static.fengkx.top/svelte-aplayer/senjougahara.mp3',
          cover:
            'https://blog-static.fengkx.top/svelte-aplayer/senjougahara.jpg',
        },
      ],
    });

    const colorThief = new ColorThief();
    const image = new Image();
    const xhr = new XMLHttpRequest();

    const setTheme = ({ index }: { index: number }) => {
      if (!ap.list.audios[index].theme) {
        xhr.onload = function () {
          let coverUrl = URL.createObjectURL(this.response);
          image.onload = function () {
            let color = colorThief.getColor(image);
            ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
            URL.revokeObjectURL(coverUrl);
          };
          image.src = coverUrl;
        };
        xhr.open('GET', ap.list.audios[index].cover, true);
        xhr.responseType = 'blob';
        xhr.send();
      }
    };

    setTheme({ index: ap.list.index });
    ap.on('listswitch', setTheme);

    return () => {
      ap.destroy();
    };
  });
</script>

<div class="wrapper">
  <div class="content">
    <h1 class="green-gradient-text">voice samples</h1>
    <div id="aplayer"></div>
  </div>
</div>

<style>
  .wrapper {
    position: relative;
    height: 100vh;
    width: 100%;
    margin: 0px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content {
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
  #aplayer {
    width: 100%;
    background-color: #1e2124;
    color: #fff;
  }
  :global(.aplayer .aplayer-list ol li.aplayer-list-light) {
    background: #000;
  }
  :global(.aplayer .aplayer-list ol li:hover) {
    background: #000;
  }
  :global(.aplayer .aplayer-list ol li) {
    border-top: 1px solid #36393e;
  }
  :global(.aplayer.aplayer-withlist .aplayer-info) {
    border-bottom: 1px solid #36393e;
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
