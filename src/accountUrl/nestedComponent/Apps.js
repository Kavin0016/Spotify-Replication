import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

class Apps extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
                <>
                <label className="NS_topLabel" style={{color:"green"}}>Apps with access to your Spotify information</label>
                <p style={{color:"black",marginTop:8+"px",marginBottom:16+"px",fontSize:16+"px"}}>You've given these apps access to your Spotify account. To prevent them from future access, click "Remove Access".</p>
                <tabel className="NS_tabel well" style={{width:715+"px",border:"none",outline:"none",padding:40+"px",marginBottom:10+"px",marginTop:20+"px",display:"block"}}>
                    <tr style={{width:715+"px"}}>
                    <th className="NS_tabelHeadings NS_leftColumn" style={{width:715+"px",fontSize:16+"px",fontWeight:"lighter"}}>You haven't approved any application</th>
                    </tr>
                </tabel>
                </>
        )
    }
}

export default Apps;