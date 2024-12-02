<template>
    <el-container>
      <Header />
      <el-main>
        <h2>記事一覧</h2>
        <div v-for="post in posts" :key="post.id">
          <BlogCard :post="post" />
        </div>
      </el-main>
    </el-container>
  </template>
  
  <script>
  import { posts } from "@/data/posts";
  import BlogCard from "@/components/BlogCard.vue";
  import Header from "@/components/Header.vue";
  
  export default {
    components: { BlogCard, Header },
    data() {
      return {
        posts,
      };
    },
  };
  </script>
  