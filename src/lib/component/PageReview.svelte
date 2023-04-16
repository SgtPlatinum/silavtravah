<script lang="ts">
export let author: string;
export let date: Date;
export let location: string;
export let content: string;
</script>

<article>
  <header>
    <strong>{author}</strong>
    <span>{date.toLocaleString("ru", {dateStyle: "short"})}, {location}</span>
  </header>
  <p>{content}</p>
</article>


<style lang="postcss">
article {
  @apply px-2 pb-4 w-60 bg-slate-50 shadow-lg text-slate-800 rounded-sm h-[450px] overflow-hidden;
}

header {
  @apply flex flex-col py-3;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
}

strong {
  @apply text-lg uppercase;
}

span {
  @apply text-stone-500 uppercase;
}

p {
  @apply text-sm pt-3;
}
</style>
