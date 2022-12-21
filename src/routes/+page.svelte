<script lang="ts">
	import { blur } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import Hero from '$lib/Hero.svelte';
</script>

<main class="main" transition:blur={{ duration: 500, easing: cubicOut }}>
	<Hero />
</main>
