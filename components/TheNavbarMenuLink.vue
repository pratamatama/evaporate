<template>
  <NuxtLink
    :to="to"
    :exact="exact"
    class="flex items-center justify-between text-gray-500 font-medium transition-colors p-6 py-3"
    active-class="text-gray-800"
  >
    <span class="flex">
      <slot />
      <p class="ml-3 capitalize">{{ label }}</p>
    </span>
    <TheBadge v-if="itemsCount > 0">{{ itemsCount }}</TheBadge>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      type: Object,
      default: () => ({ name: 'dashboard' }),
    },
    exact: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
    itemsCount: {
      type: Number,
      default: 0,
    },
  },
}
</script>
