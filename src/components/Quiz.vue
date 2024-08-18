<script setup>

import { ref } from 'vue'
import Hint from './Hint.vue';

const testData = ref("<s>hey</s> yay!")

const props = defineProps({
    showAnswer: {
        type: Boolean,
        default: false,
    },
    quiz: {
        type: Object
    },
    date: {
        type: Object
    }
})
const dummyAnswer = ref("**********")
const selectedQuery = ref(0)
function prev() {
    selectedQuery.value = selectedQuery.value - 1 < 0 ? props.quiz.questions.length - 1 : selectedQuery.value - 1
}
function next() {
    selectedQuery.value = selectedQuery.value + 1 >= props.quiz.questions.length ? 0 : selectedQuery.value + 1
}
function openWindow(url) {
    window.open(url);
}
function getImageUrl(date, name) {
    return new URL(`../assets/img/${date}/${name}`, import.meta.url).href
}
function exists(obj) {
    return obj != null && obj.length > 0
}
</script>

<template>
    <v-container fill-height fluid>
        <v-row no-gutters>
            <v-col cols="2" class="d-flex flex-column justify-space-between">
                <v-btn icon="mdi-chevron-up" variant="plain" @click="prev"></v-btn>
                <v-item-group v-model="selectedQuery" class="text-center" mandatory>
                    <v-row>
                        <v-col class="d-flex flex-column justify-space-between">
                            <v-item v-for="(query, index) in quiz.questions" v-slot="{ isSelected, toggle }"
                                :value="index">
                                <v-btn :variant="isSelected ? 'outlined' : 'text'" @click="toggle"
                                    :icon="query.answer.entered && query.answer.entered.length >= 1 ? 'mdi-checkbox-marked-circle-outline' : 'mdi-checkbox-blank-circle-outline'">
                                </v-btn>
                            </v-item>
                        </v-col>
                    </v-row>
                </v-item-group>
                <v-btn icon="mdi-chevron-down" variant="plain" @click="next"></v-btn>
            </v-col>
            <v-col>
                <v-card class="mx-auto" elevation="0" :title="quiz.metadata.type.name + ` Round`"
                    :subtitle="quiz.metadata.description"></v-card>
                <v-divider class="ma-5" />
                <v-window v-model="selectedQuery" direction="vertical">
                    <v-window-item v-for="query in quiz.questions">
                        <v-sheet elevation="5" rounded class="mb-5 pa-5">
                            <v-textarea :label="query.metadata.fieldname" variant="outlined"
                                v-model="query.question.text" readonly rows="1" auto-grow />

                            <v-divider class="ma-5" />

                            <v-row>
                                <v-col v-for="(image, index) in query.images" :key="index" class="d-flex child-flex"
                                    cols="4">
                                    <v-img :src="getImageUrl(date.d, image.name)" cover>
                                        <template v-slot:placeholder>
                                            <v-row align="center" class="fill-height ma-0" justify="center">
                                                <v-progress-circular color="grey-lighten-5"
                                                    indeterminate></v-progress-circular>
                                            </v-row>
                                        </template>
                                    </v-img>
                                </v-col>
                            </v-row>


                            <v-divider class="ma-5" v-if="exists(query.images)" />

                            <v-row dense>
                                <v-col v-for="(hint, index) in query.hints" :key="index" cols="12" md="4">
                                    <Hint :number="index + 1" :hint="hint" />
                                </v-col>
                            </v-row>

                            <v-divider class="ma-5" v-if="exists(query.hints)" />

                            <v-row dense>
                                <v-col v-for="(ln, index) in query.links" :key="index" cols="12" md="4">
                                    <v-card append-icon="mdi-open-in-new" class="mx-auto" :href="ln.link"
                                        max-width="344" rel="noopener" target="_blank" :title="ln.metadata.name"
                                        :subtitle="'Link #' + (index + 1)" />
                                </v-col>
                            </v-row>

                            <v-divider class="ma-5" v-if="exists(query.links)" />

                            <v-row>
                                <v-col>
                                    <v-textarea label="Your Answer" v-model="query.answer.entered" variant="outlined"
                                        rows="1" auto-grow />
                                    <v-textarea v-if="showAnswer" label="Correct Answer" v-model="query.answer.text"
                                        variant="outlined" readonly rows="1" auto-grow />
                                    <v-textarea v-else label="Hidden Answer" v-model="dummyAnswer"
                                        variant="outlined" readonly rows="1" auto-grow />
                                </v-col>
                            </v-row>

                            <v-divider class="ma-5" v-if="exists(query.answer.teams)" />

                            <v-row>
                                <v-col>
                                    <v-card class="ma-2" v-for="team in query.answer.teams" :title="team.name" variant="outlined">
                                        <v-divider />
                                        <v-card-text>
                                            <p v-if="showAnswer" v-html="team.answer"/>
                                            <p v-else>{{ dummyAnswer }}</p>
                                        </v-card-text>
                                    </v-card>
                                </v-col>
                            </v-row>

                        </v-sheet>
                    </v-window-item>
                </v-window>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped></style>
