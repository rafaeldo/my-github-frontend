<template>
  <v-layout row wrap>
    <!-- Table -->
    <v-flex xs12>
      <div class="my-table__wrapper">
        <table class="my-table__table">
          <!-- Table Head -->
          <thead class="my-table__head">
            <tr class="my-table__row-head">
              <th class="my-table__cell-head">ID</th>
              <th class="my-table__cell-head">Login</th>
              <th class="my-table__cell-head"></th>
            </tr>
          </thead>
          <!-- Table Body -->
          <tbody class="my-table__body">
            <tr
              v-for="(item, i) in pageSelected"
              :key="i"
              class="my-table__row-body">
              <td class="my-table__cell-body">{{ item.id }}</td>
              <td class="my-table__cell-body">{{ item.login }}</td>
              <td class="my-table__cell-body text-xs-center">
                <v-icon>info</v-icon>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </v-flex>
    <!-- Prev/Next Links -->
    <v-flex class="mt-2" xs12>
      <v-layout row wrap>
        <!-- Prev -->
        <v-flex class="text-xs-left" xs6>
          <v-btn
            @click="prevPage"
            :disabled="prevBtnDisabled"
            flat>
            <v-icon>navigate_before</v-icon>
          </v-btn>
        </v-flex>
        <!-- Next -->
        <v-flex class="text-xs-right" xs6>
          <v-btn
            @click="nextPage"
            flat>
            <v-icon>navigate_next</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    prevBtnDisabled () {
      if (this.pageNumber > 1) {
        return false
      }

      return true
    },
    pageNumber () {
      return this.$store.getters.pageNumber
    },
    pageSelected () {
      return this.$store.getters.pages[this.pageNumber - 1]
    },
    pages () {
      return this.$store.getters.pages
    }
  },
  methods: {
    nextPage () {
      const pageNumber = this.pageNumber
      const nextPage = pageNumber + 1

      if (this.pages[nextPage - 1]) {
        this.$store.commit('increasePageNumber')
        window.scrollTo(0, 0)
        return
      }

      this.$store.dispatch('getUsersGithub')
    },
    prevPage () {
      window.scrollTo(0, 0)
      this.$store.commit('decreasePageNumber')
    }
  }
}
</script>

<style lang="stylus">
.my-table
  &__wrapper
    margin 0 10px
    border-radius 10px
    overflow hidden
    -webkit-box-shadow 0 0px 40px 0px rgba(0,0,0, 0.15)
    -moz-box-shadow 0 0px 40px 0px rgba(0,0,0, 0.15)
    -ms-box-shadow 0 0px 40px 0px rgba(0,0,0, 0.15)
    -o-box-shadow 0 0px 40px 0px rgba(0,0,0, 0.15)
    box-shadow 0 0px 40px 0px rgba(0,0,0, 0.15)
    background-color white
  
  &__table
    width 100%
    border-collapse collapse 

  &__row-head
    font-size 18px
    color white
    line-height 1.4
    background-color #6c7ae0

  &__cell-head
    padding 18px
    text-align left

  &__row-body
    &:nth-child(even)
      background-color #f8f6ff
    
  &__cell-body
    font-size 15px
    color #808080
    line-height 1.4
    padding 16px
</style>
