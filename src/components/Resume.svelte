<script>
  import { ContentSwitcher, Switch } from "carbon-components-svelte";

  let selectedIndex = 1;

  const skillsList = [
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/resume/skills/HTML5.png',
		text: 'HTML5'
	},
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/resume/skills/CSS3.png',
		text: 'CSS3'
	},
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/resume/skills/github.png',
		text: 'GITHUB'
	},
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/resume/skills/js.png',
		text: 'Javascript'
	},
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/resume/skills/linux.png',
		text: 'Linux'
	},
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/resume/skills/m-3.png',
		text: 'M 3.0'
	},
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/resume/skills/nodeJs.png',
		text: 'NodeJS'
	},
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/resume/skills/scrum.png',
		text: 'Scrum'
	},
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/resume/skills/design.png',
		text: 'Design'
	}
  ];

const toolsList = [
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/resume/tools/XD.png',
		text: 'adobe XD'
	},
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/resume/tools/holacracy.png',
		text: 'Holacracy'
	},
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/resume/tools/mongodb.png',
		text: 'Mongo DB'
	},
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/resume/tools/svelteJs.png',
		text: 'Svelte JS'
	},
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/resume/tools/vueJs.png',
		text: 'Vue JS'
	},
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/resume/tools/webpack.png',
		text: 'Webpack'
	},
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/resume/tools/figma.png',
		text: 'Figma'
	},
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/resume/tools/illustrator.png',
		text: 'Illustrator'
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
                    <div style="background-image: url({item.img});" class="skill-img"></div>
                    <h2 style="text-align: center;">{item.text}</h2>
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
		/* background-color: #fff; */
		width: 140px;
		height: 140px;
		/* border: 2px solid #fff; */
		
	}
.skill-img:hover {
		background-color: #fff;
	}
	.skill-toll-wrap {
		margin: 15px 0  0 0;
		width:100%;
	}
	.skill-toll-container {
		margin:  0 0.6%  25px 0.4%;
	}

</style>