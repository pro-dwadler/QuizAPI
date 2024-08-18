<template>
    <v-card class="pa-6 ma-6">
        <Bar :data="data" :options="options" />
    </v-card>
</template>

<script setup lang="ts">
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

const props = defineProps({
    data: {
        type: Object,
    },
    options: {
        type: Object,
        default: {
            plugins: {
                title: {
                    display: true,
                    text: 'Quiz Rounds'
                },
            },
            responsive: true,
            scales: {
                x: {
                    stacked: true,
                },
                y: {
                    stacked: true,
                    ticks: {
                        stepSize: 1,
                    }
                }
            }
        }
    }
})

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
</script>