<script lang="ts">
  export let data: Grades;
  import { Pie } from 'svelte-chartjs';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
  } from 'chart.js';
  import type { Grades } from '~/libs/models';
  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

  const grades = [data.A, data.AB, data.B, data.BC, data.C, data.D];
</script>

<Pie data={{ datasets: [{ data: grades }] }} />
