
<script>
	import Login from '$lib/components/Login.svelte';
	import { auth } from '$lib/drupal';
	import { onMount } from 'svelte';
	import Alert from '$lib/components/Alert.svelte';
	import Page from '$lib/components/Page.svelte';
	let user = getDefaultUserInfo();
	let inProgress = false;
	let error = null;
	let initialized = false;
	onMount(async () => {
		await auth.getSessionToken().catch((err) => {
			error = err.message;
			return false;
		});
		user.loggedIn = await auth.loginStatus().catch((err) => {error = err.message; return false;});
		initialized = true;
	});
	function getDefaultUserInfo() {
		return { username: '', password: '', loggedIn: false };
	}
	function logout() {
		auth
			.forcedLogout()
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
{#if error}
<Alert type="error" message={error} />
{/if}
{#if initialized === true} 
	{#if user.loggedIn}
		<Page on:logout={logout} {error} />
	{:else}
		<Login on:login={login} {error} {inProgress} />
	{/if}
{/if}
</section>
