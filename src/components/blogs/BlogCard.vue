<template>
  <div>
    <div
      style="min-height: 360px; max-height: 360px"
      :class="$vuetify.theme.dark == true ? 'card-dark' : 'card-light'"
      class="pa-0 hidden-sm-and-down"
    >
      <v-img
        :src="post.image"
        :lazy-src="post.image"
        width="100%"
        cover
        style="border-radius: 5px"
        height="180px"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      <div class="pa-3">
        <p class="roboto-font ma-0 mt-2" style="font-size: 110%">
          {{ post.title }}
        </p>
        <p class="roboto-font mt-0 mb-0" style="font-size: 90%">
          {{ post.date }}
        </p>
        <p class="roboto-font mt-0 mb-4" style="font-size: 90%">
          {{ post.author }}
        </p>
        <!-- <v-chip x-small v-for="(item,i) in post.categories" outlined :key="i">{{item}}</v-chip> -->
        <v-btn
          target="_blank"
          text
          small
          :href="post.link"
          class="mb-0 mt-0"
          style="color: #e76d0c; text-decoration: none"
          >Read</v-btn
        >
      </div>
    </div>

    <div class="d-md-none d-lg-none">
      <v-card class="mx-auto" max-width="100%" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="mb-4 roboto-font">{{ post.date }}</div>
            <v-list-item-title
              class="mb-1 roboto-font"
              style="font-size: 120%">{{ post.title | summary(20) }}
            </v-list-item-title>
            <v-list-item-subtitle class="roboto-font">{{ post.author }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="100" color="grey">
            <v-img :src="post.image" alt="" />
          </v-list-item-avatar>
        </v-list-item>

        <v-card-actions>
          <v-btn :href="post.link" target="_blank" text>Read</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    post: {},
  },
  filters: {
    summary: (val, num) => {
      if ((typeof val !== 'undefined') && (val.length > num)) {
        return val.substring(0, num) + "..";
      } else {
        return val;
      }
    }
  },
};
</script>

<style scoped>
img,
figure {
  width: 100%;
}
</style>
