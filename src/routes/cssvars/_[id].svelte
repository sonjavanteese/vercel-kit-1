<script>
	import { goto } from '$app/navigation';
	import {supabase} from '$lib/db'
    import { page } from '$app/stores';

    let id;
    let varname;
    let name1;
    let name2;
    let name3;
    let val;
    let attr;
    let od;
    const setData = (data) => {
        id = data[0].id;
        varname = data[0].varname;
        name1 = data[0].name1;
        name2 = data[0].name2;
        name3 = data[0].name3;
        val = data[0].val;
        attr = data[0].attr;
        od = data[0].od;
        daten = data;
    }
    const fetchData = async (id) => {
        loading = true;
        try {
            let { data, error } = await supabase
            .from('cssData')
            .select('*').eq('id', id)   
            if (error) throw error
            setData(data)
        } catch (error) {
            console.error(error)
        } finally {
            loading = false;
        }
    }
    const updateData = async (id) => {
        loading = true;
        try {
            const { data, error } = await supabase
            .from('cssData')
            .update({ varname: varname,name1: name1,name2: name2,name3: name3,val: val,attr: attr,od: od })
            .eq('id', id)
            if (error) throw error;
            console.log("Update: ", data);
        } catch (error) {
            console.error(error);
        } finally {
            loading = false;
        }
    };
    const deleteData = async (id) => {
        loading = true;
        try {
            const { data, error } = await supabase
                .from('cssData')
                .delete()
                .eq('id', id)
            if (error) throw error;
            console.log("Delete: ", data);
        } catch (error) {
            console.error(error);
        } finally {
            loading = false;
            goto('/cssvars')
        }
    };
    let daten = [];
    let loading = false;
    let op2 = false;
    id = $page.params.id
    if (id) {
        fetchData(id)
    }
    const handleSubmit = () => {
        console.log("Handle Submit");
        updateData(id)
    };
</script>

<svelte:head>
    <title>Css-Variables</title>
</svelte:head>

<section class="page-container">
    <header>
        
        <div class="flex items-center">
            <a href="/cssvars" class="text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" style="width: 32px; height: 32px;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </a>
            <h2>CssVars</h2>
        </div>

    </header>
    <article class="py-8">
    
            {#each daten as {id, varname, name1, name2, name3, val, attr, od}}
                <div class="py-2 text-red-700">
                    <code>--{varname !== 'null' ? `${varname}` : `varname`}-{name1 !== 'null' ? `-${name1}` : ``}-{name2 ? `-${name2}` : ``}{name3 !== 'null' ? `-${name3}` : ``}: {val !== 'null' ? `${val};` : ``}</code>
                </div>
                {:else}
                <!-- <div>press 'Fetch' button</div> -->
            {/each}
      
 
        
            <form on:submit|preventDefault={handleSubmit}>
         
                <div class="mb-1">
                    <label class="label" for="varname">VarName</label>
                    <input class="input" bind:value={varname} name="varname" type="text" placeholder="VarName">
                </div>
                <div class="mb-1">
                    <label class="label" for="name1">VName1</label>
                    <input class="input" bind:value={name1} name="name1" type="text" placeholder="VName1">
                </div>
                <div class="mb-1">
                    <label class="label" for="name2">VName2</label>
                    <input class="input" bind:value={name2} name="name2" type="text" placeholder="VName2">
                </div>
                <div class="mb-1">
                    <label class="label" for="name3">VName3</label>
                    <input class="input" bind:value={name3} name="name3" type="text" placeholder="VName3">
                </div>
                <div class="mb-1">
                    <label class="label" for="val">Value</label>
                    <input class="input" bind:value={val} name="val" type="text" placeholder="Value">
                </div>
                <div class="mb-1">
                    <label class="label" for="attr">Attribute</label>
                    <input class="input" bind:value={attr} name="attr" type="text" placeholder="Attribute">
                </div>
                <div class="mb-1">
                    <label class="label" for="od">Order</label>
                    <input class="input" bind:value={od} name="od" type="text" placeholder="Order">
                </div>
                <div class="py-2">
                    <button type="submit" class="btn btn-blue">Update</button>
                    <button type="button" on:click={() => deleteData(id)} class="btn btn-red">Delete</button>
                </div>
            </form>
             
               
       
    </article>
</section>

<style global>
    .label {
        @apply block w-full mb-1 text-xs text-gray-500;
    }
    .input {
        @apply block w-full border border-gray-200 rounded-lg text-gray-500;
    }
    .input:focus {
        @apply text-blue-800;
    }
</style>