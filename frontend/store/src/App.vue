<template>
  <div>
    <Navbar />
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import Navbar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
