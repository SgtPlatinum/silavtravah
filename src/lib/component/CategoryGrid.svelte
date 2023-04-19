<script lang="ts">

export let categories: { name: string, tag: string }[] = [
  {
    name: "Бесплодие",
    tag:  "first0",
  }, {
    name: "Женские заболевания",
    tag:  "first1",
  }, {
    name: "Мужские заболевания",
    tag:  "first2",
  }, {
    name: "Рак (онкология)",
    tag:  "first3",
  }, {
    name: "Схемы Лебедева Е. Г.",
    tag:  "first4",
  }, {
    name: "Красота",
    tag:  "first5",
  }, {
    name: "Болезни суставов",
    tag:  "first6",
  }, {
    name: "Болезни желудочно-кишечного тракта",
    tag:  "first7",
  }, {
    name: "Болезни сердечно-сосудистой системы",
    tag:  "first8",
  }, {
    name: "Алкоголизм",
    tag:  "first9",
  }, {
    name: "Табакокурение",
    tag:  "first10",
  }, {
    name: "Настойки и соки из трав",
    tag:  "first11",
  }, {
    name: "Травы, цветы, семена",
    tag:  "first12",
  }, {
    name: "Сборы",
    tag:  "first13",
  }, {
    name: "Травяные чаи",
    tag:  "first14",
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
    font-size: 10px;
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
    color: #1a1a1a;
  @apply uppercase text-center;
}
</style>
