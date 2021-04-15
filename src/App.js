import {Route } from 'react-router-dom'

import HomePage from './pages/homePage'
import Header from './components/header'
import Footer from './components/footer';

import './styles/index.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={HomePage}/>
      <Footer />
    </div>
  );
}

export default App;
