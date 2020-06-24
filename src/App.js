import React from "react";
import GlobalProvider from "./Context/GlobalState";
import Name from "./Components/User";

function App() {
  return (
    <GlobalProvider>
      <Name />
    </GlobalProvider>
  );
}

export default App;
