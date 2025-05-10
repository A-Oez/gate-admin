import { defineStore } from 'pinia'

export const useSessionTimeStore = defineStore('session_time', {
  state: () => ({
    timestamp: null,
    loggedIn: false, 
  }),
  actions: {
    setTimestamp(timestamp) {
      this.timestamp = timestamp
      localStorage.setItem('session_timestamp', timestamp)
    },
    setLoggedIn(status) {
      this.loggedIn = status
      localStorage.setItem('loggedIn', status)
    },
    loadLoggedInFromStorage() {
      const storedStatus = localStorage.getItem('loggedIn')
      if (storedStatus !== null) {
        this.loggedIn = storedStatus
      }
    }
  }
})