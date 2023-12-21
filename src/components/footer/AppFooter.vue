<script>
import topFooter from './topFooter.vue';
import bottomFooter from './bottomFooter.vue';
export default {
    name: 'AppFooter',
    components: {
        topFooter,
        bottomFooter,
    }
};
</script>

<template>
    <footer>
        <topFooter />
        <bottomFooter />
    </footer>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/mixins.scss' as *;

footer {
    background-color: $bg-footer;
    color: $tertiary-color;
}
</style>