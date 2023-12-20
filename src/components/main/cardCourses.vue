<script>
export default {
    name: 'cardCourses',
    data() {
        return {
            courses: [
                {
                    title: 'Android Developer',
                    teacher: 'David Sanders',
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque excepturi iste, esse dolorem ipsam!',
                    member: '1',
                    type: 'programming',
                    price: 'free',
                    img: '../src/assets/icademy/pics/course-5-f-img.jpg',
                },
                {
                    title: 'Web Designing',
                    teacher: 'Jennifer Powell',
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque excepturi iste, esse dolorem ipsam!',
                    member: '1',
                    type: 'programming',
                    price: 'free',
                    img: '../src/assets/icademy/pics/course-6-f-img.jpg',
                },
                {
                    title: 'Financial Modeling',
                    teacher: 'Edward Bowman',
                    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cumque excepturi iste, esse dolorem ipsam!',
                    member: '1',
                    type: 'Business',
                    price: '$ 20',
                    img: '../src/assets/icademy/pics/course-12-f-img.jpg',
                },
            ]
        };
    },
};
</script>

<template>
    <div class="cards">
        <ul>
            <li v-for="course in courses">
                <div class="cont-img">
                    <img :src="course.img" alt="">
                </div>
                <div class="content">
                    <div class="combo">
                        <h4>{{ course.title }}</h4>
                        <div :class="{ 'price': true, 'free': course.price === 'free', 'dollar': course.price === '$ 20' }">
                            {{
                                course.price.toUpperCase() }}</div>
                    </div>
                    <p>{{ course.teacher }}</p>
                    <p>{{ course.info }}</p>
                </div>

            </li>

        </ul>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/mixins.scss' as *;

ul {
    display: flex;
    gap: 35px;

    li {
        width: calc(100% / 3);
        text-align: start;
        border: 1px solid $tertiary-bd-color;
        background-color: $bg-secondary;
        margin-bottom: 80px;

        .cont-img {
            @include contImg;

            img {
                width: 100%;
            }
        }

        .content {
            @include container;

            .combo {
                display: flex;
                justify-content: space-between;

                .price {
                    font-size: 12px;
                    padding: 2px 10px;
                    border-radius: 10px;
                }

                .price.free {
                    background-color: $bg-notify-primary;
                }

                .price.dollar {
                    background-color: $bg-button-primary;
                }
            }
        }

    }
}
</style>