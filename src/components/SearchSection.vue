<script lang="ts" setup>
import ISearch from '@/assets/icon/search.svg?component';
</script>

<template>
    <section class="search-section">
        <div class="container">
            <div class="search-section__block">
                <input
                    type="text"
                    class="search-section__inp"
                    placeholder="Поиск"
                >

                <ISearch class="search-section__icon-search" />
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.search-section {
    position: relative;
    padding: 92px 0;
    border-bottom: 16px solid $gray;
    background: url('../assets/images/bg-images.png') no-repeat top center / cover;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        border: 0;
        width: 100%;
        height: 100%;
        background: rgba($black, 0.5);
    }

    &__block {
        position: relative;
        width: 100%;
        max-width: 866px;
        margin: 0 auto;
    }

    &__inp {
        width: 100%;
        padding: 0 40px;
        min-height: 70px;
        font-size: 24px;
        font-weight: $f-weight-thin;
        line-height: normal;
        border: none;
        color: $black;

        &::placeholder {
            color: $black;
        }
    }

    &__icon-search {
        position: absolute;
        top: 50%;
        right: 32px;
        transform: translateY(-50%);
    }
}
</style>
