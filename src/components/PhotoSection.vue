<script lang="ts" setup>
import { ImagesList } from '@/typings/Images';
import PhotoList from '@/components/List.vue';

defineProps<{
    images: ImagesList,
}>();
</script>

<template>
    <section class="photo-section">
        <div class="container">
            <PhotoList
                :images="images"
            />
        </div>
    </section>
</template>

<style lang="scss">
.photo-section {
    padding: 106px 0;
}
</style>
