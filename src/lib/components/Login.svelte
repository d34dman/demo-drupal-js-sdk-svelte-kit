<script>
	import { createEventDispatcher } from 'svelte';
  import Alert from '$lib/components/Alert.svelte';
	const dispatch = createEventDispatcher();
	let user = { username: '', password: '' };
	export let error = '';
	export let inProgress = false;
	function login() {
		dispatch('login', user);
	}
	let rememberMe = false;
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="flex-col justify-center hero-content lg:flex-row">
    <div class="text-center lg:text-left">
      <h1 class="mb-5 text-5xl font-bold">
            Hello there
          </h1> 
      <p class="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
    </div> 
    <form
			on:submit|preventDefault={login}
			autocomplete={rememberMe ? 'on' : 'off'}
			action="#"
			method="POST"
      class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
		>
      {#if error}
        <Alert message={error} type="error" />
      {/if}
      <div >
        <div class="card-body">
          <div class="form-control">
            <label class="label" for="username">
              <span class="label-text">Username</span>
            </label> 
            <input 
              bind:value={user.username}
              autocomplete={rememberMe ? 'name' : 'off'}
              required
              id="username" type="text" placeholder="username" class="input input-bordered">
          </div> 
          <div class="form-control">
            <label class="label" for="password">
              <span class="label-text">Password</span>
            </label> 
            <input 
              bind:value={user.password}
              autocomplete={rememberMe ? 'current-password' : 'off'}
              required
              id="password" type="text" placeholder="password" class="input input-bordered"> 
            <span class="label">
              <a href="/user/password" class="label-text-alt">Forgot password?</a>
            </span>
          </div> 
          <div class="form-control mt-6">
            <button 
            disabled={inProgress}
					  type="submit"
            class="btn btn-primary">Sign in</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>