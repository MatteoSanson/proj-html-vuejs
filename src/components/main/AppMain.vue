<script>
import jumbotron from './jumbotron.vue';
import tutoring from './tutoring.vue';
import empowering from './empowering.vue';
export default {
    name: 'AppMain',
    components: {
        jumbotron,
        tutoring,
        empowering,
    },
};
</script>

<template>
    <main>
        <jumbotron />
        <tutoring />
        <empowering />
    </main>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
</style>