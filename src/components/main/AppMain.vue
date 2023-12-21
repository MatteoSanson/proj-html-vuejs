<script>
import jumbotron from './jumbotron/jumbotron.vue';
import tutoring from './tutoring/tutoring.vue';
import empowering from './empowering/empowering.vue';
import profiles from './profiles/profiles.vue';
import learning from './learning/learning.vue';
import onlineCourses from './online/onlineCourses.vue';
import pricingPlans from './pricing/pricingPlans.vue';
import clients from './clients/clients.vue';
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