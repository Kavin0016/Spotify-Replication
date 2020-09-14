import React from 'react';
import {Route, Redirect} from 'react-router-dom';

class ValidateUser extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {component:Component, ...props} = this.props

        return(
            <Route {...props}
                render = { props => 
                    this.props.canlog ?
                    <component {...props} /> :
                    <Redirect to = '/login' />
                    
                }
            />
        )
    }
}

export default ValidateUser;