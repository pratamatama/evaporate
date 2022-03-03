<template>
  <form
    class="w-full"
    :action="$router.currentRoute.path"
    method="post"
    @submit.prevent="onSubmit"
  >
    <BaseInput
      id="input-email"
      v-model="form.email"
      name="email"
      type="email"
      label="Email address"
      placeholder="someone@example.com"
      :errors="validation_errors"
    />
    <BaseInput
      id="input-password"
      v-model="form.password"
      name="password"
      type="password"
      label="Password"
    />

    <BaseCheckbox
      v-model="form.remember"
      :checked="form.remember"
      label="Remember information"
    />

    <BaseButton
      :busy="busy"
      class="block w-full mb-8"
    >Login</BaseButton>

    <div class="flex items-center">
      <p class="mr-2">Not a member?</p>
      <NuxtLink
        :to="{ name:'index' }"
        class="text-blue-600 hover:text-blue-700 transition-colors"
      >Sign up</NuxtLink>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      busy: false,
      form: {
        email: '',
        password: '',
        device_name: 'web',
        remember: true,
      },
      validation_errors: null,
    }
  },
  methods: {
    onSubmit() {
      alert('NOT IMPLEMENTED')
    },
  },
}
</script>