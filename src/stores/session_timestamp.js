import { defineStore } from 'pinia'

export const useSessionTimeStore = defineStore('session', {
  state: () => ({
    timestamp: null,
    loggedIn: false, 
  }),
  actions: {
    setTimestamp(timestamp) {
      this.timestamp = timestamp
      localStorage.setItem('session_timestamp', new Date(timestamp))
    },
    setLoggedIn(status) {
      this.loggedIn = status
      localStorage.setItem('loggedIn', JSON.stringify(status))
    },
    loadFromStorage() {
      const storedStatus = localStorage.getItem('loggedIn')
      if (storedStatus) {
        this.loggedIn = JSON.parse(storedStatus)
      }

      const ts = localStorage.getItem('session_timestamp')
      if(ts){
        this.timestamp = new Date(ts)
      }
    }
  }
})