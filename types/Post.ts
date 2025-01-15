export interface Post {
    id: number;
    author_id: number;
    category_id: number;
    title: string;
    slug: string;
    image_url: string;
    lead?: string;
    content: string;
    is_published: number;
    tags?: (string)[] | null;
    created_at: string;
    updated_at: string;
    category: Category;
    author: Author;
}
export interface Category {
    id: number;
    name: string;
    slug: string;
    description: string;
    is_published: boolean;
    created_at: string;
    updated_at: string;
}
export interface Author {
    id: number;
    name: string;
    slug: string;
    avatar: string;
    phone: string;
    email: string;
    bio: string;
    created_at: string;
    updated_at: string;
}
