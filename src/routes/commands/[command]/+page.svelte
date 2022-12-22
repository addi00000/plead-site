<script lang="ts">
	import { blur } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	export let data;
	const { name, command } = data;
	const { description, usage, aliases } = command;
</script>

<main class="main" transition:blur={{ duration: 500, easing: cubicOut }}>
	<h1>.{name}</h1>
	<p>Aliases: {aliases ? aliases.join(', ') || 'None' : 'None'}</p>
	<p>{description}</p>
	<p>.{name} {usage}</p>
</main>

<style lang="scss">
	main.main {
		position: relative;
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h1 {
			font-size: 2rem;
			font-weight: 600;
			margin-bottom: 0.5rem;

			border-bottom: 1px solid var(--color-border-hover);

			opacity: 0;
			animation: fade-in 1s ease forwards 0.5s;
		}

		p {
			font-size: 1.25rem;
			font-weight: 400;
			margin-bottom: 0.5rem;
			text-align: center;
			border-bottom: 1px solid var(--color-border-hover);

			&:nth-child(2) {
				opacity: 0;
				animation: fade-in 1s ease forwards 0.75s;
			}

			&:nth-child(3) {
				opacity: 0;
				animation: fade-in 1s ease forwards 1s;
			}

			&:nth-child(4) {
				opacity: 0;
				animation: fade-in 1s ease forwards 1.25s;
			}
		}
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
			transform: translateY(1rem);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
