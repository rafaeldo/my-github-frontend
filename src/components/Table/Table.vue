<template>
  <div class="my-table__wrapper">
    <table class="my-table__table">
      <thead class="my-table__head">
        <tr class="my-table__row-head">
          <th class="my-table__cell-head">ID</th>
          <th class="my-table__cell-head">Login</th>
          <th class="my-table__cell-head"></th>
        </tr>
      </thead>
      <tbody class="my-table__body">
        <tr class="my-table__row-body">
          <td class="my-table__cell-body">100</td>
          <td class="my-table__cell-body">extraxt</td>
          <td class="my-table__cell-body text-xs-center">
            <v-icon>subject</v-icon>
          </td>
        </tr>
        <tr class="my-table__row-body">
          <td class="my-table__cell-body">100</td>
          <td class="my-table__cell-body">extraxt</td>
          <td class="my-table__cell-body text-xs-center">
            <v-icon>subject</v-icon>
          </td>
        </tr>
        <tr class="my-table__row-body">
          <td class="my-table__cell-body">100</td>
          <td class="my-table__cell-body">extraxt</td>
          <td class="my-table__cell-body text-xs-center">
            <v-icon>subject</v-icon>
          </td>
        </tr>
        <tr class="my-table__row-body">
          <td class="my-table__cell-body">100</td>
          <td class="my-table__cell-body">extraxt</td>
          <td class="my-table__cell-body text-xs-center">
            <v-icon>subject</v-icon>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

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
