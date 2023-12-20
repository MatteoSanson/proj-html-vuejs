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
            mandi
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
        width: 75%;
    }
}
</style>