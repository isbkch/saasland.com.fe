<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" lg="3" sm="4" class>
        <p class="roboto-font mb-0" style="font-size:150%">What we do?</p>
        <p
          class="roboto-font mt-0"
          style="font-size:95%"
        >SaaS Builder is for developers who are interested in building and deploying SaaS Solutions.</p>
        <p class="roboto-font" style="font-size:95%">We leverage different AWS technologies</p>
        <span v-for="(item,i) in whatwedodata" :key="i">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <a :href="item.link" target="_blank" class="ma-0 mx-3" rel="noreferrer">
                <img :src="getImgUrl(item.image)" width="25vh" alt srcset dark v-on="on" />
              </a>
              &nbsp;&nbsp;&nbsp;
            </template>
            <span>{{item.TechName}}</span>
          </v-tooltip>
        </span>
      </v-col>
      <v-col cols="12" md="9" lg="9" sm="8">
        <v-container fluid>
          <v-row>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-comment</v-icon>
              <p class="roboto-font mt-2" style="font-size:130%">Talks</p>
              <p
                class="roboto-font"
                style="font-size:95%"
              >Get updated with the latest news and announcements</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-code-tags</v-icon>
              <p class="roboto-font mt-2" style="font-size:130%">Workshops</p>
              <p
                class="roboto-font"
                style="font-size:95%"
              >Get hands-on experience and guidance from a variety of workshops</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-search-web</v-icon>
              <p class="roboto-font mt-2" style="font-size:130%">Something We Offer</p>
              <p
                class="roboto-font"
                style="font-size:95%"
              >Lorem Ipsum dolor sit amet consecutar Lorem Ipsum dolor sit amet</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-information-outline</v-icon>
              <p class="roboto-font mt-2" style="font-size:130%">Something We Offer</p>
              <p
                class="roboto-font"
                style="font-size:95%"
              >Lorem Ipsum dolor sit amet consecutar Lorem Ipsum dolor sit amet</p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import whatwedodata from "@/assets/data/whatwedo.json";
export default {
  name: "App",
  data: () => ({
    whatwedodata: whatwedodata
  }),
  methods: {
    getImgUrl(url) {
      if (url.length > 0) {
        return require("@/assets/img/what-we-do/" + url);
      } else {
        return require("@/assets/img/what-we-do/notFound.png");
      }
    }
  }
};
</script>
