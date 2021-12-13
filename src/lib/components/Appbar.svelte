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
            <button on:click={toggle} class="navbar-burger"> 
                <svg class="svg" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Mobile menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>                     
        </div>                                  
    </nav>             
</header>

<style>
    .font-semibold {
    font-weight: 600;
    }
    .h-4 {
    height: 1rem;
    }
    .text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
    }
    .leading-none {
    line-height: 1;
    }
    .fill-current {
    fill: currentColor;
    }
    .w-4 {
    width: 1rem;
    }

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
    padding-top: var(--app-bar-py);
    padding-bottom: var(--app-bar-py);
    min-height: var(--app-bar-height);
    }
    @media (min-width: 640px) {
        nav {
            padding-left: var(--app-bar-px-l);
            padding-right: var(--app-bar-px-l);
        }
    }
    img {
    height: 2.5rem;
    }
.nav-burger {
    border-radius: 0.25rem;
    border-width: 1px;
    border-style: solid;
    border-color: var(--app-bar-bg);
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    cursor: pointer;
}
.nav-burger:active {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.nav-burger:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.nav-burger:hover {
  --tw-text-opacity: 1;
  color: rgba(249, 250, 251, var(--tw-text-opacity));
}
.svg {
  @apply fill-current h-4 w-4;
}
</style>