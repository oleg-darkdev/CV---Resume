<script>

    export let bgColor;
</script>


<section style="background-color: {bgColor}; min-height:100vh; height: auto; width: 100%; padding: 15px; margin: 0; display: flex; align-items: center; justify-content: center;">
    <slot />
</section>
