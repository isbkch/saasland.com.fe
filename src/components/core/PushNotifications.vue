<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn icon text v-on="on" aria-label="Push Notification">
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Allow Us to send Push Notification</v-card-title>

        <v-card-text>
          <p>We never spam you by sending unnecessary Push Notification.</p>
          <p>
            <span class="font-weight-bold text--primary">Status:</span>
            {{ token }}
          </p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            :loading="isLoading"
            :disabled="buttonText=='Allowed'"
            @click="requestPermission"
          >{{ buttonText }}</v-btn>
          <v-btn color="error" text @click="dialog = false">close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import { mapState } from "vuex";
export default {
  name: "PushNotification",
  data() {
    return {
      dialog: false,
      isLoading: false,
      token: "Not Granted Yet",
      buttonText: "Allow"
    };
  },
  computed: {
    ...mapState(["config"])
  },

  methods: {
    requestPermission() {
      // ...
    },
    displayNotificaion() {
      if ("serviceWorker" in navigator) {
        var options = {
          body: "You Successfully Subscribed to Push Notifications",
          icon: "img/icons/favicon-32x32.png",
          dir: "ltr",
          badge: "img/icons/favicon-32x32.png",
          tag: "NewSubscription",
          renotify: true,
          actions: [
            {
              action: "open",
              title: "Visit Site"
            }
          ]
        };
        navigator.serviceWorker.ready.then(function(swreg) {
          swreg.showNotification("Successfully Subscribed", options);
        });
      }
    }
  },
  mounted() {
    let token = localStorage.getItem("pushNotificationToken");
    if (token && token.length > 0) {
      this.token = 'Already Subscribed';
      this.buttonText == "Allowed";
    }
  }
};
</script>
