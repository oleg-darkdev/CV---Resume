<script>
    import { Grid, Row, Column } from "carbon-components-svelte";
</script>


<Grid>
  <Row  style="padding-top: 2%;">
    <Column  sm={10} md={4} lg={{ span: 10, offset: 1 }}>
        <slot name="content" />
	</Column>
    <Column sm={{ span: 12, offset: 0 }} md={1} lg={3} style="padding-top: 8%;">
        <slot name="TOC" />
    </Column>
	</Row>
</Grid>