// src/stores/postsStore.ts
import { atom } from "nanostores";
import { type Post } from "../types/Post";

// Create posts store
export const $posts = atom<Post[]>([]);

// Actions
export async function loadPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json() as Post[];
        // limit to 4 posts
        const limitedData = data.slice(0, 4);
        $posts.set(limitedData);
        return limitedData as Post[];
    } catch (err) {
        return null;
    }
}

export function addPost(post: Post) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json: Post) => {
            $posts.set([...$posts.get(), json])
        });
    ;
}