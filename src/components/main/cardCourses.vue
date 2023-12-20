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
                    <h5>{{ course.teacher }}</h5>
                    <p>{{ course.info }}</p>
                    <div class="combos">
                        <div><font-awesome-icon icon="fa-solid fa-user" /></div>
                        <div>{{ course.member }}</div>
                        <div><font-awesome-icon icon="fa-solid fa-tag" class="rotate-180" /></div>
                        <div><span>{{ course.type.toUpperCase() }}</span></div>
                    </div>
                </div>

            </li>

        </ul>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/mixins.scss' as *;

ul {
    padding-top: 60px;
    display: flex;
    gap: 35px;

    li {
        width: calc(100% / 3);
        text-align: start;
        border: 1px solid $tertiary-bd-color;
        background-color: $bg-secondary;
        margin-bottom: 160px;

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
                padding-top: 20px;

                .price {
                    font-size: 12px;
                    font-weight: 700;
                    padding: 2px 10px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    color: $secondary-color;
                }

                .price.free {
                    background-color: $bg-notify-primary;
                }

                .price.dollar {
                    background-color: $bg-button-primary;
                }

            }

            h4 {
                font-size: 18px;
                font-weight: 700;
            }

            h5 {
                font-size: 15px;
                padding: 10px 0 20px;
                font-family: "Montserrat";
                color: $eighth-color;
            }

            p {
                color: $sixth-color;
                line-height: 25px;
                padding-bottom: 25px;
            }

            .combos {
                display: flex;
                color: $eighth-color;
                gap: 10px;
                padding-bottom: 35px;

                .rotate-180 {
                    transform: rotate(90deg);
                }

                span {
                    font-size: 14px;
                    font-weight: 700;
                }
            }
        }

    }
}
</style>