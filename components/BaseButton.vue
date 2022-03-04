<template>
  <button
    :type="type"
    :disabled="isDisabled"
    class="p-3 px-4 rounded-lg text-center transition-colors duration-300"
    :class="conditionalClass"
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isDisabled() {
      return this.disabled || this.busy
    },
    conditionalClass() {
      return this.isDisabled
        ? 'bg-gray-200 dark:bg-gray-700 cursor-not-allowed disabled:opacity-50'
        : 'bg-blue-600 shadow-sm hover:bg-blue-700 text-white'
    },
  },
}
</script>