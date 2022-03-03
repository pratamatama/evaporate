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
      class="mb-6"
    >
      Remember information
    </BaseCheckbox>

    <BaseButton
      :busy="busy"
      class="block w-full mb-8"
    >Login</BaseButton>

    <div class="flex items-center">
      <p class="mr-2">Not a member?</p>
      <NuxtLink
        :to="{ name:'register' }"
        class="text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-600 transition-colors"
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
        remember: false,
      },
      validation_errors: null,
    }
  },
  methods: {
    async onSubmit() {
      this.busy = true

      try {
        await this.$auth.loginWith('laravelSanctum', { data: this.form })
      } catch (e) {
        if (e.response && e.response.status === 422) {
          this.validation_errors = e.response.data.errors
        }
      }

      this.busy = false
    },
  },
}
</script>