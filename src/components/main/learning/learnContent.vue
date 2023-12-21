<script>
export default {
    name: 'learnContent',
    data() {
        return {
            info: {
                title: 'Learning Possibilities',
                text: 'Lorem ipsum gravida nibh vel velit auctor aliquetn sollicitudirem quibibendum auci elit cons equat ipsutis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt.',
            },
            options: [
                'We enrich lives through learning.',
                'Maximizing potential through individual attention.',
                'The trusted name for specialized training.',
                'People teach. People learn. This is where they connect.',
            ]
        }
    }
};
</script>

<template>
    <div class="containerCo">
        <h2>{{ info.title }}</h2>
        <p>{{ info.text }}</p>
        <ul>
            <li v-for="option in options">
                <div class="left">
                    <font-awesome-icon class="check-icon" icon="fa-solid fa-check" />
                </div>
                <div class="right">
                    <span>{{ option }}</span>
                </div>
            </li>
        </ul>
        <div class="bottom-right-image">
            <img src="../../../assets/icademy/pics/h12-tabs-icon-1.png" alt="tabs icon">
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../../assets/scss/partials/variables.scss' as *;
@use '../../../assets/scss/partials/mixins.scss' as *;


.containerCo {
    flex-grow: 1;
    padding: 0 25px 0 15px;
    position: relative;

    h2 {
        font-size: 35px;
        padding-top: 10px;
    }

    p {
        color: $sixth-color;
        font-size: 18px;
        line-height: 30px;
        padding: 20px 0 35px;
    }

    ul {
        color: $sixth-color;
        width: 50%;

        li {
            padding-bottom: 25px;
            display: flex;

            .left {
                padding-top: 5px;
            }

            .check-icon {
                color: $fourth-color;
                margin-right: 10px;
            }

            span {
                line-height: 30px;
            }
        }
    }

    .bottom-right-image {
        position: absolute;
        bottom: 0;
        right: 0;
        // margin-bottom: 20px;
        // margin-right: 20px; 
    }
}
</style>