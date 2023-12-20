<script>
import intestazione from './intestazione.vue';
export default {
    name: 'pricingPlans',
    components: {
        intestazione,
    },
    data() {
        return {
            title: 'Pricing Plans',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea magni error totam, suscipit labore mollitia!',
        };
    },
};
</script>

<template>
    <div class="mega-container">
        <div class="container">
            <intestazione :title="title" :description="description" />
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/partials/variables.scss' as *;
@use '../../assets/scss/partials/mixins.scss' as *;

.mega-container {
    background-image: url('../../assets/icademy/pics/page-background-img.png');
    border-bottom: 1px solid $primary-bd-color;

    .container {
        @include container;
        text-align: center;
    }
}
</style>