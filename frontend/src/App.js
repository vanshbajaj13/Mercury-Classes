import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import FrontPage from "./Components/Profile/FrontPage";
import TopRankerPage from "./Components/TopRanker/TopRankerPage";
import Partioner from "./Components/utils/Partioner";

function App() {
  return (
    <div className="App">
      <Header></Header>
        <FrontPage></FrontPage>
        <About></About>
        <Partioner></Partioner>
        <TopRankerPage></TopRankerPage>
        <section></section>
    </div>
  );
}

export default App;
