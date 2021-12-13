<script>
	import {supabase} from '$lib/db'
    const fetchData = async () => {
        loading = true;
        try {
            let { data, error } = await supabase
            .from('cssData')
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
    fetchData()
</script>

<svelte:head>
    <title>Css-Variables</title>
</svelte:head>

<section class="page-container">
    <header>
        <h2>CssVars</h2>
        <div class="flex items-center justify-between">
            <button on:click={fetBtn} class="btn btn-blue">{loading ? '... loading' : 'Fetch Data'}</button>
        </div>
    </header>
    <article class="py-8">

        <ul class="divide-y divide-gray-200">
            {#each daten as {id, varname, name1, name2, name3, val, attr, od}}
                    <li>
                        <a href="/cssvars/edit/{id}" class="block hover:bg-gray-50 dark:hover:bg-gray-900">
                            <div class="px-4 py-4 sm:px-6">
                                <div class="flex items-center justify-between">
                                    <p class="text-md text-gray-700 dark:text-white md:truncate">
                                        <span>--{varname !== 'null' ? `${varname}` : `varname`}-{name1 !== 'null' ? `-${name1}` : ``}-{name2 ? `-${name2}` : ``}{name3 !== 'null' ? `-${name3}` : ``}</span>
                                        <span class="text-parker-400">{val !== 'null' ? `: ${val};` : ``}</span>
                                        </p>
                                    <div class="ml-2 flex-shrink-0 flex">
                                        <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            {id} </p>
                                    </div>
                                </div>
                                <div class="mt-2 sm:flex sm:justify-between">
                                    <div class="sm:flex">
                                        <p class="flex items-center text-md font-light text-gray-500 dark:text-gray-300">
                                            <span class="text-red-800">{attr && attr !== 'null' ? `${attr}` : `attr`}: &nbsp;</span>
                                            <span class="text-parker-400"> val(--{varname !== 'null' ? `${varname}` : `varname`}-{name1 !== 'null' ? `-${name1}` : ``}-{name2 ? `-${name2}` : ``}{name3 !== 'null' ? `-${name3}` : ``});</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    {/each}
                </ul>   
              
    </article>
</section>
<style>

</style>