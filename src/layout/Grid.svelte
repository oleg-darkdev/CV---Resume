<script>
    import { Grid, Row, Column } from "carbon-components-svelte";

    export let justifyContent;
</script>


<Grid style="min-height:100vh; height: auto; margin: 0; padding: 0; ; " >
  <Row  style="padding-top: 2%;">
    <Column style="display: flex; align-items: center; justify-content: {justifyContent}; " sm={12} md={4} lg={{ span: 10, offset: 1 }}>
        <slot name="content" />
	</Column>
    <Column sm={{ span: 12, offset: 0 }} md={4} lg={4} style="padding-top: 8%; display: flex;  flex-direction: column; align-items: center;">
        <slot name="TOC" />
    </Column>
	</Row>
</Grid>