import { useState } from "react";
import "./App.css";
import Authentication from "./Components/Authentication";
import Dashboard from "./Components/Dashboard"

function App() {

  const [isOnDashboard,setIsOnDashboard] = useState(false);

  return (
    <div className="App">
      {
        isOnDashboard ?
        <Dashboard setIsOnDashboard={setIsOnDashboard} /> :
        <Authentication setIsOnDashboard={setIsOnDashboard} />
      }
    </div>
  );
}

export default App;
