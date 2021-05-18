import { io } from "socket.io-client";

const socket = io("http://localhost:3001")

socket.on("connect", () => {
  console.log(socket.id); 
});

function App() {

  return (
    <div className="app">
    </div>
  );
}

export default App;
