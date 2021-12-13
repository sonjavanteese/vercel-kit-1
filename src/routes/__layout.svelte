<script>	
  import "../app.css"
  import { Icon, iconLib } from '$lib/icons'
  import Appbar from '$lib/components/Appbar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
  import { page } from '$app/stores';
	// import logo from './svelte-logo.svg';
	// import logoDark from './svelte-logo-dark.svg';
  $: console.log($page)
  let isOpen;
</script>
{@html iconLib}

<Sidebar bind:isOpen />
<Appbar bind:isOpen />


<main>
 <slot /> 
</main>


<style windi:preflights:global windi:safelist:global global>
  :global(body) {
    font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  }
  :root {
      --app-bar-bg: #255e54;
      --app-bar-color: #ffffff;
      --app-bar-zindex: 30;
      --app-bar-px-s: 1rem;
      --app-bar-px-l: 2rem;
      --app-bar-py: 0.2rem;
      --app-bar-height: 66px;
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

  .lead {
  @apply text-2xl;
  }
  .select {
  @apply appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none;
  }
  .input {
  @apply appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-50 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none;
  }
  .label {
  @apply block mb-2 text-xs text-gray-700 uppercase tracking-wide font-bold;
  }
  .input-field {
  @apply appearance-none block w-full py-3 px-4 text-gray-400 bg-white border border-gray-200 rounded focus:border-gray-200 focus:outline-none;
  }
  .button {
  @apply inline-block w-full py-4 px-8 leading-none text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded shadow;
  }
  .button[disabled] {
  @apply  text-gray-400 bg-gray-200 hover:bg-gray-200 shadow-none cursor-not-allowed;
  }

  .page-container {
    @apply min-h-full w-full max-w-xl mx-auto px-4 py-4 shadow;
  }
  .head-container {
    @apply w-full max-w-xl mx-auto px-4 py-4 shadow;
  }

</style>
