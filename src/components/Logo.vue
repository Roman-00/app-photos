<template>
    <router-link
        to="/"
        class="logo__link logo"
    >
        <div class="logo__img">
            <img
                src="../assets/images/logo.png"
                alt="Art-Galery"
            >
        </div>
    </router-link>
</template>

<style lang="scss">
.logo {
    &__img {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
            max-width: 186px;
            max-height: 72px;

            @media (max-width: $layout-min-width) {
                max-width: 84px;
                max-height: 32px;
            }
        }
    }
}
</style>
