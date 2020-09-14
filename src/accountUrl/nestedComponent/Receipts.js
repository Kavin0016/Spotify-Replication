import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

class Receipts extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <>
            <label className="NS_topLabel" style={{color:"green"}}>Receipts</label>
            <p className="alert info">No receipts found</p>
            </>
        )
    }
}

export default Receipts;