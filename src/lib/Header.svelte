<script lang="ts">
import LoginDialog from "./LoginDialog.svelte";
import { fly } from "svelte/transition";
import { getUserContext } from "./user-context";
import { getCartContext } from "./cart-context";

export let title = "Sila_V_Travah";

const { user, logout } = getUserContext();
const { count } = getCartContext();

let loginOpen = false;
let search = "";

function onToggleLoginDialog() {
  loginOpen = !loginOpen;
}

function onSearch(ev: KeyboardEvent) {
  if (ev.key !== "Enter") return;
  ev.preventDefault();
  if (!search) return;
  history.pushState(null, "", `/browse?q=${encodeURIComponent(search)}`);
}

$: loginOpen = !$user;

</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<header>
  <div class="header-box">
    <div class="logo-btn">
      <a href="/"><img src="/assets/logo-frame.png" alt="main" class="logo-frame"></a>
      <a href="/"><img src="/assets/logo-fan.png" alt="fan" class="logo-fan"></a>
    </div>
    <nav class="nav-bar">
      <form class="search" on:submit|preventDefault>
        <input type="text" bind:value={search} placeholder="Введите название товара..." on:keydown={onSearch}>
      </form>
      <ul class="main-nav">
        <li><a href="/categories">Каталог</a></li>
        <li><a href="/cart">Корзина <i class="pcbs-cart"></i> {$count}</a></li>
        {#if !$user}
        <li>
          <button type="button" class="log" on:click={onToggleLoginDialog}>Войти</button>
          {#if loginOpen}
            <div transition:fly={{ x: 0, y: 100 }} class="auth-box">
              <LoginDialog />
            </div>
          {/if}
        </li>
          {:else}
          <div class="welcome">
            <button type="submit" on:click={logout}>${$user.name}</button>
          </div>
          {/if}
      </ul>
    </nav>
  </div>
</header>

<style>
header{
    display: flex;
    flex-direction: row;
    box-shadow: 0 2px 5px 0 #000000;
    height: 150px;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    overflow: visible;
    margin: 0;
    width: 1920px;
    background-color: #ffffff;
    z-index: 2;
}

.header-box{
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: 100%;
    padding: 0 120px;
}

.nav-bar{
    overflow: hidden;

}

.logo-btn{
    position: relative;
    width: 150px;
    height: 150px;
}

.logo-frame{
    position: relative;
    width: 100%;
    height: 100%;
    margin-right: 30px;
}

.logo-fan{
    pointer-events: none;
    position: absolute;
    left: 51%;
    top: 50%;
    width: 90px;
    height: 87px;
    animation: rotation 0.75s infinite linear;
}
@keyframes rotation{
    from{
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(359deg);
    }
}

.nav-bar{
    display: flex;
    flex-direction: row;
}

.nav-bar input[type=text]{
    flex: 1;
    margin: 33px;
    padding-left: 20px;
    width: 857px;
    height: 75px;
    text-align: left;
    font-size: 30px;
    border: 2px solid #f5f5f5;
    border-radius: 15px;
    font-family: 'rubikblack', sans-serif;
}

.nav-bar input[type=text]:hover{
    border: 2px solid #030099;
}

.main-nav{
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-top: 33px;
    margin-left: 15px;
    padding: 0;
    height: 75px;
}

.main-nav li {
    float: left;
    margin-right: 15px;
}

.main-nav li:last-child{
    margin-right: 0;
}

.main-nav a,
.main-nav button{
    display: inline-block;
    overflow: hidden;
    font-size: 30px;
    padding-top: 19px;
    padding-bottom: 19px;
    padding-left: 9px;
    color: black;
    width: 210px;
    height: 35px;
    text-decoration: none;
    border: 2px solid #f5f5f5;
    border-radius: 15px;
    text-align: left;
    vertical-align: center;
    background-color: #ffffff;
    font-family: 'rubikblack', sans-serif;
}

.main-nav button{
    height: 80px;
}


.main-nav a:hover{
    border: 2px solid #030099;
}

.main-nav a:active{
    border: 2px solid #030099;
    background-color: #030099;
    color: white;
}

.auth-box{
    position: absolute;
    right: 0;
    top: 175px;
}

.log:hover{
    border: 2px solid #030099;
}

.log:active{
    border: 2px solid #030099;
    background-color: #030099;
    color: white;
}

</style>