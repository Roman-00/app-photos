<script lang="ts" setup>
import { ImagesList } from '@/typings/Images';

defineProps<{
    images: ImagesList,
}>();
</script>

<template>
    <ul class="photo-list">
        <li
            v-for="(item, idx) in images"
            :key="idx"
            class="photo-list__item"
        >
            <div class="photo-list__item-img">
                <img
                    :src="item.small"
                    :alt="`Images-${idx}`"
                    loading="lazy"
                >
            </div>
        </li>
    </ul>
</template>

<style lang="scss">
.photo-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 28px;
    padding: 0;
    margin: 0;
    list-style: none;

    &__item-img {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 420px;
            height: 380px;
            object-fit: cover;
            border-radius: $radius-medium;
        }
    }
}
</style>
