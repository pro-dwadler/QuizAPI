<script setup>

import { ref } from 'vue'

const showAnswer = ref(false)

defineProps(['quiz'])

function test(url) {
    window.open(url);
}

</script>

<template>

    <v-col>

        <v-btn rounded="lg" class="mb-5" elevation="5" color="indigo-darken-3" block @click="showAnswer = !showAnswer">
            <p v-if="!showAnswer">Compare Answers</p>
            <p v-if="showAnswer">Hide Answers</p>
        </v-btn>

        <v-sheet v-for="item in quiz.queries" :key="item" elevation="5" rounded class="mb-5 pa-5">

            <v-text-field @click:append="test(item.query)" append-icon="mdi-open-in-new" :label="'#' + item.index"
                variant="outlined" v-model="item.query" readonly />
            <v-text-field v-if="!showAnswer" label="Your Answer (Artist, Title)" v-model="item.yourAnswer"
                variant="outlined" />
            <v-text-field v-if="showAnswer" label="Your Answer (Artist, Title)" v-model="item.yourAnswer"
                variant="outlined" readonly />
            <v-textarea v-if="showAnswer" label="Correct Answer" variant="outlined" readonly
                :model-value="'Artist:\n' + item.artist + '\n\n' + 'Title:\n' + item.title" rows="2" auto-grow />
        </v-sheet>


        <v-sheet elevation="5" rounded class="mb-5 pa-5">
            <v-text-field label="Theme" variant="outlined" readonly model-value="What's the theme of these songs?" />
            <v-text-field v-if="!showAnswer" label="Your Answer" v-model="quiz.yourTheme" variant="outlined" />
            <v-text-field v-if="showAnswer" label="Your Answer" v-model="quiz.yourTheme" variant="outlined" readonly />
            <v-text-field v-if="showAnswer" label="Correct Answer" v-model="quiz.theme" variant="outlined" readonly />
        </v-sheet>

    </v-col>

</template>

<style scoped></style>
