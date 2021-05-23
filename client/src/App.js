import Login from "./components/Login";
import Messages from "./components/Messages";
import { app } from "./context/firebase";

function App() {
  console.log(app);
  return (
    <div className="app">
      <Messages />
      <Login />
    </div>
  );
}

export default App;
