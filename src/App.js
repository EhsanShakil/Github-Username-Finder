import React from "react";
import GlobalProvider from "./Context/GlobalState";
import Username from "./Components/User";

function App() {
  return (
    <GlobalProvider>
      <Username />
    </GlobalProvider>
  );
}

export default App;
