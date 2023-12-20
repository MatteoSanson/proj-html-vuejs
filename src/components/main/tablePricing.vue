<script>
import learnNav from './learnNav.vue';
export default {
    name: 'tablePricing',
    components: {
        learnNav,
    },
    data() {
        return {
            pricingNav: [
                {
                    program: 'Number of Courses',
                    link: '#',
                    target: '_self',
                },
                {
                    program: 'Time',
                    link: '#',
                    target: '_self',
                },
                {
                    program: 'Web Designing',
                    link: '#',
                    target: '_self',
                },
                {
                    program: 'Human-Centered Design',
                    link: '#',
                    target: '_self',
                },
                {
                    program: 'Basic Marketing',
                    link: '#',
                    target: '_self',
                },
                {
                    program: 'Phyton for Everybody',
                    link: '#',
                    target: '_self',
                },
                {
                    program: 'Android Developer',
                    link: '#',
                    target: '_self',
                },
                {
                    program: 'Business English',
                    link: '#',
                    target: '_self',
                },
            ],
            typeCourses: [
                {
                    img: '../src/assets/icademy/pics/h5-custom-icon-7.png',
                    alt: 'Standard course logo',
                    type: 'Standard',
                    price: '$ 12',
                    courses: '2',
                    time: '15 Days',
                    webDesigning: true,
                    hcDesign: true,
                    basicMarketing: false,
                    phyton: false,
                    android: false,
                    businessEnglish: false,
                },
                {
                    img: '../src/assets/icademy/pics/h5-custom-icon-8.png',
                    alt: 'Professional course logo',
                    type: 'Professional',
                    price: '$ 59',
                    courses: '4',
                    time: '30 Days',
                    webDesigning: true,
                    hcDesign: true,
                    basicMarketing: true,
                    phyton: true,
                    android: false,
                    businessEnglish: false,
                },
                {
                    img: '../src/assets/icademy/pics/h5-custom-icon-9.png',
                    alt: 'Advanced course logo',
                    type: 'Advanced',
                    price: '$ 88',
                    courses: '6',
                    time: '30 Days',
                    webDesigning: true,
                    hcDesign: true,
                    basicMarketing: true,
                    phyton: true,
                    android: true,
                    businessEnglish: true,
                },
            ]
        };
    },
};
</script>

<template>
    <div class="table">
        <div class="table-left">
            <div class="title-pricing">
                <h4>
                    Save up to 40% by paying weekly
                </h4>
            </div>

            <learnNav :options="pricingNav" />
        </div>
        <div class="table-right">
            <div v-for="(typeCourse, index) in typeCourses">
                <div class="type">
                    <div class="img-cnt">
                        <img :src="typeCourse.img" :alt="typeCourse.alt">
                    </div>

                    <ul>
                        <li>
                            <h3>{{ typeCourse.type }}</h3>
                        </li>
                        <li>
                            <h4>{{ typeCourse.price }}</h4>
                        </li>
                    </ul>
                </div>

                <div class="categories">
                    <ul>
                        <li>
                            <span>{{ typeCourse.courses }}</span>
                        </li>
                        <li>
                            <span>{{ typeCourse.time }}</span>
                        </li>
                        <li>
                            <span v-if="typeCourse.webDesigning">
                                <font-awesome-icon class="check-icon" icon="fa-solid fa-check" />
                            </span>
                            <span v-else>
                                <font-awesome-icon icon="fa-solid fa-xmark" />
                            </span>
                        </li>
                        <li>
                            <span v-if="typeCourse.hcDesign">
                                <font-awesome-icon class="check-icon" icon="fa-solid fa-check" />
                            </span>
                            <span v-else>
                                <font-awesome-icon icon="fa-solid fa-xmark" />
                            </span>
                        </li>
                        <li>
                            <span v-if="typeCourse.basicMarketing">
                                <font-awesome-icon class="check-icon" icon="fa-solid fa-check" />
                            </span>
                            <span v-else>
                                <font-awesome-icon icon="fa-solid fa-xmark" />
                            </span>
                        </li>
                        <li>
                            <span v-if="typeCourse.phyton">
                                <font-awesome-icon class="check-icon" icon="fa-solid fa-check" />
                            </span>
                            <span v-else>
                                <font-awesome-icon icon="fa-solid fa-xmark" />
                            </span>
                        </li>
                        <li>
                            <span v-if="typeCourse.android">
                                <font-awesome-icon class="check-icon" icon="fa-solid fa-check" />
                            </span>
                            <span v-else>
                                <font-awesome-icon icon="fa-solid fa-xmark" />
                            </span>
                        </li>
                        <li>
                            <span v-if="typeCourse.businessEnglish">
                                <font-awesome-icon class="check-icon" icon="fa-solid fa-check" />
                            </span>
                            <span v-else>
                                <font-awesome-icon icon="fa-solid fa-xmark" />
                            </span>
                        </li>
                    </ul>
                </div>

                <div class="getItNow">
                    <button>GET IT NOW</button>
                </div>


            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/mixins.scss' as *;

.table {
    display: flex;
    margin-top: 70px;

    .table-left {
        width: 25%;
        text-align: start;

        .title-pricing {
            width: 100%;
            padding: 130px 25px 40px 25px;
            background-color: $bg-secondary;
            border-top: 4px solid $fourth-bd-color;
            border-right: 1px solid $secondary-bd-color;
            border-left: 1px solid $secondary-bd-color;


            h4 {
                font-size: 34px;
                line-height: 48px;
            }
        }

    }

    .table-right {
        // width: 75%;
        flex-grow: 1;
        display: flex;
        margin-bottom: 120px;

        div {
            width: calc(100% / 3);

            .type {
                width: 100%;
                background-color: $nineth-color;
                border-top: 4px solid $fourth-bd-color;
                border-right: 1px solid $secondary-bd-color;

                .img-cnt {
                    margin: 0 auto;
                    width: 30%;
                    object-fit: contain;
                    padding: 30px 0;

                    img {
                        width: 100%;
                    }
                }

                h3 {
                    font-size: 24px;
                    padding-bottom: 15px;
                }

                h4 {
                    font-size: 20px;
                    padding-bottom: 50px;
                }
            }

            .categories {
                width: 100%;
                background-color: $bg-secondary;
                border-right: 1px solid $secondary-bd-color;
                font-size: 18px;
                color: $fifth-color;

                li {
                    border-bottom: 1px solid $secondary-bd-color;
                    padding: 25px 0;

                    .check-icon {
                        color: $fourth-color;
                    }

                }
            }

            .getItNow {
                width: 100%;
                background-color: $nineth-color;
                padding: 30px 0;
                border: 1px solid $secondary-bd-color;
                border-top: none;

                button {
                    padding: 25px 50px;
                    font-weight: 700;
                    border: 1px solid $secondary-bd-color;
                    color: $seventh-color;
                    background-color: $secondary-color;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>