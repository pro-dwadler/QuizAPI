<script setup lang="ts">
import { ref } from 'vue'
const reveal = ref(false)
const props = defineProps({
    number: {
        type: Number
    },
    hint: {
        type: Object
    }
})
</script>

<template>
<v-card class="mx-auto" max-width="344" elevation="5" :title="'Hint #'+(number)">
    <v-card-actions>
        <v-btn color="teal-accent-4" text="Show" variant="text" @click="reveal=true"/>
    </v-card-actions>
    <v-expand-transition>
        <v-card v-if="reveal" class="position-absolute w-100" height="100%" style="bottom: 0;">
            <v-card-text class="pb-0">{{ hint.text }}</v-card-text>
            <v-card-actions class="pt-0">
                <v-btn color="teal-accent-4" text="Close" variant="text" @click="reveal = false"></v-btn>
            </v-card-actions>
        </v-card>
    </v-expand-transition>
</v-card>
</template>