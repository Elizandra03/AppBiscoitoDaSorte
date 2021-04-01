import React, { Component } from 'react';
import logo from './assets/biscoito.png';
import './style.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textPhrase: ''
    }

    this.phrase = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
                   'O riso é a menor distância entre duas pessoas.', 
                   'Deixe de lado as preocupações e seja feliz.',
                   'Realize o óbvio, pense no improvável e conquiste o impossível.',
                   'Acredite em milagres, mas não dependa deles.',
                   'A maior barreira para o sucesso é o medo do fracasso.'];   
    
    this.abrirBiscoito = this.abrirBiscoito.bind(this);                   
  }

  abrirBiscoito(){
    let state = this.state;
    let num = Math.floor(Math.random() * this.phrase.length);
    state.textPhrase = this.phrase[num];
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img className="img" src={logo} alt="Biscoito da sorte"/>
        <button className="btn-open" onClick={this.abrirBiscoito}>Abrir Biscoito</button>
        <h3 className="phrase-random">{this.state.textPhrase}</h3>
      </div>
    );
  }
}
export default App;
