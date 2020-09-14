import React from 'react';
import {Link} from 'react-router-dom';
import black_logo from './img/logo_black.png';

class Singup extends React.Component{
    constructor(props){
        super(props);
        this.signupData = {
            checked: ''
        };
        this.errors = {};
    }


    storeAndChechCredientils = () => {
        if(document.signupForm.email.value && document.signupForm.confirmEmail.value && document.signupForm.password.value && document.signupForm.profileName.value && document.signupForm.gender.value)
        {
            if(document.signupForm.email.value == document.signupForm.confirmEmail.value)
            {
                this.signupData.email = document.signupForm.email.value;
                this.signupData.password = document.signupForm.password.value;
                this.signupData.profileName = document.signupForm.profileName.value;
                this.signupData.gender = document.signupForm.gender.value;
                this.signupData.country = "India";
                if(document.signupForm.marketingPurpose.checked)
                {
                    this.signupData.marketingPurpose = true;
                }
                else{
                    this.signupData.marketingPurpose = false;
                }
                let userCredientials = JSON.parse(localStorage.getItem('userCredientials'));
                userCredientials.push(this.signupData)
                localStorage.setItem('userCredientials',JSON.stringify(userCredientials));
                console.log(JSON.parse(localStorage.getItem('userCredientials')));
                document.signupForm.email.value = "";
                document.signupForm.confirmEmail.value = "";
                document.signupForm.password.value = "";
                document.signupForm.profileName.value = "";
                document.signupForm.gender.value = "";
                this.setState({
                    checked:false
                })
            }
            
        }
    }


    render(){
        return(
            <div className="container" style={{width:450+"px",paddingBottom:130+"px"}}>
                <div className="headerContainer">
                    <div className="logoBrand">
                        <img src={black_logo}></img>
                        <strong className="SU_brandName">spotify</strong>
                    </div>
                    <strong style={{marginTop:40+"px",fontSize:27+"px",color:"#181818",fontWeight:800,fontFamily:"spotify-circular, Helvetica, Arial, sans-serif",display:"block"}}>Singup for free to start listening.</strong>
                </div>
                <div className="SU_fb_signup">
                    SIGN UP WITH FACEBOOK
                </div>
                <div className="SU_formDivider">
                    <hr className="SU_hrDivider"></hr>
                    <span style={{paddingTop:22+"px",paddingLeft:15+"px",paddingRight:15+"px"}}>or</span>
                    <hr className="SU_hrDivider"></hr>
                </div>
                <div className="SU_titleAfterDivider">
                    Sign up with your email address
                </div>
                <form name="signupForm">
                <div className="SU_fieldGroup">
                    <div className="SU_textboxLabel">
                        What's your email?
                    </div>
                    <div className="SU_textboxContainer">
                        <input className="SU_textBox" required={true} placeholder="Enter your email" name="email"></input>
                    </div>
                </div>
                <div className="SU_fieldGroup">
                    <div className="SU_textboxLabel">
                        Confirm your email
                    </div>
                    <div className="SU_textboxContainer">
                        <input className="SU_textBox" required={true} placeholder="Enter your email again" name="confirmEmail"></input>
                    </div>
                </div>
                <div className="SU_fieldGroup">
                    <div className="SU_textboxLabel">
                        Create a password
                    </div>
                    <div className="SU_textboxContainer">
                        <input className="SU_textBox" required={true} placeholder="Create a password" name="password"></input>
                    </div>
                </div>
                <div className="SU_fieldGroup">
                    <div className="SU_textboxLabel">
                        What should we call you?
                    </div>
                    <div className="SU_textboxContainer">
                        <input className="SU_textBox" required={true} placeholder="Enter a profilr name" name="profileName"></input>
                    </div>
                    <div className="SU_textboxHint">This appears on your profile.</div>
                </div>
                <div className="SU_fieldGroup">
                    <div className="SU_textboxLabel">
                        What's your gender?
                    </div>
                    <div style={{display:"flex",textAlign:"left"}}>
                        <div className="SU_radioGroup">
                            <input type="radio" name="gender" value="male"></input>
                            <span style={{paddingLeft:10+"px",color:"#181818",fontSize:14+"px",marginRight:30+"px"}}>Male</span>
                        </div>
                        <div className="SU_radioGroup">
                            <input type="radio" name="gender" value="female"></input>
                            <span style={{paddingLeft:10+"px",color:"#181818",fontSize:14+"px",marginRight:30+"px"}}>Female</span>
                        </div>
                        <div className="SU_radioGroup">
                            <input type="radio" name="gender" value="non-binary"></input>
                            <span style={{paddingLeft:10+"px",color:"#181818",fontSize:14+"px",marginRight:30+"px"}}>Non-binary</span>
                        </div>
                    </div>
                </div>
                <div className="SU_fieldGroup" style={{display:"flex"}}>
                    <input type="checkbox" style={{marginRight:10+"px"}} name="marketingPurpose"></input>
                    <span style={{color:"#181818",fontWeight:550}}>Share my registration data with Spotify's content providers for marketing purposes.</span>
                </div>
                <div className="SU_privacyContent">
                    By clicking on Sign up, you agree to Spotify's <a>Terms and Conditions of Use</a>.
                </div>
                <div className="SU_privacyContent">
                To learn more about how Spotify collects, uses, shares and protects your personal data please read Spotify's <a>Privacy Policy</a>.
                </div>
                <div className="SU_signupBtn" onClick={() => this.storeAndChechCredientils()}>
                    SIGN UP
                </div>
                </form>
                <p className="SU_loginSection">Have a account? <Link to="/login"><a>Login</a></Link></p>
            </div>
        )
    }
}

export default Singup;