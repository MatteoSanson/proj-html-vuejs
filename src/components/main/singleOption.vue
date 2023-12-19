<script>
export default {
    name: 'AppMain',
    props: {
        option: {
            type: Object,
        },
    },
};
</script>

<template>
    <div class="options">
        <a :href="option.link" :target="option.target">
            <img :src="option.img" :alt="option.name">
        </a>
        <a :href="option.link" :target="option.target">
            <h3>{{ option.name }}</h3>
        </a>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.options {
    width: calc(100% / 6);
    background-color: $bg-primary;
    text-align: center;

    img {
        padding-top: 45px;
    }

    h3 {
        padding: 45px 0;
    }
}
</style>