<div class="container">
	<div class="row">
		<div class="col">
			<h1 class="mt-3">Svelte - Learning!</h1>
		</div>
	</div>
	<div class="row">
		<div class="col-md-2">
			<nav>
				<div class="list-group">
					<a href="/" class="list-group-item list-group-item-action">Home</a>
					<a href="/fun" class="list-group-item list-group-item-action">Fun</a>
					<a href="/basic-form" class="list-group-item list-group-item-action">Basic Form</a>
					<a href="/component" class="list-group-item list-group-item-action">Components</a>
				</div>
			</nav>
		</div>
		<div class="col-md-10">
			<slot />
		</div>
	</div>
</div>