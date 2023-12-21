<script>
export default {
    name: 'topFooter',
    data() {
        return {
            footerList: [
                {
                    type: 'left',
                    content: {
                        logo: '../src/assets/icademy/pics/footer-logo-1.png',
                        text: 'Providing Life Changing Experiences Through Education. Class That Fit Your Busy Life. Closer to Home.',
                        phone: '1-677-124-44227',
                        fromTo: 'Mon - Sat 8.00 - 18.00',
                    },
                },
                {
                    type: 'leftCenter',
                    content: {
                        title: 'Popular Courses',
                        courses: [
                            {
                                name: 'Business English',
                                teacher: 'Preston Marshall',
                                link: '#',
                                target: '_self',
                            },
                            {
                                name: 'Social Computing',
                                teacher: 'David Sanders',
                                link: '#',
                                target: '_self',
                            },
                            {
                                name: 'Learn Spanish',
                                teacher: 'Jennie King',
                                link: '#',
                                target: '_self',
                            },
                        ]
                    },
                },
                {
                    type: 'rightCenter',
                    content: {
                        title: 'Support',
                        links: [
                            {
                                name: 'User dashboard',
                                link: '#',
                                target: '_self',
                            },
                            {
                                name: 'Contact Us',
                                link: '#',
                                target: '_self',
                            },
                            {
                                name: 'FAQ',
                                link: '#',
                                target: '_self',
                            },
                            {
                                name: 'Course Offer',
                                link: '#',
                                target: '_self',
                            },
                            {
                                name: 'Events',
                                link: '#',
                                target: '_self',
                            },
                        ]
                    },
                },
                {
                    type: 'right',
                    content: {
                        title: 'Flexible Learning',
                        img: '../src/assets/icademy/pics/footer-img-1.png',
                    },
                },
            ],
        };
    },
};
</script>

<template>
    <div class="container">
        <ul class="head">
            <li v-for="item in footerList">

                <div v-if="item.type === 'left'" class="left">
                    <ul class="list">
                        <li>
                            <div class="img-cnt">
                                <img :src="item.content.logo" alt="">
                            </div>
                        </li>
                        <li>
                            <p>{{ item.content.text }}</p>
                        </li>
                        <li class="combos">
                            <div>
                                <font-awesome-icon icon="fa-solid fa-phone" />
                            </div>
                            <div>
                                <span>{{ item.content.phone }}</span>
                            </div>
                        </li>
                        <li class="combos">
                            <div>
                                <font-awesome-icon icon="fa-regular fa-clock" />
                            </div>
                            <div>
                                <span>{{ item.content.fromTo }}</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div v-else-if="item.type === 'leftCenter'" class="leftCenter">
                    <ul class="list">
                        <li>
                            <h3>{{ item.content.title }}</h3>
                        </li>
                        <li v-for="course in item.content.courses" class="courses">
                            <a :href="course.link" :target="course.target">
                                <h4>
                                    {{ course.name }}
                                </h4>
                            </a>
                            <a :href="course.link" :target="course.target">
                                <p>
                                    {{ course.teacher }}
                                </p>
                            </a>


                        </li>
                    </ul>
                </div>


                <div v-else-if="item.type === 'rightCenter'" class="rightCenter">
                    <ul class="list">
                        <li>
                            <h3>{{ item.content.title }}</h3>
                        </li>
                        <li v-for="link in item.content.links" class="links">
                            <a :href="link.link" :target="link.target">{{ link.name }}</a>
                        </li>
                    </ul>
                </div>


                <div v-else="item.type === 'right'" class="right">
                    <ul class="list">
                        <li>
                            <h3>{{ item.content.title }}</h3>
                        </li>
                        <li>
                            <div class="img-cnt">
                                <img :src="item.content.img" alt="">
                            </div>
                        </li>
                    </ul>
                </div>

            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/mixins.scss' as *;

.container {
    @include container;
    padding: 100px 0 80px 0;
    border-bottom: 1px solid $tertiary-bd-color;

    ul.head {
        display: flex;
        gap: 30px;

        li {
            width: calc(100% / 4);

            ul.list {
                display: flex;
                flex-direction: column;

                li {
                    width: 100%;
                }
            }

            h3 {
                font-size: 25px;
                padding-bottom: 25px;
                color: $secondary-color;
            }

            h4 {
                font-size: 18px;
                padding-bottom: 8px;
            }

            .left {
                color: $fifth-color;

                .img-cnt {
                    max-width: 160px;
                    object-fit: contain;
                    padding-bottom: 25px;

                    img {
                        width: 100%;
                        display: block;
                    }
                }

                p {
                    font-size: 14px;
                    line-height: 25px;
                    padding-bottom: 35px;
                    padding-right: 85px;
                }

                .combos {
                    display: flex;
                    gap: 20px;
                    padding-bottom: 20px;
                }

            }

            .leftCenter {
                color: $fifth-color;

                li.courses {

                    & h4:hover {
                        color: $secondary-color;
                    }

                    p {
                        padding-bottom: 20px;
                        font-size: 15px;

                        &:hover {
                            color: $secondary-color;
                        }
                    }
                }
            }

            .rightCenter {
                color: $fifth-color;

                .links {
                    padding-bottom: 20px;
                }

                li:hover {
                    color: $secondary-color;
                }

            }

            .right {

                .img-cnt {
                    @include contImg;

                    img {
                        width: 90%;
                        display: block;
                    }
                }
            }

        }
    }
}
</style>