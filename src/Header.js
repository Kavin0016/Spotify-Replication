import React from 'react';
import {Link} from 'react-router-dom';
import logo from './img/brand.png';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav className="navbar navbar-inverse navbar-fixed-top" style={{backgroundColor: "black",borderRadius:0+"px",height:80+"px"}}>
                <div className="container" style={{height:80+"px"}}>
                    <div className="navbar-header" style={{marginTop:15+"px"}}>
                        <img className="navbar-left" src={logo} style={{height:45+"px",width:45+"px"}}></img>
                        {this.props.Url &&
                            <Link to="/in"><span className="brandName">Spotify</span></Link>
                        }
                        <span className="brandName">Spotify</span>
                        <ul className="navbarLinks pull-right">
                            <li className="navlinks">Premium</li>
                            <li className="navlinks">Help</li>
                            <li className="navlinks">Download</li>
                            <li style={{padding:10+"px",paddingTop:15+"px"}}>|</li>
                            <Link to="/signup">
                                <li className="navlinks" style={{color:"white"}}>Sing Up</li>
                            </Link>
                            <Link to="/login">
                                <li className="navlinks" style={{color:"white"}}>Login</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;