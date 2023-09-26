<script>
  export let text = 'hello world';

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function onClick() {
    dispatch('click');
  }
</script>

<button on:click={onClick}>
  {text}
</button>
