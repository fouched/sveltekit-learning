<script lang="ts">
	export let title: string
	export let cssClass: string
	export let name: string
	export let autoComplete: string
	export let value: string
</script>
<div class="mb-3">
	<label for={name}>{title}</label>
	<input
		type="text"
		title={title}
		class={cssClass}
		autocomplete={autoComplete}
		bind:value={value}
	/>

</div>