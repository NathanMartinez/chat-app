import { io } from "socket.io-client";
import { useUserContext } from './context/UserContext'

const socket = io("http://localhost:3001")

socket.on("connect", () => {
  console.log(socket.id); 
});

function App() {
  const [user, addUser] = useUserContext()

  return (
    <div className="app">
      {JSON.stringify(user)}
    </div>
  );
}

export default App;
