import React from "react";
import AppRoutes from "./routes/app-routes";

function App() {
  return (
    <div className="App" style={{ fontFamily: "Noto Sans Sinhala" }}>
      <React.Fragment>
        <AppRoutes />
      </React.Fragment>
    </div>
  );
}

export default App;
