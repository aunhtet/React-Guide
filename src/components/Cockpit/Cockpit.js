import React, {useEffect, useRef, useContext} from 'react';
import styleModule from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log('[Cockpit.js] stateless function get current authenicated value...' + authContext.authenticated);

    useEffect (() => {
        console.log('[Cockpit.js] useEffect');
        //http request....
        setTimeout(() => {
            console.log('[Cockpit.js] Saved data to cloud! Async timeout...');
        }, 2000);
        //toggleBtnRef.current.click();        
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    },[]);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    });

    const classes = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = styleModule.Red;
    }
    if (props.persons.length <=2){
        classes.push(styleModule.red);
    }

    if (props.persons.length <=1) {
        classes.push(styleModule.bold);
    }

    return (
        <div className={styleModule.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working.</p>
            <button ref={toggleBtnRef} className={btnClass}
                //alt = {this.state.showPersons}
                onClick={props.clicked}>Toggle Person 
            </button>
            {/* <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log in</button>}
            </AuthContext.Consumer> */}
            <button onClick={authContext.login}>Log in</button>
         </div>
    );
};

export default React.memo(Cockpit);
//Cockpit is changed only incoming Props value changed. 
//Otherwise it didn't.