<template>
  <main class="lg:grid lg:grid-cols-2 dark:bg-gray-900 dark:text-gray-200">
    <div class="h-screen flex items-center px-20 xl:px-32 2xl:px-52">
      <div class="w-full">
        <div class="mb-12">
          <h1 class="text-4xl font-medium mb-2">Register</h1>
          <p class="text-gray-500">Enjoy easier account creation, no password needed.</p>
        </div>

        <GoogleSignIn>Continue with Google</GoogleSignIn>
        <BaseDivider class="my-12">or</BaseDivider>
        <FormRegister />
      </div>
    </div>
    <div class="h-screen bg-gray-200 dark:bg-gray-800 hidden lg:block"></div>
  </main>
</template>

<script>
export default {
  name: 'RegisterPage',
  auth: 'guest',
}
</script>
