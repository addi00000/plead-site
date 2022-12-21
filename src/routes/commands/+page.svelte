<script lang="ts">
	import commands from './commands.json';

	import { blur } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
</script>

<main class="main" transition:blur={{ duration: 500, easing: cubicOut }}>
	<h1>Commands</h1>
	<div class="categories">
		{#each Object.entries(commands) as [category, commands]}
			<div class="category">
				<h2>{category}</h2>
				<div class="commands">
					{#each Object.entries(commands) as [command, data]}
						<a href="/commands/{command}" class="command">
							<h3>.{command}</h3>
							<h4>{data.description}</h4>
						</a>
					{/each}
				</div>
			</div>
		{/each}
	</div>
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

		margin: 5rem 0;

		h1 {
			font-size: 2rem;
			font-weight: 600;
			margin-bottom: 0.5rem;

			opacity: 0;
			animation: fade-in 1s ease forwards 0.25s;
		}

		.categories {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			max-width: 800px;
			height: 100%;
			overflow: none;

			.category {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 100%;
				overflow: none;

				h2 {
					width: 100%;
					text-align: left;
					text-transform: capitalize;

					opacity: 0;
					animation: fade-in-left 1s ease forwards 0.5s;
				}

				.commands {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 100%;
					overflow: none;

					.command {
						display: grid;
						grid-template-columns: 1fr 2fr;
						grid-template-rows: 1fr;
						grid-template-areas: 'command description';
						width: 100%;
						height: 100%;
						padding: 0 1rem;
						overflow: none;
						border-bottom: 1px solid var(--color-border);

						text-decoration: none;
						color: inherit;

						opacity: 0;
						animation: fade-in-left 1s ease forwards 0.75s;
						// make the fadin staggered from top to bottom for each command

						&:hover {
							background-color: var(--color-background-soft);
						}

						h3 {
							grid-area: command;
							margin: 0;
							font-size: 1.25rem;
							font-weight: 600;
							text-transform: lowercase;
						}

						h4 {
							grid-area: description;
							margin: 0;
							font-size: 1.05rem;
							font-weight: 400;
							text-transform: lowercase;
						}
					}
				}
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

	@keyframes fade-in-left {
		0% {
			opacity: 0;
			transform: translateX(-1rem);
		}
		100% {
			opacity: 1;
			transform: translateX(0);
		}
	}
</style>
