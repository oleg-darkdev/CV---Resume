<script>
    import PersonalInfo from './Bio/TableInfo.svelte';
    import aboutData from '../lib/data/aboutSection';

    let showSection = {
        personal: true, edu: true, exp: true, vol: true
    };
</script>

<div class="row flex-wrap" style="padding-top: 60px; justify-content: flex-end; ">
    {#if showSection.personal}
        <PersonalInfo dataComplete={aboutData.personal.dataComplete} dataHeadersComplete={aboutData.personal.headersComplete}  params={[true, false, false, false]} bind:showSection  description={`Your organization's active load balancers.`} title={`Personal infos`}/>
    {/if}
    {#if showSection.edu}
        <PersonalInfo dataComplete={aboutData.education.dataComplete}   dataHeadersComplete={aboutData.education.headersComplete} params={[false, true, false, false]} bind:showSection description={`Your organization's active load balancers.`} title={`Education`}/>
    {/if}
    {#if showSection.exp}
        <PersonalInfo dataComplete={aboutData.experience.dataComplete}  dataHeadersComplete={aboutData.experience.headersComplete} params={[false, false, true, false]} bind:showSection  description={`Your organization's active load balancers.`} title={`Experience`}/>
    {/if}
    {#if showSection.vol}
        <PersonalInfo dataComplete={aboutData.volunteerism.dataComplete}   dataHeadersComplete={aboutData.volunteerism.headersComplete} params={[false, false, false, true]}  bind:showSection description={`Your organization's active load balancers.`} title={`Volunteerism`}/>
    {/if}
</div>
    

<style>
 div {
 }
</style>