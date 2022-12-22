<script lang="ts">
  import Login from "./lib/Login.svelte";
  import { currentUser, logOut } from "./lib/Pocketbase";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Button,
  } from "flowbite-svelte";

  let menu = -1;
</script>

<div class="h-screen bg-gray-bg1">
  <Login />
  {#if $currentUser}
    <div class="w-full">
      <Navbar let:hidden let:toggle>
        <NavBrand
          href="/"
          on:click={(event) => {
            event.preventDefault();
            menu = 0;
          }}
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span
            class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
          >
            Rental Acquisitions
          </span>
        </NavBrand>
        <div class="flex md:order-2">
          <Button size="sm" on:click={logOut}>Logout</Button>
          <NavHamburger on:click={toggle} />
        </div>
        <NavUl {hidden}>
          <NavLi
            href="/"
            on:click={(event) => {
              event.preventDefault();
              menu = 0;
            }}
            >Home
          </NavLi>
          <NavLi
            href="/"
            on:click={(event) => {
              event.preventDefault();
              menu = 1;
            }}
            >About
          </NavLi>
        </NavUl>
      </Navbar>
    </div>
  {/if}
  {#if menu === 0}
    <div class="flex "><h1>Home</h1></div>
  {:else if menu === 1}
    <div class="flex "><h1>About</h1></div>
  {/if}
</div>
