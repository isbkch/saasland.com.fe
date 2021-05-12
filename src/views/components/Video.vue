<template>
  <div class="hello">
    <div class="img-holder">
      <a :href="video.link">
        <img :src="video.image" />
      </a>
    </div>
    <p>
      <strong>{{ video.date }}, by {{ video.author }} </strong>
    </p>
    <h5>{{ video.title }}</h5>
    <!-- <p>{{ video.intro }}</p> -->
    <a :href="video.link"> Read more</a>
  </div>
</template>

<script>
export default {
  name: "Video",
  props: {
    video: {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5 {
  margin: 10px 0 30px;
  color: white;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.img-holder {
  height: 150px;
  overflow: hidden;
}
img {
  width: 100%;
  display: inline-block;
}

a {
  color: #42b983;
}
</style>
