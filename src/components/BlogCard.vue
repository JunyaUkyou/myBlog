<template>
    <el-card shadow="hover" class="mb-4" @click="$router.push(`/post/${post.id}`)">
      <h3>{{ post.title }}</h3>
      <p>{{ post.summary }}</p>
      <el-button type="primary" plain>Read More</el-button>
    </el-card>
  </template>
  
  <script>
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  

  