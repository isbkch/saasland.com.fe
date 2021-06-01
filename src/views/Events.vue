<template>
    <v-content class="px-0 mx-1">
        <v-container fluid class="pa-0">
            <v-row justify="center" align="center" :class="this.$vuetify.theme.dark == true?'grey darken-4':'grey lighten-4'" class="py-0 my-0">
                <v-col md="12" lg="10" sm="11" xs="12" class="py-3 my-0" >
                    <eventsHeader :data="config.generalConfig"/>
                    <upcomingMeetupsEvents />
                    <featureEvents />
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid class="pa-0 py-2" >
            <v-row justify="center" align="center">
                <v-col md="12" lg="10" sm="11" xs="12" class="py-0" >
                    <pastMeetupsEvents />
                    <customPastEvents/>
                </v-col>
            </v-row>
        </v-container>
    </v-content>
</template>

<script>

import { mapState } from "vuex";
import config from "@/assets/data/config.json";

export default {
    components:{
        eventsHeader:()=>import('@/components/events/EventHeader'),
        upcomingMeetupsEvents:()=>import('@/components/events/UpcomingEvents'),
        pastMeetupsEvents:()=>import('@/components/events/PastEvents'),
        featureEvents:()=>import('@/components/home/FeaturesEvents'),
        customPastEvents:()=>import('@/components/events/CustomPastEvents')
    },
    computed:{
        ...mapState(["config"])
    },
    data:()=>({
        config: config
    })
}
</script>
