<template>
    <el-container>
      <Header />
      <el-main>
        <el-page-header content="記事詳細" @back="$router.push('/')"></el-page-header>
        <div v-if="post">
          <h1>{{ post.title }}</h1>
          <p>{{ post.content }}</p>
          <p><strong>公開日:</strong> {{ post.createdAt }}</p>
        </div>
      </el-main>
    </el-container>
  </template>
  
  <script>
  import { posts } from "@/data/posts";
  import Header from "@/components/Header.vue";
  
  export default {
    components: { Header },
    data() {
      return {
        post: null,
      };
    },
    created() {
      const postId = this.$route.params.id;
      this.post = posts.find((p) => p.id === Number(postId));
    },
  };
  </script>
  