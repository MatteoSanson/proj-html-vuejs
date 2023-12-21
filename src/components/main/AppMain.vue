<script>
import jumbotron from './jumbotron/jumbotron.vue';
import tutoring from './tutoring.vue';
import empowering from './empowering.vue';
import profiles from './profiles.vue';
import learning from './learning.vue';
import onlineCourses from './onlineCourses.vue';
import pricingPlans from './pricingPlans.vue';
import clients from './clients.vue';
export default {
    name: 'AppMain',
    components: {
        jumbotron,
        tutoring,
        empowering,
        profiles,
        learning,
        onlineCourses,
        pricingPlans,
        clients,
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
        <pricingPlans />
        <clients />
    </main>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
</style>