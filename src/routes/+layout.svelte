<script>
  import '@fontsource/inter';
</script>

<slot />

<style>
  :global(body) {
    background-color: #0c0b0b;
    margin: 0px;
  }
  :global(h1, h2, p) {
    font-family: 'Inter';
    color: #ffffff;
  }
  :global(.blue-gradient-text) {
    background-color: #0038ff;
    background-image: linear-gradient(45deg, #0038ff, #22f2ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
</style>
