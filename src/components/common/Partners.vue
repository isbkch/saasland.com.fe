<template>
  <v-container fluid>
    <v-row align="center" justify="center" class="mb-0">
      <v-col cols="12" md="12" lg="12" sm="12" class="mb-0">
        <p class="roboto-font mb-1" style="font-weight: 350; font-size: 200%">
          <b>Our <span style="color: #e76d0c">Partners</span> </b>
        </p>
        <p class="roboto-font mt-1 mb-0" style="font-size: 100%">
          A very big thank you to all our partners for their continued
          partnership.
        </p>
        <p class="roboto-font mt-0 mb-0" style="font-size: 100%">
          If you’re interested in being showcased throughout , contact
          <a
            style="color: #1565c0; text-decoration: none"
            :href="`mailto:${config.generalConfig.email}`"
            >{{ config.generalConfig.email }}</a
          >
          to discuss sponsorship opportunities.
        </p>
      </v-col>
    </v-row>

    <v-row
      align="center"
      justify="start"
      class="mt-0 pt-0"
    >
      <v-col cols="12" md="12" lg="12" sm="12" class="mx-0 mt-0">
        <p class="roboto-font mb-0" style="font-size: 130%">General Partners</p>
      </v-col>
      <v-col
        cols="6"
        md="3"
        xl="2"
        lg="2"
        sm="4"
        v-for="(partner, i) in partners" :key="i"
      >
        <div class="client-logo ma-0">
          <a v-bind:href="partner.socialLinks.linkedin" target="_blank">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-img
                  :src="getImgUrl(partner.image)"
                  :lazy-src="getImgUrl(partner.image)"
                  class="white"
                  contain
                  style="height: 4em"
                  v-on="on"
                >
                  <v-layout
                    slot="placeholder"
                    fill-height
                    align-center
                    justify-center
                    ma-0
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-layout>
                </v-img>
              </template>
              <span class="roboto-font">{{ partner.name }}</span>
            </v-tooltip>
          </a>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import service from "@/services/appservices";
import partners from "@/assets/data/partners.json";
import { mapState } from "vuex";
export default {
  data: () => ({
    partners: partners,
  }),
  computed: {
    ...mapState(["config"]),
  },
};
</script>

<style scoped>
.client-logo {
  height: 90px;
  padding: 12px 12px;
  border-radius: 7px;
  background: white;
  border: 1px solid #ebebeb;
  text-align: center;
}
</style>
