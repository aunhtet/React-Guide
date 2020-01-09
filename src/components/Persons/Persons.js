import React, {PureComponent} from 'react';
// if import and extended pureComponent then shouldcomponent update performance
// Check doesn't necessary.
import Person from './Person/Person';


class Persons extends PureComponent {

    constructor(props){
        super(props);
        console.log('[Persons.js] Constructor...', props);
    }

    componentDidMount(){
        console.log('[Persons.js] componentDidMount...');
    }

    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     console.log('[Persons.js] getSnapshotBeforeUpdate');
    //     return {message: 'Snapshot!'};
    // }

    
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        console.log('[Person.js] Update!! ComponentwillreceiveProps...',nextProps);    
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log ('[Persons.js] shouldComponentUpdate...', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //      nextProps.changed !== this.props.changed ||
    //      nextProps.clicked !== this.props.clicked;
    // }

    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('[Persons.js] componentWillupdate', nextProps,nextState);
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate...',prevProps,prevState,snapshot);
    }


    render() {
        console.log('[Persons.js] rendering...')
        return (
            this.props.persons.map((person,index) => {
                return (
                    <Person 
                    click = {() => this.props.clicked(index)}
                    changed= {(event)=> this.props.changed(event,person.id)}
                    name = {person.name} 
                    position = {index}
                    age = {person.age}
                    key = {person.id}
                    />
                );
            })
        )
    }
}

export default Persons;