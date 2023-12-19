<script>
import jumbotron from './jumbotron.vue';
export default {
    name: 'AppMain',
    components: {
        jumbotron,
    },
};
</script>

<template>
    <main>
        <jumbotron />
    </main>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
</style>