<script context="module">
	export const prerender = true;
</script>

<script>
	import Login from '$lib/components/Login.svelte';
	import { auth } from '$lib/drupal';
	import { onMount } from 'svelte';
	let user = getDefaultUserInfo();
	let inProgress = false;
	let error = null;
	onMount(async () => {
		await auth.getSessionToken().catch((err) => {
			error = err.message;
			return false;
		});
		user.loggedIn = await auth.loginStatus().catch((err) => {error = err.message; return false;});
	});
	function getDefaultUserInfo() {
		return { username: '', password: '', loggedIn: false };
	}
	function logout() {
		auth
			.logout()
			.then(async () => {
				user = getDefaultUserInfo();
			})
			.catch((err) => {
				error = err.response.data.message;
			});
	}
	function login(event) {
		inProgress = true;
		const input = event.detail;
		auth
			.login(input.username, input.password)
			.then(
				(response) => {
					inProgress = false;
					user.username = response.data.current_user.name;
					user.loggedIn = true;
					user.password = '';
				},
				(err) => {
					error = err.response.data.message;
				}
			)
			.catch((err) => {
				error = err.response.data.message;
			});
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	
{#if user.loggedIn}
	logged in...
{:else}
	<Login on:login={login} {error} {inProgress} />
{/if}
</section>
