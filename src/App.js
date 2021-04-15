import { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homePage";
import Header from "./components/header";
import Footer from "./components/footer";
import { fetchBreeds } from "./actions/setCatsActions";

import "./styles/index.css";

function App({ fetchBreeds }) {
  useEffect(() => {
    fetchBreeds();
    console.log("running");
  }, [fetchBreeds]);

  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage} />
      <Footer />
    </div>
  );
}

export default connect(null, { fetchBreeds })(App);
