<script>
import singleOption from './singleOption.vue';

export default {
    name: 'jumbotron',
    components: {
        singleOption,
    },
    data() {
        return {
            options: [
                {
                    name: 'Languages',
                    img: '../src/assets/icademy/pics/h5-custom-icon-1.png',
                    link: '#',
                    target: '_self',
                },
                {
                    name: 'Software',
                    img: '../src/assets/icademy/pics/h5-custom-icon-2.png',
                    link: '#',
                    target: '_self',
                },
                {
                    name: 'Business',
                    img: '../src/assets/icademy/pics/h5-custom-icon-3.png',
                    link: '#',
                    target: '_self',
                },
                {
                    name: 'Chemistry',
                    img: '../src/assets/icademy/pics/h5-custom-icon-4.png',
                    link: '#',
                    target: '_self',
                },
                {
                    name: 'Science',
                    img: '../src/assets/icademy/pics/h5-custom-icon-5.png',
                    link: '#',
                    target: '_self',
                },
                {
                    name: 'DIY&Craft',
                    img: '../src/assets/icademy/pics/h5-custom-icon-6.png',
                    link: '#',
                    target: '_self',
                },
            ]
        }
    }
};
</script>

<template>
    <div class="jumbotron">
        <singleOption v-for="option in options" :option="option" />
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.jumbotron {
    width: 90%;
    margin: 0 auto;
    display: flex;
    gap: 20px;
    padding: 60px 0;
}
</style>