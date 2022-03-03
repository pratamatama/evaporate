<template>
  <div class="mb-6">
    <label
      :for="name"
      class="block"
    >{{ label }}</label>

    <div class="relative">
      <input
        class="mt-2 pb-3 pt-4 block w-full rounded-lg border-gray-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
        :type="inputType"
        :placeholder="placeholder"
        :required="required"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />

      <button
        v-if="type === 'password'"
        tabindex="-1"
        type="button"
        class="absolute inset-y-0 right-0 text-gray-500 px-4"
        @click.prevent="peekPassword"
      >
        <!-- Boxicons: hide -->
        <svg
          v-if="peek"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757c-.273.021-.55.038-.841.038-5.351 0-7.424-3.846-7.926-5a8.642 8.642 0 0 1 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19zm0-14c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm4.972 10.558-2.28-2.28c.19-.39.308-.819.308-1.278 0-1.641-1.359-3-3-3-.459 0-.888.118-1.277.309L8.915 7.501A9.26 9.26 0 0 1 12 7c5.351 0 7.424 3.846 7.926 5-.302.692-1.166 2.342-2.954 3.558z"></path>
        </svg>

        <!-- Boxicons: show -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z"></path>
          <path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z"></path>
        </svg>
      </button>
    </div>

    <BaseError
      v-if="errors && errors[name]"
      :message="errors[name][0]"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    required: {
      type: Boolean,
      default: true,
    },
    value: {
      type: [String, Number],
      required: false,
      default: '',
    },
    errors: {
      type: [Array, Object],
      required: false,
      default: null,
    },
  },
  data() {
    return {
      peek: false,
    }
  },
  computed: {
    inputType() {
      return this.peek ? 'text' : this.type
    },
  },
  methods: {
    peekPassword() {
      this.peek = !this.peek
    },
  },
}
</script>