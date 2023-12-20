<script>
import jumbotron from './jumbotron.vue';
import tutoring from './tutoring.vue';
import empowering from './empowering.vue';
import profiles from './profiles.vue';
import learning from './learning.vue';
import onlineCourses from './onlineCourses.vue';
export default {
    name: 'AppMain',
    components: {
        jumbotron,
        tutoring,
        empowering,
        profiles,
        learning,
        onlineCourses,
    },
};
</script>

<template>
    <main>
        <jumbotron />
        <tutoring />
        <empowering />
        <profiles />
        <learning />
        <onlineCourses />
    </main>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
</style>