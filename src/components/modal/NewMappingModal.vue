<template>
  <dialog open>
    <article>
      <header>
        <button @click="$emit('close')" aria-label="Close" rel="prev"></button>
        <p>
          <strong>➕ Create Item</strong>
        </p>
      </header>

      <form>
        <fieldset>
          <div class="grid">
            <label>
              Public Path
              <input name="public_path" placeholder="/api/v1/resources" autocomplete="off" />
            </label>

            <label>
              Method
              <input name="method" placeholder="GET, POST, PUT, DELETE" autocomplete="off" />
            </label>
          </div>
          <label>
            Service Host
            <input name="service_host" placeholder="example.com:8080" autocomplete="off" />
          </label>

          <label>
            Service Path
            <input name="service_path" placeholder="/users/{id}" autocomplete="off" />
          </label>

          <label>
            Service Scheme
            <input name="service_scheme" placeholder="http, https" autocomplete="off" />
          </label>

          <input type="submit" value="Create" />
        </fieldset>
      </form>
    </article>
  </dialog>
</template>
