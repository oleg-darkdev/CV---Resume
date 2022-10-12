<script>
  import {
    DataTable,
    Toolbar,
    ToolbarContent,
    ToolbarSearch,
    ToolbarMenu,
    ToolbarMenuItem,
    Button,
  } from "carbon-components-svelte";

let dataTable = [],
    headersData = [{ key: "", value: ""}];
let backbtn = false;
export let dataHeadersComplete, dataComplete, title, description, params, showSection;
</script>



<div style="max-width: 400px; width: 100%; margin: 7px">
<DataTable style="width: 100%;" 
  headers={headersData}
  rows={dataTable}
  size="tall"
>
  <strong slot="title">{title}</strong>
  <span slot="description" style="font-size: 1rem">
    {description}
  </span>
  <Toolbar>
    <ToolbarContent>
        {#if backbtn}
            <Button on:click={() => {dataTable= []; headersData = [{ key: "", value: ""}]; showSection.personal = true; showSection.edu = true; showSection.exp = true; showSection.vol = true; backbtn = false; }} kind="secondary">Back</Button>
        {/if}
        <Button on:click={() => {dataTable= dataComplete; headersData = dataHeadersComplete; showSection.personal = params[0]; showSection.edu = params[1]; showSection.exp = params[2]; showSection.vol = params[3]; backbtn = true; console.log(showSection)}}>More infos</Button>
    </ToolbarContent>
  </Toolbar>
</DataTable>
</div>

<style>

</style>