<script lang="ts">
export let content = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
</script>

<section>
  <p>{content}</p>
</section>

<style lang="postcss">
section {
  @apply container mx-auto lg:pr-5 mb-5;
}

p {
  @apply p-4 bg-slate-50 text-base text-stone-700 rounded-sm shadow-lg;
}
</style>
