import { defineStore } from 'pinia'

export const useSessionTimeStore = defineStore('session', {
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
    loadFromStorage() {
      const storedStatus = localStorage.getItem('loggedIn')
      if (storedStatus) {
        this.loggedIn = storedStatus
      }

      const ts = localStorage.getItem('session_timestamp')
      if(ts){
        this.timestamp = ts
      }
    }
  }
})