/*
SPDX-FileCopyrightText: 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0
*/

<template>
  <div class="hello">
    <h3>{{ pattern.title }}</h3>
    <div class="img-holder">
      <img :src="pattern.image" />
    </div>

    <p>{{ pattern.intro }}</p>
    <a :href="pattern.link"> View pattern</a>
  </div>
</template>

<script>
export default {
  name: "BlogItem",
  props: {
    post: {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 10px 0 30px;
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
