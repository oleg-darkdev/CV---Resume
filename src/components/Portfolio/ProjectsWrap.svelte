<script>
    import { ClickableTile } from "carbon-components-svelte";
    import { Tile } from "carbon-components-svelte";
    import { Button } from "carbon-components-svelte";
    import Close from "carbon-icons-svelte/lib/Close.svelte";
    import CaretDown from "carbon-icons-svelte/lib/CaretDown.svelte";

    import Project from './Project.svelte';

    export let projectslist, showThisList, titleText;
</script>

<div class="column" style="margin-bottom: 5px; ">
    <ClickableTile style="" on:click="{() => {showThisList = !showThisList}}">
        <div class="row title-wrap">
            <h2 style="margin-left: 7%;">{titleText}</h2>
            {#if showThisList}  
                <Button style="height: 50px; background-color: #111111;" iconDescription="Hide section" icon={Close}  />
            {/if}
        </div>
    </ClickableTile>


    {#if showThisList}  
        <Tile style="margin: -5px 0 15px 0 ;">        
            <div style="margin: 0 0 25px 0;" class="projects-wrap row flex-wrap mb-15">
                {#each projectslist as project}
                    <Project {project}/>
                {/each}
            </div>
            <div class="show-btn">
                <Button kind="tertiary"  on:click="{() => showThisList = !showThisList}">Hide</Button>
            </div>
        </Tile>
    {/if}
</div>



<style>
    .projects-wrap {
		justify-content: center;
		align-content: center;
		width: 100%;
	}

    .title-wrap {
        justify-content: space-between;
        /* max-height: 30px; */
    }
    .show-btn {
        display: flex;
        justify-content: flex-end;
        padding-right: 7%;
    }


</style>