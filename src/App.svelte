<script lang="ts">
  import Login from "./lib/Login.svelte";
  import { currentUser } from "./lib/pocketbase";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Button,
  } from "flowbite-svelte";
</script>

<div class="h-screen flex bg-gray-bg1">
  <Login />
  {#if $currentUser}
    <Navbar let:hidden let:toggle>
      <NavBrand href="/">
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
        <Button size="sm">Get started</Button>
        <NavHamburger on:click={toggle} />
      </div>
      <NavUl {hidden}>
        <NavLi href="/" active={true}>Home</NavLi>
        <NavLi href="/about">About</NavLi>
        <NavLi href="/services">Services</NavLi>
        <NavLi href="/pricing">Pricing</NavLi>
        <NavLi href="/contact">Contact</NavLi>
      </NavUl>
    </Navbar>
  {/if}
</div>
