import Vue from 'vue'
import locale from 'element-ui/lib/locale'
import VueI18n from 'vue-i18n'
import en from './lang/en'
import cn from './lang/cn'
Vue.use(VueI18n)

const messages = {
  en: en,
  cn: cn
}

const i18n = new VueI18n({
  locale: 'cn', // 设置默认语言
  messages
})
locale.i18n((key, value) => i18n.t(key, value))
export default i18n
