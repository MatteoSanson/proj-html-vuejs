<script>
export default {
    name: 'profiles',
    data() {
        return {
            content: {
                img: '../src/assets/icademy/pics/testimonials-standard-2.png',
                text: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero perspiciatis, repellat modi debitis deleniti ullam iusto magnam, voluptatum laboriosam numquam, officiis omnis corrupti sequi eius vero quaerat odio possimus iste dolor ipsum delectus! Eveniet animi nesciunt enim atque amet?" ',
                name: 'Joan Collins',
                type: 'student',
            }
        }
    }
};
</script>

<template>
    <div class="mega-container">
        <div class="container">
            <div class="cont-img">
                <img :src="content.img" alt="content.name">
                <p>{{ content.text }}</p>
                <h3>{{ content.name }}</h3>
                <h5>{{ content.type.toUpperCase() }}</h5>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/mixins.scss' as *;

.mega-container {
    width: 100%;
    background-image: url('../../assets/icademy/pics/h5-parallax-img-1.png');
    background-size: 140%;
    background-position: top;

    .container {
        @include container80;
        text-align: center;
        padding: 120px 0 100px 0;
        color: $tertiary-color;

        .cont-img {
            @include contImg;
        }

        p {
            padding: 35px 0;
            line-height: 30px;
        }

        h3 {
            padding-bottom: 15px;
            font-size: 30px;
        }

        h5 {
            font-family: "Montserrat";
            font-size: 15px;
        }
    }
}
</style>