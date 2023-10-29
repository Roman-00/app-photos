<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from '@/helpers/axios';
import SearchSection from '@/components/SearchSection.vue';
import PhotoSection from '@/components/PhotoSection.vue';

// Количество изображений, загружаемых на каждой странице
const PER_PAGE = 9;

const images = ref([]);
const pageNumber = ref(1);

/**
 * Получить список рандомных фото
 */
const getRandomPhoto = () => {
    axios.get('/photos/random', {
        params: {
            count: PER_PAGE,
            page:  pageNumber.value,
        }
    })
        .then(({ data }) => {
            images.value = data;
        })
        .catch(error => console.warn(error));
};

/**
 * Возвращает набор изображений
 */
function getImages() {
    return images.value.reduce((res, item) => {
        if (item.urls) {
            res.push({...item.urls});
        }

        return res;
    }, []);
}

onMounted(() => {
    getRandomPhoto();
});
</script>

<template>
    <div class="index">
        <SearchSection />

        <PhotoSection
            :images="getImages()"
        />
    </div>
</template>
