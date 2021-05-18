import React, { useState, useContext } from 'react'

const UserContext = React.createContext()

const initialState = {
  socket_id: -1,
  userName: 'dev',
  messages: [{
    id: 0,
    text: 'Hello',
    senders_socket_id: -2,
    timestamp: Date.now(),
  }],
}

export function useUserContext() {
  return useContext(UserContext)
}

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(initialState)

  return (
    <UserContext.Provider value={[ user, setUser ]}>
      { children }
    </UserContext.Provider>
  )
}
