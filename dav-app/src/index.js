// import React from 'react';
// import ReactDom from 'react-dom';


// const hello = () => 'Bonjour !';
// const objet = {
//   prenom: 'David'
// };

// const testons = 
//   <div>
//     <p> Tu peux utiliser des nombres et tout ce que ça implique comme une addition: 2+3= { 2+3 }</p>
//     <p> Tu peux utiliser des fonctions : { hello() }</p>
//     <p> Tu peux utiliser des propriétés d'objet : { objet.prenom }</p>
//     <p> tu ne peux pas utiliser des objet directement.</p>
//   </div>

  

// ReactDom.render(testons, document.getElementById('root'));


//   setInterval(()=>{
//   const horloge=(
// <div>
//     <h2>Il est exactement {new Date().toLocaleTimeString()} </h2>
// </div>
//   );
//   ReactDom.render(horloge, document.getElementById('root'));
//   },1000);

// import React from 'react';
// import ReactDom from 'react-dom';

// const Fonction = () => {
//     return <h1>Hello World !!!</h1>
// }
// const element=<Fonction/>
// ReactDom.render(element, document.getElementById('root'));
// import React from 'react';
// import ReactDom from 'react-dom';

// class Fonction extends React.Component{
//     render(){
//         return<h1>Hello World</h1>
//     }
// }

// ReactDom.render(<Fonction />, document.getElementById('root'));

// import React from 'react';
// import ReactDom from 'react-dom';

// class Fonction extends React.Component{
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return <h1>Hello, tu dois t'appeler { this.props.name } {this.props.prenom} </h1>
//     }
// }

// ReactDom.render(<Fonction name='Wuilquot' prenom='David'/>, document.getElementById('root'));

// import React from 'react';
// import ReactDom from 'react-dom';

// const Photo = () => <img style={{height: '200px'}} src="https://aftercoaching.be/wp-content/uploads/2018/08/PHOTO-Guy_Vilain_TEMPORAIRE.png"/>;

// const Nom = () => <h4>Guy Vilain</h4>;

// const Bio = () =>
//     <p>
//         <strong>Biographie </strong>
//         Guy est un type sympa, et il ne manque pas de classe.
//     </p>;

// const Profil = () => 
//     <div>
//         <Photo/>
//         <Nom/>
//         <Bio/>
//     </div>;

// ReactDom.render(
//     <Profil/>,
//     document.getElementById('root')
// );
// import React, { Component, Fragment } from 'react';
// import ReactDOM from 'react-dom';

// class Componsant extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             time: new Date().toLocaleTimeString(),
//             day: new Date().getUTCDate(),
//             month: new Date().getMonth()+1,
//             year: new Date().getFullYear()
//         };

//         setInterval(()=>{
//             this.setState({
//                 time: new Date().toLocaleTimeString(),
//                 day: new Date().getUTCDate()
//             })
//         },1000);

//     }


//     render(){
//         return(
//             <Fragment>
//                 <div>Nous sommes le { this.state.day }/{this.state.month}/{this.state.year}. </div>
//                 <div>Il est { this.state.time }.</div>
//             </Fragment>
//         );
//     }
// }

// ReactDOM.render(<Componsant />, document.getElementById('root'));


// import React, { Component, Fragment } from 'react';
// import ReactDOM from 'react-dom';


// class Componsant extends Component{

// constructor(props){
// super(props);
// this.state={
//     compteur:0
// };
// }
// ajouteUn(){
//     this.setState({
//     compteur: this.state.compteur +1
//     });
// }
// enleveUn(){
//     this.setState({
//     compteur: this.state.compteur -1    
//     });
// }
// render(){
//     return(
//         <Fragment>
//             <div>
//                 <span>{this.state.compteur}</span>
//                 <div>
//                     <button onClick={()=>this.ajouteUn()}>Ajoute 1</button>
//                     <button onClick={()=>this.enleveUn()}>Enleve 1</button>
//                 </div>   
//             </div>

//         </Fragment>
//     )
// }

// }
// ReactDOM.render(<Componsant/>, document.getElementById('root'));

// import React, { Component } from 'react';
// import './App.css';
// import ReactDOM from 'react-dom';

// class Parent extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//         compteur: 0
//         };
//     }

//     incremente = () => {
//         this.setState({
//             compteur: this.state.compteur + 1
//         })
//     }
//     render(){
//         return <Child compteur = { this.state.compteur } updateCompteur = { this.incremente } />
            
//     }
// }

// class Child extends Component{
//     render(){
//         return(
//             <div>
//                 <p> { this.props.compteur } </p>
//                 <button onClick = { this.props.updateCompteur } > +1 </button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Parent />, document.getElementById('root'));




// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// class Componsant extends Component {
//     constructor(props){
//         super(props);
//         console.log('constructor');
//     }

//     componentDidMount(){
//         console.log('componentDidMount');
//     }

//     componentDidUpdate(){
//         console.log('componentDidUpdate');
//     }

//     render(){
//         console.log('render');
//         return(
//             <h1> { this.props.test} </h1>
//         )
//     }
// }

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             test: true
//         }

//         setTimeout( () => {
//             this.setState({
//                 test: '123'
//             })
//         }, 1000)
//     }

//     render(){
//         return (
//             <Componsant test={ this.state.test } />
//         );
//     }
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// import React, { Component } from 'react';
// import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ReactDOM from 'react-dom';

// class App extends Component{
//     render(){
//         return(
//             <div className = "App d-flex align-items-center justify-content-center">
//                 <Login />
//             </div>
//         );
//     }
// }

// class Login extends Component{
//     constructor(props){
//         super(props);
//         this.emailRef = React.createRef();

//     }
//     componentDidMount(){
//         this.emailRef.current.focus();
//     }
//     render(){
//         return(
//             <div className = "card">
//                 <div className = "card-header text-center">
//                     Login
//                 </div>
//                 <div className = "card-body">
//                     <div className = "form-group">
//                         <label>Email : </label>
//                         <input className = "form-control"></input>
//                     </div>
//                     <div className = "form-group">
//                         <label>Password : </label>
//                         <input ref = { this.emailRef } className = "form-control"></input>
//                     </div>
//                     <hr></hr>
//                     <a href = "/" class = "btn btn-primary w100">Login</a>
//                 </div>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<App />, document.getElementById('root'));
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Composant1 from './components/composant1/Composant1.js';


class App extends Component {
render(){
//         
//         
        return(
           <div>
         <h1> App Title</h1>
               <Composant1 />
            </div>
      );
    }
 }

ReactDOM.render(<App />, document.getElementById('root'));