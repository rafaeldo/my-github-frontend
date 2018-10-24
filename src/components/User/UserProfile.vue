<template>
  <v-card style="border-radius: 10px">
    <v-card-title
      class="headline black white--text"
      primary-title>
      User Profile
    </v-card-title>

    <v-card-text>
      <Loading />
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        color="primary"
        flat
        @click="closeModal">
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Loading from '@/components/SharedComps/Loading/Loading'

export default {
  components: {
    Loading
  },
  props: ['userId'],
  methods: {
    closeModal () {
      this.$emit('closeTheModal')
    }
  }
}
</script>
