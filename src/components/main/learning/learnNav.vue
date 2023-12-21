<script>
export default {
    name: 'learnNav',
    props: {
        options: {
            type: Array,
        },
    },
};
</script>

<template>
    <div class="gigio">
        <ul>
            <li v-for="option in options" :key="option.program">
                <a :href="option.link" :target="option.target">
                    <h3>{{ option.program }}</h3>
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use '../../../assets/scss/partials/variables.scss' as *;

.gigio {
    min-width: 300px;
    display: flex;

    ul {
        width: 100%;

        li {
            position: relative;
            width: 100%;
            border: 1px solid $secondary-bd-color;
            border-top: none;
            background-color: $bg-secondary;

            &:hover {
                background-color: $bg-hover-color;

                &::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 3px;
                    height: 100%;
                    background-color: $bg-button-primary;
                }
            }

            &:first-child {
                border-top: 1px solid $secondary-bd-color;
            }

            h3 {
                padding: 25px 0 25px 25px;
                color: $sixth-color;
            }
        }
    }
}
</style>
