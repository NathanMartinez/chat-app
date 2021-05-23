import React, { useState, useContext } from 'react'

const UserContext = React.createContext()

const initialState = {
  socket_id: '',
  username: 'dev'
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
