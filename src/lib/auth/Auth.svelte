<script>
	import SignIn from './forms/signin.svelte'
	import { nwp_user } from './db'
</script>

{#if $nwp_user}
	<slot />
{:else}
	<SignIn />
{/if}
