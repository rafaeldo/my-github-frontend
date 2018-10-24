<template>
  <v-card style="border-radius: 10px">
    <!-- Title -->
    <v-card-title
      class="headline black white--text"
      primary-title>
      User Profile
    </v-card-title>
    <!-- Content -->
    <v-card-text>
      <!-- Loading -->
      <Loading v-if="loadingUserProfile"/>
      <!-- User Profile -->
      <v-layout v-else row wrap>
        <!-- Basic Info -->
        <v-flex xs12>
          <table class="my-table">
            <tbody class="my-table__body">
              <tr class="my-table__row-body">
                <td class="my-table__cell-body"><b>ID:</b></td>
                <td class="my-table__cell-body">{{ userProfile.id }}</td>
              </tr>
              <tr class="my-table__row-body">
                <td class="my-table__cell-body"><b>Username:</b></td>
                <td class="my-table__cell-body">{{ userProfile.login }}</td>
              </tr>
              <tr class="my-table__row-body">
                <td class="my-table__cell-body"><b>Created At:</b></td>
                <td class="my-table__cell-body">{{ createdAt }}</td>
              </tr>
            </tbody>
          </table>
        </v-flex>
        <!-- Repos -->
        <v-flex xs12>
          <UserRepos
            v-if="userRepos.length > 0"
            :repos="userRepos"/>
        </v-flex>
      </v-layout>
    </v-card-text>

    <v-divider></v-divider>

    <!-- Actions -->
    <v-card-actions>
      <v-btn
        @click="visitGithub"
        class="blue white--text"
        :disabled="loadingUserProfile"
        small
        flat>
        Github Page
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="loadingUserProfile"
        color="primary"
        flat
        small
        @click="closeModal">
        Close
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Loading from '@/components/SharedComps/Loading/Loading'
import UserRepos from '@/components/User/UserRepos'

export default {
  components: {
    Loading,
    UserRepos
  },
  props: ['username'],
  computed: {
    loadingUserProfile () {
      return this.$store.getters.loadingUserProfile
    },
    userProfile () {
      return this.$store.getters.userProfile
    },
    userRepos () {
      return this.$store.getters.userRepos
    },
    createdAt () {
      const created_at = this.userProfile.created_at
      return created_at.substring(0, 10)
    }
  },
  methods: {
    closeModal () {
      this.$emit('closeTheModal')
    },
    visitGithub () {
      const link = this.userProfile.html_url
      window.open(link,'_blank')
    }
  },
  created () {
    this.$store.dispatch('getUserProfileAndRepos', this.username)
  }
}
</script>

<style lang="stylus" scoped>
.my-table
  width 100%

  &__table
    border-collapse collapse 

  &__cell-body
    font-size 15px
    color #808080
    line-height 1.4
    padding 16px
    text-align left
</style>
