<script lang="ts">
	import { onMount } from 'svelte';

	let isScrolled = false;
	onMount(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0 && !isScrolled) {
				isScrolled = true;
			} else if (window.scrollY === 0 && isScrolled) {
				isScrolled = false;
			}
		});
	});
</script>

<nav class="navbar" class:scrolled={isScrolled}>
	<div class="navbar-routes">
		<a href="/" class="navbar-link">Home</a>
		<a href="/commands" class="navbar-link">Commands</a>
		<a href="/support" class="navbar-link">Support</a>
	</div>
</nav>

<style lang="scss">
	nav.navbar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;

		display: flex;
		justify-content: center;
		align-items: center;

		padding: 0 2rem;
		height: 4rem;

		transition: background-color 0.2s, height 0.2s;

		&.scrolled {
			// background-color: rgba(0, 0, 0, 0.8);
			border-bottom: 1px solid var(--color-border);
			backdrop-filter: blur(20px);
			height: 3rem;
		}

		.navbar-routes {
			display: flex;
			flex-direction: row;
			gap: 36px;
			align-items: center;
		}

		.navbar-link {
			position: relative;
			display: block;
			font-size: 0.9rem;
			font-weight: 600;
			color: var(--color-text);
			text-decoration: none;
			transition: color 0.2s;

			&:hover {
				color: var(--color-heading);
			}
		}
	}
</style>
