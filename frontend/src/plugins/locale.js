import Vue from "vue";
import VueI18n from "vue-i18n";
import VeeValidate, { Validator } from "vee-validate";
import es from "vee-validate/dist/locale/es";
import en from "vee-validate/dist/locale/en";
import { translations } from "@/locale/locale.js";

Vue.use(VueI18n);

Validator.localize('es', es);

let lang = localStorage.getItem("restiLang") != undefined ? localStorage.getItem("restiLang") : process.env.VUE_APP_LOCALE;

export const i18n = new VueI18n({
  locale: lang, // set locale
  messages: translations, // set locale messages
})

Vue.use(VeeValidate, {
    i18n,
    locale: lang,
    dictionary: {
        es,
        en
    }
});
