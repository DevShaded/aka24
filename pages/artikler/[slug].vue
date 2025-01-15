<script setup lang="ts">
import ArticleSkeleton from "~/components/Skeletons/ArticleSkeleton.vue";
import type { Post } from "~/types/Post";

const route = useRoute();
const config = useRuntimeConfig();

const { status, error, data: post } = await useFetch<Post>(config.public.baseApiUrl + '/api/posts/' + route.params.slug, {
  lazy: true
})

watch(post, (newPost) => {
  if (newPost) {
    useSeoAndSchema(newPost.data.post, config.public.baseApiUrl, route.fullPath);
  }
});
</script>

<template>
  <div class="bg-white">
    <div v-if="status === 'pending'" class="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
      <ArticleSkeleton />
    </div>
    <article
      v-else-if="status === 'success'"
      class="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl"
    >

      <PostHeading :post="post.data.post" :baseUrl="config.public.baseApiUrl" />

      <section
        class="prose prose-lg prose-orange mx-auto prose-a:no-underline hover:prose-a:opacity-75 prose-img:rounded-lg"
        v-html="post.data.post.content"
      >
      </section>
    </article>
    <section v-else class="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
      <div class="text-red-600 bg-red-100 rounded-lg p-4">
        <p class="text-lg font-medium">Kunne ikke laste inn artikkelen :( {{ error.status }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>
