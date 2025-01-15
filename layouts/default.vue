<script setup lang="ts">
</script>

<template>
  <!-- Page Container -->
  <div
    id="page-container"
    class="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100"
  >
    <div
      class="relative overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100"
    >
      <!-- Main Header -->
      <div
        id="page-header"
        class="relative flex flex-none items-center py-8"
      >
        <header
          class="container mx-auto flex flex-col gap-4 px-4 text-center md:flex-row md:items-center md:justify-between md:gap-0 lg:px-8 xl:max-w-7xl"
        >
          <div>
            <nuxt-link
              to="/"
              class="group inline-flex items-center gap-2 text-lg font-bold tracking-wide text-gray-900 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-300"
            >
              Aka24
            </nuxt-link>
          </div>
          <div
            class="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:gap-0"
          >
            <nav class="space-x-3 md:space-x-6">
              <a
                href="#"
                class="text-sm font-semibold text-gray-900 hover:text-orange-600 dark:text-gray-100 dark:hover:text-orange-400"
              >
                <span>Kategorier</span>
              </a>
              <a
                href="#"
                class="text-sm font-semibold text-gray-900 hover:text-orange-600 dark:text-gray-100 dark:hover:text-orange-400"
              >
                <span>Journalister</span>
              </a>
            </nav>
          </div>
        </header>
      </div>
    </div>

    <!-- Page Content -->
    <main class="flex max-w-full flex-auto flex-col">
      <NuxtPage />
    </main>
  </div>
</template>

<style scoped></style>
