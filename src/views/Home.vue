<template>
  <v-layout row wrap>
    <!-- Github Logo -->
    <v-flex class="text-xs-center mb-3" xs12>
      <Logo />
      <span class="headline">My Github App</span>
    </v-flex>
    <!-- List of Users -->
    <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
      <Table
        @userId="catchUserId" />
    </v-flex>
    <!-- User Profile -->
    <v-dialog
      width="500"
      v-model="modal">
      <UserProfile
        :userId="userId"
        @closeTheModal="closeModal"
        v-if="modal"/>
    </v-dialog>
  </v-layout>
</template>

<script>
import Logo from '@/components/SharedComps/Logo/Logo'
import Table from '@/components/Table/Table'
import UserProfile from '@/components/User/UserProfile'

export default {
  name: 'Home',
  components: {
    Logo,
    Table,
    UserProfile
  },
  data () {
    return {
      modal: false,
      userId: null
    }
  },
  methods: {
    closeModal () {
      this.userId = null
      this.modal = false
    },
    catchUserId (id) {
      this.userId = id
      this.openUserProfile()
    },
    openUserProfile () {
      this.modal = true
    }
  }
}
</script>
