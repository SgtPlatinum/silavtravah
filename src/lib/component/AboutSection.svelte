<script lang="ts">
export let content = "Добро пожаловать в магазин Аленький Цветочек! Мы рады видеть вас и предлагаем вам лучший выбор лекарственных трав на любой случай жизни!";
</script>

<section>
  <p>{content}</p>
</section>

<style lang="postcss">

section {
  @apply container mx-auto lg:pr-5 mb-5 mt-5;
    background-image: url("/static/storage_main.jpg");
}

p {
  @apply px-20 bg-slate-50 text-base text-stone-700 rounded-sm shadow-lg;
    padding-top: 150px;
    padding-bottom: 150px;
}

</style>
