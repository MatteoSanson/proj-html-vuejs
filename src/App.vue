<script>
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';
import AppFooter from './components/footer/AppFooter.vue';

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style scoped></style>