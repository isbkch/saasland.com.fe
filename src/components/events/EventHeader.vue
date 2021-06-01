<template>
    <v-container fluid class="py-0">
        <v-row align="center">
            <v-col md="12" sm="12" cols="12">
                <p class="roboto-font mb-0" style="font-weight: 350;font-size:200%"><b>Our
                    <span style="color: #e76d0c;">Events</span> </b>
                </p>
                <p class="roboto-font mt-0 mb-0" style="font-size:110%">Questions? Please contact <a style="color:#1565C0;text-decoration: none;" :href="`mailto:${data.email}`">{{data.email}}</a></p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    props:['data'],
        data:()=>({
    })
}
</script>
