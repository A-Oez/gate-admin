<template>
  <section>
    <h1>Logs & Insights</h1>
    <select style="width: 50%">
      <option>Route A</option>
      <option>Route B</option>
    </select>
  </section>

  <Tabs :tabs="[
  { label: 'System Metrics', slot: 'metrics' },
  { label: 'Log Entries', slot: 'logs' }]">

  <template #metrics>
    <Bar :data="chartData" :options="chartOptions" />
  </template>

  <template #logs>
    <table>
        <table role="table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Level</th>
                <th>Route</th>
                <th>Message</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025-05-11 12:34:56</td>
                <td><span style="color: orange">WARN</span></td>
                <td>/api/user/login</td>
                <td>Slow response detected</td>
                <td>200</td>
              </tr>
              <tr>
                <td>2025-05-11 12:35:02</td>
                <td><span style="color: red">ERROR</span></td>
                <td>/api/data/export</td>
                <td>Export failed: file not found</td>
                <td>500</td>
              </tr>
              <tr>
                <td>2025-05-11 12:36:45</td>
                <td><span style="color: green">INFO</span></td>
                <td>/api/health</td>
                <td>Health check passed</td>
                <td>200</td>
              </tr>
            </tbody>
          </table>
    </table>
  </template>
</Tabs>
</template>

<script setup>
import Tabs from '@/components/TabPages.vue' 
import { ref } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
  labels: ['Test1', 'Test2', 'Test3'],
  datasets: [
    {
      label: 'Test',
      data: [40, 20, 80],
      backgroundColor: ['#f87171', '#60a5fa', '#34d399'],
    },
  ],
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
}
</script>