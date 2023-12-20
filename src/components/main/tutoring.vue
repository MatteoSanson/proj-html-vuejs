<script>
export default {
    name: 'tutoring',
    data() {
        return {
            content: {
                title: 'The Trusted Name',
                title2: 'for In-Home Tutoring.',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore necessitatibus soluta corrupti voluptates voluptatem nulla aperiam provident itaque eius fugit. Ipsam quos nisi, veritatis molestias eius tempora totam quae. Architecto!',
                textLink: 'learn more',
                link: '#',
                target: '_self',
                img: '../src/assets/icademy/pics/h5-img-1.jpg',
            }
        }
    }
};
</script>

<template>
    <div class="mega-container">
        <div class="container">
            <h2>{{ content.title }}</h2>
            <h2>{{ content.title2 }}</h2>
            <p>{{ content.content }}</p>
            <a :href="content.link" :target="content.target">
                <span>{{ content.textLink.toUpperCase() }}</span>
            </a>
            <div class="cont-img">
                <img :src="content.img" :alt="`${content.title} ${content.title2}`">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/mixins.scss' as *;

.mega-container {
    width: 100%;
    border-bottom: 1px solid $primary-bd-color;

    .container {
        @include container;
        padding-bottom: 1px;

        h2 {
            font-size: 42px;
        }

        p {
            line-height: 25px;
            padding: 20px 0;
            color: $fifth-color;
        }

        a {
            position: relative;
            display: inline-block;

            span {
                font-size: 15px;
                font-weight: 700;
                color: $fourth-color;
            }
        }

        .cont-img {
            width: 100%;
            object-fit: contain;
        }

        img {
            width: 100%;
            display: block;
        }
    }
}
</style>