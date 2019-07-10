import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ProductDetail from "./components/productDetail";
import PropTypes from "prop-types";

const data ={
  productTitle: 'Zapatillas calidosas',
  price: 1200,
  size: 41,
  priceT: "PRICE",
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      data:data,
      category: 'masculino'
    }
  }
  updateClick = () =>{
    this.setState({category:"hola"})
  }
  render (){
    return (
        <div className="App">
          <header className="App-header">
            <h1>{this.state.category}</h1>
            <ProductDetail data={data}/>
            <img src={logo} className="App-logo" alt="logo" />
            <button onClick={this.updateClick}>Actualizar</button>
          </header>
        </div>
    );
  }

}

ProductDetail.PropTypes = {

  data: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })

};

export default App;
