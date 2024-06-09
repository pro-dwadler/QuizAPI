<script setup>

import { ref } from 'vue'
import AnagramTile from './AnagramTile.vue';

const showAnswer = ref(false)

const props = defineProps(['quiz'])
</script>

<template>

    <v-col>

        <v-btn rounded="lg" class="mb-5" elevation="5" color="indigo-darken-3" block @click="showAnswer = !showAnswer">
            <p v-if="!showAnswer">Compare Answers</p>
            <p v-if="showAnswer">Hide Answers</p>
        </v-btn>

        <v-sheet elevation="5" rounded class="mb-5 pa-5">
            <v-text-field label="Theme" v-model="quiz.theme" variant="outlined" readonly />
        </v-sheet>

        <!-- <v-sheet v-for="item in quiz.queries" :key="item" elevation="5" rounded class="mb-5 pa-5"> -->
        <AnagramTile v-for="item in quiz.queries" :key="item" :item="item" :showAnswer="showAnswer" />

    </v-col>

</template>

<style scoped></style>
