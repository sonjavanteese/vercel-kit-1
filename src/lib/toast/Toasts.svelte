<script>
    import { flip } from "svelte/animate";
    import Toast from "./Toast.svelte";
    import { toasts, removeToast } from "./toastStore";
</script>

  
{#if $toasts.length}
  <div class="fixed inset-x-4 right-4 z-40 flex flex-col">
    {#each $toasts as toast (toast.id)}
      <div animate:flip on:click={() => {removeToast(toast.id)}}>
        <Toast {toast} />
      </div>
    {/each}
  </div>
{/if}

<style windi:inject>
.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}
.flex-col {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  -webkit-flex-direction: column;
  flex-direction: column;
}
.fixed {
  position: fixed;
}
.inset-x-4 {
  right: 1rem;
  left: 1rem;
}
.right-4 {
  right: 1rem;
}
.z-40 {
  z-index: 40;
}
</style>