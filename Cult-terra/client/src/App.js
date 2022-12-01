import { useState } from "react";
import "./App.css";
import Authentication from "./Components/Authentication";
import Dashboard from "./Components/Dashboard"

function App() {

  const [isOnDashboard,setIsOnDashboard] = useState(false);
  const [getEmail,setEmail] = useState("")

  return (
    <div className="antialiased pb-14">
      {
        isOnDashboard ?
        <Dashboard setIsOnDashboard={setIsOnDashboard} email= {getEmail} /> :
        <Authentication setIsOnDashboard={setIsOnDashboard} setEmail={setEmail} />
      }
    </div>
  );
}

export default App;
