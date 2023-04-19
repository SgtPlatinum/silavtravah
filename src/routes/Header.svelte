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
			<img src="/static/logos/WhatsApp_logo-color-vertical.svg">
			<p>+7 (900) 250-14-87</p>
		</li>
		<li>
			<img src="/static/logos/icons8-envelope-50.png">
			<p><a target="_blank" href="mailto:isluckin@gmail.com">isluckin@gmail.com</a></p>
		</li>
		<li>
			<img src="/static/logos/Telegram_2019_simple_logo.svg">
			<p><a target="_blank" href="https://t.me/bababoey228">@AlenkyTsvetochek</a></p>
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
	<a target="_blank" href=
			 "https://www.google.com/maps/place/45%C2%B002'28.0%22N+39%C2%B001'30.5%22E/@45.041098,39.0225621,17z/data=!3m1!4b1!4m4!3m3!8m2!3d45.041098!4d39.025137"
	><img src="map icon here"></a>

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
		font-size: 17px;
		color: #1a1a1a;
	}

	.socials li img{
		width: 17px;
		height: 17px;
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
