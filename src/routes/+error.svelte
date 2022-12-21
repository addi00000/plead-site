<script lang="ts">
	// import { page } from '$app/stores'
	// '$page.error' is possibly 'null'
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let emojis: Record<string, string> = {
		404: '🤔',
		500: '😱',
		503: '🚧'
	};

	onMount(() => {
		page.subscribe((page) => {
			if (page.error) {
				document.title = `${page.status} - ${page.error.message}`;
			}
		});
	});
</script>

<div class="error">
	<h1>
		{$page?.status}
		<span class="emoji">{$page.error ? emojis[$page.status] : ''}</span>
	</h1>
	<h2>{$page.error?.message}</h2>
</div>

<style lang="scss">
	.error {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		text-align: center;

		h1 {
			font-size: 10rem;
			font-weight: 700;
			margin: 0;
			margin-bottom: 0.5rem;

			.emoji {
				font-size: 2rem;
			}
		}

		h2 {
			font-size: 1.5rem;
			font-weight: 500;
			margin: 0;
		}

		span {
			font-size: 1.5rem;
		}

		// mobile
		@media (max-width: 600px) {
			h1 {
				font-size: 6rem;
			}

			h2 {
				font-size: 1.25rem;
			}

			span {
				font-size: 1.25rem;
			}
		}
	}
</style>
