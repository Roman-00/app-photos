<script lang="ts" setup>
import Logo from '@/components/Logo.vue?component';
import Favorites from '@/components/Favorites.vue';
</script>

<template>
    <header class="header">
        <div class="container">
            <nav class="menu header__menu">
                <Logo />

                <Favorites />
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
.header {
    position: sticky;
    top: 0;
    padding: 40px 0;
    background: $black;
    z-index: 99;

    &__menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: $layout-min-width) {
        padding: 18px 0;
    }
}
</style>
