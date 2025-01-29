
import { data as d2024_06_03 } from './data/2024_06_03.js';
import { data as d2024_06_10 } from './data/2024_06_10.js';
import { data as d2024_07_01 } from './data/2024_07_01.js';
import { data as d2024_07_08 } from './data/2024_07_08.js';
import { data as d2024_07_15 } from './data/2024_07_15.js';
import { data as d2024_07_22 } from './data/2024_07_22.js';
import { data as d2024_07_29 } from './data/2024_07_29.js';
import { data as d2024_08_04 } from './data/2024_08_04.js';
import { data as d2024_08_10 } from './data/2024_08_10.js';
import { data as d2024_08_12 } from './data/2024_08_12.js';
import { data as d2024_11_29 } from './data/2024_11_29.js';
import { data as d2025_01_13 } from './data/2025_01_13.js';
import { data as d2025_01_20 } from './data/2025_01_20.js';
import { data as d2025_01_27 } from './data/2025_01_27.js';
import dayjs from 'dayjs';

export function getInFormat(date) {
    const dt = dayjs(date)
    return dt.format("YYYY-MM-DD")
}

export async function getLastQuiz() {
    return d2025_01_27
}

export async function getAllQuiz() {
    return {
        metadata: {
            dates: [
                d2024_06_03.date.d,
                d2024_06_10.date.d,
                d2024_07_01.date.d,
                d2024_07_08.date.d,
                d2024_07_15.date.d,
                d2024_07_22.date.d,
                d2024_07_29.date.d,
                d2024_08_04.date.d,
                d2024_08_10.date.d,
                d2024_08_12.date.d,
                d2024_11_29.date.d,
                d2025_01_13.date.d,
                d2025_01_20.date.d,
                d2025_01_27.date.d,
            ]
        },
        [d2024_06_03.date.d]: d2024_06_03,
        [d2024_06_10.date.d]: d2024_06_10,
        [d2024_07_01.date.d]: d2024_07_01,
        [d2024_07_08.date.d]: d2024_07_08,
        [d2024_07_15.date.d]: d2024_07_15,
        [d2024_07_22.date.d]: d2024_07_22,
        [d2024_07_29.date.d]: d2024_07_29,
        [d2024_08_04.date.d]: d2024_08_04,
        [d2024_08_10.date.d]: d2024_08_10,
        [d2024_08_12.date.d]: d2024_08_12,
        [d2024_11_29.date.d]: d2024_11_29,
        [d2025_01_13.date.d]: d2025_01_13,
        [d2025_01_20.date.d]: d2025_01_20,
        [d2025_01_27.date.d]: d2025_01_27,
    }
}
