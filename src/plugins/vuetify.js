import Vue from 'vue'
import Vuetify, {VApp, VBtn} from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  components: {
    VApp,
    VBtn
  }
})
