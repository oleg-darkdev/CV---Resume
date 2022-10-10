<script>
	import Project from './Portfolio/Project.svelte';
	import projectsData from '../lib/data/projects';
</script>

<div class="projects-wrap row flex-wrap">
    {#each projectsData as project}
		<Project {project}/>
    {/each}
</div>


<style>
	.projects-wrap {
		justify-content: center;
		flex-direction: row;
		align-content: center;
		width: 100%;
	}
</style>