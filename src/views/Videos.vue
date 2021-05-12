<template>
  <div>
    <VideosBanner />

    <section class="section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-3 bg-gradient-default shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container pb-300 video-posts">
        <ul class="row row-grid mt-5">
          <li class="col-lg-4 video-posts" v-for="video in videoPosts" :key="video">
            <Post :post="video" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import VideosBanner from "./components/VideosBanner";
import Post from "./components/Post";
import videoPosts from "../assets/videos.json";

export default {
  name: "videos",
  components: {
    VideosBanner,
    Post,
  },
  data() {
    return {
      videoPosts: [],
    };
  },
  mounted() {
    this.videoPosts = videoPosts;
  },
};
</script>

<style>

.video-posts .links {
  padding-top: 15px;
}

.video-posts ul {
  display: relative;
}

.video-posts li {
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
