<template>
  <main class="lg:grid lg:grid-cols-2">
    <div class="h-screen flex items-center px-20 xl:px-32 2xl:px-52">
      <div class="w-full">
        <div class="mb-12">
          <h1 class="text-4xl font-medium mb-2">Log in</h1>
          <p class="text-gray-500">Enter your credentials to access your account.</p>
        </div>

        <GoogleSignIn />
        <BaseDivider class="my-12">or</BaseDivider>
        <FormLogin />
      </div>
    </div>
    <div class="h-screen bg-gray-200 hidden lg:block"></div>
  </main>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>
