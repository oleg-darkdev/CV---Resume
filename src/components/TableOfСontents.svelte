<script>
import { TileGroup, RadioTile } from "carbon-components-svelte";

export let selectedSection, values;
</script>



<TileGroup style="max-width: 400px; width: 100%; margin-bottom: 30px;"
	legend=""
	on:select={({ detail }) => {
        (selectedSection = detail)
        console.log((selectedSection))
    }}
	>
	{#each values as value}
		<RadioTile style="background-color: {value.color};" {value} checked={selectedSection === value}>{value.text}</RadioTile>
	{/each}
	<!-- <RadioTile value="10"  disabled>{}</RadioTile> -->
	<h2 style="color: {selectedSection.color};">{selectedSection.text}</h2>
</TileGroup>