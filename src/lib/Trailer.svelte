<script lang="ts">
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let x = 0;
	let y = 0;
	let scale = 1;
	let opacity = 0;

	const xTween = tweened(x, {
		duration: 200,
		easing: cubicOut
	});

	const yTween = tweened(y, {
		duration: 200,
		easing: cubicOut
	});

	const scaleTween = tweened(scale, {
		duration: 200,
		easing: cubicOut
	});

	const opacityTween = tweened(opacity, {
		duration: 200,
		easing: cubicOut
	});

	onMount(() => {
		document.addEventListener('mousemove', (e) => {
			x = e.clientX - 50;
			y = e.clientY - 50;
			scale = 1 - Math.min(Math.abs(e.movementX), 10) / 20;
			opacity = 1 - Math.min(Math.abs(e.movementX), 10) / 20;
			xTween.set(x);
			yTween.set(y);
			scaleTween.set(scale);
			opacityTween.set(opacity);
		});
	});

	$: x = $xTween;
	$: y = $yTween;
	$: scale = $scaleTween;
	$: opacity = $opacityTween;
</script>

<div class="trailer">
	<div
		class="trailer__cursor"
		style="top: {y}px; left: {x}px; transform: scale({scale}); opacity: {opacity};"
	/>
</div>

<style lang="scss">
	.trailer {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		pointer-events: none;
		z-index: 9999;
	}

	.trailer__cursor {
		position: absolute;
		top: 0;
		left: 0;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: 2px solid var(--accent-color);
		border-color: plum;
		transform: translate(-50%, -50%);
		transform-origin: 50% 50%;
		transition: all 0.2s ease-out;
		opacity: 0;
	}
</style>