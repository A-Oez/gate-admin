import { ref, onMounted } from 'vue'
import axios from 'axios'

export function useRoutes() {
  const mappings = ref([])

  function getRoutes() {
    axios
      .get(`/admin/routes`)
      .then((response) => {
        mappings.value = response.data
      })
      .catch((err) => {
        console.error(err)
      })
  }

  onMounted(() => {
    getRoutes()
  })

  return {
    mappings, getRoutes
  }
}
