<template>
  <span class="block mt-1 text-sm text-red-500">{{ message }}</span>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: false,
      default: '',
    },
  },
}
</script>