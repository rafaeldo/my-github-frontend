import Vue from 'vue'
import Vuetify, {VApp, VBtn, VIcon, VDialog} from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  components: {
    VApp,
    VBtn,
    VIcon,
    VDialog
  }
})
