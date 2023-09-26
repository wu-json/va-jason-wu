<script>
  export let text = 'hello world';
  export let gradient = 'blue';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch('click');
  }
</script>

<button class={gradient} on:click={onClick}>
  {text}
</button>

<style>
  button {
    background: none;
    font-size: 16px;
    padding: 10px 20px;
    border: solid 1px transparent;
    border-radius: 10px;
    background-origin: border-box;
    background-clip: padding-box, border-box;
  }
  .blue {
    box-shadow: 0px 0px 10px rgba(34, 242, 255, 0.7);
    background-image: linear-gradient(#0c0b0b, #0c0b0b),
      radial-gradient(circle at top left, #0038ff, #22f2ff);
  }
</style>
