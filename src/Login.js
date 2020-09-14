import React from 'react';
import black_logo from './img/logo_black.png';
import {Link, NavLink} from 'react-router-dom';


class Login extends React.Component{
    constructor(props){
        super(props);
        console.log("L_props = "+Object.entries(this.props));
        alert(this.props.history.location);
    }

    render(){
        return(
            <>
            <header className="L_headerTag">
                <div className="container L_Head">
                    <div className="L_navContent">
                        <img src={black_logo} style={{width:65+"px",height:65+"px"}}></img>
                        <p className="L_brandName">Spotify</p>&reg;
                    </div>
                </div>
            </header>
            <div className="L_Body">
                <div className="L_topHint">
                    To continue, log in to Spotify.
                </div>
                <div className="L_fbBox">
                    <span>CONTINUE WITH FACEBOOK</span>
                </div>
                <div className="L_appleBox">
                    <span>CONTINUE WITH APPLE</span>
                </div>
                <div className="L_phoneNumberBox">
                    <span>CONTINUE WITH PHONE NUMBER</span>
                </div>
                <div className="SU_formDivider">
                    <hr className="SU_hrDivider"></hr>
                    <span style={{paddingTop:22+"px",paddingLeft:15+"px",paddingRight:15+"px",color:"black",fontWeight:600,fontSize:14+"px"}}>OR</span>
                    <hr className="SU_hrDivider"></hr>
                </div>
                <form name="loginForm">
                <div className="LU_fieldGroup">
                    <div className="SU_textboxContainer">
                            <input className="SU_textBox" placeholder="Email address or username" name="email"></input>
                    </div>
                </div>
                <div className="LU_fieldGroup">
                    <div className="SU_textboxContainer">
                            <input className="SU_textBox" placeholder="Password" name="password"></input>
                    </div>
                </div>
                <div className="LU_loginSection">
                    <div className="LU_rememberContainer">
                        <input type="checkbox"></input>
                        <span style={{paddingLeft:10+"px"}}>Remember Me</span>
                    </div>
                    <NavLink to="/account">
                        <div className="LU_loginBox" onClick={() => this.props.updateUser.update(document.loginForm.email.value,document.loginForm.password.value)}>
                                <span style={{color:"white",textDecoration:"none"}} className="Global_none">
                                        LOGIN
                                </span>
                        </div>
                    </NavLink>
                </div>
                </form>
                <div className="LU_forgetPassword">
                    Forgot your password ?
                </div>
                <hr className="SU_hrDivider" style={{marginBottom:30+"px",marginTop:30+"px"}}></hr>
                <div className="LU_donthaveanAccount">
                    Don't have an Account?
                </div>
                <Link to="/signup">
                    <div className="LU_signupBtn">
                        SIGN UP FOR SPOTIFY
                    </div>
                </Link>
                <hr className="SU_hrDivider" style={{marginBottom:10+"px"}}></hr>
                <div className="LU_privacyContent">
                If you click "Log in with Facebook" and are not a Spotify user, you will be registered and you agree to Spotify's <a>Terms &amp; Conditions</a> and <a>Privacy Policy</a>.
                </div>
            </div>
            </>
        )
    }
}

export default Login;