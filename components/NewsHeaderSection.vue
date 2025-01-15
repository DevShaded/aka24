<script setup lang="ts">
import type { Post } from "~/types/Post";

const config = useRuntimeConfig();

defineProps<{
  post: Post;
}>();
</script>

<template>
  <article class="bg-white shadow rounded-lg p-6 mb-8">
    <nuxt-link prefetchOn="interaction" :to="{ name: 'artikler-slug', params: { slug: post.slug } }">
      <div class="flex flex-col md:flex-row">
        <!-- Image -->
        <div class="md:w-1/3 mb-4 md:mb-0">
          <nuxt-img :src="config.public.baseApiUrl + '/' + post.image_url" alt="Featured Article" class="rounded-lg" />
        </div>
        <!-- Text Content -->
        <div class="md:w-2/4 md:pl-6">
          <div class="flex items-center gap-3 mb-6 sm:mt-4">
            <nuxt-img
              :src="config.public.baseApiUrl + '/' + post.author.avatar"
              alt="User Avatar"
              class="inline-block size-12 rounded-full"
            />
            <div class="text-sm">
              <p
                class="font-semibold text-orange-600 dark:text-orange-400"
              >
                {{ post.author.name }}
              </p>
              <p class="font-medium text-gray-600 dark:text-gray-400">
                {{ new Date(post.created_at).toLocaleDateString() }}
              </p>
            </div>
          </div>
          <h2 class="text-2xl md:text-4xl font-bold mb-4">{{ post.title }}</h2>
          <p v-html="post.lead ?? 'Ingen innledning'" class="text-gray-600 mb-4"></p>
        </div>
      </div>
    </nuxt-link>
  </article>
</template>

<style scoped></style>
