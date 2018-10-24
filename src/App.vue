<template>
  <div id="app">
    <v-app class="white">
      <v-container class="ma-0 pa-0" fluid>
        <v-layout class="mx-0 my-4" row wrap>
          <!-- Loading -->
          <v-flex
            v-if="loadingState"
            class="text-xs-center"
            xs12>
            <Loading />
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
  computed: {
    loadingState () {
      return this.$store.getters.loading
    }
  },
  created () {
    this.$store.dispatch('getUsersGithub')
  }
}
</script>