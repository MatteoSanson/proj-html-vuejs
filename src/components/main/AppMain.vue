<script>
import jumbotron from './jumbotron.vue';
import tutoring from './tutoring.vue';
export default {
    name: 'AppMain',
    components: {
        jumbotron,
        tutoring,
    },
};
</script>

<template>
    <main>
        <jumbotron />
        <tutoring />
    </main>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
</style>