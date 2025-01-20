<script setup lang="ts">
import type { Post } from "~/types/Post";
const config = useRuntimeConfig();

defineProps<{
  post: Post;
}>();
</script>

<template>
  <nuxt-link prefetch-on="interaction" :to="{ name: 'artikler-slug', params:  { slug: post.slug } }" class="bg-white shadow rounded-lg p-4">
    <article>
      <nuxt-img :src="config.public.baseApiUrl + '/storage/' + post.image_url" alt="News 2" class="rounded-lg mb-4 h-40 w-full object-cover" />
      <h4 class="font-bold text-lg mb-2">{{ post.title }}</h4>
      <p class="text-sm text-gray-600 mb-4">{{ post.lead.trimEnd().slice(0, 100) }}...</p>
      <p class="text-xs text-gray-500">{{ post.author.name }} • {{ new Date(post.created_at).toLocaleDateString() }}</p>
    </article>
  </nuxt-link>
</template>

<style scoped></style>
