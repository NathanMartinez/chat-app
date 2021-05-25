import { useState } from "react";
import MessageInput from "./components/MessageInput";
import Messages from "./components/Messages";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="app">
      <Messages data={data} />
      <MessageInput setData={setData} />
    </div>
  );
}

export default App;
