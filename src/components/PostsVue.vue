<script setup lang="ts">
import { $posts, addPost } from "../stores/postsStore";
import { useStore } from '@nanostores/vue'
const posts = useStore($posts)
const addPostHandler = () => {
    addPost({
        id: 1,
        title: 'New Post',
        body: 'This is a new post',
        userId: 1
    });
}
</script>


<template>
    <div>
        <button @click="addPostHandler">Add Post</button>
    </div>
    <ul>
        <li v-for="(post, index) in posts" :key="post.id">
            <h3>{{ index + 1 }}) {{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <a :href="`/posts/${post.id}`">Read more</a>
        </li>
    </ul>
</template>
