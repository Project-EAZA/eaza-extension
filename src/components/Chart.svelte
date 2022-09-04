<script lang="ts">
  export let data: Grades;
  import { Bar } from 'svelte-chartjs';
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';
  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );

  import type { Grades } from '~/libs/models';
  const grades = [data.A, data.AB, data.B, data.BC, data.C, data.D];
  const totalGrades = grades.reduce((n, res) => res + n);
</script>

{#if totalGrades !== 0}
  <div class="grades-chart" id="eaza-grades-chart">
    <Bar
      options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Grade Distribution',
          },
          tooltip: {
            callbacks: {
              label: (item) => {
                const currentValue = grades[item.dataIndex];
                const percentage = parseFloat(
                  ((currentValue / totalGrades) * 100).toFixed(1)
                );
                return `${currentValue}(${percentage}%)`;
              },
            },
          },
        },
      }}
      data={{
        labels: ['A', 'AB', 'B', 'BC', 'C', 'D'],
        datasets: [
          {
            label: 'Count',
            data: grades,
            backgroundColor: [
              '#F7464A',
              '#46BFBD',
              '#FDB45C',
              '#949FB1',
              '#4D5360',
              '#AC64AD',
            ],
            borderWidth: 2,
            borderColor: [
              'rgba(255, 134, 159, 1)',
              'rgba(98,  182, 239, 1)',
              'rgba(255, 218, 128, 1)',
              'rgba(113, 205, 205, 1)',
              'rgba(170, 128, 252, 1)',
              'rgba(255, 177, 101, 1)',
            ],
          },
        ],
      }}
    />
  </div>
{/if}
