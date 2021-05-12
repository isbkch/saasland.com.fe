<template>
  <div>
    <BlogBanner />

    <section class="section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-3 bg-gradient-default shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container pb-300 blog-posts">
        <ul class="row row-grid mt-5">
          <li class="col-lg-4 blog-posts" v-for="blog in blogPosts" :key="blog">
            <Post :post="blog" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import BlogBanner from "./components/BlogBanner";
import Post from "./components/Post";
import blogPosts from "../assets/blog-content.json";

export default {
  name: "blog",
  components: {
    BlogBanner,
    Post,
  },
  data() {
    return {
      blogPosts: [],
    };
  },
  mounted() {
    this.blogPosts = blogPosts;
  },
};
</script>

<style>

.blog-posts .links {
  padding-top: 15px;
}

.blog-posts ul {
  display: relative;
}

.blog-posts li {
  width: 400px;
  display: inline-block;
  padding: 20px;

  top: 0px;
  overflow: hidden;
  border: solid 1px #eee;
  margin: 0px;
  text-align: left;
}
</style>
