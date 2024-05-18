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
<h2 style="color: {someColor}">Svelte &amp; SvelteKit rocks!</h2>
<button on:click={()=>changeColor()}>Change Color</button>