import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import TicketBoxes from './components/TicketBoxes';
import Categories from './components/Categories';
import FeatureIn from './components/FeatureIn';
import Footer from './components/Footer';
import './styles/css/site.css';
import './styles/css/bootstrap.css';
import './styles/scss/_bootstrap.scss';
import './styles/scss/_colors.scss';
import './styles/scss/_mixins.scss';
import './styles/scss/buttons.scss';
import './styles/scss/custom.scss';
import './styles/scss/header.scss';
import './styles/scss/home.scss';
import './styles/scss/site.scss';
import './styles/scss/social.scss';
import './styles/scss/ticket-boxes.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
       <Slider />
       <TicketBoxes />
       <Categories />
       <FeatureIn />
       <Footer />
      </div>
    );
  }
}

export default App;
