<script>
export default {
    name: 'buttonHeader',
};
</script>

<template>
    <button>REGISTER NOW</button>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

button {
    width: 195px;
    height: 60px;
    background-color: $bg-button-primary;
    border: none;
    color: $secondary-color;
    cursor: pointer;

    &:hover {
        background-color: $bg-button-secondary;
        color: $fourth-color;
    }
}
</style>