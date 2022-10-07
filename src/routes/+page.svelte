<script>
	//  import Raiting from '../components/Raiting.svelte';
	import TableOfContents from '../components/TableOfСontents.svelte';
	
	import Grid from "../layout/Grid.svelte";


	import Resume from '../components/Resume.svelte'; 
	import Portfolio from '../components/Portfolio.svelte';
	import Bio from '../components/Bio.svelte';
	import Contact from '../components/Contact.svelte'
	import Main from '../components/Main.svelte';


	let values = ["Home", "About", "Resume", "Portfolio", "Contact"];

    let selectedSection = values[0];
</script>

{#if selectedSection == values[0]}
<section>
		<Grid>
		<Main slot="content" />
		<TableOfContents bind:selectedSection bind:values slot="TOC"/>
	</Grid>
</section>
{/if}

{#if selectedSection == values[1]}
<section>
	<Grid>
		<Bio  slot="content" />
		<TableOfContents bind:selectedSection bind:values slot="TOC"/>
	</Grid>
</section>
{/if}

{#if selectedSection == values[2]}
<section>
	<Grid>
		<Resume slot="content"/>
		<TableOfContents bind:selectedSection bind:values slot="TOC"/>
	</Grid>
</section>
{/if}

{#if selectedSection == values[3]}
<section>
	<Grid>
		<Portfolio slot="content"/>
		<TableOfContents bind:selectedSection bind:values slot="TOC"/>
	</Grid>
</section>
{/if}

{#if selectedSection == values[4]}
<section>
	<Grid>
		<Contact slot="content"/> 
		<TableOfContents bind:selectedSection bind:values slot="TOC"/>
	</Grid>
</section>
{/if}


<style>
	:global(.row, .column) {
		display: flex;
	}
	:global(.column) {
		flex-direction: column;
	}

	:global(.row) {
		flex-direction: row;
	}

	:global(.flex-wrap) {
		flex-wrap: wrap;
	}
</style>