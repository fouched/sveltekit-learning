<script lang="ts">
	export let msg = ""
	let isTrue = true

	let people = [
		{
			id: 1,
			firstName: "Mary",
			lastName: "Jones",
			dob: "1997-02-03"
		},
		{
			id: 2,
			firstName: "Jack",
			lastName: "Smith",
			dob: "1990-04-06"
		},
	]

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
<hr />
<h3>People</h3>
<ul class="list-group">
	{#each people as person}
		<li class="list-group-item">{person.firstName} {person.lastName}</li>
	{/each}
</ul>