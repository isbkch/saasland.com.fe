<template>
  <v-container fluid class="py-0">
    <v-row align="center" class="fill-height">
      <v-col md="3" sm="6" cols="12" class>
        <v-img
          :src="checkExistance(config.generalConfig.homeImage,0)?config.generalConfig.homeImage:require('@/assets/img/svg/home.svg')"
          :lazy-src="checkExistance(config.generalConfig.homeImage,0)?config.generalConfig.homeImage:require('@/assets/img/svg/home.svg')"
          width="100%"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col md="9" sm="6" cols="12" class="px-0">
        <p
          class="roboto-font mb-1"
          :class="$vuetify.theme.dark == true?'dark-font-color':'light-font-color'"
          style="font-weight: 350;font-size:230%"
        >
          <b>
            Build SaaS apps
            <span style="color: #e76d0c;">together</span>.
          </b>
        </p>
        <p class="roboto-font mt-0 mb-0" style="font-size:150%">Get Me Started</p>
        <p class="roboto-font" style="font-size:100%">{{config.generalConfig.shortDescription}}</p>
        <p class="roboto-font" style="font-size:100%;color:#9e9e9e">
          <span v-for="(item,i) in hashtags" :key="i">
            <v-chip
              :href="'https://twitter.com/hashtag/'+item.tag"
              rel="noreferrer"
              target="_blank"
              small
              class="mr-1"
            >#{{item.tag}}</v-chip>
            <!-- &nbsp; -->
          </span>
        </p>

        <v-row align="center" class="fill-height">
            <v-col md="4" sm="6" cols="8" class>
                <v-btn
                    :href="config.generalConfig.becomeMemberLink"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="SaaS Newbie"
                    x-large="true"
                    class="ma-0 roboto-font elevation-1 primary mr-2"
                    style="text-transform: capitalize;border-radius:3px;color:white; border-color: #e76d0c #e15500 #e15500 !important; background-color: #ec7211 !important;"
                >
                    I don't know where to start <br /> (SaaS Newbie)
                </v-btn>
            </v-col>
            <v-col md="4" sm="6" cols="8" class>
                <v-btn
                    :href="config.generalConfig.becomeMemberLink"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="SaaS Consultant"
                    x-large="true"
                    class="ma-0 roboto-font elevation-1 primary mr-2"
                    style="text-transform: capitalize;border-radius:3px;color:white; border-color: #e76d0c #e15500 #e15500 !important; background-color: #ec7211 !important;"
                >I work with SaaS customers already :)<br>(SaaS Consultant)</v-btn>
            </v-col>
        </v-row>

        <v-row align="center" class="fill-height">
            <v-col md="4" sm="6" cols="8" class>
                <v-btn
                    :href="config.generalConfig.becomeMemberLink"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="SaaS Ops/DevOps"
                    x-large="true"
                    class="ma-0 roboto-font elevation-1 primary mr-2"
                    style="text-transform: capitalize;border-radius:3px;color:white; border-color: #e76d0c #e15500 #e15500 !important; background-color: #ec7211 !important;"
                >I need help keeping the lights on !?! <br>(SaaS Ops/DevOps)</v-btn>
            </v-col>
            <v-col md="4" sm="6" cols="8" class>
                <v-btn
                    :href="config.generalConfig.becomeMemberLink"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Experienced SaaS Architect/Builder"
                    x-large="true"
                    class="ma-0 roboto-font elevation-1 primary mr-2"
                    style="text-transform: capitalize;border-radius:3px;color:white; border-color: #e76d0c #e15500 #e15500 !important; background-color: #ec7211 !important;"
                >Just show me the code already<br>(Experienced SaaS Architect/Builder)</v-btn>
            </v-col>
        </v-row>
        <br>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import hashtags from "@/assets/data/hashtags.json";
import config from "@/assets/data/config.json";
import { mapState } from "vuex";

export default {
  data: () => ({
    hashtags: hashtags,
    config: config
  }),
  computed: {
    ...mapState(["config"])
  }
};
</script>

<style scoped>
.dark-font-color {
  color: white;
}
.light-font-color {
  color: #616161;
}
</style>
