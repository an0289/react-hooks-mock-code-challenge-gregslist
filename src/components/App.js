import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [searchText, setSearchText] = useState("")

  return (
    <div className="app">
      <Header searchText={searchText} setSearchText={setSearchText}/>
      <ListingsContainer searchText={searchText} />
    </div>
  );
}

export default App;
