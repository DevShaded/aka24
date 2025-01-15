<script setup lang="ts">
import NewsHeaderSkeleton from "~/components/Skeletons/NewsHeaderSkeleton.vue";
import NewsCardSkeleton from "~/components/Skeletons/NewsCardSkeleton.vue";

const config = useRuntimeConfig();
const { status, error, data: posts } = useFetch(config.public.baseApiUrl + '/api/posts', {
  lazy: true
});
</script>

<template>
  <div class="container mx-auto p-6">
    <!-- Header Section -->
    <NewsHeaderSection
      v-if="status === 'success'"
      :post="posts.data.posts[0]"
    />
    <div v-else-if="error">
      <div class="text-red-600 bg-red-100 rounded-lg p-4">
        <p class="text-lg font-medium">Kunne ikke laste inn artikler :( {{ error.status }}</p>
      </div>
    </div>
    <div v-else>
      <NewsHeaderSkeleton />
    </div>

    <!-- Latest News Section -->
    <div class="mb-6">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-bold">Siste Nytt</h3>
      </div>
      <div v-if="status === 'success'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <NewsCard v-for="post in posts.data.posts.slice(1)" :key="post.id" :post="post" />
      </div>

      <div v-else-if="error">
        <div class="text-red-600 bg-red-100 rounded-lg p-4">
          <p class="text-lg font-medium">Kunne ikke laste inn artikler :( {{ error.status }}</p>
        </div>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="item in 4" :key="item">
          <NewsCardSkeleton />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
