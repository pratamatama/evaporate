<template>
  <button
    :type="type"
    :disabled="busy"
    class="bg-blue-600 shadow-sm hover:bg-blue-700 transition-colors duration-300 text-white p-3 px-4 rounded-lg text-center"
  >
    <!-- Loading indicator -->
    <span
      v-if="busy"
      class="flex items-center justify-center"
    >
      <BaseSpinner class="border-white" />
    </span>

    <slot v-else />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'submit',
    },
    busy: {
      type: Boolean,
      default: false,
    },
  },
}
</script>