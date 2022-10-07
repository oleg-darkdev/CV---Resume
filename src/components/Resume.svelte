<script>
  import { ContentSwitcher, Switch } from "carbon-components-svelte";

  let selectedIndex = 1;

  const skillsList = [
	{
		img: '',
		text: ''
	},
	{
		img: '',
		text: ''
	},
	{
		img: '',
		text: ''
	},
	{
		img: '',
		text: ''
	},
	{
		img: '',
		text: ''
	},
	{
		img: '',
		text: ''
	},
	{
		img: '',
		text: ''
	},
	{
		img: '',
		text: ''
	},
	{
		img: '',
		text: ''
	},
	{
		img: '',
		text: ''
	},
  ];

const toolsList = [
	{
		img: '',
		text: ''
	},
	{
		img: '',
		text: ''
	},
	{
		img: '',
		text: ''
	},
	{
		img: '',
		text: ''
	},
	{
		img: '',
		text: ''
	},
  ];
</script>


<div class="context-switcher-wrap column" >
    <ContentSwitcher size="xl" bind:selectedIndex>
        <Switch text="My Skills" />
        <Switch text="My Tools" />
    </ContentSwitcher>

    <div style="justify-content: {selectedIndex == 0 ? "start" : "end"};" class="row skill-toll-wrap flex-wrap">
            {#each selectedIndex == 0 ? skillsList : toolsList as item}
                <div  class="column skill-toll-container">
                    <div style="background-image: url({item.img});"class="skill-img"></div>
                    <h2>{item.text}</h2>
                </div>
            {/each}
    </div>
</div>


<style>
    .context-switcher-wrap {
		width: 80%;
		display: flex;
		align-content: center;
		align-items: center;
	}

    .skill-img {
		background-color: #fff;
		width: 140px;
		height: 140px;
		
	}

	.skill-toll-wrap {
		margin: 15px 0  0 0;
		width:100%;
	}
	.skill-toll-container {
		margin: 0.6%;
	}
</style>