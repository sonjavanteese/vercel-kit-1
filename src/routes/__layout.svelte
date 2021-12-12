<script>
import '../app.css' 
import {iconLib} from '$lib/icons'
import {Toasts, addToast} from '$lib/toast'
import Sidebar from '$lib/components/Sidebar.svelte' 
import Appbar from '$lib/components/Appbar.svelte'
import { onMount } from 'svelte';
let isOpen = false; 
onMount(async () => {
    addToast("App Loaded!")
})
</script>
{@html iconLib}
<Toasts />
<Sidebar bind:isOpen />
<Appbar bind:isOpen />

<main class="pt-24">
  <slot/>
</main>

<footer>
    <hr>
    <div class="container mx-auto px-4 py-2 text-center"> 
        <span class="pl-2">nwp-cgn.de</span>
    </div>
</footer>

<style windi:preflights:global windi:safelist:global windi:global global>
    :global(body) {
      font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: serif;
        font-weight: 500;
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 0px;
        margin-bottom: 0.5rem;
        --tw-text-opacity: 1;
        color: rgba(55, 65, 81, var(--tw-text-opacity));
    }
    h1 {
        font-size: 3.75rem;
        line-height: 1;
    }
    h2 {
        font-size: 3rem;
        line-height: 1;
    }
    h3 {
        font-size: 2.25rem;
        line-height: 2.5rem;
    }
    h4 {
        font-size: 1.875rem;
        line-height: 2.25rem;
    }
    p {
        font-family: Graphik, sans-serif;
        font-size: 1.125rem;
        line-height: 1.75rem;
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 0px;
        margin-bottom: 0.5rem;
        --tw-text-opacity: 1;
        color: rgba(107, 114, 128, var(--tw-text-opacity));
    }
    pre {
        margin: 0 0 0 0;
        padding: 0.5rem;
        background-color: #f8f8f8;
        color: #666;
        border-radius: 0.5rem;
        overflow-x: auto;
    }
    .form-wrapp {
        width: 100%;
        max-width: 400px;
        padding: 2rem;
        margin: auto;
    }
    .page-container {
        @apply max-w-lg mx-auto px-4;
    }
    section.page-container {
        @apply min-h-full;
    } 
  </style>