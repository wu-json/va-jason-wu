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
          name: 'Toji Fushiguro',
          artist: 'Jujutsu Kaisen',
          url: './voice-chops/toji.wav',
          cover: './images/toji.png',
        },
        {
          name: 'Lad Russo',
          artist: 'Baccano!',
          url: './voice-chops/lad-russo.wav',
          cover: './images/lad-russo.jpg',
        },
        {
          name: 'Victor Talbot',
          artist: 'Baccano!',
          url: './voice-chops/victor-talbot.wav',
          cover: './images/victor-talbot.png',
        },
        {
          name: 'Cyrus Albright',
          artist: 'Octopath Traveler',
          url: './voice-chops/cyrus.wav',
          cover: './images/cyrus.png',
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
      min-width: auto;
      max-width: auto;
    }
  }
</style>
