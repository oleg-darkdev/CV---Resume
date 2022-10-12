<script>
    import { Grid, Row, Column } from "carbon-components-svelte";

    export let justifyContent;
</script>


<Grid style="min-height:100vh; height: auto; width: 100%;" >
  <Row  style="padding-top: 2%;">
    <Column style="display: flex; align-items: center; justify-content: {justifyContent}; " sm={12} md={{ span: 5, offset: 0 }} lg={{ span: 10, offset: 0 }}>
        <slot name="content" />
	</Column>
    <Column sm={{ span: 12, offset: 0 }} md={3} lg={4} style="padding-top: 8%; display: flex;  flex-direction: column; align-items: center;">
        <slot name="TOC" />
    </Column>
	</Row>
</Grid>