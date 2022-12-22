<script lang="ts">
	import commandsData from './commands.json';
	const commands = commandsData as Record<string, Record<string, { description: string }>>;

	import Fa from 'svelte-fa';
	import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
	import { onMount } from 'svelte';
	import { blur } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	
	onMount(() => {
		const up = document.querySelector('.nav-arrows .up') as HTMLDivElement;
		const down = document.querySelector('.nav-arrows .down') as HTMLDivElement;

		up.addEventListener('mousedown', () => {
			window.scrollBy({
				top: -window.innerHeight,
				behavior: 'smooth',
			});
		});

		down.addEventListener('mousedown', () => {
			window.scrollBy({
				top: window.innerHeight,
				behavior: 'smooth',
			});
		});
	});
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
	<div class="nav-arrows">
		<div class="up">
			<Fa icon={faAngleUp} class="icon" />
		</div>
		<div class="down">
			<Fa icon={faAngleDown} class="icon" />
		</div>
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

		.nav-arrows {
			position: fixed;
			top: 50%;
			right: 0;
			transform: translateY(-50%);

			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 5rem;
			height: 100vh;
			overflow: none;

			.up,
			.down {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 1rem;
				height: 1rem;
				padding: 0.5rem;
				margin: 0.5rem 0;
				overflow: none;
				
				background-color: var(--color-background-soft);
				border-radius: 0.5rem;
				
				opacity: 0;
				animation: fade-in-foward 1s ease forwards 0.25s;
				
				cursor: pointer;
				transition: transform 0.2s ease;

				&:hover {
					transform: scale(1.1);
				}

				&:active {
					transform: scale(0.9) translateY(0.1rem);
				}

				.icon {
					transition: transform 0.2s ease;

					&:hover {
						transform: scale(1.1);
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

	@keyframes fade-in-foward {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>
