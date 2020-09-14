import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

class RecoverPlaylists extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <>
            <label className="NS_topLabel" style={{color:"green"}}>Recover playlists</label>
            <p className="alert danger">We had an error retrieving your deleted playlist. Please try again later.</p>
            </>
        )
    }
}

export default RecoverPlaylists;