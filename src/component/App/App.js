import "./App.css";
import Navbar from "../Navbar/Navbar.js";
import Landingpage from "../../images/Landingpage.jpg";
import SearchBar from "../../component/SearchBar/searchBar.js";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${Landingpage})`,
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    >
      <Navbar />
      <SearchBar />
    </div>
  );
}

export default App;
