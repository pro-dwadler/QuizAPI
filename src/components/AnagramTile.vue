<script setup>
import { ref, onMounted, computed } from 'vue'
const props = defineProps(['item', 'showAnswer'])
const characters = props.item.query.toLowerCase().split('').filter(ch => ch != ' ')
const disabled = ref(Array(characters.length).fill(false))
const stack = ref([])
const btnRefs = ref([])
const yourAnswerArr = ref([])
const yourAnswer = computed(() => {
    return yourAnswerArr.value.join('');
})
function addSpace() {
    yourAnswerArr.value.push(' ')
}

onMounted(() => {

})

function reset() {
    yourAnswerArr.value.length = 0;
    for (let i = 0; i < characters.length; i++) disabled.value[i] = false
    stack.value = []
}

function addChar(ch, i) {
    yourAnswerArr.value.push(ch)
    disabled.value[i] = true
    stack.value.push(i)
}

function back() {
    if (yourAnswerArr.value.length > 0) {
        const lastChar = yourAnswerArr.value.length - 1
        if (yourAnswerArr.value[lastChar] !== ' ') {
            const i = stack.value.pop()
            disabled.value[i] = false
        }
        yourAnswerArr.value.pop()
    }
}
</script>

<template>

    <v-expansion-panels elevation="5" rounded class="mb-5">
        <v-expansion-panel>
            <v-expansion-panel-title>
                <v-textarea class="mr-4" bg-color="grey-lighten-2" :label="'#' + item.index" variant="outlined"
                    v-model="item.query" readonly rows="1" auto-grow />
            </v-expansion-panel-title>
            <v-expansion-panel-text>

                <v-card class="pa-2" elevation="10" rounded color="#ffd3c3">
                    <v-row no-gutters>
                        <v-col>
                            <v-btn ref="btnRefs" v-for="(ch, ind) in characters" :key="ind"
                                :class="{ 'ma-1': true, crossed: disabled[ind], 'dm-serif-display-regular': true}" color="#fffcab"
                                @click="addChar(ch, ind)" :disabled="disabled[ind]" >
                                <div class="">{{ ch }}</div>
                            </v-btn>
                            <v-btn density="compact" class="ma-1" color="#a0fffd" icon="mdi-keyboard-backspace"
                                @click="back()"></v-btn>
                            <v-btn density="compact" class="ma-1" color="#a0fffd" icon="mdi-keyboard-space"
                                @click="addSpace()"></v-btn>
                            <v-btn density="compact" class="ma-1" color="#a0fffd" icon="mdi-cached"
                                @click="reset()"></v-btn>
                        </v-col>
                    </v-row>
                </v-card>

                <v-text-field class="mt-6 underlined" label="Your Answer" v-model="yourAnswer" variant="outlined"
                    readonly />
                <v-text-field v-if="showAnswer" label="Correct Answer" v-model="item.reply" variant="outlined"
                    readonly />
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>

</template>

<style scoped>
.crossed {
    text-decoration-line: line-through;
}

.underlined {
    text-decoration-line: underline;
}

.dm-serif-display-regular {
  font-family: "DM Serif Display", serif;
  font-weight: 500;
  font-style: normal;
  font-size: 30px;
  width: 50px;
  height: 50px;
}
</style>
