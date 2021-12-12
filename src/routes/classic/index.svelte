<script>
	import {supabase} from '$lib/db'
    const fetchData = async () => {
        loading = true;
        try {
            let { data, error } = await supabase
            .from('bb_classics')
            .select('*')    
            if (error) throw error
            daten = data
        } catch (error) {
            alert(error)
        } finally {
            loading = false;
        }
    }
    let daten = [];
    let loading = false;
    let op2 = false;
    const fetBtn = () => fetchData()
</script>



<section class="page-container">
    <header>
        <h2>Classics</h2>
        <p>
            <button on:click={fetBtn} class="btn btn-blue">{loading ? '... loading' : 'Fetch Data'}</button>
            <label class="btn btn-blue ml-2" for="op2">
                <span>Op 2</span>
                <input bind:checked={op2} type="checkbox" name="op2" id="op2" class="hidden">
            </label>
        </p>
    </header>
    <article class="py-8">
        {#if !op2}      
            {#each daten as {id, titel, info, tags, screen, fileurl, thumb}}
                <div>{titel}</div>
                {:else}
                <div>press 'Fetch' button</div>
            {/each}
        {:else}
            <ul class="flex flex-col divide divide-y">
                {#each daten as {id, titel, info, tags, screen, fileurl, thumb}}
                    <li class="flex flex-row">
                        <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                            <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
                                <figure class="block relative">
                                    <img alt="profil" src="{thumb}" class="mx-auto object-cover rounded-full h-10 w-10" />
                                </figure>
                            </div>
                            <div class="flex-1 pl-1 mr-16">
                                <div class="font-medium dark:text-white">
                                    {titel}
                                </div>
                                <div class="text-gray-600 dark:text-gray-200 text-sm">
                                    {tags}
                                </div>
                            </div>
                            <div class="text-gray-600 dark:text-gray-200 text-xs">
                                {id}
                            </div>
                        </div>
                    </li>
                {:else}
                    <li>press 'Fetch' button</li>
                {/each}
            </ul>    
        {/if}        
    </article>
</section>
<style>

</style>