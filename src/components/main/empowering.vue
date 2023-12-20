<script>
export default {
    name: 'empowering',
    data() {
        return {
            content: {
                title: 'Empowering Children to Reach Their Potential',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas deserunt placeat ut aliquid numquam modi quisquam magnam. Explicabo aperiam atque amet vel? Debitis, ipsum perspiciatis?',
                img: '../src/assets/icademy/pics/h5-img-2.jpg',
            },
            datas: {
                number: [168, 347],
                data: ['User Stories', 'Events'],
            }
        }
    }
};
</script>

<template>
    <div class="container">
        <div class="left">
            <div class="cont-img">
                <img :src="content.img" :alt="content.title">
            </div>
        </div>
        <div class="right">
            <h2>{{ content.title }}</h2>
            <p>{{ content.text }}</p>
            <div class="small-container">
                <div v-for="(item, index) in datas.number" class="item">
                    <h2>{{ item }}</h2>
                    <h3>{{ datas.data[index] }}</h3>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/mixins.scss' as *;

.container {
    @include container;
    display: flex;
    padding: 90px 0 50px 0;
    gap: 30px;

    .left,
    .right {
        width: 50%;
    }

    h2 {
        font-size: 45px;
    }

    p {
        line-height: 25px;
        padding: 20px 0;
        color: $fifth-color;
    }

    .left .cont-img {
        @include contImg;

        img {
            width: 100%;
        }
    }

    .small-container {
        width: 100%;
        display: flex;
        padding-top: 35px;
        color: $fourth-color;

        .item {
            flex: 1;

            h2 {
                font-size: 55px;
            }

            h3 {
                font-size: 25px;
                padding: 10px 0;
            }
        }
    }
}
</style>