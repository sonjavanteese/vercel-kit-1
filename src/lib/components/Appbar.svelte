<script>
    export let isOpen = false;
    const toggle = () => (isOpen = !isOpen);
</script>

<header class="app-bar"> 
    <nav class="navbar">
        <a class="text-3xl font-semibold leading-none" href="/">
            <img src="https://nwp-cgn.de/img/poser/favicon.svg" alt="" width="auto"/>
        </a> 
        <div> 
            <button on:click={toggle} class="flex items-center justify-center"> 
                <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>                     
        </div>                                  
    </nav>             
</header>

<style>
    header {
    background-color: var(--app-bar-bg);
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    --tw-shadow-color: 0, 0, 0;
    --tw-shadow: 0 20px 25px -5px rgba(var(--tw-shadow-color), 0.1), 0 10px 10px -5px rgba(var(--tw-shadow-color), 0.04);
    -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    color: var(--app-bar-color);
    z-index: var(--app-bar-zindex);
    }
    nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    padding-left: var(--app-bar-px-s);
    padding-right: var(--app-bar-px-s);
    padding-top: 0;
    padding-bottom: 0;
    min-height: var(--app-bar-height);
    }
    img {
    height: 2.5rem;
    }
    button {
        @apply flex items-center justify-center border-0 rounded;
        min-height: var(--app-bar-height);
        min-width: var(--app-bar-height);
    }
    button:focus {
        @apply outline-none;
    }
</style>