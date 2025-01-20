import type { Post } from "~/types/Post";
import { useSchemaOrg } from "@unhead/schema-org";

export async function useSeoAndSchema(post: Post, baseUrl: string, fullPath: string) {
    await useSeoMeta({
        title: post.title,
        description: post.lead,
        image: `${baseUrl}/storage/${post.image_url}`,
        url: fullPath,
        ogImage: `${baseUrl}/${post.image_url}`,
        twitterTitle: post.title,
        twitterDescription: post.lead,
        twitterImage: `${baseUrl}/storage/${post.image_url}`,
        twitterCard: "summary",
    });
+
    await useSchemaOrg([
        defineArticle({
            headline: post.title,
            image: `${baseUrl}/storage/${post.image_url}`,
            datePublished: post.created_at,
            dateModified: post.updated_at,
            "@type": "Article",
        }),
    ]);
}
