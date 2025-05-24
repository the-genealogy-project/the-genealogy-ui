import React from "react";

const App: React.FC<AppProps> = ({
  applicationName = "The Genealogy Project",
}) => {
  return <h1>{applicationName}</h1>;
};

export default App;
