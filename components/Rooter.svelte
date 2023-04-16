<script lang="ts">
    import { onDestroy } from "svelte";

    let component = undefined;
    let path = location.pathname;
    export let routes = {};

    $: loadRoute(path);

    function loadRoute(path: string) {
        component = undefined;
        for (const [routePath, route] of Object.entries(routes)) {
            if (path.startsWith(routePath)) {
                component = route;
                break;
            }
        }
    }

    const intervalId = setInterval(() => {
        if (path !== location.pathname)
            path = location.pathname;
    }, 100);

    onDestroy(() => {
        clearInterval(intervalId);
    })

</script>

{#if component}
    <svelte:component this={component} />
{/if}