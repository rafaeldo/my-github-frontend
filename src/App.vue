<template>
  <div id="app">
    <v-app class="white">
      <v-container class="ma-0 pa-0" fluid>
        <v-layout class="my-container ma-0" row wrap align-center>
          <!-- Loading -->
          <v-flex
            v-if="loadingState"
            class="text-xs-center"
            xs12>
            <Loading/>
          </v-flex>
          <!-- Content -->
          <v-flex v-else xs12>
            <router-view/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import Loading from '@/components/SharedComps/Loading/Loading'

export default {
  components: {
    Loading
  },
  data () {
    return {
      loadingState: true
    }
  }
}
</script>

<style>
.my-container {
  height: 100vh;
}
</style>
