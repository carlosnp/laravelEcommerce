<template>
    <v-flex xs2>
        <v-select
          :items="langs"
          v-model="language"
          menu-props="auto"
          label="Select"
          hide-details
          single-line
          @change="setLocale()"
        ></v-select>
      </v-flex>
</template>

<script>
export default {
  data() {
    return { 
      langs: ['es', 'en'],
      language: this.$i18n.locale
     };
  },
  methods:{
    setLocale(){
      this.$validator.localize(this.language)
      this.$i18n.locale = this.language;
      localStorage.setItem("locale",this.language);
    }
  },
};
</script>