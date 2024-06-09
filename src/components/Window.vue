<script setup>
import { onMounted, ref } from 'vue'
import { getLastQuiz } from '../utils/dataUtil.js'
import Round from './Round.vue';
import AnagramRound from './AnagramRound.vue';
import MusicRound from './MusicRound.vue';
const tab = ref(null)
const quiz = ref({
    date: new Date().toDateString(),
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

    <v-card>

        <v-toolbar color="primary">

            <v-toolbar-title class="libre-baskerville-regular">{{ quiz.date }}</v-toolbar-title>

            <v-spacer></v-spacer>

            <template v-slot:extension>
                <v-tabs v-model="tab" bg-color="primary">
                    <v-tab class="libre-baskerville-regular" v-for="module in quiz.modules" :key="module.type" :value="module.type">{{ module.type
                        }}</v-tab>
                </v-tabs>
            </template>
        </v-toolbar>




        <v-tabs-window v-model="tab">
            <v-tabs-window-item v-for="module in quiz.modules" :key="module.type" :value="module.type">

                <v-card flat>
                    <v-card-text>
                        <AnagramRound v-if="module.type === 'ANAGRAM'" :quiz="module"/>
                        <MusicRound v-else-if="module.type === 'MUSIC'" :quiz="module"/>
                        <Round v-else :quiz="module" />
                    </v-card-text>
                </v-card>

            </v-tabs-window-item>
        </v-tabs-window>


    </v-card>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');
.libre-baskerville-regular {
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-style: normal;
}
</style>
