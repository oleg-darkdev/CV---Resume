<script>
  import { Tile } from "carbon-components-svelte";


const portfolioProjects = [
	{
		img: '',
		text: '',
		github: ''
	},
	{
		img: '',
		text: '',
		github: ''
	},
	{
		img: '',
		text: '',
		github: ''
	},
	{
		img: '',
		text: '',
		github: ''
	},
	{
		img: '',
		text: '',
		github: ''
	},
];
</script>



<div class="projects-wrap row flex-wrap">
    {#each portfolioProjects as project}
        <Tile style="background-image: url({project.img}); width: 432px; height: 226px; margin: 0.3%; "></Tile>
        <!-- border: 2px solid #fff; -->
    {/each}
</div>

<style>

	.projects-wrap {
		justify-content: space-between;
		flex-direction: row;
	}
</style>