<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export const error = null;
	function logout() {
		dispatch('logout', {});
	}
</script>

<svelte:head>
	<title>Demo • Logged in</title>
</svelte:head>
<main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
	{#if error}
		<div
			class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
			role="alert"
		>
			<strong class="font-bold">Holy smokes!</strong>
			<span class="block sm:inline">{error}</span>
		</div>
	{/if}
	<div class="flex items-center w-full px-4 py-10 bg-cover card bg-base-200" style="background-image: url(&quot;https://picsum.photos/id/24/1000/300&quot;);">
	<div class="card glass lg:card-side text-neutral-content">
		<figure class="p-6">
		<img src="https://picsum.photos/id/119/300/200" class="rounded-lg shadow-lg">
		</figure> 
		<div class="max-w-md card-body">
		<h2 class="card-title">Glass</h2> 
		<p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
		<div class="card-actions">
			<button 

			on:click|once={logout}
			class="btn glass rounded-full">Logout</button>
		</div>
		</div>
	</div>
	</div>
</main>