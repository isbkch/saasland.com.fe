<template>
  <v-app class="hidden-x">
    <v-snackbar v-model="snackWithButtons" :timeout="timeout" bottom left class="snack">
      {{ snackWithBtnText }}
      <v-spacer />
      <v-btn dark text color="#00f500" @click.native="refreshApp">{{ snackBtnText }}</v-btn>
      <v-btn icon @click="snackWithButtons = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <Toolbar />
    <Drawer />
    <BottomNav />
    <Views />
    <Footer />
  </v-app>
</template>

<script>

import { mapState, mapMutations } from "vuex";
export default {
  name: "App",
  components: {
    Toolbar:()=>import('@/components/core/Toolbar'),
    BottomNav:()=>import('@/components/core/BottomNav'),
    Drawer:()=>import('@/components/core/Drawer'),
    Views:()=>import('@/components/core/Views'),
    Footer:()=>import('@/components/core/Footer')
  },
  data: () => ({
    isLoading: true,
    refreshing: false,
    snackBtnText: "",
    snackWithBtnText: "",
    snackWithButtons: false,
    timeout: 15000
  })
};
</script>
<style>
.hidden-x{
  overflow-x: hidden
}
</style>
