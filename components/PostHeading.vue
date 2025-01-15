<script setup lang="ts">
import type { Post } from "~/types/Post";

defineProps<{
  post: Post;
  baseUrl: string;
}>();
</script>

<template>
  <header class="md:text-center">
    <!-- Author and Date -->
    <h4 class="mx-auto text-xl font-medium leading-relaxed text-gray-700 lg:w-2/3">
      <nuxt-link
        :to="{ name: 'authors-slug', params: { slug: post.author.slug } }"
        class="text-orange-600 hover:text-orange-400"
      >
        {{ post.author.name }}
      </nuxt-link>
      on <span class="font-semibold">
        {{ new Date(post.created_at).toLocaleDateString() }}
      </span>
    </h4>

    <!-- Title and Lead -->
    <h2 class="mb-4 text-4xl font-black text-black">
      {{ post.title }}
    </h2>
    <h3 class="max-w-4xl mx-auto text-xl">
      {{ post.lead }}
    </h3>

    <!-- Featured Image -->
    <nuxt-img
      :src="baseUrl + '/' + post.image_url"
      alt="Blog Post Image"
      class="rounded-lg mt-8 mx-auto"
    />
  </header>
</template>
