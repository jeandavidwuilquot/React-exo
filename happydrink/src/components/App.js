import React, { Component } from 'react';
import logo                 from '../assets/logo.svg';
import '../css/App.css';

import { establishments }    from './establishments/fixtures';
import Establishment         from './establishments/Establishment'

// Un Component implémente la méthode render() et reçoit en paramètre ses props
class App extends Component {

    constructor(props) {
        // Ne pas oublier d'appeler le constructeur père ! (Obligatoire)
        super(props);
        // On définit le state de notre component que l'on hérite de la classe "Component"
        // Cela remplace la fonction "getInitialState"
        this.state = {
            pseudo  : "Inconnu",
            searchStringUser: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({searchStringUser: e.target.value});
    }
    // On définit la fonction appelée lors d'un clic sur le lien "Changer le pseudo !"
    // la syntaxe  " nomFonction = () => {} " nous permet de conserver le contexte `this` du scope courant. (Ici, la classe App)
    randomPseudo = () => {
        // On s'amuse un peu ;)
        let randomPseudo    = ""
        const possible      = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        const size          = Math.floor(Math.random() * 10) + 5
        for( let i=0; i < size; i++ ){
            randomPseudo += possible.charAt(Math.floor(Math.random() * possible.length))
        }
        // On met à jour le state via la fonction "setState" héritée de la classe Component
        this.setState({
            pseudo : randomPseudo
        })
    }
    render() {
        const establishmentFilter = establishments.filter((searchText) => {
            let search = searchText.name + " " + searchText.description;
            return search.toLowerCase().match(this.state.searchStringUser);
        });

        const listEstablishment = establishmentFilter.map( (establishment) => {
          return (
              <Establishment
                  key={ establishment.id }
                  establishment={ establishment } 
              />
          )
        });
        
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome "{ this.state.pseudo }" to { this.props.title }</h2>
            </header>
            <div className="App-intro">
                {/* On appelle notre fonction lors du clic sur le lien */}
                <p> <button onClick={ this.randomPseudo } >Changer le pseudo !</button> </p>
                <div>
                    <input
                        type="text"
                        placeholder="search"
                        value={this.state.searchStringUser}
                        onChange={this.handleChange}
                    />
                </div>
                <section>
                    { listEstablishment }
                </section>
            </div>
          </div>
        );
    }
}

export default App;

