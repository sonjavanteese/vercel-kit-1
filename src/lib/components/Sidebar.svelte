<script>
    import {fly, fade} from 'svelte/transition'
    import { navigating, page } from '$app/stores';
    import {user} from '../stores'
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
            <header class="flex items-center"> 
                <a class="mr-auto text-3xl font-semibold" href="#">  
                    <img class="h-10" src="https://nwp-cgn.de/img/poser/favicon.svg" alt="" width="auto"/>
                </a> 
                <button on:click={toggle} class="close-icon"> 
                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    
                </div>                         
            </div>                                          
        </nav>
    </aside>             
{/if}

<style>
.btn {
  padding: .5rem 1rem;
  margin-right: .25rem;
  border-radius: .25rem;
  font-weight: 600;
}
.btn-blue {
  background-color: #3490dc;
  color: #fff;
}
.btn-blue:hover {
  background-color: #2779bd;
}
.btn-blue.active {
  background-color: #075985;
}
.btn-blue[disabled] {
  background-color: #d4d4d8;
}
.btn-red {
  background-color: #e3342f;
  color: #fff;
}
.btn-red:hover {
  background-color: #cc1f1a;
}
.bg-blueGray-800 {
  --tw-bg-opacity: 1;
  background-color: rgba(30, 41, 59, var(--tw-bg-opacity));
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
.border-blueGray-100 {
  --tw-border-opacity: 1;
  border-color: rgba(241, 245, 249, var(--tw-border-opacity));
}
.border-t {
  border-top-width: 1px;
}
.block {
  display: block;
}
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
.items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.font-semibold {
  font-weight: 600;
}
.h-full {
  height: 100%;
}
.h-10 {
  height: 2.5rem;
}
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.mr-auto {
  margin-right: auto;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mt-auto {
  margin-top: auto;
}
.mt-4 {
  margin-top: 1rem;
}
.max-w-sm {
  max-width: 24rem;
}
.opacity-50 {
  opacity: 0.5;
}
.overflow-y-auto {
  overflow-y: auto;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.pt-6 {
  padding-top: 1.5rem;
}
.fixed {
  position: fixed;
}
.relative {
  position: relative;
}
.inset-0 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.top-0 {
  top: 0px;
}
.left-0 {
  left: 0px;
}
.bottom-0 {
  bottom: 0px;
}
.text-center {
  text-align: center;
}
.w-5\/6 {
  width: 83.333333%;
}
.w-full {
  width: 100%;
}
.z-50 {
  z-index: 50;
}
[fill~="none"] {
  fill: none;
}
.list a:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(236, 253, 245, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(27, 84, 74, var(--tw-text-opacity));
}
.list a {
  border-radius: 0.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding: 1rem;
  --tw-text-opacity: 1;
  color: rgba(37, 94, 84, var(--tw-text-opacity));
}
.list a.active {
  --tw-bg-opacity: 1;
  background-color: rgba(236, 253, 245, var(--tw-bg-opacity));
  --tw-text-opacity: 1;
  color: rgba(27, 84, 74, var(--tw-text-opacity));
}
.button {
  --tw-bg-opacity: 1;
  background-color: rgba(220, 38, 38, var(--tw-bg-opacity));
  border-radius: 0.25rem;
  display: block;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;
  line-height: 1;
  margin-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  width: 100%;
}
.button:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(185, 28, 28, var(--tw-bg-opacity));
}
.link {
  --tw-bg-opacity: 1;
  background-color: rgba(2, 132, 199, var(--tw-bg-opacity));
  border-radius: 0.25rem;
  display: block;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1rem;
  line-height: 1;
  margin-bottom: 0.75rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
.link:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(3, 105, 161, var(--tw-bg-opacity));
}

header {
  background-color: var(--app-bar-bg);
  --tw-shadow-color: 0, 0, 0;
  --tw-shadow: 0 20px 25px -5px rgba(var(--tw-shadow-color), 0.1), 0 10px 10px -5px rgba(var(--tw-shadow-color), 0.04);
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  color: var(--app-bar-color);
  padding-left: var(--app-bar-px-s);
  padding-right: var(--app-bar-px-s);
  padding-top: var(--app-bar-py);
  padding-bottom: var(--app-bar-py);
  min-height: var(--app-bar-height);
}
.close-icon {
  border-width: 0px;
  cursor: pointer;
}
.close-icon:active {
  border-width: 0px;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.close-icon:focus {
  border-width: 0px;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.close-icon:hover {
  --tw-text-opacity: 1;
  color: rgba(249, 250, 251, var(--tw-text-opacity));
}
.svg {
  height: 1.5rem;
  width: 1.5rem;
}
</style>