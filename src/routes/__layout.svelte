<script>
	import Header from '$lib/components/Header/index.svelte';
	import Footer from '$lib/components/Footer.svelte';
  	import '../tailwind.css'
	import '../app.css';
</script>
<Header />
<main>
	<slot />
</main>
<Footer />