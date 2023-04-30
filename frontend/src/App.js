// import { useState } from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Loading from "./Components/Loader/Loading";
import FrontPage from "./Components/Profile/FrontPage";
import TopRankerPage from "./Components/TopRanker/TopRankerPage";
import Partioner from "./Components/utils/Partioner";

function App() {
  // const [loading, setLoading] = useState(true);
  // setTimeout(() => {
  //   setLoading(false);
  // }, 3000);

  return (
    <div className="App">
      {/* {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <Header></Header>
          <FrontPage></FrontPage>
          <About></About>
          <Partioner></Partioner>
          <TopRankerPage></TopRankerPage>
          <Contact></Contact>
        </>
      )} */}
          <Loading></Loading>
          <Header></Header>
          <FrontPage></FrontPage>
          <About></About>
          <Partioner></Partioner>
          <TopRankerPage></TopRankerPage>
          <Contact></Contact>
    </div>
  );
}

export default App;
