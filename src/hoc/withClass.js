import React from 'react';
// Import { Component } if class

// const WithClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// )

const withClass = (WrappedComponent, className) => {
    return (props) => (
        <div className = {className}>
            <WrappedComponent {...props} />
        </div>
    );
};

//Sample function with calss retrun from Higher Order class
// const withClass = (WrappedComponent, className) => {
//     return class extends Component{
//         render() {
//             return (
//                 <div className = {className}>
//                     <WrappedComponent {...this.props} />
//                 </div>
//             )
//         }  
//     } 
// };



export default withClass;