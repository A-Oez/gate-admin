<template>
  <section>
    <h1>Logs & Insights</h1>
    <select style="width: 50%">
      <option>Route A</option>
      <option>Route B</option>
    </select>
  </section>

  <div class="container" style="margin-top: 2rem">
    <!-- Tab Navigation -->
    <nav role="tab-control">
      <ul>
        <li><label for="tab1" :class="{ active: tab === 'tab1' }">System Metrics</label></li>
        <li><label for="tab2" :class="{ active: tab === 'tab2' }">Log Entries</label></li>
      </ul>
    </nav>

    <!-- Tab Content -->
    <div role="tabs">
      <!-- Tab 1 Content -->
      <section>
        <input type="radio" id="tab1" name="tabs" v-model="tab" value="tab1" hidden />
        <figure v-show="tab === 'tab1'">
          <article style="box-shadow: none">
            <p>Requests per minute, average latency etc.</p>
            <Bar :data="chartData" :options="chartOptions" />
          </article>
        </figure>

        <!-- Tab 2 Content -->
        <input type="radio" id="tab2" name="tabs" v-model="tab" value="tab2" hidden />
        <figure v-show="tab === 'tab2'">
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
        </figure>
      </section>
    </div>
  </div>
</template>

<script setup>
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

const tab = ref('tab1')
</script>

<style scoped>
nav[role='tab-control'] {
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

nav[role='tab-control'] ul {
  display: flex;
  padding: 0;
  margin: 0;
}

nav[role='tab-control'] label {
  padding: 1rem 2rem;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;
  border-radius: 8px 8px 0 0;
  font-weight: bold;
  color: white;
}

nav[role='tab-control'] label:hover {
  background-color: #3b82f6;
  transform: scale(1.05);
}

nav[role='tab-control'] label.active {
  background-color: #3b82f6;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

[role='tabs'] section {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

[role='tabs'] figure {
  flex-grow: 1;
  width: 100%;
  height: 100%;
  display: none;
}

[role='tabs'] input[type='radio']:checked + figure {
  display: block;
}
</style>
