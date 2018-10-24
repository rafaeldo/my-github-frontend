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
        @username="catchUsername" />
    </v-flex>
    <!-- User Profile -->
    <v-dialog
      width="500"
      v-model="modal">
      <UserProfile
        :username="username"
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
      username: null
    }
  },
  methods: {
    closeModal () {
      this.username = null
      this.modal = false
    },
    catchUsername (username) {
      this.username = username
      this.openUserProfile()
    },
    openUserProfile () {
      this.modal = true
    }
  },
  watch: {
    modal (newValue) {
      if (newValue === false) {
        this.username = null
        this.$store.commit('cleanUserProfile')
        this.$store.commit('cleanUserRepos')
      }
    }
  }
}
</script>
