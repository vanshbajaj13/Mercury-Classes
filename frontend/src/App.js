import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
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
          <Partioner></Partioner>
          <Contact></Contact>
    </div>
  );
}

export default App;
