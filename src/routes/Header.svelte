<script lang="ts">
	import Button, {Label} from "@smui/button";
	import categories from "../lib/component/CategoryGrid.svelte";
	export let count = 0;
</script>

<header>
	<section>
		<a href="/"><img src="" alt="На главную"></a>
		<a href="/"><p>Аленький<br>Цветочек</p></a>
	</section>
	<form>
		<input type="text" name="text" class="search" placeholder="Поиск товара...">
		<Button class="bg-3"><Label>Поиск</Label></Button>
		<!-- TODO: make borders for buttons (this one in particular shouldn't have borders to the left)
		 		 and make their opacity to your taste
		 		 text color and header color could also be changed-->
	</form>
	<ul class="socials">
		<li>
			<img src="whatsapp icon here">
			<p>+7 (900) 250-14-87</p>
		</li>
		<li>
			<img src="mail icon here">
			<p><a href="mailto:isluckin@gmail.com">isluckin@gmail.com</a></p>
		</li>
		<li>
			<img src="telegram icon here">
			<p><a href="https://t.me/bababoey228">@AlenkyTsvetochek</a></p>
		</li>
	</ul>

	<ul class="first-side">
		<li>
			<ul class="catalog">
				<!-- TODO: put category list here -->
			</ul>
		</li>
		<li>
			<a href="/PageReviewGrid">Отзывы</a> <!-- TODO: make the reviews similar to https://silavtravah.su/reviews -->
		</li>
	</ul>

	<ul class="second-side">
		<li><a href="/PageNews">Новости</a></li>
		<li><!-- TODO: put the amount of people currently online here --></li>
	</ul>

	<!-- TODO: make ul's above similar to https://lechattravy.ru header
			 and preferably make the design of the header more not shit cus fuck the professor's task sheet-->

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

	a{
		text-underline: none;
		color: #1a1a1a;
	}

	.socials li {
		@apply flex flex-row content-between;
	}

	.socials li p{
		font-size: 10px;
		color: #1a1a1a;
	}

	.socials li img{
		width: 15px;
		height: 15px;
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
