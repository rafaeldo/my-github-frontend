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
              <th class="my-table__cell-head">Repository</th>
              <th class="my-table__cell-head"></th>
            </tr>
          </thead>
          <!-- Table Body -->
          <tbody class="my-table__body">
            <tr
              v-for="(item, i) in repos"
              :key="i"
              class="my-table__row-body">
              <td class="my-table__cell-body">{{ item.id }}</td>
              <td class="my-table__cell-body">{{ item.name }}</td>
              <td class="my-table__cell-body text-xs-center">
                <v-btn
                  @click="visitRepo(item.html_url)"
                  small
                  color="blue"
                  flat>
                  VISIT
                </v-btn>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['repos'],
  methods: {
    visitRepo (link) {
      window.open(link,'_blank')
    }
  }
}
</script>

<style lang="stylus" scoped>
.my-table
  &__wrapper
    margin 0 5px
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
    font-size 14px
    color white
    background-color #6c7ae0

  &__cell-head
    padding 10px
    text-align left

  &__row-body
    &:nth-child(even)
      background-color #f8f6ff
    
  &__cell-body
    font-size 14px
    color #808080
    line-height 1.4
    padding 10px
</style>
