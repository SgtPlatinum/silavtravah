<script lang="ts">
import PageReview from "./PageReview.svelte";

const lorem = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

export let reviews: { author: string, date: Date, location: string, content: string, id: number }[] = [
  {
    id: 1,
    author: "asdasdasd",
    date: new Date("2022-03-22"),
    location: "asdiojsdoij",
    content: lorem
  },{
    id: 2,
    author: "asdasdasd",
    date: new Date("2016-08-12"),
    location: "asdiojsdoij",
    content: lorem
  },{
    id: 3,
    author: "asdasdasd",
    date: new Date("2008-10-11"),
    location: "asdiojsdoij",
    content: lorem
  },{
    id: 4,
    author: "asdasdasd",
    date: new Date("2023-01-02"),
    location: "asdiojsdoij",
    content: lorem
  }
]
</script>

<section>
  {#each reviews as review (review.id)}
    <PageReview author={review.author} content={review.content} date={review.date} location={review.location} />
  {/each}
</section>


<style lang="postcss">
section {
  @apply gap-3 flex flex-row flex-wrap container mx-auto my-5;
}

</style>
