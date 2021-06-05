<script context="module">
	export const prerender = true;
</script>

<script>
	import Login from '$lib/components/Login.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<Login />
</section>
