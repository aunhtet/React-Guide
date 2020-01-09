import React, {Component} from 'react';
import styleModule from './Person.module.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        //this.inputElementRef = React.createRef();
        console.log('[Person.js] Constructor...')
    }

    static contextType = AuthContext;

    componentDidMount(){
        //document.querySelector('input').focus();
        //this.imputElement.focus();
        //this.inputElementRef.current.focus();
        if (this.props.position === 0)
        {
            this.inputElement.focus();
            //this.inputElement was assigned by ref in render()
        }
        console.log('[Person.js] componentDidMount and Authenticated is :' + this.context.authenticated);
    }


    render() {
        console.log('[Person.js] Rendering....');
        return (
            //<div className={styleModule.Person}>
            //<React.Fragment>
            //<WithClass classes={styleModule.Person}>
            //"<></>" replace Auxiliary component
            <> 
                {/* <AuthContext.Consumer>
                    {(context)=> context.authenticated ? <p>Authenticated!</p>:<p>Please Login</p>}
                </AuthContext.Consumer> */}
                {this.context.authenticated ? <p>Authenticated!</p>:<p>Please Login</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
                <p key= "i2">  {this.props.children}</p>
                <input 
                    key = "i3"
                    type="text" 
                    ref = {(inputEl)=> {this.inputElement =inputEl}}
                    onChange={this.props.changed} 
                    value={this.props.name}>
                </input>
            </>
            //</WithClass>
            //</React.Fragment>
            //</div>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person,styleModule.Person);