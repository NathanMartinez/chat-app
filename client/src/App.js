import { useState } from "react";
import Login from './components/Login'
import MessageInput from "./components/MessageInput";
import Messages from "./components/Messages";
import NavigationBar from "./components/NavigationBar";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="app">
      {/* <NavigationBar />
      <Messages data={data} />
      <MessageInput setData={setData} /> */}
      <Login />
    </div>
  );
}

export default App;
