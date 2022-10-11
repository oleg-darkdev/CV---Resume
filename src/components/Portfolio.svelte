<script>
	import ProjectsWrap from './Portfolio/ProjectsWrap.svelte';
		
	import projectsData from '../lib/data/projects';

	let showSections = {
		boardgamesApp: false,
		socialProjects: false,
		designProjects: false,
		opensourceNpm: false
	}
	
		
</script>

<div class="column">
	<!-- && == true -->
	{#if !showSections.socialProjects && !showSections.opensourceNpm && !showSections.designProjects  }
		<ProjectsWrap titleText='🎲 App`s for boardgames ' projectslist={projectsData.boardgamesApp}  bind:showThisList={showSections.boardgamesApp}/>
	{/if}
	{#if !showSections.boardgamesApp && !showSections.opensourceNpm && !showSections.designProjects  }
		<ProjectsWrap titleText='👥 Social projects' projectslist={projectsData.socialProjects}  bind:showThisList={showSections.socialProjects}/>
	{/if}
	{#if !showSections.socialProjects && !showSections.boardgamesApp && !showSections.designProjects  }
		<ProjectsWrap titleText='🧩 Open source ' projectslist={projectsData.opensourceNpm} bind:showThisList={showSections.opensourceNpm}/>
	{/if}
	{#if !showSections.boardgamesApp && !showSections.opensourceNpm && !showSections.socialProjects  }
		<ProjectsWrap titleText='🖍 Only design' projectslist={projectsData.design}  bind:showThisList={showSections.designProjects}/>
	{/if}
</div>

<style>

</style>