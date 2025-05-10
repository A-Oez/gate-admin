export function useSessionLogout() {
  function logout() {
    localStorage.setItem('loggedIn', JSON.stringify(false))
    localStorage.removeItem('session_timestamp')
    window.location.reload()  
  }

  return {
    logout,
  }
}
