<template>
  <label class="inline-flex items-center mb-6">
    <input
      type="checkbox"
      class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-offset-0 focus:ring-blue-200 focus:ring-opacity-50"
      :checked="checked"
      @input="$emit('input', $event.target.checked)"
    />
    <span class="ml-2 pt-1 select-none">{{ label }}</span>
  </label>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: true,
    },
  },
}
</script>