import { useState } from "react";
import "./App.css";
import Authentication from "./Components/Authentication";
import Dashboard from "./Components/Dashboard"

function App() {

  const [isOnDashboard,setIsOnDashboard] = useState(false);
  const [name,setName] = useState("")

  return (
    <div className="antialiased pb-14">
      {
        isOnDashboard ?
        <Dashboard setIsOnDashboard={setIsOnDashboard} name={name} /> :
        <Authentication setIsOnDashboard={setIsOnDashboard} setName={setName} />
      }
    </div>
  );
}

export default App;
