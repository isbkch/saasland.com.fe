<template>
  <p class="roboto-font mt-4 mb-3" style="font-size:130%">
    Follow Us:
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          rel="noreferrer"
          :href="config.generalConfig.socialLinks.facebook"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
      </template>
      <span>Facebook</span>
    </v-tooltip>

    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          rel="noreferrer"
          :href="config.generalConfig.socialLinks.twitter"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
      </template>
      <span>Twitter</span>
    </v-tooltip>

    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          rel="noreferrer"
          :href="config.generalConfig.socialLinks.instagram"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </template>
      <span>Instagram</span>
    </v-tooltip>

    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          rel="noreferrer"
          :href="config.generalConfig.socialLinks.github"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-github-circle</v-icon>
        </v-btn>
      </template>
      <span>Github</span>
    </v-tooltip>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          rel="noreferrer"
          :href="config.generalConfig.socialLinks.linkedin"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
      </template>
      <span>Linkedin</span>
    </v-tooltip>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          rel="noreferrer"
          :href="config.generalConfig.socialLinks.youtube"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-youtube-play</v-icon>
        </v-btn>
      </template>
      <span>YouTube</span>
    </v-tooltip>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          icon
          v-on="on"
          rel="noreferrer"
          :href="config.generalConfig.socialLinks.medium"
          target="_blank"
          slot="activator"
        >
          <v-icon>mdi-medium</v-icon>
        </v-btn>
      </template>
      <span>Medium</span>
    </v-tooltip>
  </p>
</template>

<script>
import config from "@/assets/data/config.json";
export default {
  name: "CommunitySocialInfo",
  props: ["config"],
  data: () => ({
    config: config
  }),
};
</script>

<style>
</style>
