<script lang="ts">
	import Fa from 'svelte-fa';

	import { faBoltLightning, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
</script>

<section>
	<div class="hero">
		<div class="hero__content">
			<h1 class="hero__title">Plead.</h1>
			<p class="hero__subtitle">
				A general purpose Discord bot with utilities to help you manage your server and engage with
				your community.
			</p>
			<div class="hero__buttons">
				<div class="hero__button invert">
					<a
						href="https://discord.com/api/oauth2/authorize?client_id=1048354393726140437&permissions=136&scope=bot"
						target="_blank"
						rel="noopener noreferrer">Invite</a
					>
					<Fa icon={faBoltLightning} class="hero__button-icon" />
				</div>
				<div class="hero__button noninvert">
					<a href="/support" target="_blank" rel="noopener noreferrer">Support</a>
					<Fa icon={faCircleInfo} class="hero__button-icon" />
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		position: relative;
		width: 100%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background: var(--color-background);
		color: var(--color-text);
		z-index: 100;
	}

	.hero {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 100;
		position: relative;

		.hero__content {
			position: relative;
			width: 100%;
			max-width: 800px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			z-index: 100;
			position: relative;
		}

		.hero__title {
			font-size: 5rem;
			font-weight: 800;
			line-height: 1;
			letter-spacing: -0.06em;
			text-align: center;
			margin-bottom: 0.5rem;
			background: var(--color-gradient-text);
			background-size: 200% auto;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-clip: text;
			transition: all 0.3s ease-in-out;

			opacity: 0;
			animation: gradient 2s ease-in-out infinite, fade-in 1s ease forwards 0.3s;

			&:hover {
				animation-play-state: paused;
				background-size: 100% auto;
				background-position: center center;
				scale: 1.05;
			}

			@keyframes gradient {
				0% {
					background-position: left center;
				}
				50% {
					background-position: right center;
				}
				100% {
					background-position: left center;
				}
			}
		}

		.hero__subtitle {
			font-size: 1.5rem;
			font-weight: 500;
			text-align: center;
			margin-bottom: 3rem;
			padding: 0 1rem;

			opacity: 0;
			animation: fade-in 1s ease forwards 0.6s;
		}

		.hero__buttons {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			z-index: 100;
			position: relative;

			.hero__button:nth-child(1) {
				opacity: 0;
				animation: fade-in 1s ease forwards 1s;
			}

			.hero__button:nth-child(2) {
				opacity: 0;
				animation: fade-in 1s ease forwards 1.3s;
			}
		}

		.hero__button {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			z-index: 100;
			position: relative;
			border-radius: 0.5rem;
			padding: 0.75rem 1.5rem;
			margin: 0 0.5rem;
			gap: 0.5rem;
			font-size: 1rem;
			font-weight: 500;
			text-decoration: none;
			transition: all 0.2s ease-in-out;

			& > a {
				color: inherit;
				text-decoration: none;
				width: 100%;
				height: 100%;
			}

			&:hover {
				transform: translateY(-0.5rem);
			}

			&.invert {
				color: var(--color-background-mute);
				background-color: var(--color-heading);
				border: 1px solid var(--color-border);

				&:hover {
					color: var(--color-heading);
					background-color: var(--color-background-mute);
				}
			}

			&.noninvert {
				color: var(--color-text);
				background-color: var(--color-background);
				border: 1px solid var(--color-border);

				&:hover {
					color: var(--color-background);
					background-color: var(--color-text);
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
</style>
