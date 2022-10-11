<script>
    import { ExpandableTile } from "carbon-components-svelte";
    import { Tag } from "carbon-components-svelte";
    import { ButtonSet, Button } from "carbon-components-svelte";

export let project;
</script>


<ExpandableTile style="width: 380px; border: 2px solid #fff; margin: 0.3%; padding: 0;  background-image: url({project.img});">
    <div slot="above" style="height: 12rem"/>
    
    <div slot="below" style="background-color: {project.bgColor}; width: 100%; color: {project.textColor}; height: auto;">
    <div class="column" style="padding: 15px;">
        <div class="column mb-15 " style="">
            <h2>Used technologies </h2>
            <div class="row">
                {#each project.description.techonologyList as techonology}
                    <Tag interactive size="default">{techonology}</Tag>
                {/each}
            </div>
        </div>
        <div class="column mb-15">
            <h2>Description</h2>
            {#each project.description.text as text}
                <p style="margin-bottom: 10px;">{text}</p>
            {/each}
        </div>

        <ButtonSet style="margin-bottom: 35px;">
            <Button style="width: 160px;"  class="{project.description.github ? '': 'display-none'}" kind="secondary">Github</Button>
            <Button  style="width: 160px;" class="{project.description.site ? '': 'display-none'}" kind="primary">Web App</Button>
        </ButtonSet>
    </div>
</div>
</ExpandableTile>



        