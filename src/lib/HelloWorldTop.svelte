<script lang="ts">
	export let msg = ""
	let isTrue = true

	const toggleTrue = () => {
		isTrue = !isTrue
	}
</script>
<h1 class="h1-blue">{msg}</h1>
<hr />
{#if isTrue}
	<p>Is true</p>
{:else}
	<p>Is false</p>
{/if}
<hr />
<a href="#!" class="btn btn-outline-secondary" on:click={toggleTrue}>Toggle isTrue</a>