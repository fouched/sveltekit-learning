<script lang="ts">
	export let form;

</script>

<div class="col-md-6 offset-md-3">
	{#if form}
		{#if form?.success}
			<div class="alert alert-success">Form saved. Enter another?</div>
		{:else}
			<div class="alert alert-danger">Invalid form data</div>
		{/if}
	{/if}
	<h2 class="mb-3 text-center">Basic Form</h2>
	<form method="POST">
		<label for="firstName" class="form-label">First Name</label>
		<input id="firstName" name="firstName" type="text" class="form-control" autocomplete="off">
		<label for="lastName" class="form-label">Last Name</label>
		<input id="lastName" name="lastName" type="text" class="form-control" autocomplete="off">
		<label for="email" class="form-label">Email</label>
		<input id="email" name="email" type="text" class="form-control" autocomplete="off">
		<label for="password" class="form-label">Password</label>
		<input id="password" name="password" type="password" class="form-control mb-3">
		<input type="submit" class="btn btn-primary" value="Save" />
	</form>
</div>