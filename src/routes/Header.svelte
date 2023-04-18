<script lang="ts">
	import Button, {Label} from "@smui/button";

	export let count = 0;
</script>

<header>
	<section>
		<a href="/"><img src="" alt="На главную"></a>
		<p>Аленький<br>Цветочек</p>
	</section>
	<form>
		<input type="text" name="text" class="search" placeholder="Поиск товара...">
		<Button class="bg-3"><Label>Поиск</Label></Button>
	</form>

	<!-- TODO: contact data (in about page, use up to 3) -->
	<!-- TODO: first menu sidebar goes here
		 needs to have:
		 links to the structure of the website;
		 google translator (what the fuck why)
		 review page-->

	<!-- TODO: second menu sidebar goes here
		 needs to have:
		 news feed
		 links to groups in social media (VK, Odnoklassniki svgs)
		 block of the amount of people currently on the website at the moment-->

	<!-- TODO: cart button goes here -->
	<a href="/cart"><Button>Корзина ({count})</Button></a>

</header>



<style lang="postcss">
	section {
		@apply  flex content-between;
	}

	header{
		background-color: green;
		@apply py-3 px-20 flex content-between gap-10;
		font-family: "Roboto Condensed";
	}

	p{
		font-size: 27px;
	}

	form{
		@apply flex content-between pt-5;
	}

	input[type=text]{
		-webkit-border-radius: 20px;
		-moz-border-radius: 20px;
		border-radius: 20px;
		border: 1px solid #2d9fd9;
		border-bottom-right-radius: 0;
		border-top-right-radius: 0;
		color: #a0d18c;
		width: 250px;
		height: 30px;
		padding-left: 10px;
	}
</style>
