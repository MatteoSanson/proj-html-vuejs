<script>
import navHeader from './navHeader.vue';

export default {
    name: 'AppHeader',
    components: { navHeader },
    data() {
        return {

        }
    },
};
</script>

<template>
    <header class="app-header">
        <navHeader />
    </header>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.app-header {
    position: relative;
    height: 680px;
    color: $secondary-color;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url('../../assets/icademy/pics/course-9-f-img.jpg');
        background-size: cover;
        filter: brightness(0.7);
        z-index: -1;
    }

}
</style>