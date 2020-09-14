import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

class EditProfile extends React.Component{
    constructor(props){
        super(props);

        this.state = this.props.user
        this.handleInput = this.handleInput.bind(this); 
    }

    handleInput(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        return(
            <>
            <label className="EP_topLabel">Edit profile</label>
            <form name="editProfile_From">
            <div className="EP_fieldGroup">
                <div className="EP_textboxLabel">
                    Email
                </div>
                <div className="EP_textboxContainer">
                    <input className="EP_textBox" disabled={true} placeholder="Enter your email" name="email" value={this.props.user.email}></input>
                </div>
            </div>
            <div className="EP_fieldGroup">
                <div className="EP_textboxLabel">
                    Password
                </div>
                <div className="EP_textboxContainer">
                    <input className="EP_textBox" disabled={true} placeholder="Enter your password" name="password" value={this.props.user.password}></input>
                </div>
            </div>
            <div className="EP_fieldGroup">
                <div className="EP_textboxLabel">
                    Username
                </div>
                <div className="EP_textboxContainer">
                    <input className="EP_textBox" placeholder="Enter your password" name="profileName" value={this.state.profileName} onChange = {this.handleInput}></input>
                </div>
            </div>
            <div className="EP_fieldGroup">
                <div className="EP_textboxLabel">
                    Country
                </div>
                <div className="EP_textboxContainer" style={{cursor:"error"}}>
                    <input className="EP_textBox" placeholder="Enter your country" name="country" value={this.state.country} onChange = {this.handleInput}></input>
                </div>
            </div>
            <div className="EP_fieldGroup">
                <div className="EP_textboxLabel">
                    Gender
                </div>
                <div className="EP_textboxContainer">
                    <select className="EP_textBox" name="gender" value={this.state.gender}  onChange = {this.handleInput}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="non-binary">non-binary</option>
                    </select>
                </div>
            </div>
            <div className="EP_fieldGroup" style={{display:"flex"}}>
                <input type="checkbox" style={{marginRight:10+"px"}} name="marketingPurpose" onChange = {this.handleInput}></input>
                <span style={{color:"#181818",fontWeight:550}}>Share my registration data with Spotify's content providers for marketing purposes.</span>
            </div>
            <hr className="EP_hrDivider"></hr>
            <div className="EP_saveprofileContainer">
                <div className="EP_cancelBtn" onClick={() => this.props.changeState.changeState("account_overview")}>
                    CANCEL
                </div>
                <div className="EP_saveprofileBtn" onClick={() => this.props.editUserInfo.editUserInfo(this.state)}>
                    SAVE PROFILE
                </div>
            </div>
            </form>
            </>
        )
    }
}

export default EditProfile;