<script>
import learnNav from './learnNav.vue';
import learnContent from './learnContent.vue';
export default {
    name: 'learning',
    components: {
        learnNav,
        learnContent,
    }
};
</script>

<template>
    <div class="container">
        <learnNav />
        <learnContent />
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/mixins.scss' as *;

.container {
    @include container;
    display: flex;
    gap: 50px;
    padding: 130px 0;
}
</style>