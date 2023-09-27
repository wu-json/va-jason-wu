<script>
  import '@fontsource/inter';
</script>

<slot />

<style>
  :global(body) {
    background-color: #0c0b0b;
    margin: 0px;
  }
  :global(h1, h2, p, button) {
    font-family: 'Inter';
    color: #ffffff;
  }
  :global(.blue-gradient-text) {
    clip-path: inset(1px);
    background-color: #0038ff;
    background-image: linear-gradient(45deg, #0038ff, #22f2ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  :global(.pink-gradient-text) {
    clip-path: inset(1px);
    background-color: #ff00f5;
    background-image: linear-gradient(45deg, #ff00f5, #9104ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  :global(.green-gradient-text) {
    clip-path: inset(1px);
    background-color: #00ff1a;
    background-image: linear-gradient(45deg, #00ff1a, #04ffd2);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
</style>
