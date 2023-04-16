<script lang="ts">

export let categories: { name: string, tag: string }[] = [
  {
    name: "first",
    tag:  "first0",
  }, {
    name: "first",
    tag:  "first1",
  }, {
    name: "first",
    tag:  "first2",
  }, {
    name: "first",
    tag:  "first3",
  }, {
    name: "first",
    tag:  "first4",
  }, {
    name: "first",
    tag:  "first5",
  }, {
    name: "first",
    tag:  "first6",
  }, {
    name: "first",
    tag:  "first7",
  }, {
    name: "first",
    tag:  "first8",
  }, {
    name: "first",
    tag:  "first9",
  }, {
    name: "first",
    tag:  "first10",
  }, {
    name: "first",
    tag:  "first11",
  }, {
    name: "first",
    tag:  "first12",
  }, {
    name: "first",
    tag:  "first13",
  }, {
    name: "first",
    tag:  "first14",
  }, {
    name: "first",
    tag:  "first15",
  }, {
    name: "first",
    tag:  "first16",
  }, {
    name: "first",
    tag:  "first17",
  }, {
    name: "first",
    tag:  "first18",
  }, {
    name: "first",
    tag:  "first19",
  },
]

</script>

<div>
  {#each categories as category (category.tag)}
    <a href="/category/{category.tag}">
      <article>
        <span>{category.name}</span>
      </article>
    </a>
  {/each}
</div>

<style lang="postcss">
div {
  @apply flex flex-row flex-wrap gap-3 py-5 container mx-auto;
}

a {
  @apply block text-stone-700 font-bold text-base;
  text-decoration: inherit;
  cursor: inherit;
}

article {
  @apply h-14 lg:min-w-[190px] md:min-w-[177px] min-w-[156px] w-1/5 flex items-center justify-center bg-slate-50 rounded-sm cursor-pointer;
  width: 20%;
  &:hover {
    @apply shadow-inner bg-slate-200;
  }

}

span {
  @apply uppercase;
}
</style>
