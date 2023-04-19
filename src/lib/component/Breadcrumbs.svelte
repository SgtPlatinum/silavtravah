<script lang="ts">

interface LinkProps {
    name: string;
    href: string;
}
export let title = "";
export let links: LinkProps[] = []
</script>

<!-- <div class="breadcrumbs-section">
  <div class="breadcrumbs overlay-bg">
            <h1 class="breadcrumbs-title">{title}</h1>
            <ul class="breadcrumb-list">
              {#each links as link, index (link.href ?? link.name)}
                <li>
                  {#if link.href}
                    <a href={link.href}>{link.name}</a>
                  {:else}
                    {link.name}
                  {/if}
                </li>
              {/each}
            </ul>
  </div>
</div> -->