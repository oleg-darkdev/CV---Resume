<script>
	//  import Raiting from '../components/Raiting.svelte';
	import TableOfContents from '../components/TableOfСontents.svelte';
	
	import Grid from "../layout/Grid.svelte";
	import SectionBg from '../layout/SectionBg.svelte';

	import Resume from '../components/Resume.svelte'; 
	import Portfolio from '../components/Portfolio.svelte';
	import Bio from '../components/Bio.svelte';
	import Contact from '../components/Contact.svelte'
	import Main from '../components/Main.svelte';

	let values = [
		{
		text: 'Hello',
		color: ''
		// #E91E63
	},
	{
		text: 'About',
		color: '#673AB7'
	},
	{
		text: 'Resume',
		color: '#009688'
	},
	{
		text: 'Portfolio',
		color: '#4CAF50'
	},
	{
		text: 'Contact',
		color: '#FF5722'
	},
];

let selectedSection = values[0];
</script>

{#if selectedSection.text == values[0].text}
<SectionBg bgColor={selectedSection.color}>
		<Grid justifyContent={'flex-end'}>
		<Main slot="content" />
		<TableOfContents bind:selectedSection bind:values slot="TOC"/>
	</Grid>
</SectionBg>
{/if}

{#if selectedSection.text == values[1].text}
<SectionBg bgColor={selectedSection.color}>
	<Grid justifyContent={'flex-end'}>
		<Bio  slot="content" />
		<TableOfContents bind:selectedSection bind:values slot="TOC"/>
	</Grid>
</SectionBg>
{/if}

{#if selectedSection.text == values[2].text}
<SectionBg bgColor={selectedSection.color}>
	<Grid justifyContent={'center'}>
		<Resume slot="content"/>
		<TableOfContents bind:selectedSection bind:values slot="TOC"/>
	</Grid>
</SectionBg>
{/if}

{#if selectedSection.text == values[3].text}
<SectionBg bgColor={selectedSection.color}>
	<Grid>
		<Portfolio slot="content"/>
		<TableOfContents bind:selectedSection bind:values slot="TOC"/>
	</Grid>
</SectionBg>
{/if}

{#if selectedSection.text == values[4].text}
<SectionBg bgColor={selectedSection.color}>
	<Grid>
		<Contact slot="content"/> 
		<TableOfContents bind:selectedSection {values} slot="TOC"/>
	</Grid>
</SectionBg>
{/if}


<style>
	:global(html, body) {height: auto; min-height: 100%; margin:0; padding:0}
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

	:global(.mb-15) {
		margin-bottom: 15px;
	}
</style>