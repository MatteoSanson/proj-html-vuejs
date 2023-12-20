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
    <div class="giga-container">
        <div class="container">
            <learnNav />
            <learnContent />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/mixins.scss' as *;

.giga-container {
    width: 100%;
    border-bottom: 1px solid $primary-bd-color;

    .container {
        @include container;
        display: flex;
        gap: 50px;
        padding: 130px 0;
    }
}
</style>