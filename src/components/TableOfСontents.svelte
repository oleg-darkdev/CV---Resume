<script>
	import { TileGroup, RadioTile } from "carbon-components-svelte";
	
	export let selectedSection, values;
</script>



<TileGroup style="max-width: 350px; width: 100%; margin-bottom: 30px;"
	legend=""
	on:select={({ detail }) => {
        (selectedSection = detail)
    }}>
	{#each values as value}
		<RadioTile style="background-color: {value.color};" {value} checked={selectedSection === value}>{value.text}</RadioTile>
	{/each}
</TileGroup>

<h2  style=" font-size: 6vw;">{selectedSection.text}</h2>

