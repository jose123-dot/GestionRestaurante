import "./App.css";
import Menu from "./components/menu/menu.jsx";
import Header from "./components/header/header.jsx";
function App() {
  return (
    <>
      <div id="wrapper">
        <Menu></Menu>
        <div id="content-wrapper">
          <div id="content">
            <Header></Header>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
