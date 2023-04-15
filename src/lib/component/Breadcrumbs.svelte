<script lang="ts">

interface LinkProps {
    name: string;
    href: string;
}
export let title = "";
export let links: LinkProps[] = []
</script>

<div class="breadcrumbs-section plr-200 mb-80">
  <div class="breadcrumbs overlay-bg">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="breadcrumbs-inner">
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
        </div>
      </div>
    </div>
  </div>
</div>