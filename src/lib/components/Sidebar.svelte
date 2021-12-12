<script>
    import {fly, fade} from 'svelte/transition'
    import { navigating, page } from '$app/stores';
    import {user} from '$lib/stores'
    export let isOpen = false;
    let condition = true;
    let isUser;
    $: isUser = $user;
    const toggle = () => (isOpen = !isOpen);
    $: console.log("navigating:", $navigating);
</script>

{#if isOpen}
    <aside class="navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50"> 
        <div in:fade="{{duration: 300}}" out:fade="{{delay: 300, duration: 300}}" on:click="{toggle}" class="navbar-backdrop-1 fixed inset-0 bg-blueGray-800 opacity-50"></div>                 
        <nav transition:fly="{{duration: 400, x: -300}}" class="bg-white flex flex-col h-full overflow-y-auto relative w-full">
            <header class="bg-parker-400 flex items-center mb-8 px-6 py-6 text-white"> <a class="mr-auto text-3xl font-semibold" href="#">  
                <img class="h-10" src="https://nwp-cgn.de/img/poser/favicon.svg" alt="" width="auto"/></a> 
                <button on:click={toggle} class="navbar-close-1"> 
                    <svg class="h-6 w-6 cursor-pointer focus:outline-none focus:border-0 hover:text-gray-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>                         
            </header>
            <div class="px-6">
                <ul class="list" on:click={toggle}> 
                    <li class="mb-1"> 
                        <a href="/"  class:active={$page.path === '/'}> 
                            <svg xmlns="http://www.w3.org/2000/svg" style="width: 32px; height: 32px;" class="text-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/> 
                            </svg>  
                            <span class="px-2">Start</span>  </a> 
                    </li>
                    {#if condition}           
                        <li class="mb-1"> 
                            <a href="/classic" class:active={$page.path === '/classic'}>  <svg xmlns="http://www.w3.org/2000/svg" style="width: 32px; height: 32px;" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/> 
                                </svg>  <span class="px-2">Archiv</span>  </a> 
                        </li>                             
                        <li class="mb-1"> 
                            <a href="/lorem" class:active={$page.path === '/lorem'}> <svg xmlns="http://www.w3.org/2000/svg" style="width: 32px; height: 32px;" class="text-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                                </svg> <span class="px-2">Lorem Generator</span> 
                            </a> 
                        </li>     
                        <li class="mb-1"> 
                            <a href="/iconlib" class:active={$page.path === '/iconlib'}> 
                                <svg xmlns="http://www.w3.org/2000/svg"style="width: 32px; height: 32px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span class="px-2">Icon Libary</span> 
                            </a> 
                        </li>   
                        <li class="mb-1"> 
                            <a href="/cssvars" class:active={$page.path === '/cssvars'}> 
                                <svg xmlns="http://www.w3.org/2000/svg"style="width: 32px; height: 32px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                                <span class="px-2">Css Vars</span> 
                            </a> 
                        </li>                     
                        <li class="mb-1">
                            <a href="/" class:active={$page.path === '/settings'}>
                            <svg xmlns="http://www.w3.org/2000/svg" style="width: 32px; height: 32px;" class="text-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg> <span class="px-2">Settings</span> 
                            </a> 
                        </li>  
                    {/if}                            
                </ul>
            </div>                     
            <div class="mt-auto px-6 py-6"> 
                <div class="mt-4 pt-6 border-t border-blueGray-100">
                    {#if !isUser}
                    <a href="/" class="btn btn-blue block text-center w-full">Sign In</a>
                    {:else}
                    <button class="btn btn-red w-full">Sign Out</button>
                   {/if}
                    <!--  <a class="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" href="#">Log In</a> -->
                </div>                         
            </div>                                          
        </nav>
    </aside>             
{/if}

<style>
    .list a {
        @apply flex items-center p-4 text-lg text-parker-500 hover:bg-green-50 hover:text-parker-600 rounded-lg;
    }
    .list a.active {
        @apply bg-green-50 text-parker-600;
    }
    .button {
        @apply block w-full px-4 py-4 mb-3 text-xs text-center font-semibold leading-none bg-red-600 hover:bg-red-700 text-white rounded;
    }
    .link {
        @apply block px-4 py-4 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded;
    }
</style>