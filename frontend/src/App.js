import About from "./Components/About/About";
import Header from "./Components/Header/Header"
import FrontPage from "./Components/Profile/FrontPage"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <FrontPage></FrontPage>
      <About></About>
      <div style={{height:"1000px"}}>

      </div>
    </div>
  );
}

export default App;
