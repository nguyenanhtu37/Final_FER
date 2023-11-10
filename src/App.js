import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
// import { Navbar, NavbarBrand } from 'reactstrap';
import React, { Component } from 'react';
// import Menu from './components/MenuComponent';
// import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
const store = ConfigureStore();
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dishes: DISHES
  //   };
  // }

  render() {
    return (
      // <div className="App">
      //   <Navbar dark color="primary">
      //     <div className="container">
      //       <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      //     </div>
      //   </Navbar>
      //   {/* <Menu /> */}
      //   <Menu dishes={this.state.dishes} />
      // </div>
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
