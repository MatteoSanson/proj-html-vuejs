<script>
import buttonHeader from './buttonHeader.vue';
export default {
    name: 'contentHeader',
    components: {
        buttonHeader,
    },
    data() {
        return {
            content: {
                title: 'Contemporary Ideas',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt placeat minus doloremque dolor provident ipsa reiciendis unde distinctio nihil non.',
            }
        }
    }
};
</script>

<template>
    <div class="container">
        <h1>{{ content.title }}</h1>
        <p>{{ content.text }}</p>
        <buttonHeader />
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.container {
    width: 80%;
    margin: 0 auto;
    text-align: center;

    h1 {
        padding-top: 140px;
        font-size: 70px;
    }

    p {
        padding: 30px 0;
        font-size: 18px;
        line-height: 35px;
        color: $tertiary-color;
    }
}
</style>