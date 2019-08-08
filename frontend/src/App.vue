<template>
  <v-app>
    <navbar></navbar>
    <v-content>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/navbar/navbar.vue'

export default {
  name: 'App',
  components: {
    navbar: Navbar
  },
  data: () => ({
    //
  }),
};
</script>
