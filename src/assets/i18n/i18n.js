import Vue from 'vue'
import locale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

import VueI18n from 'vue-i18n'
import en from './lang/en'
import zhCN from './lang/zh-CN'
Vue.use(VueI18n)

const messages = {
  en: { ...en, ...enLocale },
  'zh-CN': { ...zhCN, ...zhLocale }
}
const i18n = new VueI18n({
  locale: 'zh-CN', // 设置默认语言
  messages
})
locale.i18n((key, value) => i18n.t(key, value))
export default i18n
