<script>
export default {
    name: 'bottomFooter',
};
</script>

<template>
    <div class="container">
        <div class="left">
            <p>Copyrights 2017 &copy; Mikado Themes</p>
        </div>
        <div class="right">
            <ul>
                <li>
                    <a href="#" target="_self">
                        <p>CALL +44 300 303 0266</p>
                    </a>
                </li>
                <li>
                    <a href="#" target="_self">
                        <p>FOLLOW US</p>
                    </a>
                </li>
                <li>
                    <a href="#" target="_self">
                        <p><font-awesome-icon icon="fa-brands fa-twitter" /></p>
                    </a>
                </li>
                <li>
                    <a href="#" target="_self">
                        <p><font-awesome-icon icon="fa-brands fa-instagram" /></p>
                    </a>
                </li>
                <li>
                    <a href="#" target="_self">
                        <p><font-awesome-icon icon="fa-brands fa-facebook-f" /></p>
                    </a>
                </li>

            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/mixins.scss' as *;

.container {
    @include container;
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    color: $fifth-color;

    p {
        font-size: 12px;
    }

    .right {
        ul {
            display: flex;
            gap: 15px;
        }
    }
}
</style>