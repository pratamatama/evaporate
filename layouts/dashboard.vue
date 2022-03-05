<template>
  <div>
    <TheNavbar @toggle="toggleMenu" />

    <Transition
      enter-active-class="transition-transform duration-300 ease-in-out"
      leave-active-class="transition-transform duration-300 ease-in-out"
      enter-class="transform-gpu -translate-x-full"
      enter-to-class="transform-gpu -translate-x-0"
      leave-class="transform-gpu -translate-x-0"
      leave-to-class="transform-gpu -translate-x-full"
    >
      <TheNavbarMenu v-if="showMenu" />
    </Transition>

    <div class="p-6">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout',
  data() {
    return {
      showMenu: false,
    }
  },
  watch: {
    $route(oldValue, newValue) {
      if (oldValue === newValue) return
      this.showMenu = false
    },
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
}
</script>