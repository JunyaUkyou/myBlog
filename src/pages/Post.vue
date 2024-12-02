<template>
    <el-container>
      <Header />
      <el-main>
        <el-page-header content="記事詳細" @back="$router.push('/')"></el-page-header>
        <el-card class="post-card">
          <h1 class="post-title">{{ post.title }}</h1>
          <el-row :gutter="10">
            <el-col :span="5"><span class="post-date">公開日: {{ post.createdAt }}</span></el-col>
            <el-col :span="5"><span class="post-date">更新日: {{ post.updatedAt }}</span></el-col>
          </el-row>

          <el-divider></el-divider>
          <h3>概要</h3>
          <div class="presentation">
          <!-- <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRpLzqZO4FXP1EvlU6igtf6y0bVnW3Dk2dUOG37U8sk6f7u4kuUkUIJtP9WshxDSB_Nt0yCDYeIolDx/embed?start=false&loop=false&delayms=3000" frameborder="0"   width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe> -->

        </div>
          <el-divider></el-divider>
          <div class="post-content" v-html="content"></div>
          <el-divider></el-divider>

        <!-- リポジトリリンク（カード形式） -->
        <div v-if="post.repository" class="repository-section">
          <h3>GITUBリポジトリ</h3>
          <el-card
            shadow="hover"
            class="repository-card"
            @click="openLink(post.repository)"
          >
            <template #header>
              <h4>JunyaUkyou/dragonball-effects</h4>
            </template>
            <div class="repository-content">
              <img src="@/assets/github-icon.svg" alt="GitHub Icon" class="github-icon" />
            </div>
          </el-card>
        </div>


          <el-button type="primary" plain class="back-button" @click="$router.push('/')">
            一覧に戻る
          </el-button>
        </el-card>
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
        content:"",
      };
    },
    async created() {
      const postId = this.$route.params.id;
      this.post = posts.find((p) => p.id === Number(postId));

      // 記事本文を動的に取得
    if (this.post?.content) {
      try {
        // BASE_URLを取得
        const basePath = import.meta.env.BASE_URL || '/';
        const response = await fetch(`${basePath}${this.post.content}`);
        this.content = await response.text();
        console.log(this.content)
      } catch (error) {
        console.error("本文の読み込みに失敗しました:", error);
      }
    }
    },
    methods: {
        openLink(url) {
        window.open(url, "_blank"); // 新しいタブでリンクを開く
        },
  },
  };
  </script>
  
  <style scoped>
    .presentation{
        width: 100%;
        max-width: 960px;
        height:569px;
    }

  .post-card {
    padding: 20px;
    margin-top: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .post-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .dates {
    display: flex;
  }

  .post-date {
    font-size: 0.9rem;
    color: #999;
    margin-bottom: 20px;
  }
  
  .post-content {
    font-size: 1rem;
    line-height: 1.8;
    color: #333;
    margin-bottom: 30px;
  }
  
  .back-button {
    margin-top: 20px;
    display: block;
  }
  </style>
  