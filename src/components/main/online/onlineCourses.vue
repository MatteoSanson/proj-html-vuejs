<script>
import intestazione from '../common/intestazione.vue';
import cardCourses from './cardCourses.vue';
export default {
    name: 'onlineCourses',
    components: {
        intestazione,
        cardCourses,
    },
    data() {
        return {
            title: 'Popular Online Courses',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure quam unde optio cupiditate, sint error quaerat cum libero molestias excepturi eveniet, officia minima possimus id! Dolores dolore consequuntur error.',
        };
    },
};
</script>

<template>
    <div class="mega-container">
        <div class="container">
            <intestazione :title="title" :description="description" />
            <cardCourses />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../../assets/scss/partials/variables.scss' as *;
@use '../../../assets/scss/partials/mixins.scss' as *;

.mega-container {
    background-image: url('../../../assets/icademy/pics/page-background-img.png');
    border-bottom: 1px solid $primary-bd-color;

    .container {
        @include container;
        text-align: center;
    }
}
</style>