<script setup>

import { ref } from 'vue'

const showAnswer = ref(false)

const props = defineProps(['quiz'])
</script>

<template>

    <v-col>

        <v-btn rounded="lg" class="mb-5" elevation="5" color="indigo-darken-3" block @click="showAnswer = !showAnswer">
            <p v-if="!showAnswer">Compare Answers</p>
            <p v-if="showAnswer">Hide Answers</p>
        </v-btn>

        <v-sheet v-for="item in quiz.queries" :key="item" elevation="5" rounded class="mb-5 pa-5">
            <v-textarea bg-color="grey-lighten-2" :label="'#' + item.index" variant="outlined" v-model="item.query" readonly rows="1" auto-grow/>
            <v-text-field v-if="!showAnswer" label="Your Answer" v-model="item.yourAnswer" variant="outlined" />
            <v-text-field v-if="showAnswer" label="Your Answer" v-model="item.yourAnswer" variant="outlined" readonly />
            <v-textarea v-if="showAnswer" label="Correct Answer" v-model="item.reply" variant="outlined" readonly rows="1" auto-grow />
        </v-sheet>

    </v-col>

</template>

<style scoped></style>
