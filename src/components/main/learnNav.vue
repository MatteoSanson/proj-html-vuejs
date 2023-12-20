<script>
export default {
    name: 'learnNav',
    data() {
        return {
            options: [
                {
                    program: 'What we do',
                    link: '#',
                    target: '_self',
                },
                {
                    program: 'Degree Programme',
                    link: '#',
                    target: '_self',
                },
                {
                    program: 'Career Achievements',
                    link: '#',
                    target: '_self',
                },
                {
                    program: 'Personal Management',
                    link: '#',
                    target: '_self',
                },
                {
                    program: 'Steps To Success',
                    link: '#',
                    target: '_self',
                },
                {
                    program: 'Knowledge Transfer',
                    link: '#',
                    target: '_self',
                },
            ],
        }
    }
};
</script>

<template>
    <div class="gigio">
        <ul>
            <li v-for="option in options">
                <a :href="option.link" :target="option.target">
                    <h3>{{ option.program }}</h3>
                </a>
            </li>

        </ul>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.gigio {
    width: 300px;
    display: flex;

    ul {
        width: 100%;

        li {
            width: 100%;
            border: 1px solid $secondary-bd-color;
            border-top: none;

            &:first-child {
                border-top: 1px solid $secondary-bd-color;
            }

            h3 {
                padding: 20px 0 20px 20px;
                color: $sixth-color;
            }
        }
    }
}
</style>