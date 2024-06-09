<script setup>
import { onMounted, ref } from 'vue'
import { getLastQuiz } from '../utils/dataUtil.js'
import Round from './Round.vue';
import AnagramRound from './AnagramRound.vue';
import MusicRound from './MusicRound.vue';
const tab = ref(null)
const quiz = ref({
    date: {
        day: "Monday",
        date: "June 3",
        year: "2024",
    },
    modules: [
        {
            type: "EASY",
            queries: [
                { index: 1, query: "", reply: "" }
            ]
        }
    ]
})

onMounted(async () => {
    await getLastQuiz()
        .then(res => quiz.value = res)
        .catch(() => { console.log("error retrieving quiz") })
})
</script>

<template>

    <v-card color="basil">

        <v-card-title class="text-left justify-center py-6">
            <h1 class="font-weight-bold text-h2 text-basil text-wrap">
                {{ quiz.date.year }}
            </h1>
            <h1 class="font-weight-bold text-h2 text-basil text-wrap">
                {{ quiz.date.date }}
            </h1>
            <h1 class="font-weight-bold text-h2 text-basil text-wrap">
                {{ quiz.date.day }}
            </h1>
        </v-card-title>

        <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
            <v-tab v-for="module in quiz.modules" :key="module.type" :value="module.type">{{ module.type
                }}</v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
            <v-tabs-window-item v-for="module in quiz.modules" :key="module.type" :value="module.type">

                <v-card color="basil" flat>
                    <v-card-text>
                        <AnagramRound v-if="module.type === 'ANAGRAM'" :quiz="module" />
                        <MusicRound v-else-if="module.type === 'MUSIC'" :quiz="module" />
                        <Round v-else :quiz="module" />
                    </v-card-text>
                </v-card>

            </v-tabs-window-item>
        </v-tabs-window>

    </v-card>

</template>

<style scoped>
.bg-basil {
    background-color: #FFFBE6 !important;
}

.text-basil {
    color: #356859 !important;
}
</style>
