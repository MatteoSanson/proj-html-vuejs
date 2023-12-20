<script>
export default {
    name: 'intestazione',
    props: {
        title: String,
        description: String,
    },
};
</script>

<template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/mixins.scss' as *;

div {
    h1 {
        font-size: 55px;
        padding: 90px 0 50px;
    }

    p {
        margin: 0 auto;
        width: 80%;
        padding-bottom: 20px;
        line-height: 30px;
        color: $seventh-color;
    }
}
</style>