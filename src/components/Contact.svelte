<script>


const cosialList = [
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/contacts/facebook.png',
		link: 'https://www.facebook.com/hulio.mondre'
	},
    {
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/contacts/linkedin.png',
		link: 'https://www.linkedin.com/in/oleg-darkdev'
	},
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/contacts/github_contact.png',
		link: 'https://github.com/oleg-darkdev'
	},
	{
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/contacts/telegram.png',
		link: 'https://t.me/polish_cat'
	},
    {
		img: 'https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/contacts/codewars_contact.png',
		link: 'https://www.codewars.com/users/Oleg_DarkDev'
	},
];
</script>



<div class="column" style="justify-content: center; align-items: center; width: 100%;">
    <h2>Contact with me 🖤</h2>
    <div style="justify-content: center; margin: 15px 0  0 0; width:100%;" class="row flex-wrap">
        {#each cosialList as item}
            <div style="margin:  0 0.6%  25px 0.4%;" on:click="{() => window.open(item.link, '_blank').focus()}">
                <div style="background-image: url({item.img}); width: 140px; height: 140px; border-radius: 4px;">
                </div>
            </div>
        {/each}
    </div>
</div>

    <style>

    
</style>