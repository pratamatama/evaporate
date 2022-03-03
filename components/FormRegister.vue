<template>
  <form
    class="w-full"
    :action="$router.currentRoute.path"
    method="post"
    @submit.prevent="onSubmit"
  >
    <BaseInput
      id="input-name"
      v-model="form.name"
      name="name"
      type="text"
      label="Full name"
      placeholder="Jane Doe"
      :errors="validation_errors"
    />
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
    <BaseInput
      id="input-password-confirmation"
      v-model="form.password_confirmation"
      name="password"
      type="password"
      label="Confirm password"
      :errors="validation_errors"
    />

    <BaseButton
      :busy="busy"
      class="block w-full mb-8"
    >Create account</BaseButton>

    <div class="flex items-center">
      <p class="mr-2">Already a member?</p>
      <NuxtLink
        :to="{ name:'login' }"
        class="text-blue-600 hover:text-blue-700 transition-colors"
      >Login</NuxtLink>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      busy: false,
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
      },
      validation_errors: null,
    }
  },
  methods: {
    async onSubmit() {
      this.busy = true

      try {
        const response = await this.$axios.post('/api/register', this.form)

        if (response) {
          await this.$auth.loginWith('laravelSanctum', {
            data: {
              email: this.form.email,
              password: this.form.password,
            },
          })
        }
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