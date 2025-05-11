<template>
  <section>
    <h1>Logs & Insights</h1>
  </section>

  <section style="margin-top: 2rem">
    <div class="grid">
      <article>
        <header><strong>Select Route</strong></header>
        <select>
          <option>Route A</option>
          <option>Route B</option>
        </select>
      </article>
      <article>
        <header><strong>System Metrics</strong></header>
        <p>Requests per minute, average latency etc.</p>
      </article>
    </div>
  </section>

  <section style="margin-top: 4rem">
    <h2>Log Entries</h2>
    <form class="grid" style="margin-bottom: 1rem">
      <select>
        <option value="">All Level</option>
        <option value="INFO">INFO</option>
        <option value="WARN">WARN</option>
        <option value="ERROR">ERROR</option>
      </select>

      <select>
        <option value="">Status</option>
        <option value="200">200 OK</option>
        <option value="400">400 Bad Request</option>
        <option value="500">500 Internal Server Error</option>
      </select>

      <input type="date" />
      <button type="submit" class="contrast">Submit</button>
    </form>
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
  </section>
</template>
