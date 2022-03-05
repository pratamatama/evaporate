<template>
  <nav class="sticky top-0 inset-x-0 bg-white border-b border-gray-200 z-50">
    <div class="flex items-center justify-between">
      <div class="pl-6">
        <AppLogo class="w-28" />
      </div>

      <!-- Toggle button -->
      <button
        type="button"
        class="border-l border-gray-200 p-6"
        @click.prevent="$emit('toggle')"
      >
        <!-- boxicons: menu -->
        <svg
          class="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </svg>
      </button>
    </div>
  </nav>
</template>
