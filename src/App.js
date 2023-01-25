import logo from "./logo.svg";
import "./App.css";
import service from "./service";
import React from "react";

function App() {
  const [footerData, setFooterData] = React.useState();

  async function fetchData() {
    try {
      setFooterData(await service.getFooterData());
      // console.log("footerData fetched01:", footerData);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  // console.log("footerData fetched02:", footerData);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
