<script>
	import { ContentSwitcher, Switch } from "carbon-components-svelte";	
	import resumeData from '../lib/data/resume';
	
	

  let selectedIndex = 1;

</script>


<div class="context-switcher-wrap column" >
    <ContentSwitcher size="xl" bind:selectedIndex>
        <Switch text="My Skills" />
        <Switch text="My Tools" />
    </ContentSwitcher>

    <div style="justify-content: {selectedIndex == 0 ? "start" : "end"};" class="row skill-toll-wrap flex-wrap">
            {#each selectedIndex == 0 ? resumeData.skillsList : resumeData.toolsList as item}
                <div  class="column skill-toll-container" on:click={() => window.open(item.link, "_blank")}>
                    <div style="background-image: url({item.img});" class="skill-img"></div>
                    <!-- <h2 style="text-align: center;">{item.text}</h2> -->
					<a href={item.link}>{item.text}</a>
                </div>
            {/each}
    </div>
</div>


<style>
    .context-switcher-wrap {
		width: 100%;
		display: flex;
		align-content: center;
		align-items: center;
	}

    .skill-img {
		max-width: 140px;
		max-height: 140px;
		width: 34vw;
		height: 34vh;
		
	}
	.skill-toll-wrap {
		margin: 15px 0  0 0;
		width: 100%;
	}
	.skill-toll-container {
		margin:  0 0.6%  25px 0.4%;
		padding: 5px;
		border-radius: 4px;

	}

	.skill-toll-container:hover {
		background-color: #161616;
		border: 2px solid #fff;
	} 

	a {
		text-decoration: none;
		color: #fff;
		font-size: 26px;
		text-align: center; 
	}
</style>