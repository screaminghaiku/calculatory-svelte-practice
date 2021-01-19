<script>
  export let value = 0;
  export let handle;
</script>

<style>
  .btn {
    position: relative;
    margin: auto;
    color: #fff48f;
    border-radius: 4px;
    font-size: 1.5rem;
    height: 3rem;
    width: 4rem;
    cursor: pointer;
    user-select: none;
  }

  .btn:hover {
    top: 2px;
    box-shadow: 0 0 0;
  }

  .number {
    border: 1px solid #3b2e5a;
    background-color: #394989;
    box-shadow: 0px 2px 0px #394989;
  }

  .number:hover {
    background-color: #3b2e5a;
  }

  .operation {
    color: #fff48f;
    border: 1px solid #394989;
    background-color: #4ea0ae;
    box-shadow: 0px 2px 0px #4ea0ae;
  }

  .operation:hover {
    background-color: #1aa9c2;
  }
</style>


<button
  class="btn {isNaN(value) ? 'operation' : 'number'}"
  {value}
  on:click={e => handle(e.target.value)}>
  {value}
</button>