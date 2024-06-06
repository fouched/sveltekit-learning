<script lang="ts">
	export let someColor = 'green'
	const changeColor = () => {
		if (someColor === 'blue')
			someColor = 'red'
		else {
			someColor = 'blue'
		}
	}
</script>
<div class="text-center">
	<h2>Fun</h2>
	<hr/>
</div>
<h3 style="color: {someColor}">Svelte &amp; SvelteKit rocks!!</h3>
<button on:click={()=>changeColor()}>Change Color</button>