<template>
  <v-layout row wrap>
    <!-- Github Logo -->
    <v-flex class="text-xs-center mb-3" xs12>
      <Logo />
      <span class="headline">My Github App</span>
    </v-flex>
    <!-- List of Users -->
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
      <Table />
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '@/components/SharedComps/Logo/Logo'
import Table from '@/components/Table/Table'

export default {
  name: 'Home',
  components: {
    Logo,
    Table
  }
}
</script>
