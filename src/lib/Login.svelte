<script lang="ts">
  import { currentUser, pb } from "./pocketbase";

  let username: string;
  let password: string;

  async function login() {
    await pb.collection("users").authWithPassword(username, password);
  }

  async function signUp() {
    try {
      const data = {
        username,
        password,
        passwordConfirm: password,
        name: "eren yeager",
      };
      const createdUser = await pb.collection("users").create(data);
      await login();
    } catch (error) {
      console.log(error);
    }
  }

  async function logout() {
    pb.authStore.clear();
  }
</script>

{#if $currentUser}
  <div
    class="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16"
  >
    <h1 class="text-2xl font-medium text-primary mt-4 mb-8 text-center">
      You are logged in as {$currentUser.username}
    </h1>
    <div class="flex justify-center items-center mt-2">
      <button
        class="bg-gray-200 py-2 px-4 text-sm rounded border border-green focus:outline-none focus:border-green-dark"
        on:click={logout}
      >
        Logout
      </button>
    </div>
  </div>
{:else}
  <div
    class="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16"
  >
    <h1 class="text-2xl font-medium text-primary mt-4 mb-8 text-center">
      Log in to your account
    </h1>

    <form on:submit|preventDefault>
      <div>
        <label for="email">Email</label>
        <input
          type="email"
          class="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
          id="email"
          placeholder="Your Email"
          bind:value={username}
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          type="password"
          class="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
          id="password"
          placeholder="Your Password"
          bind:value={password}
        />
      </div>

      <div class="flex justify-center items-center mt-2">
        <button
          class="bg-gray-700 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark"
          on:click={login}
        >
          Login
        </button>
      </div>
      <div class="flex justify-center items-center mt-2">
        <button
          class="bg-gray-200 py-2 px-4 text-sm rounded border border-green focus:outline-none focus:border-green-dark"
          on:click={signUp}
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
{/if}
