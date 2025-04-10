import React, { useState } from "react";
import "./App.css";

const App = () => {
  // State to manage the authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login and logout actions
  const handleLoginLogout = () => {
    if (isAuthenticated) {
      alert("Signed Out"); // Show pop-up when signing out
      setIsAuthenticated(false); // Set to false on logout
    } else {
      setIsAuthenticated(true); // Set to true when logging in
    }
  };

  return (
    <div className="App">
      <h1>Apple Jobs Simulated UI</h1>

      {/* Button that toggles between sign-in and sign-out */}
      <button onClick={handleLoginLogout}>
        {isAuthenticated ? "Sign Out" : "Sign In"}
      </button>
    </div>
  );
};

export default App;
