<script>
export default {
    name: 'clients',
    data() {
        return {
            list: [
                {
                    name: 'iAcademy logo',
                    img: '../src/assets/icademy/pics/h5-client-5.png',
                    link: '#',
                    target: '_self',
                },
                {
                    name: 'Study Central logo',
                    img: '../src/assets/icademy/pics/h5-client-1.png',
                    link: '#',
                    target: '_self',
                },
                {
                    name: 'Educator Logo',
                    img: '../src/assets/icademy/pics/h5-client-2.png',
                    link: '#',
                    target: '_self',
                },
                {
                    name: 'Study Central logo',
                    img: '../src/assets/icademy/pics/h5-client-1.png',
                    link: '#',
                    target: '_self',
                },
            ]
        }
    }
};
</script>

<template>
    <div class="container">
        <ul>
            <li v-for="li in list">
                <div class="img-cnt">
                    <a :href="li.link" :target="li.target">
                        <img :src="li.img" :alt="li.name">
                    </a>
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
    padding: 80px 0;

    ul {
        display: flex;

        li {
            position: relative;
            width: calc(100% / 4);

            .img-cnt {
                width: 100%;
                overflow: hidden;

                img {
                    width: 100%;
                    transition: filter 0.3s;

                    &:hover {
                        filter: brightness(1.3);
                        transform: scale(1.05);
                    }
                }
            }
        }
    }
}
</style>