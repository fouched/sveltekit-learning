<script lang="ts">

	import InputText from '$lib/components/InputText.svelte';
	import InputDate from '$lib/components/InputDate.svelte';

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

	let firstName = ''
	let lastName = ''
	let dob = ''


	const toggleTrue = () => {
		isTrue = !isTrue
	}
</script>
<h1 class="h1-blue">Hello Svelte!</h1>
<hr />
{#if isTrue}
	<p>Is true</p>
{:else}
	<p>Is false</p>
{/if}
<hr />
<a href="#!" class="btn btn-outline-secondary" on:click={toggleTrue}>Toggle isTrue</a>
<hr />
	<form autoComplete="off">
		<InputText
			title="First Name"
			name="firstName"
			autoComplete="firstNameNew"
			cssClass="form-control"
			bind:value = {firstName}
		/>
		<InputText
			title="Last Name"
			name="lastName"
			autoComplete="lastNameNew"
			cssClass="form-control"
			bind:value={lastName}
		/>
		<InputDate
			title="Date of birth"
			name="dob"
			autoComplete="dobNew"
			cssClass="form-control"
			bind:value={dob}
		/>
	</form>
<div>
<!--	Parent = {simpleValue}-->
	First Name: {firstName}<br />
	Last Name: {lastName}<br />
	DOB: {dob}<br />
</div>
<h3>People</h3>
<ul class="list-group">
	{#each people as person}
		<li class="list-group-item">{person.firstName} {person.lastName}</li>
	{/each}
</ul>