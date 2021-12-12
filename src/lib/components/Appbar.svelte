<script>
    export let isOpen = false;
    const toggle = () => (isOpen = !isOpen);
</script>

<header class="fixed top-0 left-0 right-0 z-20 px-4 bg-parker-500 text-white shadow-xl"> 
    <nav class="flex justify-between items-center py-6 sm:px-4">
        <a class="text-3xl font-semibold leading-none" href="/">  <img class="h-10" src="https://nwp-cgn.de/img/poser/favicon.svg" alt="" width="auto"/></a> 
        <div> 
            <button on:click={toggle} class="navbar-burger flex py-2 px-3 rounded border"> 
                <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>                     
        </div>                                  
    </nav>             
</header>

<style>

</style>