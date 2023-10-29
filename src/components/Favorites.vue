<script lang="ts" setup>
import IFavorites from '@/assets/icon/favorites.svg?component';
</script>

<template>
    <router-link
        to="/favorites"
        class="favorites__link favorites"
    >
        <IFavorites class="favorites__icon" />

        <p class="favorites__text">
            Избранное
        </p>
    </router-link>
</template>

<style lang="scss">
.favorites {
    display: flex;
    align-items: center;
    justify-content: center;

    &__icon {
        margin-right: 10px;
        fill: $white;
    }

    &__text {
        font-size: 18px;
        font-weight: $f-weight-regular;
        line-height: normal;
        color: $white;

        @media (max-width: $layout-min-width) {
            display: none;
        }
    }

    &__link {
        text-decoration: none;
    }
}
</style>
