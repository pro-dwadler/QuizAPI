<template>
  <v-responsive class="align-centerfill-height mx-auto">
    <v-app :theme="theme">
      <v-app-bar scroll-behavior="elevate">
        <template v-slot:prepend>
          <v-app-bar-nav-icon variant="text" @click.stop="datePicker = !datePicker"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>
          Pub Quiz
        </v-app-bar-title>

        <template v-slot:append>
          <v-btn :icon="showAnswer === true ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
            @click="showAnswer = !showAnswer"></v-btn>
          <v-btn :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onClick"></v-btn>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>

      <v-navigation-drawer v-model="datePicker" width="340" temporary>

        <v-date-picker v-model="date" :allowed-dates="allowedDates" :min="allowedDates[0]"
          :max="allowedDates[allowedDates.length - 1]"></v-date-picker>

      </v-navigation-drawer>

      <v-main>
        <v-card elevation="0" class="mx-auto">
          <template v-slot:title>
            <span class="font-weight-black">
              {{ quiz.date.year }}, {{ quiz.date.date }}, {{ quiz.date.day }}
              <i>{{ quiz.description }}</i>
            </span>
          </template>
        </v-card>
        <v-tabs v-model="tab" bg-color="transparent" grow>
          <v-tab v-for="item in quiz.modules" :key="item.metadata.type.name" :value="item"
            :text="item.metadata.type.name" />
        </v-tabs>

        <v-tabs-window v-model="tab">
          <v-tabs-window-item v-for="item in quiz.modules" :key="item.metadata.type.name" :value="item">
            <Chart v-if="item.metadata.type.type == 'Chart'" :data="item.data"/>
            <Quiz v-else :quiz="item" :date="quiz.date" :show-answer="showAnswer" />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-main>

    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import Quiz from './Quiz.vue';
import Chart from './Chart.vue';
import { ref, onMounted, watch } from 'vue'
import { getAllQuiz, getInFormat, getLastQuiz } from '../utils/dataUtil';

const theme = ref('light')
const tab = ref(null)
const showAnswer = ref(false)
const datePicker = ref(false)
const date = ref(new Date('2024-07-01'))
const allowedDates = ref([])
const allQuizes = ref([])

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

onMounted(async () => {
  await getAllQuiz()
    .then(res => {
      allQuizes.value = res;
      const allDates = res.metadata.dates
      const lastDate = allDates[allDates.length - 1]
      quiz.value = res[lastDate]
      date.value = new Date(lastDate)
      allowedDates.value = allDates
    })
    .catch(() => { console.log("error retrieving quiz") })
})
watch(date, async (newDate, _) => {
  quiz.value = allQuizes.value[getInFormat(newDate)]
})
const quiz = ref({
  date: { day: "Monday", date: "July 7", year: "2024", d: "2024-07-07" },
  description: null,
  modules: [
    {
      metadata: {
        type: {
          icon: "E",
          name: "Easy",
        },
        description: "Easy questions"
      },
      questions: [
        {
          metadata: {
            fieldname: "#1",
            index: 0,
          },
          question: {
            text: "What's the symbol H?",
          },
          answer: {
            text: "pub quiz",
          },
          links: [{
            link: 'https://en.wikipedia.org/wiki/Hydrogen', metadata: {
              name: "Wikipedia",
            }
          }],
          hints: [
            { text: 'Constituting approximately 75% of all normal matter', metadata: {} },
            { text: 'Most abundant chemicak substance in the universe', metadata: {} },
          ],
          images: [{
            name: 'tea.jpg',
            metadata: {}
          }, {
            name: 'whale.jpg',
            metadata: {}
          }],
        },
        {
          metadata: {
            fieldname: "#2",
            index: 1,
          },
          question: {
            text: "What's the symbol He?",
          },
          answer: {
            text: "pub quiz",
          },
          links: null, //[{link: '', md}],
          hints: null, //[{text: '', md}],
          images: null, //[{}]
        }
      ]
    },
    {
      metadata: {
        type: {
          icon: "M",
          name: "Music",
          description: "Music round."
        }
      },
      questions: [
        {
          metadata: {
            fieldname: "#1",
            index: 0,
          },
          question: {
            text: "Name the song and the artist?",
          },
          answer: {
            text: "Espresso, Sabrina Carpenter",
          },
          links: [{ link: "https://www.youtube.com/watch?v=eVli-tstM5E", metadata: {} }],
          hints: null, //[{text: '', md}],
          images: null, //[{}]
        }
      ]
    }
  ],
  summary: {}
})
</script>