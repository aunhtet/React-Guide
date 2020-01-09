import React, {PureComponent} from 'react';
import styleModule from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
//import Auxiliary from '../hoc/Auxiliary';
//Replaced with <></>
import AuthContext from '../context/auth-context';


class App extends PureComponent {

   constructor(props){
      super(props);
      console.log('[App.js] Constructor...',props);
      this.state = {
         persons: [
            { id:'asdf', name: "Max", age : 28 },
            { id:'werd', name: "Manu", age :29 },
            { id:'gfgd', name: "Stephanie", age :26}
         ],
         otherState: 'some other value',
         showPersons: false,
         showCockpit: true,
         changeCounter: 0,
         authenticated: false
      };
   }

   UNSAFE_componentWillMount() {
      console.log('[App.js] ComponentWillMount...');
   }
   
   
   componentDidMount(){
      console.log('[App.js] componentDidMount...');
   }

   // shouldComponentUpdate(nextProps, nextState){
   //    console.log('[App.js] shouldComponentUpdate');
   //    return nextState.persons !== this.state.persons ||
   //       nextState.showPersons !== this.state.showPersons;
   // }

   UNSAFE_componentWillUpdate(nextProps, nextState) {
      console.log('[App.js] componentWillupdate', nextProps,nextState);
   }

   componentDidUpdate(){
      console.log('[App.js] componentDidUpdate');
   }

   nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex((p)=>{
         return p.id === id;
      });

      const person = {
         ...this.state.persons[personIndex]
      }

      person.name = event.target.value;

      const ps = [...this.state.persons];
      ps[personIndex] = person;

      this.setState((prevState, props) => { 
         return {
            persons: ps , 
            changeCounter : prevState.changeCounter +1
         }
      });
   }

   deletePersonHandler = (personIndex) => {
      const ps = this.state.persons.slice();
      ps.splice(personIndex,1);
      this.setState({persons:ps});
   }

   togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
      // this.setState((prevState,props) => {
      //    return {
      //       showPersons: !doesShow,
      //       toggleClicked: prevState.toggleClicked +1
      //    }
      // });
   }

   loginHandler = () => {
      this.setState({authenticated: true});
   }

   render(){
      console.log('[App.js] Rendering...')
      let persons = null;

      if (this.state.showPersons){
         persons = <Persons 
                  persons={this.state.persons}
                  clicked = {this.deletePersonHandler}
                  changed = {this.nameChangeHandler}
                  isAuthenticated= {this.state.authenticated}/>
      }
      return (
      //<WithClass classes={styleModule.App}>
      <>
         <button onClick={() => {this.setState({showPersons: true})}}> Show Persons </button>
         <AuthContext.Provider 
            value={{authenticated: this.state.authenticated, 
            login: this.loginHandler}}>
            {this.state.showCockpit ? 
            <Cockpit showPersons = {this.state.showPersons}
                     title = {this.props.appTitle}
                     persons={this.state.persons}
                     clicked = {this.togglePersonsHandler}
                     />:null}
            {persons}         
         </AuthContext.Provider>
      </>
      //</WithClass>     
      );
   }
  //return React.createElement('div',{className:'App'}, React.createElement('h1',null,'This is react app'));
}

export default withClass(App, styleModule.App);
