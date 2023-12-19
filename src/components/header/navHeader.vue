<script>
export default {
    name: 'navHeader',
    data() {
        return {
            iacademy: [
                {
                    nome: 'home',
                    link: '#',
                    target: '_self',
                },
                {
                    nome: 'courses',
                    link: '#',
                    target: '_self',
                },
                {
                    nome: 'instructors',
                    link: '#',
                    target: '_self',
                },
                {
                    nome: 'events',
                    link: '#',
                    target: '_self',
                },
                {
                    nome: 'pages',
                    link: '#',
                    target: '_self',
                },
                {
                    nome: 'elements',
                    link: '#',
                    target: '_self',
                },
            ],
        }
    },
};
</script>

<template>
    <div class="container-header">
        <div class="logo">
            <img src="../../assets/icademy/pics/footer-logo-1.png" alt="iAcademy Logo">
        </div>
        <div class="header-menu">
            <ul>
                <li v-for="li in iacademy">
                    <a :href="li.link" :target="li.target">
                        {{ li.nome.toUpperCase() }}
                    </a>
                </li>
                <li>
                    <a href="#" target="_self">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="fa-flip-horizontal" />
                    </a>
                </li>
                <li>
                    <a href="#" target="_self">
                        <font-awesome-icon icon="fa-solid fa-bag-shopping" />
                    </a>
                </li>
                <li>
                    <a href="#" target="_self">
                        <font-awesome-icon icon="fa-solid fa-bars" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;

.container-header {
    width: 90%;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;

    .logo {
        width: 170px;
        object-fit: contain;

        img {
            display: block;
            width: 100%;
        }
    }

    .header-menu {
        width: 70%;

        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
}
</style>